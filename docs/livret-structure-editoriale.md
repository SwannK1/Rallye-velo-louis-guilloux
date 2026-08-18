# Livret du participant — structure éditoriale

Document de travail. Objectif : fixer l'architecture du livret imprimé/PDF avant toute
mise en page. **Aucun PDF n'est généré à ce stade** — ce document sert de cahier des
charges pour le chantier de maquette qui suivra.

Sources utilisées : `lib/data/etapes.ts`, `lib/data/parcours.ts`, `lib/data/images.ts`,
`lib/data/oeuvres.ts`, `lib/data/partenaires.ts`, `lib/data/chronologie.ts`,
`docs/iconographie-sources.md`. Aucun contenu n'est inventé ici — tout ce qui manque est
listé comme manquant plutôt que complété par supposition.

---

## 1. Format

**Format retenu : A5 portrait (148 × 210 mm).**

Raisons :
- Tenu à une main pendant un arrêt à vélo (guidon ou poche de maillot/sacoche) — un A4 ou
  un A5 paysage sont moins maniables à l'arrêt, sur la selle ou au vent.
- Compatible avec une impression en cahier piqûre à cheval (agrafé), pliage économique
  d'A4 en A5, courant chez la plupart des imprimeurs associatifs/collectivités.
- Colonne de texte confortable pour un corps de lecture ≥ 9,5-10 pt, nécessaire en usage
  extérieur (lumière du jour, lecture rapide entre deux étapes).

Contrainte dérivée : **le nombre de pages intérieures doit être un multiple de 4**
(impératif du cahier piqûre à cheval). La pagination proposée en section 6 est un
brouillon de travail ; elle devra être ajustée à ±1-2 pages près une fois les arbitrages
de la section 5 (extraits à raccourcir ou non) tranchés. Cible réaliste : **32 pages
intérieures + couverture 4 pages (carton)**, à confirmer.

---

## 2. Principe éditorial : LIEU → TEXTE → AUTEUR → PAYSAGE

Chaque page d'étape suit le même mouvement de lecture, dans cet ordre : on identifie le
lieu, on lit le texte qui s'y rattache, on sait qui l'a écrit et dans quel contexte, on
regarde le paysage pour vérifier qu'on y est. **Ce n'est pas un catalogue de photos** :
une seule image ancre chaque page/spread (la photo contemporaine, pour que le cycliste
reconnaisse le lieu réel), la photo ancienne étant réservée aux étapes où le contraste
passé/présent porte le propos (guerre, mémoire) plutôt que systématisée partout.

---

## 3. Sommaire proposé

1. Couverture
2. Sommaire + mode d'emploi (légende des pictogrammes)
3. Présentation / édito
4. Programme
5. Carte générale (+ encarts parcours matin/après-midi — pas de page de section séparée,
   voir note section 6)
6. Étapes du matin (7 unités éditoriales pour 8 étapes, voir fusion section 4)
7. Pause — Villa Rohannec'h
8. Étapes de l'après-midi (4 étapes)
9. Lectures / Louis Guilloux (bio courte, chronologie resserrée, œuvres citées)
10. Infos pratiques
11. Partenaires
12. Crédits et droits
13. QR codes / ressources numériques

---

## 4. Système des pages étapes

**Règle : une étape = une page si son contenu est encore un brouillon (pas d'extrait
sélectionné), une double-page si elle porte au moins un extrait littéraire retenu.**//
Sur les 12 étapes du site, 8 ont un statut `published` avec extrait(s), 4 sont en
`draft` sans extrait (voir tableau ci-dessous).

### Gabarit double-page (étape avec extrait)

- **Page de gauche** : photo contemporaine du lieu en grand (pleine hauteur ou 2/3 de
  page) ; médaillon numéro d'étape ; nom du lieu en titre ; pictogramme parcours
  (matin/après-midi) et QR code (carte + fiche web) en pied de page.
- **Page de droite** : contexte historique (60-100 mots) ; paragraphe lien avec Guilloux
  (60-100 mots, quand il existe) ; extrait littéraire encadré avec attribution
  auteur/œuvre/pages ; pictogramme info pratique si pertinent.
- Variante à deux images (ancienne + contemporaine disponibles) : les deux empilées en
  page de gauche façon avant/après, réservée aux étapes où l'histoire du lieu porte le
  propos (gare, cimetière, vallée du Gouédic, Hillion).

### Gabarit simple page (étape en draft, sans extrait)

- Bandeau titre + numéro, une seule photo (1/3 de page), texte court de contexte
  (100-150 mots), QR code. Pas d'extrait tant qu'aucun n'est sélectionné et vérifié
  (voir section 5).

### Fusions proposées pour tenir la contrainte A5 compacte

- **Plage du Valais + Tour de Cesson → une double-page commune** ("Les légendes de la
  ville"). Les deux étapes sont adjacentes sur le parcours du matin, toutes deux en
  draft, toutes deux référencées au *Jeu de Patience* sans extrait encore choisi
  (pp. 258-259 et p. 264). Les regrouper évite deux demi-pages creuses.
- **Villa Rohannec'h (étape 8 du matin) → absorbée dans la page "Pause / Rohannec'h"**
  déjà prévue au sommaire, plutôt que dupliquée comme 9ᵉ fiche étape.

### Tableau de statut par étape

| # | Étape | Parcours | Statut | Extraits | Images disponibles | Format proposé |
|---|---|---|---|---|---|---|
| 1 | Gare de Saint-Brieuc | Matin | published | 3 | ancienne + contemporaine | Double-page — **extraits à raccourcir**, voir §5 |
| 2 | Lycée Anatole Le Braz | Matin | published | 3 | ancienne seule | Double-page — **extraits à raccourcir** ; **pas de photo contemporaine** |
| 3 | Vallée du Gouédic | Matin | published | 3 | ancienne + contemporaine | Double-page — **extraits à raccourcir** |
| 4-5 | Plage du Valais / Tour de Cesson | Matin | draft | 0 | anc. (4), anc.+cont. (5) | Double-page commune, en attente de sélection d'extrait |
| 6 | Port du Légué | Matin | published | 1 | ancienne + contemporaine | Double-page, contenu déjà calibré |
| 7 | Place Saint-Michel | Matin | published | 2 | ancienne + contemporaine | Double-page — extrait 1 (Sang Noir) long, à raccourcir |
| 8 | Villa Rohannec'h | Matin | draft | 0 | ancienne + contemporaine | Fusionnée dans "Pause" |
| 9 | Collège Ernest Renan | Après-midi | published | 2 (Mona Ozouf) | **aucune** | Double-page — **image manquante, voir §7** |
| 10 | Hillion | Après-midi | published | 2 | ancienne + contemporaine | Double-page, contenu déjà calibré |
| 11 | Georges Palante | Après-midi | published | 3 (aphorismes, domaine public) | 1 (villa) | Double-page — seul contenu texte 100 % libre de droits, voir §5 |
| 12 | Maison Louis Guilloux | Après-midi | draft | 0 | tombe (substitution assumée) | Page simple, clôture du rallye |

---

## 5. Extraits : arbitrages avant impression

Le principe du site (`publicationStatus` dans `lib/data/etapes.ts`) distingue :
- `short-quote-only` : citation courte admissible (Guilloux †1980, Mona Ozouf vivante —
  œuvres sous droits). C'est le cas de **tous** les extraits sauf ceux de Palante.
- `publishable` : reproduction libre. **Seuls les 3 aphorismes de Georges Palante**
  (†1925, domaine public depuis 1996) ont ce statut.

Deux extraits actuellement affichés sur le site dépassent, à vue d'œil, ce qu'on
défend confortablement comme « courte citation » (art. L122-5 CPI) une fois publiés
dans un objet imprimé diffusé à un public large :
- **Gare de Saint-Brieuc, extrait 1** (*Le Sang Noir*, pp. 299-307) — environ 280 mots.
- **Place Saint-Michel, extrait 1** (*Le Sang Noir*, pp. 313-315) — environ 340 mots.

**Recommandation** : les raccourcir pour l'édition imprimée (indépendamment de la
contrainte de place en A5, qui pointe dans le même sens), et profiter du contact déjà
établi avec la Société des Amis de Louis Guilloux (`lib/data/partenaires.ts`) pour
obtenir un accord explicite de Gallimard / des ayants droit avant impression — plutôt
que de s'appuyer uniquement sur l'exception de courte citation pour un tirage papier
distribué en nombre. Ce n'est pas fait ici : décision à prendre par le porteur du
projet, pas par ce document.

**Ne pas allonger les extraits déjà courts** (Palante, l'extrait unique de Port du
Légué) simplement pour remplir une page — cohérent avec la consigne du chantier.

---

## 6. Pagination proposée (brouillon de travail)

| Pages | Contenu |
|---|---|
| 1 | Couverture |
| 2 | Sommaire + mode d'emploi (légende pictos) |
| 3 | Présentation / édito |
| 4 | Programme (tableau horaires + rappel sécurité minimal) |
| 5-6 | Carte générale double-page, avec encarts "Parcours du matin — 13 km, 8 étapes, QR carte" et "Parcours de l'après-midi — env. 30 km, 4 étapes, QR carte" — remplace une page de section séparée par parcours |
| 7-8 | Étape 1 — Gare de Saint-Brieuc |
| 9-10 | Étape 2 — Lycée Anatole Le Braz |
| 11-12 | Étape 3 — Vallée du Gouédic |
| 13-14 | Étapes 4-5 — Plage du Valais / Tour de Cesson (spread commun) |
| 15-16 | Étape 6 — Port du Légué |
| 17-18 | Étape 7 — Place Saint-Michel |
| 19 | Pause — Villa Rohannec'h |
| 20-21 | Étape 1 après-midi — Collège Ernest Renan |
| 22-23 | Étape 2 après-midi — Hillion |
| 24-25 | Étape 3 après-midi — Georges Palante |
| 26 | Étape 4 après-midi — Maison Louis Guilloux (arrivée) |
| 27-28 | Lectures / Louis Guilloux (bio courte + frise chronologique resserrée + œuvres citées) |
| 29 | Infos pratiques |
| 30 | Partenaires |
| 31 | Crédits et droits |
| 32 | QR codes / ressources numériques |

32 pages intérieures — déjà un multiple de 4. À reconfirmer une fois les arbitrages de
la section 5 tranchés (un raccourcissement d'extrait peut faire gagner ou perdre une
demi-page ; la couverture (4 pages carton, non comptées ci-dessus) porte le titre en
C1, reste vierge ou porte un rabat en C4 selon le choix d'impression).

---

## 7. Iconographie — état des lieux et manques

**Règle de droits (rappel, déjà en vigueur sur le site)** : aucune image n'entre dans le
livret sans entrée vérifiée dans `lib/data/images.ts` / `docs/iconographie-sources.md`
— source, auteur, date, licence, attribution. Le livret réutilise exclusivement ce
registre ; il n'en ajoute aucune sans le même niveau de vérification.

### Portraits demandés par le chantier — aucun n'est actuellement disponible

Le brief cite 5 portraits à envisager : Louis Guilloux, Albert Camus, Georges Palante,
Renée Guilloux, Mona Ozouf. **Zéro sur cinq n'a de version au statut juridique clair
dans le registre actuel** :
- Portrait de Louis Guilloux (Eugène Dabit, 1935) — repéré mais écarté, résolution
  120×144 px, sous le seuil de qualité du site.
- Portrait de Georges Palante (« Palante-1914.png ») — repéré mais écarté, résolution
  176×173 px et provenance non pleinement établie.
- Albert Camus, Renée Guilloux, Mona Ozouf — **aucune recherche de portrait
  documentée** à ce jour dans `docs/iconographie-sources.md`.

C'est le principal chantier de recherche iconographique à ouvrir avant la maquette de
la page « Lectures / Louis Guilloux », qui est l'endroit naturel pour ces portraits.
Piste à privilégier : solliciter la Société des Amis de Louis Guilloux (contact déjà
établi) pour des reproductions autorisées, plutôt que de continuer la recherche en
sources ouvertes qui a déjà été explorée sans résultat suffisant.

### Trous déjà signalés dans `docs/iconographie-sources.md`, à traiter avant impression

| Sujet | Statut |
|---|---|
| Collège Ernest Renan | Aucune image libre trouvée — page étape actuellement sans visuel |
| Maison Louis Guilloux (bâtiment) | Aucune image trouvée — la tombe (cimetière Saint-Michel) est utilisée en substitution assumée ; à expliciter clairement en légende dans le livret |
| Lycée Anatole Le Braz | Photo contemporaine manquante (seule une carte postale ancienne 1900-1903 existe) |
| Tombe de Lucien Camus (place Saint-Michel) | Aucune image trouvée |
| Camp de prisonniers/réfugiés, vallée du Gouédic | Aucune photo du camp lui-même, seulement des vues générales de la vallée |
| Plage du Valais / grève de Cesson | Correspondance géographique du point non confirmée avec certitude |

Pour le collège Ernest Renan en particulier (page sans aucun visuel actuellement), deux
options pour la maquette : (a) traitement typographique fort (citation de Mona Ozouf en
grand, sans photo) plutôt qu'un visuel de substitution non pertinent ; (b) attendre une
autorisation des Archives municipales de Saint-Brieuc ou de l'Inventaire du patrimoine
Bretagne (contacts déjà identifiés dans `docs/iconographie-sources.md`).

---

## 8. Livrables de synthèse

### a. Pagination proposée
Voir section 6 — 32 pages intérieures + couverture 4 pages, brouillon à reconfirmer.

### b. Gabarit
Voir section 4 — un gabarit double-page (étapes avec extrait) et un gabarit page simple
(étapes en draft), plus la règle de fusion pour les étapes adjacentes sans contenu.

### c. Contenu de chaque page
Voir tableau de la section 4 (étapes) et sommaire de la section 3 (pages hors étapes).
Contenu de chaque page hors étapes, précisé :
- **Sommaire + mode d'emploi** : liste des 13 sections + légende de 3-4 pictogrammes
  (parcours matin/après-midi, QR code, info pratique).
- **Présentation** : qui organise le rallye, pourquoi Louis Guilloux, comment lire une
  fiche étape — texte à rédiger, aucun contenu existant à ce jour à réutiliser tel quel
  (le plus proche est l'intro de la page d'accueil du site, à adapter au format papier).
- **Programme** : reprend le contenu de `/programme` (déroulé matin / pique-nique /
  après-midi), sans les horaires précis puisqu'ils ne sont pas encore fixés sur le site
  non plus — **élément manquant partagé avec le site**, voir section 9.
- **Carte générale** : nécessite un export cartographique imprimable des deux tracés
  uMap — **n'existe pas encore**, voir section 9.
- **Lectures / Louis Guilloux** : bio courte (à condenser depuis `/louis-guilloux`),
  frise chronologique resserrée (les 8 entrées `highlight: true` de
  `lib/data/chronologie.ts`), tableau des œuvres citées (`lib/data/oeuvres.ts`).
- **Infos pratiques** : reprend `/infos-pratiques`, avec le même manque d'horaires
  précis.
- **Partenaires** : un seul partenaire confirmé à ce jour (Société des Amis de Louis
  Guilloux) + les 3 entrées de crédits déjà en place (iconographie, cartes, sources
  documentaires) issues de `lib/data/partenaires.ts`.
- **Crédits et droits** : liste complète des attributions d'images (reprise directe de
  `docs/iconographie-sources.md`), mention Etalab/CC BY-SA, mention des ayants droit
  littéraires, et les mentions légales d'impression (imprimeur, dépôt légal si le tirage
  le requiert — à déterminer selon le volume d'impression).
- **QR codes** : un QR par étape (déjà couvert par les gabarits), plus un QR récapitulatif
  vers `/etapes` et un vers chaque carte uMap, regroupés sur la dernière page pour ceux
  qui préfèrent scanner une fois plutôt qu'à chaque étape.

### d. Liste des visuels nécessaires
Déjà disponibles et vérifiés (17 fichiers, réutilisables tels quels) : voir
`lib/data/images.ts`. Manquants, à produire ou rechercher avant maquette :
1. Carte générale imprimable des deux parcours (export graphique, pas juste un lien uMap).
2. Photo contemporaine du Lycée Anatole Le Braz.
3. Un visuel pour l'étape Collège Ernest Renan (actuellement aucun).
4. Portraits de Louis Guilloux, Albert Camus, Georges Palante, Renée Guilloux, Mona Ozouf
   (aucun disponible avec un statut juridique clair — voir section 7).
5. Photo de la maison Louis Guilloux elle-même (13 rue Lavoisier), si elle existe et peut
   être autorisée, pour remplacer la substitution par la tombe.

### e. Liste des textes nécessaires
Déjà disponibles (réutilisables, avec arbitrage de longueur pour certains — voir §5) :
tous les textes de `lib/data/etapes.ts` pour les 8 étapes `published`. À rédiger, sans
contenu existant à reprendre tel quel :
1. Édito / présentation du livret (page 3).
2. Mode d'emploi / légende des pictogrammes (page 2).
3. Bio courte de Louis Guilloux condensée pour la double-page « Lectures » (la version
   actuelle sur `/louis-guilloux` est trop longue pour une page A5).
4. Rappel sécurité minimal pour la page Programme (équipement, code de la route à vélo)
   — **contenu absent du site également**, à produire.
5. Extraits pour Plage du Valais (*Le Jeu de patience*, pp. 258-259) et Tour de Cesson
   (p. 264) — actuellement référencés sans extrait sélectionné
   (`lib/data/oeuvres.ts` → `referencesSansExtraitData`).
6. Extrait de Camus pour l'étape Place Saint-Michel (*Le Premier Homme*, pp. 28-29) —
   référencé mais non sélectionné à ce jour ; à arbitrer si on l'ajoute à cette étape.

### f. Liste des éléments manquants (résumé transverse)
1. **Horaires précis** du rallye (rendez-vous, départs, retour) — non fixés y compris
   sur le site source ; bloque la page Programme du livret.
2. **Carte générale imprimable** — n'existe qu'en version interactive uMap.
3. **Portraits des 5 figures citées par le brief** — aucun disponible.
4. **Visuel pour l'étape Collège Ernest Renan** — aucun.
5. **Extraits non sélectionnés** pour Plage du Valais, Tour de Cesson, Maison Louis
   Guilloux (ce dernier n'a même pas de piste identifiée dans le corpus à ce jour).
6. **Confirmation des droits de reproduction imprimée** pour les extraits Guilloux/Ozouf
   les plus longs, auprès des ayants droit — voir section 5.
7. **Rappel sécurité / équipement** pour la page Programme — contenu à écrire, aucune
   base existante.
8. **Mentions légales d'impression** (imprimeur, tirage, dépôt légal éventuel) — dépend
   du choix d'impression, pas encore fait à ce stade.
