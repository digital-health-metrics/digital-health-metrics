# Précision de l'orientation du triage

La précision de l'orientation du triage est la part des rencontres avec des patients dans lesquelles un outil de triage automatisé ou assisté par l'IA oriente correctement un patient vers le niveau et le lieu de soins appropriés — par exemple l'autosoin, les soins primaires, les soins urgents ou les urgences — selon un référentiel clinique validé. C'est la métrique de sécurité et d'efficacité de toute porte d'entrée numérique, de tout vérificateur de symptômes et de tout système de triage par IA : toute la proposition de valeur de l'outil repose sur l'orientation correcte, rapide et constante des patients.

## Pourquoi c'est important

Un outil de triage inexact nuit dans les deux sens : le sous-triage (orienter un patient vers un niveau de soins inférieur à celui dont il a besoin) peut retarder le traitement d'une véritable urgence, tandis que le surtriage (orienter un patient vers un niveau de soins supérieur à celui dont il a besoin) gaspille une capacité rare de soins d'urgence et de soins urgents et accroît le coût et l'anxiété du patient sans aucun bénéfice clinique. Comme ces deux modes d'échec ont des conséquences si différentes, la précision de l'orientation du triage devrait toujours être rapportée avec la direction des erreurs, et non sous la forme d'un chiffre global unique de précision qui masque si l'outil se trompe de façon sûre ou dangereuse. Les autorités de réglementation et les systèmes de santé qui évaluent un outil de triage par IA en vue de son déploiement exigent de plus en plus ce type de rapport de précision stratifié comme condition de validation clinique, en particulier pour les outils fonctionnant avec un certain degré d'autonomie par rapport à un clinicien.

## Comment la calculer

```
Précision de l'orientation du triage = rencontres correctement orientées / total des rencontres triées × 100

Rapporter séparément le sous-triage et le surtriage :
  Taux de sous-triage = rencontres orientées vers un niveau d'acuité
                         inférieur à celui du référentiel / total des
                         rencontres triées × 100
  Taux de surtriage   = rencontres orientées vers un niveau d'acuité
                         supérieur à celui du référentiel / total des
                         rencontres triées × 100

Le référentiel est généralement une revue clinique rétrospective du
même cas par un clinicien, en aveugle par rapport à la sortie de
l'outil lorsque c'est possible.
```

## Exemple résolu

Un outil vérificateur de symptômes par IA trie 5 000 rencontres de patients en un mois. Une revue clinique en aveugle d'un échantillon aléatoire de 500 de ces rencontres constate que 430 ont été orientées vers le bon niveau d'acuité (précision de 86 %), 45 ont été sous-triées (9 %) et 25 ont été surtriées (5 %). Le taux de sous-triage de 9 % est le chiffre qui nécessite le plus urgemment une investigation, car il représente des rencontres où un patient a pu être dirigé vers des soins moins urgents que ceux dont il avait réellement besoin ; le taux de surtriage de 5 % est une préoccupation de capacité et de coût, mais pas directement de sécurité.

## Sources de données et mises en garde

Le référentiel par rapport auquel la précision du triage est mesurée compte énormément : une revue par un seul clinicien introduit la variabilité de jugement propre à ce clinicien, de sorte qu'un chiffre de précision crédible exige généralement soit plusieurs évaluateurs indépendants avec un accord inter-évaluateurs documenté, soit une comparaison avec un résultat clinique ultérieur confirmé (les soins dont le patient avait réellement besoin, établis a posteriori). L'échantillonnage compte aussi : n'examiner qu'un échantillon de commodité de rencontres, ou seulement celles signalées comme inhabituelles, ne produira pas un chiffre généralisable à la performance globale de l'outil. Les chiffres de précision devraient être rapportés séparément par catégorie de symptôme ou de motif de consultation lorsque le volume de cas sous-jacent le permet, car les outils de triage sont rarement performants de manière uniforme pour toutes les affections.

## Erreurs courantes

- **Rapporter un chiffre de précision global unique** : fondre le sous-triage et le surtriage en un seul nombre masque si les erreurs de l'outil penchent vers le mode d'échec le plus dangereux ; rapportez-les toujours séparément.
- **Utiliser un seul évaluateur non aveugle comme référentiel** : cela peut discrètement biaiser le chiffre de précision vers ce que cet évaluateur aurait lui-même fait, plutôt que vers un référentiel clinique indépendant.
- **Ne valider que sur des données rétrospectives et commodes** : la précision réelle d'orientation d'un outil face à des saisies de patients réelles et ambiguës diffère souvent sensiblement de sa précision sur un jeu de validation organisé, constitué pendant le développement.
- **Ignorer la dérive de performance après le déploiement** : la précision d'un modèle de triage par IA peut se dégrader avec le temps à mesure que les populations de patients, les symptômes présentés ou la disponibilité des parcours de soins évoluent ; la précision devrait être remesurée de façon récurrente, et non validée une fois pour toutes puis supposée stable.

## Sources

- ONC / HealthIT.gov, orientations sur la sécurité et l'assurance qualité de l'aide à la décision clinique et des outils reposant sur l'IA
- Littérature évaluée par les pairs sur la précision des vérificateurs de symptômes et des outils de triage par IA, par exemple des études publiées dans JAMIA, npj Digital Medicine et BMJ Health & Care Informatics
- NHS England, orientations sur la sécurité clinique des outils numériques de triage et de téléconsultation (normes de gestion des risques cliniques DCB0129/DCB0160)

Voir aussi : [délai de traitement des orientations numériques](../delai-de-traitement-des-orientations-numeriques/), la métrique de processus située le plus directement en aval d'une décision de triage.
