# Taux de Contournement des Alertes Cliniques

Le taux de contournement des alertes cliniques mesure la part des alertes d'aide à la décision clinique (CDS) — telles que les avertissements d'interaction médicamenteuse, les alertes d'allergie et les vérifications de plage posologique générées par un système de prescription informatisée (CPOE) — qu'un clinicien rejette ou contourne plutôt que d'y donner suite. C'est le signal quantitatif standard utilisé pour détecter et gérer la « fatigue d'alerte » : la tendance bien documentée des cliniciens à devenir insensibles aux alertes lorsque le volume d'avertissements à faible valeur devient écrasant.

## Pourquoi c'est important

Les taux de contournement publiés pour les alertes d'interaction médicamenteuse s'étendent couramment d'environ la moitié à plus de quatre-vingt-dix pour cent, et un taux élevé n'est pas automatiquement un échec de sécurité : de nombreuses alertes interruptives se déclenchent pour des interactions cliniquement insignifiantes dans leur contexte, ou répètent une alerte à laquelle le clinicien a déjà donné suite plus tôt dans le même ensemble de prescriptions ; un système bien calibré déclenche donc délibérément moins d'alertes, de plus grande valeur, plutôt que de chercher à ramener le taux de contournement à zéro. Ce qui compte réellement pour la sécurité, c'est la tendance dans le temps, la répartition entre les niveaux de gravité, et si les cliniciens documentent une raison lorsqu'ils contournent une alerte de gravité élevée ; un taux de contournement croissant sur des interactions de gravité élevée et bien étayées est une véritable préoccupation de gouvernance même quand la moyenne sur l'ensemble des alertes paraît stable.

## Comment le calculer

```
Taux de contournement = alertes contournées / total des alertes déclenchées × 100

Segmentez selon :
  - le niveau de gravité (par ex. contre-indiqué, majeur, modéré)
  - le type d'alerte (interaction médicamenteuse, allergie, thérapie dupliquée, plage posologique)
  - si une raison de contournement a été documentée

Un « taux de contournement documenté » suit la part des contournements
accompagnés d'une justification enregistrée, ce qui est en soi une mesure
de gouvernance.
```

## Exemple résolu

Le système CPOE d'un hôpital déclenche 10 000 alertes d'interaction médicamenteuse en un mois, dont 8 700 sont contournées, soit un taux de contournement global de 87 %. En segmentant par gravité, sur 500 alertes « contre-indiquées », 60 sont contournées (12 %), tandis que sur 6 000 alertes « modérées », 5 700 sont contournées (95 %). Le chiffre du niveau modéré est globalement conforme aux références publiées et n'est pas, en soi, préoccupant ; le chiffre du niveau contre-indiqué mérite un examen individuel des cas, et le constat de gouvernance le plus exploitable est que seulement 340 des 500 contournements de ce niveau comportent une raison documentée.

## Sources de données et mises en garde

Le journal d'audit du dossier de santé électronique, ou le module d'alerte du fournisseur de CDS lui-même, enregistre chaque événement de déclenchement d'alerte et de réponse à l'alerte, y compris si le clinicien a saisi une justification en texte libre ou structurée. Comparer les taux de contournement entre organisations, ou même entre services d'une même organisation, nécessite de vérifier que les ensembles de règles d'alerte sous-jacents et la stratification de gravité sont identiques ; un hôpital doté d'un ensemble de règles calibré de façon agressive affichera un taux de contournement plus bas pour des raisons sans rapport avec le comportement des cliniciens.

## Erreurs courantes

- **Traiter le taux de contournement brut comme un score de sécurité unique** : cela mélange des contournements bien justifiés d'alertes à faible valeur avec des contournements dangereux d'interactions réellement risquées ; segmentez toujours par gravité.
- **Absence de saisie de la raison de contournement** : sans raison documentée, il est impossible de distinguer « cette alerte était erronée » de « cette alerte était correcte et le clinicien a pris une décision dangereuse », qui est la distinction réellement importante pour la sécurité du patient.
- **Inflation des règles d'alerte dans le temps** : ajouter davantage d'alertes « par précaution » sans élaguer celles à faible valeur est la cause directe de la hausse des taux de contournement et de la fatigue d'alerte ; la gouvernance des alertes devrait inclure une revue et un retrait périodiques des règles peu performantes, pas seulement une surveillance.
- **Comparer les taux entre systèmes ayant une conception d'interruption différente** : une alerte interruptive à arrêt strict produit un comportement de contournement différent d'une alerte passive et non bloquante, donc les deux ne sont pas des métriques directement comparables.

## Sources

- Littérature évaluée par les pairs sur la fatigue d'alerte liée à l'aide à la décision clinique, largement publiée dans des revues telles que JAMIA et npj Digital Medicine
- ONC / HealthIT.gov, orientations de sécurité des technologies de santé sur l'aide à la décision clinique
- Institute for Safe Medication Practices (ISMP), orientations sur la conception et la gouvernance des alertes CDS
