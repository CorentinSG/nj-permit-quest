# 🏁 ROUTE 440 — NJ Permit Quest

Jeu d'entraînement gamifié pour le **NJ MVC Knowledge Test** (l'examen théorique du permis
de conduire du New Jersey) — nommé d'après la Route 440, la highway qui traverse Bayonne, NJ.

**Projet 100 % autonome** : un seul fichier `index.html`, zéro dépendance, zéro réseau,
zéro build. Ouvre le fichier dans un navigateur et joue. La progression est sauvegardée
localement (localStorage) sur l'appareil.

## Jouer

- **En local** : double-clique sur `index.html` (fonctionne hors-ligne, mobile et desktop).
- **En ligne** : héberge le dossier n'importe où (GitHub Pages, Vercel, Netlify — aucun réglage).
- **Sur téléphone** : ouvre le site, puis « Installer » / « Sur l'écran d'accueil ». L'application
  s'ouvre alors en plein écran et **fonctionne sans réseau** (service worker + manifeste).

## Le jeu

| Mode | Ce que c'est |
|---|---|
| 🗺️ **Campagne** | 8 zones thématiques (panneaux, vitesses, distances, alcool, points, priorités, urgences, GDL), chacune gardée par un boss à K.O. |
| ⚡ **Blitz 60s** | « Les Petites Règles™ » — 55 chiffres pénibles (10 ft, 25 ft, 50 ft, 0.08 %, 12 points…) en rafale chronométrée |
| 🎓 **Examen blanc** | 50 questions, 80 % pour réussir, sans correction en direct — les conditions réelles du MVC |
| 🩹 **Boîte à erreurs** | Répétition espacée : chaque question ratée revient jusqu'à être vengée |
| 📜 **Grimoire** | L'antisèche complète de tous les chiffres, groupés par thème |

Mécaniques : XP, 10 niveaux (de *Piéton* à *Légende du MVC*), combos ×1.5/×2/×3,
16 badges, objectif quotidien, compte à rebours jusqu'au jour J, sons rétro (WebAudio),
confettis. Questions en anglais (comme au vrai test), explications en français.

## Contenu

129 questions + 55 drills rédigés à partir des règles du **New Jersey Driver Manual**.
Entraînement non officiel, non affilié au NJ MVC — vérifie toujours les règles à jour sur
[njmvc.gov](https://www.njmvc.gov). Le test au MVC est proposé en plusieurs langues
(dont le français) — à demander au guichet.

Police pixel : [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)
(licence SIL OFL), embarquée en data-URI.
