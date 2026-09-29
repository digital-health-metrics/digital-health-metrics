# Taux d'Adoption du Portail Patient

Le taux d'adoption du portail patient mesure la part des patients éligibles qui se sont inscrits à un portail patient en ligne (par exemple NHS App, Patient Access, ou un portail lié à un dossier de santé électronique comme MyChart) et qui l'utilisent activement pour consulter leurs dossiers, prendre rendez-vous ou envoyer des messages à leur équipe soignante. C'est l'indicateur d'entrée de l'engagement numérique : un patient qui n'a jamais activé de compte ne peut bénéficier d'aucun service numérique ultérieur construit sur le portail.

## Pourquoi c'est important

Un portail ne crée de valeur que lorsque le patient l'utilise, donc les organisations devraient suivre l'adoption comme un entonnoir plutôt que comme un chiffre unique : l'inscription, l'activation (première action significative) et l'usage actif (usage dans une fenêtre de temps donnée) sont trois taux différents que l'on confond bien trop souvent. Les équipes de services numériques subissent souvent la pression de communiquer un seul chiffre global favorable, et il faut de la discipline pour insister sur la ventilation plus difficile et plus honnête. Une adoption faible ou inégalement répartie est aussi un signal d'équité : les patients plus âgés, ayant une littératie numérique plus faible, ne parlant pas la langue majoritaire, ou manquant d'une connexion internet fiable ou d'un smartphone, ont systématiquement moins de chances d'être comptés au numérateur, si bien qu'un taux d'adoption moyen en hausse peut masquer un écart croissant pour les patients qui ont souvent le plus besoin de contact avec les services.

## Comment le calculer

```
Taux d'inscription   = patients ayant créé un compte portail / population de patients éligibles × 100
Taux d'activation     = patients ayant accompli une première action significative (consulter un
                        résultat, prendre rendez-vous, envoyer un message) / patients ayant un compte × 100
Taux d'usage actif    = patients connectés au moins une fois au cours des 12 derniers mois /
                        population de patients éligibles × 100
```

La population de patients éligibles est généralement définie comme les patients ayant eu au moins un contact avec l'organisation au cours d'une période rétrospective définie (couramment 24 mois), et dont l'âge et le statut de consentement permettent de détenir leur propre compte.

## Exemple résolu

Un réseau de soins primaires dessert 50 000 patients répondant à la définition d'éligibilité. Parmi eux, 32 000 se sont inscrits au portail (taux d'inscription de 64 %). Sur ces 32 000 inscrits, 27 000 ont accompli au moins une action significative telle que consulter un résultat d'analyse (taux d'activation de 84 % des inscrits). Au cours des 12 derniers mois, 21 000 des 50 000 patients éligibles initiaux se sont connectés au moins une fois (taux d'usage actif de 42 %). Ne communiquer que le chiffre d'inscription de 64 % surestimerait considérablement l'engagement réel ; le chiffre d'usage actif de 42 % est celui qui devrait orienter les décisions de ressources pour le programme de portail.

## Sources de données et mises en garde

Les données analytiques du portail proviennent généralement soit de la plateforme du fournisseur elle-même (événements de connexion, usage des fonctionnalités), soit du journal d'audit du dossier de santé électronique sous-jacent, et les organisations devraient se méfier des tableaux de bord fournisseurs qui n'affichent que les chiffres d'inscription. L'accès par procuration (un parent ou un aidant gérant un compte au nom d'un patient) devrait être identifié et rapporté séparément, car cela change qui est réellement « l'utilisateur ». Le choix du dénominateur compte énormément : compter par rapport à la liste totale des patients inscrits plutôt qu'à une population réellement éligible et joignable sous-estimera toujours l'adoption, tandis que compter uniquement par rapport aux patients activement invités la surestimera toujours ; la définition d'éligibilité devrait donc être fixée et publiée avec chaque taux rapporté.

## Erreurs courantes

- **Confondre l'inscription avec l'adoption** : un compte créé mais jamais utilisé a une valeur proche de zéro ; rapportez l'activation et l'usage actif en plus de l'inscription, pas à sa place.
- **Ignorer l'exclusion numérique** : les chiffres d'adoption globaux peuvent augmenter tandis que l'écart entre les groupes les plus et les moins inclus numériquement se creuse ; segmentez toujours par âge, précarité, langue et handicap lorsque la gouvernance des données le permet.
- **Comparer des organisations ayant des définitions d'éligibilité différentes** : un programme de portail qui n'invite que les patients ayant une adresse e-mail enregistrée rapportera un taux plus élevé qu'un programme qui mesure par rapport à toute la liste des inscrits, sans différence réelle de performance.
- **Traiter une connexion unique comme un engagement continu** : une fenêtre rétrospective de 12 mois est courante, mais une fenêtre plus courte (par exemple 90 jours) donne une alerte plus précoce d'un usage en déclin.

## Sources

- NHS England, statistiques d'usage et d'inscription de l'application NHS App (publications nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, mesures du programme de promotion de l'interopérabilité, y compris les mesures d'accès patient Consulter, Télécharger, Transmettre (VDT)
- Littérature évaluée par les pairs sur l'adoption des portails patients et les disparités en santé numérique, par exemple des études publiées dans le Journal of the American Medical Informatics Association (JAMIA)

Voir aussi : [taux d'absence aux rendez-vous](../appointment-no-show-rate/), directement influencé par l'auto-planification et les rappels basés sur le portail.
