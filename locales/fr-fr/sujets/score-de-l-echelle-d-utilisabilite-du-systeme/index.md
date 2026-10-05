# Score de l'échelle d'utilisabilité du système

Le score de l'échelle d'utilisabilité du système (SUS, pour System Usability Scale) est un questionnaire standardisé de 10 items servant à quantifier le degré d'utilisabilité d'un logiciel, produisant un score unique de 0 à 100 qui peut être comparé à des normes sectorielles bien établies. À la différence du Net Promoter Score, qui mesure la propension à recommander, ou des mesures de résultats rapportés par les patients, qui mesurent l'état clinique ou fonctionnel, le SUS mesure une seule chose précise : la facilité avec laquelle le logiciel lui-même s'apprend et s'utilise, que ce soit pour les patients ou pour le personnel clinique.

## Pourquoi c'est important

Un outil de santé numérique peut disposer de solides preuves cliniques et d'un argumentaire économique convaincant tout en échouant dans la pratique parce que les patients ou les cliniciens trouvent l'interface déroutante, lente ou frustrante — et comme le SUS est un instrument validé et largement utilisé, assorti de décennies de données de référence publiées dans tous les secteurs, il permet à une équipe de santé numérique de comparer l'utilisabilité de son propre produit à une distribution connue plutôt que de se fier à des impressions informelles ou à des plaintes anecdotiques. Le SUS est délibérément indépendant de la technologie et rapide à administrer (généralement en moins de cinq minutes), ce qui permet de le mener de façon répétée au fil des itérations de conception, contrairement à une étude d'utilisabilité complète ou à un essai clinique formel. Comme les défauts d'utilisabilité côté clinicien contribuent de façon documentée à l'épuisement professionnel (voir taux d'épuisement professionnel des médecins) et que les défauts d'utilisabilité côté patient contribuent de façon documentée à l'abandon et à de mauvais résultats de littératie numérique (voir taux de littératie numérique), le SUS fait office de signal d'utilisabilité précoce et peu coûteux, capable de déceler un problème de conception avant qu'il n'apparaisse dans ces métriques en aval aux conséquences plus lourdes.

## Comment le calculer

```
Score SUS = ((somme des scores des items impairs − 5) +
             (25 − somme des scores des items pairs)) × 2,5

Le résultat est un score unique de 0 à 100 (et non un pourcentage,
malgré l'échelle, puisqu'il ne représente pas un « pourcentage de
bonnes réponses » ou équivalent).

Interprétation de référence publiée (Bangor et al.) :
  Supérieur à 80  — excellente utilisabilité
  68              — moyenne, d'après la norme sectorielle générale
  Inférieur à 51  — faible utilisabilité, justifiant une investigation
```

## Exemple résolu

Une plateforme de télésanté administre le questionnaire SUS standard de 10 items à 150 patients après leur première consultation en vidéo. Le score SUS moyen calculé sur l'ensemble des répondants est de 74. Comparé à la moyenne sectorielle largement citée de 68, cela indique une utilisabilité supérieure à la moyenne pour cette population de patients et ce cas d'usage précis, tout en restant nettement en deçà du seuil « excellent » de 80, qui suggérerait peu d'obstacles d'utilisabilité restants. La segmentation des mêmes 150 réponses par âge montre un score moyen de 81 chez les patients de moins de 50 ans et de 62 chez les patients de 65 ans et plus — un écart qui désigne un problème d'utilisabilité précis et corrigeable pour les patients plus âgés plutôt qu'un problème général d'utilisabilité du produit, et qu'une moyenne globale unique aurait masqué.

## Sources de données et mises en garde

Les données SUS proviennent directement des patients ou des cliniciens qui remplissent le questionnaire standardisé de 10 items, et l'instrument doit être administré exactement tel que validé (mêmes 10 items, même échelle d'accord en 5 points, même formule de calcul) pour que le score obtenu soit comparable aux références publiées ; une version modifiée ou raccourcie du questionnaire, même bien intentionnée, produit un score qui ne peut pas être interprété de manière fiable par rapport à la distribution de référence standard. Le SUS mesure l'utilisabilité perçue, qui est corrélée à la réussite objective des tâches sans lui être identique (voir taux de littératie numérique pour une mesure fondée sur la réalisation de tâches) ; un produit peut obtenir un bon score SUS auprès de patients n'ayant pas essayé les fonctions les plus complexes, de sorte qu'associer le SUS à des données objectives de réalisation de tâches donne une image plus complète que l'un ou l'autre seul. Le moment de la réponse compte : administrer le SUS immédiatement après un incident précis frustrant (une connexion échouée, une étape déroutante) plutôt qu'après une session fluide peut décaler les scores indépendamment de l'utilisabilité globale du produit.

## Erreurs courantes

- **Modifier les items ou le calcul du questionnaire standard** : même de petits changements de formulation ou d'échelle invalident la comparaison avec la distribution de référence publiée et bien établie ; utilisez l'instrument standard de 10 items exactement tel que validé.
- **Ne rapporter que le score moyen sans segmentation** : l'utilisabilité varie souvent considérablement selon l'âge de l'utilisateur, sa littératie numérique ou son rôle (patient ou clinicien) ; segmentez les rapports pour repérer les lacunes d'utilisabilité précises et corrigeables qu'une moyenne unique dissimule.
- **Traiter le SUS comme une mesure de l'efficacité clinique** : le SUS mesure spécifiquement l'utilisabilité, et non les résultats cliniques ni la satisfaction à l'égard des soins ; un outil très utilisable peut malgré tout ne pas améliorer les résultats cliniques, et ces notions ne devraient jamais être confondues ni substituées l'une à l'autre.
- **Administrer l'enquête uniquement après des sessions exceptionnellement fluides ou exceptionnellement frustrantes** : le moment et le contexte de l'administration peuvent biaiser le score ; administrez-le de façon cohérente auprès d'un échantillon représentatif de sessions réelles, et pas seulement de sessions commodes ou choisies de façon sélective.

## Sources

- Brooke, J., « SUS: A Quick and Dirty Usability Scale », l'instrument original publié
- Bangor, Kortum et Miller, recherches publiées d'étalonnage du SUS établissant les bandes d'interprétation des scores largement citées
- Littérature évaluée par les pairs sur l'utilisation du SUS dans l'évaluation de l'utilisabilité en santé numérique et en télésanté, par exemple des études publiées dans JMIR Human Factors

Voir aussi : [score de recommandation net des patients](../score-de-recommandation-net-des-patients/), une métrique rapportée par les patients voisine mais distincte, qui mesure la satisfaction et la fidélité plutôt que l'utilisabilité du logiciel en particulier.
