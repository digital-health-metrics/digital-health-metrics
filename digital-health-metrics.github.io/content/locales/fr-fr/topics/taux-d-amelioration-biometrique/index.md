# Taux d'Amélioration Biométrique

Le taux d'amélioration biométrique est la part des patients inscrits à un programme de santé numérique qui obtiennent une amélioration cliniquement significative d'un paramètre biométrique suivi — le plus souvent l'hémoglobine glyquée (HbA1c) dans les programmes de diabète et cardiométaboliques, ou l'indice de masse corporelle (IMC) dans les programmes de gestion du poids — sur une période d'inscription définie. C'est la métrique de résultat qui justifie en dernier ressort les affirmations cliniques d'un produit de santé numérique : les chiffres d'engagement et d'adoption décrivent comment un produit est utilisé, mais l'amélioration biométrique se rapproche davantage d'une preuve qu'il fonctionne.

## Pourquoi c'est important

Les programmes de santé numérique sont fréquemment vendus et commandités sur la promesse d'une amélioration des résultats de santé, et le taux d'amélioration biométrique est le moyen le plus direct et quantifiable de tester cette promesse par rapport à un seuil précis, reconnu cliniquement, plutôt qu'à une vague affirmation de « meilleure santé ». Les payeurs, les employeurs et les systèmes de santé lient de plus en plus le remboursement ou le renouvellement de contrat à un changement biométrique démontré, de sorte qu'un programme incapable de rapporter ce taux de façon crédible est désavantagé sur le plan commercial comme clinique. La métrique est aussi un contrôle de discipline sur la conception du programme : il est bien plus facile de rapporter l'engagement (connexions, messages envoyés) que les résultats, et une équipe devrait se méfier de tout programme qui rapporte le premier avec enthousiasme tout en restant vague sur les seconds.

## Comment le calculer

```
Taux d'amélioration biométrique = patients obtenant une amélioration
                              cliniquement significative définie /
                              patients disposant d'une mesure initiale
                              et d'une mesure de suivi valides × 100

Seuils cliniquement significatifs courants :
  HbA1c   — une réduction de ≥ 0,5 point de pourcentage, ou l'atteinte
            d'une cible définie (p. ex. < 7,0 %) à partir d'une valeur
            initiale hors cible
  IMC     — une réduction de ≥ 5 % du poids initial, maintenue jusqu'au
            point de mesure de suivi

Rapporter séparément pour chaque paramètre biométrique suivi ; ne jamais
fusionner l'amélioration de l'HbA1c et celle de l'IMC en un seul
pourcentage combiné d'« amélioration ».
```

## Exemple résolu

Un programme de santé numérique cardiométabolique inscrit 800 patients dont l'HbA1c initiale est hors cible. Parmi eux, 620 disposent à la fois d'une mesure initiale valide et d'une mesure de suivi à 6 mois (180 sont perdus de vue et exclus du dénominateur, et non comptés comme des échecs). Sur les 620 disposant de mesures appariées, 340 obtiennent une réduction d'au moins 0,5 point de pourcentage. Le taux d'amélioration biométrique est de 340 / 620 × 100 = 55 %. Le rapporter à l'ensemble des 800 inscrits (340 / 800 = 42,5 %) confondrait les perdus de vue avec l'échec du traitement et sous-estimerait le taux pour les patients ayant effectivement terminé les mesures.

## Sources de données et mises en garde

Les valeurs biométriques initiales et de suivi proviennent généralement d'un appareil connecté (un glucomètre Bluetooth ou un pèse-personne connecté), d'un résultat de laboratoire importé du dossier de santé électronique, ou d'une valeur autodéclarée saisie par le patient — et ces trois sources présentent des fiabilités très différentes, de sorte que la source doit être indiquée avec le taux. Les perdus de vue ne le sont que rarement au hasard : les patients qui se désengagent d'un programme sont souvent aussi ceux qui ont le moins de chances de s'être améliorés, si bien qu'un taux d'amélioration élevé calculé uniquement sur les patients ayant terminé le suivi peut surestimer le véritable effet du programme à l'échelle de la population. Les effets saisonniers et la régression vers la moyenne sont réels tant pour l'HbA1c que pour le poids, de sorte qu'un programme devrait comparer avec un groupe témoin concomitant ou historique lorsque c'est possible, plutôt que de traiter toute amélioration comme la preuve de son effet.

## Erreurs courantes

- **Exclure les perdus de vue au lieu de les rapporter** : écarter discrètement du dénominateur les patients sans mesure de suivi peut gonfler sensiblement le taux d'amélioration apparent ; rapportez toujours le taux d'achèvement des mesures de suivi avec le taux d'amélioration lui-même.
- **Mélanger mesures autodéclarées et mesures issues d'appareils sans les étiqueter** : un poids autodéclaré est systématiquement moins fiable que la lecture d'un pèse-personne connecté, et mélanger les deux sources masque la part d'une amélioration apparente qui relève du bruit de mesure.
- **Absence de groupe témoin ou de contrefactuel** : de nombreuses mesures biométriques chroniques fluctuent ou régressent d'elles-mêmes vers la moyenne ; un taux d'amélioration à un seul bras sans groupe de comparaison est un indice, et non une preuve concluante, de l'effet du programme.
- **Traiter un modeste décalage moyen comme preuve d'une amélioration générale** : une faible amélioration moyenne à l'échelle de la population peut être portée par quelques forts répondeurs tandis que la plupart des patients ne voient aucun changement ; rapportez la distribution (p. ex. la part franchissant le seuil cliniquement significatif), et pas seulement le décalage moyen.

## Sources

- American Diabetes Association (ADA), Standards of Care in Diabetes, orientations sur la cible d'HbA1c et le changement cliniquement significatif
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, orientations sur l'évaluation des programmes
- Littérature évaluée par les pairs sur les résultats des programmes numériques de diabète et de gestion du poids, par exemple des études publiées dans npj Digital Medicine et Diabetes Care

Voir aussi : [taux d'observance médicamenteuse](../taux-d-observance-medicamenteuse/), un moteur en amont fréquent de l'amélioration biométrique dans les programmes de maladies chroniques.
