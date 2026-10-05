# Taux de Réhospitalisation

Le taux de réhospitalisation est la part des patients sortis de l'hôpital qui sont réadmis de façon non programmée dans un délai défini après leur sortie — le plus souvent 30 jours. En santé numérique, c'est la métrique la plus directement liée à l'économie des payeurs et aux contrats de soins fondés sur la valeur : un programme de télésurveillance, de suivi après la sortie ou de transition numérique des soins qui ne peut démontrer un effet crédible sur les réhospitalisations a peu de chances de conserver un soutien en remboursement, aussi bons que paraissent ses chiffres d'engagement.

## Pourquoi c'est important

Une réhospitalisation non programmée est coûteuse, perturbante pour le patient et, dans de nombreux systèmes de santé, désormais directement sanctionnée : des dispositifs tels que le Hospital Readmissions Reduction Program américain réduisent le paiement des hôpitaux dont les taux de réhospitalisation pour certaines pathologies sont supérieurs aux attentes, ce qui explique que les hôpitaux commandent activement des programmes numériques de suivi post-sortie et de télésurveillance destinés à les réduire. Une part significative des réhospitalisations est considérée comme potentiellement évitable — due à des consignes de sortie inadéquates, à des rendez-vous de suivi manqués, à une mauvaise compréhension des médicaments ou à une détérioration de symptômes non traitée qu'un point de contact numérique bien conçu peut détecter plus tôt — ce qui est précisément le vide que ciblent les outils numériques de soins de transition. Le taux de réhospitalisation doit toujours être lu au regard de la case-mix : un programme qui dessert une population plus malade et plus complexe aura un taux de base structurellement plus élevé qu'un programme desservant une population en meilleure santé, indépendamment de la qualité du programme.

## Comment le calculer

```
Taux de réhospitalisation à 30 jours = réhospitalisations non programmées dans les 30 jours
                                        suivant la sortie / total des sorties index × 100

Exclure du numérateur : les réhospitalisations programmées (par ex. une
intervention de suivi planifiée), ainsi que les transferts qui constituent
la continuation du même épisode de soins plutôt qu'une nouvelle admission.

Ajuster sur le risque dans la mesure du possible, à l'aide d'un indice
reconnu de case-mix ou de comorbidité, avant de comparer des taux entre
différentes populations de patients ou différentes périodes.
```

## Exemple résolu

Un hôpital fait sortir 1 200 patients atteints d'insuffisance cardiaque au cours d'un trimestre. Parmi eux, 210 sont réhospitalisés dans les 30 jours, dont 15 sont des réhospitalisations programmées pour une intervention planifiée et sont exclues. Le taux de réhospitalisation non programmée à 30 jours est de (210 − 15) / 1 200 × 100 = 16,25 %. Un programme de télésurveillance est introduit pour un sous-ensemble de 400 de ces patients (sélectionnés selon le risque clinique, et non au hasard), et leur taux de réhospitalisation non programmée est de 14 %, contre 18 % pour les 800 patients non inclus. Comme l'inclusion reposait sur le risque clinique plutôt que sur une affectation aléatoire, cette différence constitue un indice plutôt qu'une preuve concluante de l'effet du programme, et doit être interprétée avec une analyse d'ajustement sur le risque plutôt que prise au pied de la lettre.

## Sources de données et mises en garde

Les données de réhospitalisation sont généralement tirées du flux d'admission-sortie-transfert (ADT) de l'hôpital pour les réadmissions dans le même établissement, mais un patient réhospitalisé dans un autre hôpital n'apparaîtra pas du tout dans ce flux ; le suivi des réhospitalisations d'un seul hôpital sous-estime donc systématiquement les taux réels, sauf s'il est complété par des données d'échange d'information de santé régionales, des données de remboursement des payeurs ou des bases de données d'État couvrant tous les payeurs. L'attribution à un programme numérique exige de la prudence : les patients qui adhèrent à un programme de télésurveillance volontaire sont rarement un échantillon aléatoire de la population sortie de l'hôpital, de sorte qu'une comparaison naïve des taux de réhospitalisation entre inclus et non inclus sera généralement biaisée par les effets de sélection mêmes qui rendaient certains patients plus susceptibles de s'inscrire.

## Erreurs courantes

- **Comparer des taux bruts, non ajustés sur le risque, entre populations** : un programme desservant une population plus malade affichera un taux brut de réhospitalisation plus élevé qu'un programme desservant une population en meilleure santé, même si le programme lui-même est plus efficace ; ajustez toujours sur le risque avant de comparer.
- **Sous-compter les réhospitalisations dans d'autres établissements** : s'appuyer uniquement sur les données ADT d'un seul hôpital omettra les réadmissions ailleurs et sous-estimera le taux réel, en particulier dans les zones comptant plusieurs systèmes hospitaliers concurrents.
- **Biais de sélection dans l'inclusion volontaire au programme** : les patients qui choisissent de s'inscrire à un programme numérique de suivi diffèrent souvent systématiquement (par leur littératie en santé, leur soutien social ou leur motivation) de ceux qui ne le font pas, ce qui fausse toute comparaison naïve avant/après ou inclus/non inclus.
- **Compter chaque retour dans le même établissement comme une réhospitalisation** : une réadmission programmée (par exemple une seconde étape d'intervention planifiée) n'est pas le signe d'une sortie ratée et doit être exclue du numérateur, et non mélangée aux retours véritablement non programmés.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program et spécifications de la mesure Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), orientations sur la réduction des réhospitalisations évitables
- Littérature évaluée par les pairs sur les interventions numériques de télésurveillance et de soins de transition visant à réduire les réhospitalisations, par exemple des études publiées dans JAMA Network Open et npj Digital Medicine

Voir aussi : [précision de l'orientation du triage](../precision-de-l-orientation-du-triage/), car une orientation initiale inappropriée peut elle-même être un facteur en aval d'admissions évitables.
