# Taux d'Épuisement Professionnel des Médecins

Le taux d'épuisement professionnel des médecins mesure la part des cliniciens déclarant des symptômes importants d'épuisement professionnel (burnout) — couramment évalués sous forme d'épuisement émotionnel, de dépersonnalisation ou de faible sentiment d'accomplissement personnel au moyen d'un instrument d'enquête validé — et, pour la santé numérique en particulier, il est suivi en parallèle de mesures de la charge imposée aux cliniciens par les outils numériques, comme le temps consacré à la paperasserie ou à la documentation du dossier médical électronique (DME). Il figure dans un cadre de métriques de santé numérique parce que des logiciels cliniques mal conçus sont un facteur d'épuisement professionnel bien documenté et mesurable, et que le succès d'un outil de santé numérique ne doit jamais être évalué uniquement par des métriques tournées vers les patients en ignorant son effet sur les cliniciens qui doivent l'utiliser.

## Pourquoi c'est important

Les outils de santé numérique sont fréquemment introduits avec l'objectif explicite de réduire la charge administrative des cliniciens, mais un flux de travail de dossier médical électronique mal conçu, un volume excessif d'alertes cliniques de faible valeur (voir taux de contournement des alertes cliniques) ou une interface de télésanté maladroite peuvent tout aussi bien augmenter l'épuisement professionnel que le réduire — et un outil qui améliore une métrique d'engagement des patients tout en accroissant discrètement la charge de documentation des cliniciens n'a pas produit de résultat net positif pour le système de soins dans son ensemble. L'épuisement professionnel est fortement associé, dans la littérature clinique, aux erreurs médicales, au roulement des cliniciens et à la baisse de la qualité des soins ; il fonctionne donc comme un indicateur avancé de problèmes ultérieurs de sécurité et de pérennité des effectifs, et non comme une simple question de satisfaction au travail. Tout programme de santé numérique qui prétend réduire la charge clinique devrait pouvoir étayer cette affirmation par rapport à une référence mesurée, plutôt que de l'avancer comme une intention de conception.

## Comment le calculer

```
Taux d'épuisement professionnel des médecins = cliniciens dont le score dépasse
                                               le seuil d'épuisement de
                                               l'instrument validé / total
                                               des cliniciens interrogés × 100

Instruments validés courants : Maslach Burnout Inventory (MBI),
Professional Fulfillment Index, ou une question de dépistage à item unique
validée par rapport à un instrument plus complet.

Rapporter en même temps un indicateur indirect de charge numérique lorsqu'il
est disponible :
  Temps passé dans le DME par consultation de patient
  Temps de documentation effectué en dehors des heures cliniques
  programmées (« pajama time », littéralement « temps en pyjama »)
```

## Exemple résolu

Un système hospitalier interroge 300 médecins à l'aide du Maslach Burnout Inventory avant d'introduire un outil de documentation clinique ambiante destiné à réduire le temps de rédaction des notes. À la référence initiale, 135 médecins (45 %) dépassent le seuil d'épuisement, et les données du journal d'audit du DME montrent en moyenne 58 minutes de documentation par médecin et par jour effectuées en dehors des heures cliniques programmées. Six mois après le déploiement de l'outil, une nouvelle enquête auprès des mêmes médecins en dénombre 108 (36 %) au-dessus du seuil d'épuisement, accompagnés d'une baisse du temps de documentation hors horaires à 34 minutes par jour. L'évolution corrélée du taux d'épuisement et de l'indicateur indirect objectif tiré du DME renforce l'idée que l'outil contribue à l'amélioration, bien qu'une comparaison formelle avant/après doive encore tenir compte des autres changements de charge de travail survenus au cours de la même période.

## Sources de données et mises en garde

Les données d'enquête sur l'épuisement professionnel proviennent d'un instrument validé administré de façon récurrente (annuellement ou plus fréquemment), et le taux de réponse compte : un faible taux de réponse fait courir un risque de biais de non-réponse, où les cliniciens les plus épuisés (ayant le moins de capacité pour remplir une enquête supplémentaire) sont systématiquement sous-représentés, ce qui sous-estime le taux réel. Les indicateurs indirects de charge numérique tirés du DME — temps passé dans le système, temps de documentation hors horaires, nombre de clics par consultation — sont utiles comme compléments objectifs et disponibles en continu des données d'enquête périodiques, mais ils doivent être validés par rapport à l'épuisement déclaré dans l'enquête pour une organisation donnée avant d'être traités comme un indicateur autonome fiable d'épuisement professionnel, car la relation entre le temps passé dans le système et l'épuisement réel peut varier selon la spécialité et le style de travail individuel.

## Erreurs courantes

- **S'appuyer uniquement sur des indicateurs indirects tirés du DME** : le temps passé dans le système et le nombre de clics sont corrélés à l'épuisement en agrégé, mais ne sont pas l'épuisement lui-même, et peuvent induire en erreur pour des cliniciens ou des spécialités individuels dont les besoins de documentation diffèrent réellement.
- **Faible taux de réponse à l'enquête masquant le taux réel** : les cliniciens les plus touchés par l'épuisement sont souvent les moins susceptibles d'avoir la capacité de répondre à une enquête volontaire, ce qui biaise un résultat à faible taux de réponse vers un chiffre artificiellement plus sain.
- **Attribuer une variation de l'épuisement à un seul outil sans tenir compte des facteurs de confusion** : l'épuisement est influencé par de nombreux facteurs concomitants (niveaux d'effectifs, volume de patients, changements organisationnels) ; une comparaison avant/après autour du déploiement d'un outil doit les contrôler dans la mesure du possible plutôt que de supposer une cause unique.
- **Traiter l'épuisement uniquement comme une question de résilience individuelle** : la recherche sur l'épuisement professionnel constate de façon constante que la charge de travail, la conception des systèmes et les facteurs organisationnels en sont les principaux moteurs ; le présenter comme un problème exclusivement individuel du clinicien détourne l'intervention des outils numériques et des flux de travail qui en sont souvent la véritable cause profonde.

## Sources

- Maslach Burnout Inventory (MBI), instrument d'enquête validé et orientations de notation
- American Medical Association (AMA), recherche sur l'épuisement professionnel des médecins et programme d'amélioration des pratiques STEPS Forward
- Littérature évaluée par les pairs sur l'utilisabilité des DME, la charge de documentation et l'épuisement professionnel des cliniciens, par exemple des études publiées dans JAMIA et les Annals of Internal Medicine

Voir aussi : [taux de contournement des alertes cliniques](../taux-de-contournement-des-alertes-cliniques/), la fatigue d'alerte étant l'un des facteurs les plus précis et mesurables de l'épuisement professionnel des cliniciens sur lesquels les outils numériques peuvent agir directement.
