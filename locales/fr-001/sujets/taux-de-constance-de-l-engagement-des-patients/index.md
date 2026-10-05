# Taux de Constance de l'Engagement des Patients

Le taux de constance de l'engagement des patients mesure la régularité avec laquelle un patient inclus interagit avec un produit de santé numérique au fil du temps — par exemple en consignant son alimentation ou ses symptômes, en enregistrant son activité physique ou en consultant ses données de santé — plutôt que simplement s'il l'a utilisé ou non. C'est une métrique longitudinale, distincte d'un décompte d'utilisation active à un instant donné : deux patients peuvent avoir un statut identique « a utilisé l'application ce mois-ci » alors que l'un consigne ses données chaque jour et que l'autre le fait une fois puis disparaît pendant trois semaines, et seule la métrique de constance les distingue.

## Pourquoi c'est important

Une interaction soutenue et régulière avec un outil de santé numérique est l'un des indicateurs avancés les plus fiables du bénéfice clinique, en particulier pour les pathologies dépendantes du comportement comme le diabète, la gestion du poids et la santé mentale, où la valeur de l'outil tient à l'habitude qu'il soutient plutôt qu'à une session isolée. Un produit peut afficher un nombre sain d'utilisateurs actifs mensuels tout en servant en réalité une population qui se connecte une fois puis s'éloigne, car l'utilisation active mensuelle est un seuil bas qui ne dit rien du schéma d'utilisation au sein du mois ; les métriques de constance détectent cela, ce que de simples décomptes d'activité ne peuvent pas faire. Comme la constance est aussi l'une des choses les plus difficiles à maintenir sur des mois plutôt que sur des semaines, elle est un signal plus honnête de la qualité du produit et de son adéquation clinique que les chiffres d'engagement sur fenêtre courte, sujets aux effets de nouveauté juste après l'intégration.

## Comment le calculer

```
Taux de constance de l'engagement = semaines avec au moins une interaction
                                     qualifiante / total des semaines
                                     d'inclusion × 100

Une « interaction qualifiante » doit être définie de façon explicite et
cohérente (par ex. une saisie de repas, un suivi de symptômes ou une
synchronisation d'activité complétée) — jamais un événement passif comme
l'ouverture de l'application sans action consignée.

Rapporter sous forme de distribution, et pas seulement de moyenne de la
population :
  par ex. part des patients avec une constance hebdomadaire ≥ 80 %,
          part avec 50-79 %, part avec < 50 %
```

## Exemple résolu

Une application de coaching nutritionnel inclut un patient pendant 12 semaines. Le patient consigne au moins une saisie alimentaire qualifiante pendant 9 de ces 12 semaines, ce qui donne un taux individuel de constance de l'engagement de 9 / 12 × 100 = 75 %. Sur l'ensemble de la cohorte de l'application, soit 2 000 patients inclus depuis au moins 12 semaines, 600 patients (30 %) maintiennent une constance hebdomadaire ≥ 80 %, 900 (45 %) se situent dans la tranche 50-79 % et 500 (25 %) sont en dessous de 50 %. Ne rapporter que la moyenne de la cohorte (qui pourrait se situer autour de 65 %) masquerait le fait qu'un quart complet des patients n'interagit presque pas — un segment qui mérite d'être examiné séparément plutôt que dilué dans une moyenne globale.

## Sources de données et mises en garde

Les données de constance proviennent des journaux d'événements du produit lui-même (saisies alimentaires, synchronisations d'activité, suivis), et la définition d'une « interaction qualifiante » a un effet énorme sur le taux obtenu — une définition souple (toute ouverture de l'application) paraîtra toujours meilleure qu'une définition stricte (une saisie complète et significative), de sorte que la définition utilisée doit être énoncée clairement avec tout chiffre rapporté. Les données synchronisées automatiquement (par exemple un tracker de forme physique connecté qui synchronise l'activité en arrière-plan) doivent être rapportées séparément des données saisies manuellement, car la synchronisation automatique peut gonfler la constance apparente sans refléter aucun effort actif du patient ni aucun engagement avec les conseils du produit.

## Erreurs courantes

- **Confondre ouvertures de l'application et engagement significatif** : une ouverture passive de l'application (par exemple déclenchée par une notification push) n'équivaut pas à une saisie alimentaire consignée ou à un suivi complété ; définissez et rapportez uniquement les interactions qualifiantes.
- **Ne rapporter que la moyenne de la population** : un taux de constance moyen d'apparence saine peut cacher une population bimodale de patients très engagés et de patients presque totalement désengagés ; rapportez la distribution par tranches de constance, et pas seulement la moyenne.
- **Ignorer le dénominateur de la durée d'inclusion** : comparer les taux de constance de patients inclus depuis des durées très différentes sans tenir compte de la durée d'inclusion favorise le groupe dont la fenêtre de mesure était plus courte et plus facile à soutenir.
- **Synchronisation automatique en arrière-plan gonflant le taux** : un flux de données de dispositif portable synchronisé passivement peut faire paraître un patient désengagé comme constamment actif, sans aucun changement réel de comportement ni engagement avec le produit de sa part.

## Sources

- Littérature évaluée par les pairs sur les schémas d'engagement en santé numérique et leur relation avec les résultats cliniques, par exemple des études publiées dans le Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), orientations sur la qualité des données de santé générées par les patients et la mesure de l'engagement
- Digital Therapeutics Alliance, orientations de bonnes pratiques sur la mesure de l'engagement et des résultats pour les thérapies numériques

Voir aussi : [taux de rétention des utilisateurs](../taux-de-retention-des-utilisateurs/), la métrique étroitement liée qui indique si un patient reste inclus, par opposition à la constance de son engagement pendant son inclusion.
