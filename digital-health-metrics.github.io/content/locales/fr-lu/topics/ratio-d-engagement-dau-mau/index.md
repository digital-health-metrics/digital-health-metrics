# Ratio d'Engagement DAU/MAU

Le ratio d'engagement DAU/MAU compare les utilisateurs actifs quotidiens (DAU) aux utilisateurs actifs mensuels (MAU) — la même mesure sous-jacente étant utilisée pour les utilisateurs actifs hebdomadaires (WAU) par rapport aux MAU — afin d'exprimer quelle part de la base d'utilisateurs élargie d'un produit s'y engage un jour donné quelconque. C'est la mesure standard d'analyse de produit de l'intensité d'engagement, distincte de la question de savoir si un utilisateur est fidélisé tout court (voir taux de rétention des utilisateurs) ou avec quelle constance un patient inscrit donné s'engage dans la durée (voir taux de constance de l'engagement des patients) : l'engagement (stickiness) décrit le rythme d'utilisation à l'échelle de la population, et non le profil d'un individu particulier.

## Pourquoi c'est important

Deux produits de santé numérique peuvent afficher un nombre identique d'utilisateurs actifs mensuels tout en ayant une intensité d'engagement sous-jacente très différente : l'un où la plupart de ces utilisateurs ouvrent l'application presque tous les jours, et l'autre où la plupart l'ouvrent une fois par mois, juste avant de cesser d'être comptés comme actifs. Le ratio d'engagement DAU/MAU distingue ces deux situations très différentes par un seul chiffre de référence simple et bien compris, que les équipes produit et cliniques peuvent suivre dans le temps et comparer aux fourchettes connues du secteur — un ratio d'environ 20 % est une référence raisonnable couramment citée pour de nombreuses applications grand public, tandis que les produits à habitude quotidienne (un journal alimentaire ou de symptômes qu'un patient est censé utiliser chaque jour) doivent être jugés selon un seuil nettement plus élevé. Comme l'engagement est sensible à la définition d'« actif », il est surtout utile comme tendance pour un même produit dans le temps, et comme comparaison avec des produits conçus pour un schéma d'utilisation similaire, plutôt que comme référence absolue entre secteurs.

## Comment le calculer

```
Ratio d'engagement DAU/MAU = moyenne des utilisateurs actifs quotidiens
                              sur la période / utilisateurs actifs
                              mensuels sur la même période × 100

Le ratio WAU/MAU (hebdomadaire, même principe) est une variante plus
souple, plus adaptée aux produits censés être utilisés quelques fois par
semaine plutôt que quotidiennement.

« Actif » doit être défini avec précision et de façon cohérente (p. ex.
une action qualifiante accomplie, et non une simple ouverture passive de
l'application) au numérateur comme au dénominateur.
```

## Exemple résolu

Une application numérique de prise en charge du diabète compte 10 000 utilisateurs actifs mensuels au cours d'un mois donné, définis comme tout utilisateur accomplissant au moins une action qualifiante (une saisie de glycémie, un repas enregistré ou une validation de prise de médicament) dans ce mois. La moyenne des nombres d'utilisateurs actifs quotidiens sur les 30 jours du mois donne un DAU moyen de 2 200. Le ratio d'engagement DAU/MAU est de 2 200 / 10 000 × 100 = 22 %, ce qui indique qu'un jour typique, environ 22 % de la base mensuelle d'utilisateurs de l'application s'y engage — un chiffre raisonnable pour un outil de maladie chronique à habitude quotidienne, bien que l'équipe produit souhaite le voir progresser dans le temps à mesure que le comportement idéal (la saisie quotidienne) devient plus habituel pour les patients inscrits.

## Sources de données et mises en garde

Les DAU, WAU et MAU sont tous calculés à partir des mêmes journaux d'événements sous-jacents, avec une seule définition cohérente d'un événement « actif qualifiant » dans chaque fenêtre ; modifier cette définition entre les calculs du numérateur et du dénominateur (par exemple compter toute ouverture de l'application pour les DAU mais seulement une action accomplie pour les MAU) produira un ratio faussé qui ne reflète pas l'intensité réelle de l'engagement. La référence appropriée pour l'engagement dépend fortement du schéma d'utilisation prévu du produit : un outil destiné à être utilisé une fois par semaine (un point hebdomadaire sur les symptômes) aura et doit avoir un ratio DAU/MAU plus faible qu'un outil destiné à un usage quotidien (une application compagnon d'un capteur de glucose en continu), de sorte que l'engagement doit toujours être interprété par rapport à la cadence d'utilisation prévue du produit lui-même, et non à une cible universelle unique.

## Erreurs courantes

- **Comparer des ratios d'engagement entre produits de fréquence d'utilisation prévue différente** : un outil à usage hebdomadaire affichera structurellement un ratio DAU/MAU plus faible qu'un outil à usage quotidien, même si tous deux fonctionnent exactement comme prévu pour leurs cas d'usage respectifs ; comparez à la cadence prévue du produit lui-même, et non à une cible universelle unique.
- **Utiliser des définitions d'activité incohérentes entre le numérateur et le dénominateur** : cela peut produire un ratio d'engagement qui ne reflète pas l'intensité réelle de l'engagement et qui ne peut être comparé de façon significative dans le temps ni à d'autres produits.
- **Considérer une hausse du ratio comme sans ambiguïté positive sans vérifier la tendance globale des MAU** : une hausse du ratio due à un noyau d'utilisateurs plus restreint et plus habitué tandis que les MAU globaux déclinent est une situation très différente — et plus préoccupante — que celle due à un véritable accroissement de l'engagement quotidien au sein d'une base d'utilisateurs stable ou croissante.
- **Ignorer les effets du jour de la semaine et de la saison sur les DAU** : les DAU peuvent varier sensiblement selon le jour de la semaine (jours ouvrés ou week-end) ou la saison pour de nombreux produits de santé ; utilisez la moyenne des DAU sur une période couvrant un cycle naturel complet plutôt qu'une fenêtre courte susceptible d'être biaisée.

## Sources

- Littérature évaluée par les pairs et sectorielle sur les métriques d'engagement des produits mobiles et numériques, cadres de référence largement utilisés par les plateformes d'analyse mobile
- Digital Therapeutics Alliance, orientations de bonnes pratiques sur la mesure de l'engagement pour les thérapies numériques
- Littérature évaluée par les pairs sur la mesure de l'engagement en santé numérique, par exemple des études publiées dans le Journal of Medical Internet Research (JMIR mHealth and uHealth)

Voir aussi : [taux de rétention des utilisateurs](../taux-de-retention-des-utilisateurs/) et [taux de constance de l'engagement des patients](../taux-de-constance-de-l-engagement-des-patients/), les deux métriques d'engagement voisines avec lesquelles ce ratio est le plus souvent confondu.
