# Délai d'intervention

Le délai d'intervention est le temps écoulé entre la génération d'une alerte de santé automatisée — par exemple un dispositif de télésurveillance détectant un signe vital hors plage, ou un outil de triage numérique signalant un patient en détérioration — et le moment où un membre de l'équipe clinique engage effectivement une réponse. C'est la métrique de processus qui détermine si un système d'alerte automatisé tient sa promesse centrale : déceler un problème plus tôt que ne l'aurait fait un modèle traditionnel de suivis programmés ou d'appels téléphoniques à l'initiative du patient.

## Pourquoi c'est important

Un système d'alerte qui génère une alerte cliniquement correcte mais n'est pas suivi d'une réponse en temps utile n'a pas réellement amélioré la sécurité des patients ; toute la proposition de valeur de la télésurveillance et de l'alerte automatisée repose sur la fermeture de la boucle plus rapidement que ne le ferait le parcours alternatif non surveillé. Comme des niveaux de gravité différents d'alerte appellent des urgences de réponse différentes, le délai d'intervention devrait toujours être rapporté par niveau de gravité plutôt que sous forme d'une moyenne unique, car une moyenne rapide sur l'ensemble des alertes peut masquer une réponse dangereusement lente pour le petit nombre d'alertes les plus graves. Cette métrique est aussi l'un des moyens les plus clairs et les plus convaincants de démontrer la valeur d'un programme de surveillance automatisée à la direction clinique et aux payeurs, car elle peut être directement comparée au délai de réponse antérieur, non automatisé, de la même organisation pour un scénario clinique similaire.

## Comment le calculer

```
Délai d'intervention = horodatage(réponse clinique engagée) −
                        horodatage(alerte générée)

Rapporter la médiane et un percentile élevé (p. ex. le 90e), segmentés
par niveau de gravité de l'alerte, et non sous forme d'une moyenne
unique globale.

« Réponse clinique engagée » doit être définie de façon précise et
cohérente — p. ex. un clinicien ouvrant le dossier du patient et
agissant, ou une tentative de contact sortant documentée — et non
simplement une alerte consultée ou accusée réception sans qu'aucune
action ne soit entreprise.
```

## Exemple résolu

Le système d'alerte d'un programme de télésurveillance cardiaque signale 200 alertes d'arythmie de gravité élevée en un mois. Le délai médian entre la génération de l'alerte et le moment où un clinicien engage un contact sortant est de 12 minutes, avec un délai au 90e percentile de 38 minutes. Les données historiques du parcours antérieur non surveillé de la même population (où un événement similaire ne se manifestait généralement qu'à la prochaine consultation programmée ou lors d'une présentation à l'hôpital) montrent un délai médian avant toute réponse clinique mesuré en jours, et non en minutes. C'est cette comparaison — et non le chiffre de 12 minutes pris isolément — qui démontre la valeur clinique du programme de surveillance ; le chiffre du 90e percentile est tout aussi important, car il identifie la queue des alertes qui ont mis plus d'une demi-heure à être traitées et justifie sa propre analyse des causes profondes.

## Sources de données et mises en garde

Les horodatages de génération des alertes proviennent du journal d'événements de la plateforme de surveillance elle-même ; les horodatages de réponse clinique proviennent généralement de la piste d'audit du dossier de santé électronique ou du système de flux de travail ou de gestion des tâches de l'équipe de soins, et ces deux systèmes doivent être synchronisés avec précision pour que l'intervalle calculé soit fiable. La « réponse engagée » exige une définition stricte et documentée, car un clinicien qui se contente de consulter ou d'écarter une alerte sans autre action représente un événement fondamentalement différent, et beaucoup moins rassurant, que celui qui déclenche un véritable contact sortant ou une intervention — confondre les deux fera paraître le délai de réponse meilleur que la réalité clinique. Les niveaux de dotation en personnel la nuit et le week-end affectent couramment le délai d'intervention de façon significative ; cette métrique devrait donc être rapportée par plage horaire et par jour de la semaine lorsque le volume d'alertes le permet, plutôt que seulement sous forme d'une moyenne globale 24 h/24 et 7 j/7 qui peut masquer un sérieux écart de réponse en dehors des heures ouvrées.

## Erreurs courantes

- **Compter l'accusé de réception d'une alerte comme une réponse** : un clinicien qui consulte ou écarte une alerte n'engage pas pour autant une réponse clinique ; définissez la réponse strictement comme une action documentée, et non comme une prise de connaissance passive.
- **Rapporter un délai global unique pour tous les niveaux de gravité** : une moyenne rapide sur des alertes de faible et de forte gravité combinées peut dissimuler un délai de réponse dangereusement lent spécifiquement pour les alertes de gravité la plus élevée, qui sont celles qui comptent le plus.
- **Ignorer les effets des schémas de dotation en personnel** : le délai de réponse varie souvent considérablement selon l'heure de la journée et le jour de la semaine en raison des niveaux de dotation ; une moyenne globale unique peut cacher un écart systématique de réponse en dehors des heures ouvrées ou le week-end.
- **Comparer le délai d'intervention entre des organisations ayant des seuils d'alerte différents** : une organisation dotée d'un seuil d'alerte plus prudent (plus sensible) générera davantage d'alertes de faible acuité, ce qui peut diluer son délai de réponse moyen par rapport à une organisation utilisant un seuil plus strict, indépendamment de la réactivité clinique réelle.

## Sources

- NHS England, orientations sur la télésurveillance et les normes de réponse clinique des services d'hospitalisation à domicile virtuelle (virtual wards)
- ONC / HealthIT.gov, orientations sur la conception et la sécurité des systèmes d'alerte cliniques
- Littérature évaluée par les pairs sur les délais de réponse aux alertes de télésurveillance des patients et sur les résultats cliniques, par exemple des études publiées dans npj Digital Medicine

Voir aussi : [taux de disponibilité des appareils](../taux-de-disponibilite-des-appareils/), car un chiffre fiable de délai d'intervention dépend du fait que le dispositif de surveillance sous-jacent soit effectivement en ligne pour générer l'alerte en premier lieu.
