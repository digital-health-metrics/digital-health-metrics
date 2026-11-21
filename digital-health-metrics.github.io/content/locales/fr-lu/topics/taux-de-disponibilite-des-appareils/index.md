# Taux de Disponibilité des Appareils

Le taux de disponibilité des appareils mesure la part du temps de surveillance programmé pendant laquelle un appareil de santé connecté — un capteur de télésurveillance des patients, un dispositif portable ou une unité de télésanté à domicile — est effectivement en ligne, transmet des données et fonctionne correctement, plutôt que d'être hors ligne, déconnecté ou défaillant. C'est la métrique d'infrastructure fondamentale sous-jacente à tout programme de télésurveillance ou d'appareils connectés : une alerte clinique, une tendance biométrique ou un chiffre d'engagement calculé à partir d'un appareil fréquemment hors ligne n'est aussi fiable que la connectivité qui le sous-tend.

## Pourquoi c'est important

Toute la proposition de valeur clinique d'un programme de télésurveillance des patients repose sur une capture de données continue ou quasi continue ; un appareil à faible disponibilité crée dans le tableau clinique d'un patient des lacunes silencieuses qui peuvent être prises pour de la stabilité (pas d'alerte faute de données, et non parce que rien n'a changé) plutôt que correctement identifiées comme une défaillance de la surveillance. La disponibilité des appareils est aussi un indicateur avancé du coût du programme et de l'expérience du patient : un appareil qui perd fréquemment sa connexion génère des appels d'assistance, de la frustration chez les patients et potentiellement des contacts cliniques inutiles pour vérifier si une lacune de données reflète un véritable événement clinique ou simplement une panne technique. Comme les défaillances de disponibilité sont fréquemment imputables à une infrastructure que l'organisation contrôle (une passerelle cellulaire mal configurée, une couverture Wi-Fi faible au domicile d'un patient, un parc d'appareils mal entretenu) plutôt qu'au patient, cette métrique relève pleinement du fournisseur et de l'équipe d'exploitation technique, et ne doit pas être intégrée sans discernement aux métriques d'engagement des patients.

## Comment le calculer

```
Taux de disponibilité des appareils = temps pendant lequel l'appareil
                      était en ligne et transmettait des données valides /
                      temps total de surveillance programmé × 100

Segmenter les causes profondes des indisponibilités lorsque les données
le permettent :
  Défaillance côté appareil  (batterie, panne matérielle, plantage du
                              micrologiciel)
  Défaillance de connectivité (coupure cellulaire/Wi-Fi/VPN)
  Facteurs côté patient      (appareil éteint, déplacé hors de portée)

Paramètres techniques complémentaires à suivre avec la disponibilité :
  Utilisation moyenne du processeur, de la mémoire et niveau de batterie
  par appareil
  Temps moyen entre les défaillances de connectivité
  Temps moyen de reconnexion après une coupure
```

## Exemple résolu

Un programme de télésurveillance cardiaque déploie 1 000 appareils connectés, chacun devant transmettre en continu. Sur un mois de 30 jours (720 heures de surveillance programmées par appareil), le parc enregistre un total de 705 600 heures réelles en ligne pour 720 000 heures programmées, soit un taux de disponibilité des appareils à l'échelle du parc de 705 600 / 720 000 × 100 = 98 %. L'analyse des causes profondes des 14 400 heures d'indisponibilité montre que 60 % sont imputables à des coupures de connectivité cellulaire concentrées dans une région rurale précise, 25 % à des appareils dont les batteries vieillissantes sont signalées pour remplacement, et 15 % à des patients éteignant temporairement leur appareil. Cette ventilation désigne deux interventions claires et différentes — une correction de connectivité pour la région concernée et un programme proactif de remplacement des batteries — qu'un seul chiffre agrégé de disponibilité n'aurait pas distinguées.

## Sources de données et mises en garde

Les données de disponibilité proviennent du système de gestion des appareils et de télémétrie du fabricant ou du fournisseur de la plateforme, qui consigne par appareil les événements de connexion et de signal de vie ; l'organisation doit confirmer exactement ce que le fournisseur compte comme « en ligne » (un appareil peut se déclarer connecté à un réseau tout en ne transmettant pas de données cliniques valides, ce qui devrait compter comme une indisponibilité à des fins cliniques même si le tableau de bord du fournisseur le signale comme connecté). La disponibilité doit être rapportée par cohorte d'appareils ou par zone géographique lorsque les volumes le permettent, car la qualité de connectivité est souvent regroupée géographiquement (couverture cellulaire rurale, Wi-Fi de bâtiments anciens) plutôt que répartie uniformément dans une population de patients, et un chiffre agrégé à l'échelle du parc peut masquer un problème régional grave auquel on peut remédier.

## Erreurs courantes

- **Confondre connexion réseau et transmission de données valides** : un appareil peut sembler « connecté » sur un tableau de bord du fournisseur tout en ne transmettant pas de données cliniques exploitables ; définissez et mesurez la disponibilité par rapport à la réception effective de données valides, et non à la seule connectivité réseau brute.
- **Ne rapporter qu'une moyenne à l'échelle du parc** : cela peut masquer un grave problème d'indisponibilité propre à une zone géographique ou à une cohorte d'appareils, qu'une moyenne ciblée révélerait et qui appelle une correction précise.
- **Ne pas distinguer la cause profonde des indisponibilités** : les indisponibilités côté appareil, de connectivité et côté patient exigent chacune une intervention complètement différente ; un seul pourcentage d'indisponibilité sans segmentation par cause profonde ne permet pas d'agir.
- **Traiter par défaut une lacune de données comme de la stabilité clinique** : un flux de données manquant d'un appareil hors ligne doit déclencher une vérification technique de la connectivité, et non être interprété silencieusement comme « pas de nouvelles, bonnes nouvelles » pour l'état clinique du patient.

## Sources

- Continua Design Guidelines / Personal Connected Health Alliance, normes techniques d'interopérabilité pour les appareils de santé connectés
- ONC / HealthIT.gov, orientations sur la mise en œuvre des programmes de télésurveillance des patients et les exigences techniques
- Littérature évaluée par les pairs sur la fiabilité des appareils de télésurveillance des patients et la complétude des données, par exemple des études publiées dans npj Digital Medicine

Voir aussi : [précision de l'orientation du triage](../precision-de-l-orientation-du-triage/), qui dépend de la réception de données d'appareils complètes et fiables pour prendre, dès le départ, une décision de triage correcte.
