# Taux de Détournement des Urgences

Le taux de détournement des urgences mesure la part des contacts de patients pris en charge par un outil numérique de triage ou de soins virtuels qui auraient plausiblement abouti à une visite aux urgences sans cette intervention, mais qui ont plutôt été gérés en toute sécurité par un parcours de moindre acuité — conseils d'autosoins, rendez-vous en soins primaires ou consultation programmée en soins urgents. C'est un sous-ensemble spécifique et de grande valeur de la précision de l'orientation du triage (voir ce sujet), centré entièrement sur l'utilisation évitée des services d'urgence, qui est le résultat le plus directement lié à la fois au coût des soins et au désengorgement des urgences.

## Pourquoi c'est important

Les services d'urgence figurent parmi les lieux de soins les plus coûteux par rencontre et sont fréquemment utilisés pour des problèmes qui pourraient être pris en charge en toute sécurité ailleurs ; la capacité d'un outil numérique de triage à réorienter en toute sécurité les cas appropriés loin des urgences est donc l'une de ses capacités les plus précieuses sur les plans commercial et opérationnel — et l'une des plus faciles à communiquer à un payeur ou à un système de santé qui évalue le retour sur investissement de l'outil. Mais le détournement n'a de valeur que s'il est sûr : un outil qui détourne agressivement les patients des urgences au prix de la méconnaissance de véritables urgences a optimisé entièrement le mauvais côté de l'arbitrage, raison pour laquelle le taux de détournement des urgences doit toujours être rapporté avec une métrique de sécurité suivant les présentations d'urgence manquées ou retardées parmi les patients détournés, et non isolément comme un pur gain d'efficacité.

## Comment le calculer

```
Taux de détournement des urgences = contacts de patients réorientés en
                     toute sécurité hors des urgences vers un parcours
                     approprié de moindre acuité / total des contacts de
                     patients évalués comme potentiellement destinés aux
                     urgences × 100

« Réorienté en toute sécurité » exige la confirmation, par un suivi ou
des données de dossier de santé liées, que l'état du patient n'a pas
nécessité en fait de soins d'urgence dans une fenêtre de suivi définie
(p. ex. 72 heures) — une décision de détournement n'est pas validée
comme sûre du seul fait que le patient ne s'est pas rendu immédiatement
aux urgences ensuite.

Rapporter conjointement :
  Taux d'urgences manquées = patients détournés ayant eu besoin de soins
                             d'urgence dans la fenêtre de suivi / total
                             des patients détournés × 100
```

## Exemple résolu

Un service numérique de triage évalue 3 000 contacts de patients dans un mois que son algorithme clinique juge potentiellement destinés aux urgences en l'absence d'intervention. Parmi eux, 1 800 sont réorientés vers un parcours de moindre acuité (un taux de détournement de 60 %). Le suivi de la cohorte détournée à 72 heures à l'aide de données de dossier de santé liées révèle que 45 des 1 800 patients détournés se sont effectivement présentés aux urgences dans cette fenêtre (un taux d'urgences manquées de 45 / 1 800 × 100 = 2,5 %). Rapporter le chiffre de détournement de 60 % sans le taux d'urgences manquées de 2,5 % ne présenterait que la moitié de l'arbitrage sécurité-efficacité qui détermine si le comportement de détournement de l'outil est correctement calibré.

## Sources de données et mises en garde

Confirmer qu'un patient détourné n'a pas eu besoin ensuite de soins d'urgence dépend de données liées — soit les propres dossiers d'urgences du même système de santé, soit un échange régional d'informations de santé, soit un appel ou une enquête de suivi structurés auprès du patient — et un programme de détournement fonctionnant sans aucune de ces sources de données ne peut pas valider sa propre sécurité, mais seulement la présumer d'après l'absence de plainte. Le taux de détournement approprié et le taux acceptable d'urgences manquées sont des décisions de politique clinique, et non purement statistiques, et doivent être fixés délibérément par la direction clinique plutôt que de résulter comme effet secondaire du seuil que l'algorithme de triage utilise par défaut. Le taux de détournement doit être rapporté par catégorie de symptôme ou de motif de consultation, car les taux de détournement appropriés varient énormément selon la pathologie (une lacération mineure et une douleur thoracique justifient des seuils de détournement très différents).

## Erreurs courantes

- **Rapporter le taux de détournement sans métrique de sécurité liée d'urgences manquées** : un taux de détournement élevé obtenu par un sous-triage de véritables urgences n'est pas un succès ; les deux métriques doivent toujours être rapportées ensemble.
- **Supposer que l'absence de visite aux urgences signifie que le détournement était sûr** : un patient peut se présenter aux urgences d'un autre système hospitalier non lié, ou subir une issue réellement préjudiciable sans jamais se présenter dans aucun service d'urgence ; validez la sécurité par des données liées ou un suivi structuré, et non par la seule absence d'une visite aux urgences du même système.
- **Fixer le seuil de détournement uniquement pour maximiser le taux de détournement** : un algorithme ou une politique réglé pour maximiser le détournement sans contrainte de sécurité correspondante sacrifiera la sécurité des patients au profit d'un chiffre d'efficacité plus flatteur.
- **Agréger le taux de détournement sur tous les types de motifs** : les taux de détournement appropriés diffèrent énormément selon le motif de consultation ; un taux agrégé unique ne peut montrer si l'outil fonctionne de façon sûre et efficace pour les pathologies les plus importantes sur le plan clinique.

## Sources

- Agency for Healthcare Research and Quality (AHRQ), recherches sur l'utilisation des services d'urgence et la réorientation appropriée vers le lieu de soins
- NHS England, orientations sur NHS 111 et les normes de sécurité et d'efficacité du triage numérique des soins urgents
- Littérature évaluée par les pairs sur les résultats du détournement des urgences par le triage numérique et les soins virtuels, par exemple des études publiées dans Annals of Emergency Medicine et npj Digital Medicine

Voir aussi : [précision de l'orientation du triage](../precision-de-l-orientation-du-triage/), la métrique de précision plus large dont celle-ci est un sous-ensemble spécifique et critique pour la sécurité.
