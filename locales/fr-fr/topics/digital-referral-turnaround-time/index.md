# Délai de Traitement des Orientations Numériques

Le délai de traitement des orientations numériques est le temps écoulé entre la soumission d'une orientation électronique par un clinicien orienteur et son triage par le service receveur, aboutissant à une acceptation, un refus ou une prise de rendez-vous. C'est une métrique de processus (flux), distincte du temps d'attente total du patient, et c'est l'un des endroits les plus clairs où un changement de système numérique (orientation électronique structurée, triage basé sur l'image, formulaires d'orientation standardisés) peut être démontré comme faisant bouger un chiffre opérationnel réel plutôt qu'un simple score de satisfaction.

## Pourquoi c'est important

Une étape de triage lente ou très variable ajoute un délai avant même que le patient ne rejoigne une liste d'attente clinique, et comme ce délai survient avant le début de tout soin clinique, c'est du gaspillage de processus pur que les outils numériques sont bien placés pour éliminer. Les systèmes d'orientation qui imposent un cycle de « retour à l'orienteur » pour information manquante créent des boucles de reprise de travail faciles à manquer si le délai de traitement n'est mesuré que sur les orientations qui passent proprement du premier coup. Là où un service a introduit des formulaires d'orientation numériques structurés, des champs obligatoires, ou un triage basé sur l'image (par exemple en télédermatologie), le délai de traitement est généralement la métrique isolée la plus convaincante pour démontrer le bénéfice, car elle est mesurable avant et après le changement avec la même instrumentation.

## Comment le calculer

```
Délai de traitement = horodatage(décision de triage) − horodatage(soumission de l'orientation)

Rapportez la médiane et un percentile élevé (couramment le 90e), pas
seulement la moyenne, car la distribution est fortement asymétrique vers
la droite en raison des orientations retournées ou complexes.

Considérez les délais des sous-étapes lorsque le système les capture :
  Soumission → reçue par le service
  Reçue → décision de triage
  Décision de triage → rendez-vous pris (le cas échéant)
```

## Exemple résolu

Le journal d'audit d'un système d'orientation électronique montre un délai médian de soumission à décision de triage de 1,8 jour sur toutes les spécialités, avec un délai au 90e percentile de 6 jours, principalement dû aux orientations retournées à l'orienteur pour information clinique manquante. Un parcours de télédermatologie utilisant un triage basé sur l'image sur la même plateforme atteint un délai médian de 4 heures et un 90e percentile de 1 jour, car une photographie et un historique structuré suffisent presque toujours à la décision de triage sans correspondance supplémentaire.

## Sources de données et mises en garde

Le journal d'audit propre au système d'orientation électronique ou de gestion des orientations est la source principale, utilisant les horodatages de soumission et de décision ; les organisations devraient confirmer si « l'horloge » se met en pause pendant qu'une orientation est retournée pour plus d'information ou continue de tourner en permanence, car les deux définitions produisent des chiffres sensiblement différents pour le même processus sous-jacent. Le délai de traitement devrait être rapporté de façon cohérente en temps calendaire ou en heures ouvrées, car les effets des week-ends et jours fériés peuvent sinon fausser les comparaisons entre services ayant des rythmes de travail différents.

## Erreurs courantes

- **Ne mesurer que les orientations « propres »** : exclure du calcul les orientations refusées ou retournées masque la charge de reprise de travail que les outils numériques visent souvent spécifiquement à réduire.
- **Rapporter la moyenne plutôt que la médiane et les percentiles** : un petit nombre d'orientations longues et retournées tirera la moyenne bien au-dessus de l'expérience réelle du patient typique.
- **Confondre délai de traitement et temps d'attente total** : le délai de traitement ne couvre que l'étape de triage ; l'expérience totale du patient inclut aussi la liste d'attente clinique en aval, qui est une métrique distincte régie par des contraintes de capacité distinctes.
- **Ne pas distinguer les sous-étapes** : un service qui ne mesure que le temps de bout en bout ne peut pas déterminer si un chiffre lent est dû à des orienteurs soumettant une information incomplète, à la capacité de triage du service receveur, ou aux deux.

## Sources

- NHS England, statistiques et spécifications de service du Service d'e-Orientation (e-RS)
- Littérature évaluée par les pairs sur les systèmes de gestion électronique des orientations et les parcours de triage numérique, y compris la télédermatologie
- ONC / HealthIT.gov, orientations sur l'interopérabilité et la coordination des orientations
