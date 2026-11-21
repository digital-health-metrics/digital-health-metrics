# Réduction des Journées d'Hospitalisation

La réduction des journées d'hospitalisation mesure le nombre total de journées-lits d'hospitalisation évitées en faisant passer un épisode de soins défini — le plus souvent une convalescence postopératoire ou la prise en charge d'une pathologie aiguë — d'un séjour hospitalier traditionnel à une alternative soutenue par le numérique, telle qu'un service hospitalier virtuel ou un programme d'hospitalisation à domicile. C'est la principale métrique de capacité des initiatives de services virtuels et d'hospitalisation à domicile, car elle traduit directement un changement de modèle de soins en la monnaie (la capacité en lits) selon laquelle les opérations hospitalières et les planificateurs du système se pilotent réellement.

## Pourquoi c'est important

La capacité en lits d'hospitalisation est l'une des ressources les plus contraintes et les plus coûteuses de tout système hospitalier, et la proposition de valeur centrale d'un service virtuel ou d'un programme d'hospitalisation à domicile est de pouvoir dispenser en toute sécurité un niveau défini de soins cliniques sans occuper de lit physique, libérant ainsi cette capacité pour les patients qui ne peuvent être pris en charge autrement. La réduction des journées d'hospitalisation convertit une affirmation souvent abstraite (« ce programme améliore les soins ») en un chiffre opérationnel concret sur lequel les planificateurs de capacité hospitalière, les équipes financières et les commanditaires peuvent agir directement : il permet de modéliser si l'investissement dans un programme de surveillance se rentabilise grâce aux coûts de lits évités, et dans quelle mesure. Comme la réduction des journées d'hospitalisation n'a de valeur que si la sécurité des patients est préservée, elle doit toujours être rapportée en complément, et jamais à la place, d'une métrique de résultat de sécurité (comme le taux de réhospitalisation ou le taux d'escalade vers les soins hospitaliers) pour la même population.

## Comment le calculer

```
Réduction des journées d'hospitalisation = journées d'hospitalisation
                     attendues sous soins hospitaliers standard
                     (d'après les données historiques de durée de séjour
                     d'une cohorte de patients appariés) − journées
                     d'hospitalisation réellement utilisées par les
                     patients du parcours virtuel/numérique

Rapporter par parcours clinique (p. ex. convalescence postopératoire,
exacerbation respiratoire aiguë), car la durée de séjour attendue varie
énormément selon la pathologie et un chiffre agrégé sur des parcours
sans rapport n'a pas de sens.
```

## Exemple résolu

Les données historiques d'un hôpital montrent que les patients en convalescence après une intervention chirurgicale programmée donnée ont une durée moyenne de séjour hospitalier de 4 jours. Un programme de service virtuel inclut 150 patients en convalescence après la même intervention, les faisant sortir après une moyenne de 1,5 jour d'hospitalisation, le reste de la convalescence étant surveillé à distance. La réduction des journées d'hospitalisation est de (4 − 1,5) × 150 = 375 journées sur la période de mesure. Ce chiffre doit être rapporté avec le taux d'escalade vers les soins hospitaliers à 30 jours et le taux de réhospitalisation de la cohorte du service virtuel pour ces mêmes 150 patients, car une économie de journées d'hospitalisation obtenue au prix d'un taux d'escalade ou de réhospitalisation sensiblement plus élevé n'est pas le succès clinique que le chiffre principal laisserait croire.

## Sources de données et mises en garde

Les journées d'hospitalisation attendues exigent une base de référence historique crédible, idéalement issue d'une cohorte de patients appariés traités sous soins hospitaliers standard et présentant des caractéristiques cliniques similaires (âge, comorbidité, type d'intervention, gravité) à celles de la population du service virtuel, car une comparaison avec une moyenne historique non appariée risque de surestimer ou de sous-estimer la réduction réelle si la cohorte prise en charge par le numérique est systématiquement en meilleure ou en moins bonne santé que le groupe de comparaison historique. Les journées d'hospitalisation réellement utilisées sur le parcours numérique proviennent du système d'admission-sortie-transfert (ADT) propre à l'hôpital ; toute escalade vers les soins hospitaliers pendant la période de convalescence surveillée doit être comptée honnêtement au détriment du programme (comme journées utilisées, et non exclues), car exclure les escalades du calcul gonflerait artificiellement la réduction apparente.

## Erreurs courantes

- **Rapporter la réduction des journées d'hospitalisation sans comparaison de sécurité appariée** : un service virtuel qui économise des journées d'hospitalisation mais présente un taux d'escalade ou de réhospitalisation sensiblement pire que les soins standard n'a pas démontré d'amélioration réelle ; rapportez toujours les deux ensemble.
- **Utiliser une base de référence historique non appariée ou obsolète** : comparer avec une cohorte historique présentant un autre profil de cas, une autre charge de comorbidité ou une autre époque de pratique clinique peut surestimer ou sous-estimer nettement l'économie réelle de journées d'hospitalisation.
- **Exclure du calcul les escalades vers les soins hospitaliers** : un patient surveillé virtuellement mais ensuite transféré dans un lit d'hospitalisation en cours de convalescence doit voir ces journées comptées au détriment du programme, et non écartées silencieusement de l'analyse.
- **Agréger des parcours dont les durées de séjour attendues sont très différentes** : agréger la réduction des journées d'hospitalisation sur des parcours cliniquement sans rapport (par exemple en combinant convalescence postopératoire et prise en charge respiratoire chronique) en un seul chiffre masque le parcours qui génère réellement l'économie.

## Sources

- NHS England, orientations sur les programmes de services virtuels et d'hospitalisation à domicile et normes de rapport de l'impact sur les journées d'hospitalisation
- Littérature évaluée par les pairs sur les modèles d'hospitalisation à domicile et de services virtuels, par exemple des études publiées dans JAMA Internal Medicine et npj Digital Medicine
- Institute for Healthcare Improvement (IHI), orientations sur la gestion de la capacité et les modèles de soins alternatifs

Voir aussi : [taux de réhospitalisation](../taux-de-réhospitalisation/), la métrique de sécurité qui doit toujours être rapportée avec toute affirmation de réduction des journées d'hospitalisation pour la même population de patients.
