# Taux d'Absence aux Rendez-vous

Le taux d'absence aux rendez-vous (aussi appelé taux de « did not attend », ou DNA) est la part des rendez-vous programmés où le patient ne s'est ni présenté ni décommandé avec un préavis raisonnable. C'est l'une des plus anciennes métriques opérationnelles en santé, et les outils numériques — en particulier les rappels, la reprogrammation en libre-service et la prise de rendez-vous via le portail — figurent aujourd'hui parmi les leviers les plus efficaces et les mieux étayés pour le réduire.

## Pourquoi c'est important

Chaque absence est une unité de capacité clinique généralement irrécupérable, car la plupart des services ne peuvent pas combler un créneau le jour même avec un préavis court, donc ce taux influence directement la longueur des listes d'attente, le coût par rendez-vous réalisé et le temps de clinicien perdu. Le comportement d'absence n'est pas réparti uniformément : il est corrélé à la précarité, à l'accès aux transports, aux responsabilités d'aidant et à la charge de gestion de plusieurs pathologies de longue durée, donc traiter un taux élevé purement comme un problème de comportement du patient, plutôt qu'en partie comme un signal de barrières d'accès, tend à produire des interventions (comme des pénalités générales) qui aggravent l'iniquité plutôt que de la réduire. Les rappels numériques et la reprogrammation numérique facile figurent constamment parmi les interventions les plus efficaces et les moins coûteuses disponibles, c'est pourquoi cette métrique a pleinement sa place dans un programme de mesure de la santé numérique et pas seulement dans le reporting opérationnel.

## Comment le calculer

```
Taux d'absence = rendez-vous marqués « non présenté » / total des rendez-vous programmés × 100
```

Un rendez-vous programmé est généralement exclu du dénominateur, ou déplacé vers une catégorie séparée, s'il a été annulé par l'une ou l'autre partie avec plus d'un préavis défini (couramment 24 heures). Les annulations tardives (en deçà de ce préavis) sont généralement rapportées séparément des véritables absences, car les implications opérationnelles et comportementales diffèrent.

## Exemple résolu

Une clinique communautaire programme 2 000 rendez-vous en un mois. Parmi ceux-ci, 140 sont annulés avec plus de 24 heures de préavis (reprogrammés et exclus du dénominateur), 60 sont annulés tardivement (moins de 24 heures), et 180 sont enregistrés comme une véritable absence sans aucun contact. Le taux d'absence est de 180 / 2 000 × 100 = 9 %. Si les 60 annulations tardives étaient incluses dans la même catégorie que les véritables absences, le taux rapporté grimperait à 12 %, c'est pourquoi la définition utilisée doit toujours être précisée avec le chiffre.

## Sources de données et mises en garde

Le système de planification ou de gestion de cabinet est la source principale, utilisant ses codes de statut de rendez-vous ; la qualité de la métrique dépend entièrement du fait que le personnel utilise systématiquement le statut correct plutôt qu'une catégorie générique « annulé » pour tout. Les organisations qui introduisent des rappels numériques (SMS, notification push d'application, ou alertes du portail) devraient mesurer le taux d'absence avant et après le changement pour un mélange comparable de patients et de services, car l'efficacité des rappels est bien documentée dans des études randomisées et observationnelles mais varie selon la population et le canal.

## Erreurs courantes

- **Comparer des taux bruts entre cliniques ayant des pratiques de surréservation différentes** : une clinique qui surréserve délibérément pour compenser un taux d'absence attendu affichera un taux apparent différent d'une clinique qui ne le fait pas, indépendamment du comportement réel des patients.
- **Confondre annulation tardive et véritable absence** : les deux ont des causes et des solutions numériques différentes (un problème d'annulation tardive se résout souvent par une reprogrammation en libre-service plus facile ; un véritable problème d'absence se résout souvent par de meilleurs rappels et une meilleure précision de contact).
- **Biais de survie issu des politiques de sortie de suivi** : les services qui excluent les patients après des absences répétées verront leur propre taux s'améliorer mécaniquement, tout en déplaçant simplement les mêmes patients ailleurs dans le système.
- **Rejeter la faute de l'exclusion numérique sur le patient** : un patient sans smartphone ni service de messages texte fiable ne bénéficiera pas d'une stratégie de rappel uniquement numérique, donc une approche multicanale (courrier, appel, SMS, application) est généralement nécessaire pour éviter d'élargir les écarts d'accès.

## Sources

- NHS England, rendez-vous manqués en médecine générale et en consultation externe, statistiques et orientations publiées
- Revues systématiques Cochrane sur les interventions visant à réduire les rendez-vous de santé manqués, y compris les systèmes de rappel
- Littérature évaluée par les pairs sur les corrélats socio-économiques et démographiques de l'absence aux rendez-vous

Voir aussi : [taux de consultations en télésanté](../telehealth-visit-rate/), le comportement d'absence différant souvent selon la modalité de consultation, et [taux d'adoption du portail patient](../patient-portal-adoption-rate/), l'auto-planification et les rappels basés sur le portail étant une intervention numérique majeure dans ce domaine.
