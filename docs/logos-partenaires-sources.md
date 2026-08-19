# Logos partenaires — sources et provenance

Ce document trace l'origine de chaque logo intégré au site (`public/images/partenaires/`),
recensé aussi dans `lib/data/partenaires.ts`. Même méthode de vérification que pour
`docs/iconographie-sources.md` : chaque fichier a été ouvert individuellement sur sa page
source. Date de vérification : **19 août 2026**.

---

## Société des Amis de Louis Guilloux

- **Fichier utilisé sur le site** : `societe-amis-louis-guilloux.png`
- **Source** : logo officiel affiché dans l'en-tête et le pied de page du site de
  l'association — https://www.louisguilloux.com/
- **Fichier d'origine** : SVG, récupéré à
  https://www.louisguilloux.com/wp-content/uploads/2023/11/logo-lg.svg (391 Ko, illustration
  vectorielle complexe — 1322 chemins)
- **Alt d'origine sur le site source** : « La société des Amis de Louis Guilloux »
- **Statut** : logo officiel de l'association partenaire, réutilisé dans le cadre du
  partenariat attesté (voir `lib/data/partenaires.ts`). Il ne s'agit pas d'une image libre
  de droits générique : c'est l'identité visuelle propre de l'association.
- **Traitement appliqué** : le SVG original (391 Ko, trop lourd pour un usage en pied de page
  sur chaque page du site — voir section performance) a été rendu fidèlement en PNG 320×320 via
  `sharp` (aucune recoloration, aucun redessin, aucune modification du contenu graphique — seul
  un changement de format et de résolution). Fichier obtenu : ~42 Ko.
- **Page(s) d'utilisation** : `/partenaires` (carte partenaire) et bande partenaires du footer
  partagé (`components/Footer.tsx`), présente sur toutes les pages publiques.
- **Point à vérifier avec l'association** : aucune mention explicite de licence de réutilisation
  du logo n'est publiée sur le site. L'usage repose sur le partenariat attesté (rencontre du
  25 mai 2026, courriel de remerciements) plutôt que sur une licence formelle — à confirmer
  explicitement avec l'association si une utilisation plus large (impression, réseaux sociaux)
  est envisagée.
