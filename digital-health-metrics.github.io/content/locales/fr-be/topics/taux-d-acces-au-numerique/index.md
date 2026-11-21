# Taux d'Accès au Numérique

Le taux d'accès au numérique mesure la part d'une population de patients éligibles qui dispose des moyens pratiques d'utiliser un produit de santé numérique : une connexion à large bande ou des données mobiles fiables, un appareil connecté à Internet et un compte actif sur le portail patient ou l'application concernés. C'est la métrique préalable à toutes les autres mesures de santé numérique de cet ouvrage — une population ne peut s'inscrire à un produit de santé numérique, s'y engager ni en bénéficier si elle ne peut structurellement pas l'atteindre, aussi bien conçu soit-il.

## Pourquoi c'est important

Les métriques d'adoption et d'engagement en santé numérique supposent implicitement une population qui dispose déjà d'un accès numérique, et rapporter des taux d'adoption ou d'engagement sans avoir d'abord établi le taux d'accès sous-jacent risque d'exclure discrètement les patients les moins susceptibles de disposer de cet accès — qui sont fréquemment aussi ceux dont les besoins de santé sont les plus grands. Le HIMSS Digital Health Equity Measurement Framework (DHEMF) et des cadres similaires traitent l'accès au numérique comme une métrique d'équité fondamentale et de premier ordre, précisément parce que les interventions conçues sans tenir compte des écarts d'accès tendent à renforcer, plutôt qu'à réduire, les disparités de santé existantes : une stratégie de télésanté en priorité peut réduire involontairement l'accès aux soins des patients dépourvus de connexion ou d'appareil fiables, tout en améliorant de façon mesurable l'expérience de ceux qui disposaient déjà des deux. Le taux d'accès au numérique doit être suivi et rapporté par segment démographique et géographique, car les moyennes nationales ou à l'échelle de l'organisation masquent régulièrement des écarts importants pour certaines populations.

## Comment le calculer

```
Taux d'accès au numérique = patients disposant d'une connectivité à
                       large bande/mobile ET d'un appareil connecté à
                       Internet ET d'un compte actif sur le portail ou
                       l'application patient / population totale de
                       patients éligibles × 100

Rapporter chaque composante séparément en plus du taux combiné :
  Taux de connectivité        = patients disposant d'une connexion
                                Internet fiable / population éligible
                                × 100
  Taux d'équipement           = patients disposant d'un appareil connecté
                                à Internet / population éligible × 100
  Taux d'activation du portail = patients disposant d'un compte actif
                                sur le portail/l'application /
                                population éligible × 100 (voir taux
                                d'adoption du portail patient pour
                                l'entonnoir d'adoption complet)
```

## Exemple résolu

Un système de santé dessert une population éligible de 40 000 patients. Une enquête auprès des patients et des données d'infrastructure indiquent que 34 000 (85 %) disposent d'une connectivité fiable à large bande ou mobile, que 33 000 (82,5 %) possèdent un appareil connecté à Internet, et que, parmi les patients remplissant les deux conditions, 27 000 (67,5 % de l'ensemble de la population éligible) ont un compte actif sur le portail patient. La désagrégation par âge montre que les patients de 65 ans et plus ont un taux combiné d'accès au numérique de seulement 48 %, contre 78 % pour les patients de moins de 65 ans — un écart que la moyenne de 67,5 % à l'échelle de l'organisation masque complètement, et qui devrait éclairer directement la décision de proposer ou non un service en mode exclusivement numérique à cette population en toute sécurité.

## Sources de données et mises en garde

Les données de connectivité et d'équipement proviennent généralement d'une combinaison d'autodéclaration des patients (par enquête ou questionnaire d'admission), de données cartographiques nationales de disponibilité du haut débit, comme celles de la Federal Communications Commission (FCC) ou d'un équivalent national, pour la zone géographique du patient, et de données d'activation du portail issues des systèmes de l'organisation. La disponibilité du haut débit à l'échelle d'une zone (si un fournisseur propose le service dans un code postal donné) est un indicateur moins fiable que la connectivité à l'échelle du foyer, car les données de disponibilité par zone ne disent rien sur la capacité d'un patient donné à payer ce service ou son choix d'y souscrire — les taux d'accès par zone et par foyer ne doivent pas être confondus. L'accès à un appareil et à une connexion peut aussi être partagé au sein d'un foyer (par exemple un smartphone utilisé par plusieurs membres de la famille), ce que les données d'enquête au niveau du foyer saisissent mieux que les seules données de connexion individuelle au portail.

## Erreurs courantes

- **Ne rapporter qu'une moyenne à l'échelle de l'organisation** : elle dissimule régulièrement d'importants écarts d'accès pour les segments de patients plus âgés, à faibles revenus, ruraux ou autrement marginalisés sur le plan numérique ; désagrégez toujours par segment démographique et géographique.
- **Confondre disponibilité du haut débit par zone et accès réel des foyers** : le fait qu'un code postal soit « desservi » par un fournisseur d'accès ne signifie pas que chaque foyer de la zone souscrit à ce service ou peut se le payer.
- **Traiter la possession d'un appareil comme un fait unique et statique** : l'accès à un appareil peut être transitoire (un appareil vieillissant, un téléphone perdu ou endommagé, un appareil familial partagé réaffecté), de sorte que le taux d'accès doit être mesuré de façon récurrente et non supposé stable une fois évalué.
- **Concevoir un parcours exclusivement numérique avant d'avoir établi le taux d'accès de la population concernée** : faire passer un service à un mode exclusivement numérique sans avoir d'abord confirmé le taux réel d'accès au numérique de la population cible risque d'exclure silencieusement précisément les patients les moins à même d'atteindre un autre canal.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), données nationales sur la disponibilité du haut débit et l'équité numérique
- Pew Research Center, recherches sur l'accès à Internet, au haut débit et aux appareils, et sur les tendances de la fracture numérique entre groupes démographiques

Voir aussi : [taux de littératie numérique](../taux-de-litteratie-numerique/), la métrique étroitement liée qui indique si les patients ayant un accès peuvent effectivement l'utiliser.
