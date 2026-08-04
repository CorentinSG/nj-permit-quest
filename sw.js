/* ROUTE 440 — service worker
   Objectif : l'application s'ouvre et se joue SANS RÉSEAU (file d'attente à la
   MVC, métro, avion), tout en récupérant la dernière version dès qu'il y a du
   réseau. Deux stratégies, choisies pour ça :
     - index.html : réseau d'abord, cache en secours. En ligne tu as toujours la
       version du jour ; hors ligne tu as la dernière que tu as vue.
     - le reste (three.min.js, icônes, manifeste) : cache d'abord. Ces fichiers
       ne changent pas d'un jour à l'autre et pèsent 600 ko : inutile de les
       retélécharger à chaque ouverture.
*/
/* Le nom du cache est une VERSION. On le change dès qu'un doute existe sur ce
   qui a été mis de côté : l'ancien est effacé à l'activation, et le joueur
   repart sur des fichiers propres. */
const CACHE='route440-v2';
const CORE=['./','./index.html','./three.min.js','./manifest.webmanifest',
            './icon-192.png','./icon-512.png','./icon-maskable.png','./apple-touch-icon.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys()
    .then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
    .then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin!==location.origin) return;      // on ne touche à rien d'externe
  const isDoc=req.mode==='navigate'||/\/(index\.html)?$/.test(url.pathname);
  if(isDoc){
    e.respondWith(
      fetch(req).then(r=>{
        const copy=r.clone();
        caches.open(CACHE).then(c=>c.put('./index.html',copy));
        return r;
      }).catch(()=>caches.match('./index.html').then(r=>r||caches.match('./')))
    );
    return;
  }
  /* Cache d'abord pour rester instantané, MAIS on revalide derrière : un
     three.min.js à moitié téléchargé ne pouvait jamais se réparer tout seul, et
     le village restait vide pour toujours. */
  e.respondWith(
    caches.match(req).then(hit=>{
      const net=fetch(req).then(r=>{
        if(r&&r.status===200){ const copy=r.clone();
          caches.open(CACHE).then(c=>c.put(req,copy)); }
        return r;
      }).catch(()=>hit);
      if(hit){ net.catch(()=>{}); return hit; }
      return net;
    })
  );
});
