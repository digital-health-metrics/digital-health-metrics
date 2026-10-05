# Taux de Littératie Numérique

Le taux de littératie numérique mesure la part d'une population de patients capable d'accomplir de manière autonome et avec succès des tâches courantes sur une plateforme de santé numérique — se connecter, planifier un rendez-vous, rejoindre une consultation vidéo ou lire un résultat d'examen — sans l'aide d'une autre personne. Il se distingue du taux d'accès au numérique et doit toujours être mesuré séparément : un patient peut disposer d'un smartphone et d'une connexion à large bande et pourtant être incapable de naviguer seul sur une plateforme de télésanté, et confondre les deux métriques masque précisément la population que cette métrique vise à faire apparaître.

## Pourquoi c'est important

L'accès au numérique ne garantit pas à lui seul qu'un patient puisse utiliser efficacement un service de santé numérique : les patients ayant une moindre littératie en santé, une expérience limitée de la technologie en général, une déficience cognitive ou visuelle, ou des barrières linguistiques avec l'interface de la plateforme peuvent disposer d'un accès technique complet et néanmoins échouer à accomplir une tâche de manière autonome, et cet écart est systématiquement corrélé aux mêmes groupes démographiques qui subissent déjà d'autres disparités de santé. Le HIMSS Digital Health Equity Measurement Framework traite la littératie numérique comme un pilier distinct de l'accès pour cette raison même : combler un écart d'accès sans traiter aussi un écart de littératie peut laisser une population techniquement connectée mais fonctionnellement incapable d'en bénéficier. Les organisations qui mesurent le taux d'achèvement des tâches et le temps d'achèvement pour les actions courantes de la plateforme, segmentés par langue et par indicateurs socio-économiques, peuvent identifier les barrières de littératie et cibler le soutien (interfaces simplifiées, accompagnement à l'intégration, contenus en d'autres langues) bien plus précisément que celles qui s'appuient uniquement sur des métriques d'accès ou des scores globaux de satisfaction.

## Comment le calculer

```
Taux de littératie numérique = patients qui accomplissent de façon
                         autonome une tâche définie sans assistance /
                         patients qui tentent cette tâche × 100

Tâches couramment mesurées : connexion au compte, planification d'un
rendez-vous, participation à une consultation vidéo, consultation d'un
résultat d'examen, remplissage d'un formulaire d'admission.

Rapporter par tâche, et non sous la forme d'un score unique agrégé, car
la littératie pour des tâches simples (connexion) et complexes
(remplissage d'un formulaire d'admission en plusieurs étapes) diffère
sensiblement, et les agréger masque l'endroit précis de la barrière.
```

## Exemple résolu

Un système de santé suit la participation à une consultation vidéo comme tâche définie sur 5 000 rendez-vous de télésanté programmés dans un mois. Parmi eux, 4 100 patients se connectent avec succès sans aucun appel d'assistance ni aide technique pendant la consultation (taux de littératie numérique pour cette tâche : 82 %). La segmentation par langue principale montre un taux de 89 % pour les patients anglophones contre 61 % pour les patients dont la langue principale diffère de la langue par défaut de l'interface de la plateforme — un écart de 28 points qui serait invisible si seul le chiffre agrégé de 82 % était rapporté, et qui désigne directement une intervention précise et réalisable (interface et instructions traduites) plutôt qu'un vague problème général de littératie.

## Sources de données et mises en garde

Les données d'achèvement des tâches sont généralement saisies à partir des journaux d'événements de la plateforme (le patient a-t-il atteint la consultation vidéo, le parcours de prise de rendez-vous s'est-il achevé sans abandon), complétées par les données d'appels d'assistance ou de contacts avec le service d'aide afin d'identifier les tâches qui n'ont été « achevées » techniquement que parce que le patient a reçu une aide en direct en cours de route. Une tâche comptée comme « achevée » uniquement d'après les journaux système peut masquer le fait qu'un patient a eu besoin d'un appel d'un proche ou du personnel d'assistance pour y parvenir — un achèvement véritablement indépendant de la littératie doit être défini et suivi séparément d'un achèvement assisté chaque fois que la plateforme permet de distinguer les deux. La littératie numérique est corrélée à la littératie en santé et à la littératie générale, mais en reste analytiquement distincte ; un instrument validé (plutôt qu'une hypothèse informelle fondée sur le seul âge ou les caractéristiques démographiques) doit être utilisé chaque fois qu'une évaluation formelle est requise.

## Erreurs courantes

- **Confondre littératie numérique et accès au numérique** : un patient disposant d'un accès technique complet peut néanmoins manquer de la littératie nécessaire pour l'utiliser efficacement ; ce sont des métriques distinctes exigeant des interventions distinctes, et elles ne doivent jamais être rapportées sous la forme d'un chiffre combiné unique.
- **Compter les achèvements assistés comme des réussites autonomes** : si un patient n'accomplit une tâche qu'avec un appel d'assistance ou l'aide d'un proche, il s'agit d'un écart de littératie que la plateforme a masqué et non résolu ; distinguez achèvement assisté et autonome chaque fois que les données le permettent.
- **Rapporter un score unique agrégé d'achèvement des tâches** : la littératie pour une tâche simple (se connecter) et une tâche complexe (remplir un formulaire d'admission détaillé) diffère sensiblement ; rapportez par tâche pour identifier précisément où se situe la barrière.
- **Supposer que l'âge seul prédit la littératie numérique** : bien que l'âge soit corrélé à une moindre littératie numérique en moyenne, la maîtrise de la langue de l'interface de la plateforme et la familiarité générale avec la technologie sont souvent de meilleurs prédicteurs individuels et doivent être mesurées directement plutôt que déduites de l'âge.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), recherches sur l'utilisabilité des technologies de l'information de santé et la littératie numérique en santé
- Littérature évaluée par les pairs sur la mesure de la littératie numérique en santé et les interventions, par exemple des études publiées dans le Journal of Medical Internet Research (JMIR)

Voir aussi : [taux d'accès au numérique](../taux-d-acces-au-numerique/), la métrique préalable avec laquelle celle-ci est le plus souvent, et le plus souvent à tort, confondue.
