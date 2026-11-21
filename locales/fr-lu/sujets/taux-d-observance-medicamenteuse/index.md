# Taux d'Observance Médicamenteuse

Le taux d'observance médicamenteuse mesure dans quelle mesure un patient prend un médicament prescrit conformément aux indications, le plus souvent exprimée comme la proportion de jours d'une période définie pendant lesquels le patient a eu accès à son médicament tel que prescrit. C'est l'une des métriques de santé numérique les plus déterminantes, car la non-observance est fréquente, largement évitable avec un soutien adapté, et directement liée à de moins bons résultats cliniques et à des coûts en aval plus élevés — ce qui est précisément le vide que les applications de rappel de médicaments, les piluliers connectés et les relances de renouvellement en pharmacie sont conçus pour combler.

## Pourquoi c'est important

La non-observance des traitements des maladies chroniques est estimée par les organismes de santé publique pouvant atteindre 50 % pour certaines pathologies ; c'est une cause évitable majeure d'hospitalisations évitables, de progression de la maladie et d'échecs thérapeutiques, que l'on attribue à tort au médicament lui-même plutôt à une utilisation irrégulière. Les outils numériques d'observance existent précisément pour combler cet écart, de sorte que, pour tout programme comportant un volet médicamenteux, le taux d'observance est généralement la métrique la plus déterminante pour la décision : il se situe en amont, sur le plan causal, de l'amélioration biométrique, de la réhospitalisation et de la plupart des autres métriques de résultats cliniques qu'un programme pourrait rapporter. Un programme qui améliore l'engagement ou la satisfaction sans faire évoluer l'observance n'a probablement pas encore démontré de mécanisme plausible de bénéfice clinique.

## Comment le calculer

```
Proportion de jours couverts (PDC) = jours de la période où le médicament
                                      est disponible (d'après les jours de
                                      traitement des délivrances) / jours de
                                      la période de mesure × 100

Ratio de possession du médicament (MPR) = total des jours de traitement
                                      obtenus pendant la période / jours
                                      de la période × 100 (peut dépasser
                                      100 % en cas de renouvellements
                                      anticipés ; le PDC est généralement
                                      préféré pour cette raison)

Un patient est généralement classé « observant » à un seuil de PDC ≥ 80 %,
selon la convention largement utilisée des mesures de qualité.
```

## Exemple résolu

Un patient se voit prescrire un médicament quotidien chronique sur une période de mesure de 90 jours. Les dossiers de délivrance en pharmacie montrent que le patient a obtenu suffisamment de médicament pour couvrir 76 de ces 90 jours, avec deux interruptions : une de 9 jours après avoir épuisé son stock avant un renouvellement, et une de 5 jours autour d'une hospitalisation. Le PDC est de 76 / 90 × 100 = 84 %, ce qui dépasse le seuil conventionnel d'observance de 80 %. Si les mêmes interruptions étaient mesurées avec le MPR fondé sur les jours de traitement délivrés plutôt que sur les jours effectivement couverts, un renouvellement anticipé survenu ailleurs dans la période pourrait faire dépasser 100 % au ratio, ce qui illustre pourquoi le PDC est la mesure la plus prudente et généralement préférée.

## Sources de données et mises en garde

Les données de remboursement ou de délivrance en pharmacie (provenant d'un gestionnaire de prestations pharmaceutiques ou d'un système de pharmacie connecté) sont la source standard, car elles reflètent ce que le patient a réellement obtenu plutôt que ce qui lui a été prescrit ; les seules données de prescription surestiment l'observance, car elles ne confirment pas que le patient ait jamais retiré le médicament. Les outils numériques d'observance — piluliers connectés, capteurs ingérables, inhalateurs connectés qui enregistrent chaque actionnement pour des pathologies respiratoires comme l'asthme et la BPCO, et suivis par application — offrent des données de plus haute résolution sur le fait qu'une dose a effectivement été prise, et pas seulement obtenue, mais ils sont utilisés par une minorité réduite et potentiellement non représentative de patients ; mélanger l'observance confirmée par dispositif avec le PDC fondé sur les remboursements au sein d'une population demande donc de la prudence dans l'interprétation. L'observance doit être mesurée sur une période assez longue pour lisser les oublis de doses isolés, mais assez courte pour détecter un déclin significatif avant qu'il ne cause un préjudice clinique — les fenêtres glissantes de 90 jours sont courantes pour les médicaments chroniques.

## Erreurs courantes

- **Utiliser le MPR sans indiquer qu'il peut dépasser 100 %** : des ratios supérieurs à 100 % non expliqués, dus à des renouvellements anticipés ou à une constitution de stock, rendent peu fiable la comparaison entre patients et entre périodes, sauf si l'on utilise le PDC ou si le ratio est explicitement plafonné.
- **Traiter les données de prescription ou de commande comme preuve d'observance** : une ordonnance rédigée ou transmise à une pharmacie ne dit rien sur le fait que le patient ait retiré ou pris le médicament ; seules les données de délivrance ou de dispositif comblent cet écart.
- **Appliquer sans discernement un seuil d'observance unique à toutes les pathologies** : la conséquence clinique de l'oubli de 20 % des doses varie énormément selon la classe de médicament (par ex. anticoagulants et statines), de sorte qu'un seuil unique de 80 % appliqué à tous peut sous-estimer ou surestimer le risque clinique de certains médicaments.
- **Ignorer les changements et les arrêts de médicaments** : un patient qui est, de façon cliniquement appropriée, passé à un autre médicament peut apparaître comme un fort recul d'observance sur le médicament initial si ce changement n'est pas pris en compte dans le calcul.

## Sources

- Pharmacy Quality Alliance (PQA), spécifications de la mesure de la proportion de jours couverts
- Centers for Medicare & Medicaid Services (CMS), mesures d'observance médicamenteuse des Star Ratings
- Littérature évaluée par les pairs sur la mesure de l'observance médicamenteuse et les interventions numériques d'observance, par exemple des études publiées dans le Journal of Managed Care & Specialty Pharmacy

Voir aussi : [taux d'amélioration biométrique](../taux-d-amelioration-biometrique/), dont l'observance aux traitements des maladies chroniques est un moteur essentiel.
