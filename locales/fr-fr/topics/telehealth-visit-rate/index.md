# Taux de Consultations en Télésanté

Le taux de consultations en télésanté est la part des contacts totaux d'un service fournis à distance, par vidéo ou par téléphone, plutôt qu'en présentiel. C'est une métrique de répartition des canaux de prestation de soins, pas une métrique d'activité : elle indique comment les soins sont dispensés, ce qui compte pour la planification des capacités, l'accès et la pertinence clinique, indépendamment du volume total de soins dispensés.

## Pourquoi c'est important

La part des soins dispensés à distance a changé le modèle opérationnel de nombreux services après l'expansion rapide des consultations virtuelles pendant la pandémie de COVID-19, et les organisations ont besoin d'un moyen stable de surveiller si ce changement se maintient, revient progressivement aux normes d'avant-pandémie, ou est activement piloté par la politique. La télésanté n'est pas un substitut uniforme à une consultation en présentiel : la pertinence varie selon la spécialité, le type de consultation (une révision de traitement se comporte très différemment d'un examen physique), et la préférence du patient, donc le « bon » taux relève d'un jugement clinique et opérationnel, pas d'un objectif à maximiser. Les financeurs et les régulateurs utilisent également ce taux, aux côtés des mesures de résultats et de sécurité, pour décider de la politique de remboursement et vérifier que les soins à distance ne sont pas simplement substitués pour des cas qui doivent être vus en personne.

## Comment le calculer

```
Taux de télésanté = consultations en télésanté / (consultations en télésanté + consultations en présentiel) × 100

Rapportez séparément par modalité lorsque c'est possible :
  Taux vidéo      = consultations vidéo / total des consultations × 100
  Taux téléphone  = consultations téléphone uniquement / total des consultations × 100

Le dénominateur ne devrait compter que les consultations terminées (voir erreurs
courantes), pour un service, une spécialité et une période donnés.
```

## Exemple résolu

Un service de santé mentale communautaire enregistre 4 000 contacts ambulatoires terminés sur un trimestre : 1 200 en présentiel, 1 600 par vidéo et 1 200 par téléphone. Le taux de télésanté est (1 600 + 1 200) / 4 000 × 100 = 70 %, avec un taux vidéo de 40 % et un taux téléphone uniquement de 30 %. Ne rapporter que le chiffre combiné de 70 % masquerait qu'une grande part de la « télésanté » ici est uniquement audio, ce qui comporte généralement un profil de risque clinique et une expérience patient différents.

## Sources de données et mises en garde

Le type de consultation est généralement enregistré soit comme un champ structuré dans le dossier de santé électronique (type de visite ou lieu), soit déduit des codes de facturation, tels qu'un code de lieu de service ou un modificateur de télésanté sur une demande de remboursement. Les pratiques de codage varient considérablement entre organisations, et même entre cliniciens d'une même organisation, donc toute comparaison de taux entre sites devrait d'abord vérifier que la « télésanté » est codée de la même façon partout. Une consultation qui commence en vidéo mais bascule vers le téléphone en raison d'un problème technique devrait être codée de façon cohérente (généralement selon la modalité qui a porté l'essentiel du contenu clinique), et cette règle devrait être documentée plutôt que laissée au jugement individuel.

## Erreurs courantes

- **Compter les consultations tentées plutôt que terminées** : un rendez-vous de télésanté qui échoue à se connecter et qui est reprogrammé ne devrait pas gonfler deux fois le dénominateur de télésanté.
- **Traiter la vidéo et le téléphone comme interchangeables** : ils ont des implications cliniques et d'équité différentes (le téléphone exclut l'évaluation visuelle mais est plus accessible aux patients sans smartphone, sans données fiables, ou sans espace privé pour la vidéo) ; rapportez-les toujours séparément lorsque c'est possible.
- **Ignorer le lien avec les absences** : le comportement d'absence diffère souvent selon la modalité ; consultez [taux d'absence aux rendez-vous](../appointment-no-show-rate/) avant de tirer des conclusions sur un « meilleur accès » à partir de la seule hausse du taux de télésanté.
- **Considérer un taux élevé comme intrinsèquement bon** : pour certaines pathologies et certains types de consultation, un taux de télésanté approprié est faible par conception clinique, pas par manque de maturité numérique.

## Sources

- Centers for Medicare & Medicaid Services (CMS), données d'usage de la télésanté Medicare et publications de politique
- NHS England, statistiques d'activité des services ambulatoires et communautaires, y compris la ventilation des présences virtuelles/à distance
- Littérature évaluée par les pairs sur les tendances d'usage de la télésanté et les résultats spécifiques à chaque modalité
