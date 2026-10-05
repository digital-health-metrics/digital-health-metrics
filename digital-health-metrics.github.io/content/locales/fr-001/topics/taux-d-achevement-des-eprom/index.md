# Taux d'Achèvement des ePROM

Le taux d'achèvement des ePROM mesure la part des mesures électroniques des résultats rapportés par les patients (ePROM, de l'anglais Patient-Reported Outcome Measures) programmées qui sont effectivement complétées. Il s'agit de questionnaires standardisés et validés qui recueillent le récit que le patient fait lui-même de ses symptômes, de sa fonction ou de sa qualité de vie, et qui sont administrés par voie numérique plutôt que sur papier. C'est autant une métrique de qualité des données qu'une métrique d'engagement : la valeur clinique et scientifique d'un programme de PROM dépend entièrement d'un taux d'achèvement suffisamment élevé pour que les réponses collectées soient représentatives de l'ensemble de la population incluse, et non du seul sous-groupe le plus engagé ou le moins symptomatique.

## Pourquoi c'est important

Les résultats rapportés par les patients constituent le complément direct, attesté par le patient, des données consignées par le clinicien ou mesurées par un dispositif : ils saisissent des dimensions de la santé — douleur, fonction, qualité de vie — qu'une revue de dossier ou une mesure biométrique ne peut pas rendre ; la numérisation du recueil des PROM vise précisément à le rendre moins coûteux et plus facile à réaliser à grande échelle que ne l'a jamais permis l'administration sur papier. Mais un programme de PROM dont le taux d'achèvement est faible s'expose à un biais spécifique et grave : les patients qui se sentent plus mal sont souvent moins enclins à remplir un long questionnaire, de sorte qu'une baisse du taux d'achèvement peut en elle-même être un signe d'alerte précoce d'une dégradation de la santé de la population, et qu'un faible taux global peut faire paraître les réponses recueillies meilleures que l'expérience réelle de la population, simplement parce que les patients les plus symptomatiques sont sous-représentés parmi les questionnaires complétés. C'est pourquoi le taux d'achèvement doit toujours être rapporté en même temps que les scores PROM eux-mêmes, et non traité comme un détail opérationnel secondaire.

## Comment le calculer

```
Taux d'achèvement des ePROM = ePROM entièrement complétés / ePROM envoyés ou programmés × 100

Rapporter séparément :
  Taux d'achèvement initial        (premier questionnaire d'une séquence
                                    de suivi)
  Taux d'achèvement longitudinal   (questionnaires suivants d'une séquence
                                    de suivi continue, qui diminue
                                    généralement avec le temps et doit
                                    être suivi comme une tendance, et non
                                    comme un chiffre unique)

Un questionnaire « partiellement complété » doit être défini et rapporté
séparément des catégories « entièrement complété » et « non commencé ».
```

## Exemple résolu

Une clinique d'oncologie envoie un ePROM validé sur la charge symptomatique à 400 patients avant chaque visite de suivi mensuelle. Le premier mois, 340 patients complètent entièrement le questionnaire (taux d'achèvement de 85 %), 30 le complètent partiellement et 30 ne le commencent pas. Au sixième mois de la même séquence de suivi, les réponses complètes sont tombées à 260 sur la même cohorte de 400 patients (65 %), un déclin longitudinal significatif qui passerait totalement inaperçu si seul le chiffre de 85 % du premier mois était rapporté comme métrique globale statique. Examiner quels patients décrochent (selon la gravité des symptômes, le stade de la maladie ou l'âge) peut révéler si le déclin reflète une lassitude à l'égard des enquêtes, une aggravation des symptômes rendant le questionnaire plus difficile à remplir, ou un obstacle technique d'accès.

## Sources de données et mises en garde

Les données d'achèvement proviennent des journaux de distribution et de réponse de la plateforme d'ePROM elle-même, qui peuvent distinguer les états « non commencé », « partiellement complété » et « entièrement complété » — une distinction qu'il faut toujours préserver et rapporter plutôt que de la réduire à un chiffre binaire complété/non complété, car un achèvement partiel indique souvent un point précis du questionnaire où les patients rencontrent des difficultés ou se désengagent. Le taux d'achèvement doit être interprété en fonction du mode de livraison du questionnaire (lien par SMS, notification d'application, ou méthode exigeant une connexion au portail), car la friction de la livraison influence elle-même l'achèvement, indépendamment du contenu du questionnaire ou de l'état de santé sous-jacent du patient. Un instrument validé (plutôt qu'un ensemble de questions improvisé) doit toujours être utilisé pour le PROM lui-même, car le taux d'achèvement d'un instrument non validé ne dit rien de fiable sur l'utilité clinique des données obtenues, même si l'achèvement est élevé.

## Erreurs courantes

- **Traiter une baisse du taux d'achèvement uniquement comme un problème de diffusion** : une baisse longitudinale de l'achèvement peut refléter une réelle aggravation des symptômes (patients trop malades pour remplir l'enquête) plutôt qu'une lassitude ou un problème technique, et cette distinction est capitale pour l'interprétation clinique.
- **Fusionner achèvement partiel et complet en une seule catégorie** : un questionnaire partiellement complété représente une qualité de données sensiblement différente d'un questionnaire entièrement complété ; rapportez-les séparément et examinez à quel endroit du parcours du questionnaire les patients tendent à l'abandonner.
- **Rapporter le taux d'achèvement sans évaluer le risque de biais de réponse** : un taux d'achèvement modéré doit conduire à examiner si les répondants diffèrent systématiquement (par la gravité des symptômes, l'âge, la littératie numérique) des non-répondants, car des scores PROM calculés uniquement à partir des répondants peuvent déformer l'image de la population entière.
- **Utiliser un questionnaire non validé ou conçu en interne** : le taux d'achèvement n'a aucune valeur comme signal de qualité des données si l'instrument complété n'a pas lui-même été validé cliniquement pour la pathologie et la population mesurées.

## Sources

- International Consortium for Health Outcomes Measurement (ICHOM), élaboration d'ensembles de mesures standard et orientations de mise en œuvre des PROM
- U.S. Food and Drug Administration (FDA), orientations sur les mesures des résultats rapportés par les patients dans les essais cliniques et les dossiers réglementaires
- Littérature évaluée par les pairs sur la mise en œuvre des PROM électroniques et leurs taux d'achèvement, par exemple des études publiées dans Quality of Life Research et le Journal of Medical Internet Research (JMIR)

Voir aussi : [score de recommandation net des patients](../score-de-recommandation-net-des-patients/), une métrique rapportée par les patients voisine mais distincte, qui mesure la satisfaction plutôt que les résultats cliniques.
