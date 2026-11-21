# Coût par Épisode de Soins

Le coût par épisode de soins est le coût total engagé pour traiter un épisode clinique défini — par exemple une arthroplastie de la hanche et la convalescence associée, ou une période de prise en charge du diabète — comparé à une cohorte de référence historique traitée sans l'intervention numérique évaluée. C'est l'unité standard de comparaison financière dans les soins fondés sur la valeur, car elle saisit le tableau économique complet d'un épisode plutôt qu'un poste de coût isolé, et c'est la métrique que les payeurs et les systèmes de santé exigent le plus souvent avant d'accepter de financer un programme de santé numérique à grande échelle.

## Pourquoi c'est important

Les contrats de soins fondés sur la valeur rémunèrent de plus en plus des résultats et des épisodes plutôt que des services individuels, ce qui signifie que l'argumentaire financier d'un programme de santé numérique doit être formulé dans la même monnaie : le coût total par épisode, comparé à ce que coûtait le même type d'épisode avant l'existence de l'intervention. Un programme qui réduit une catégorie de coûts (par exemple moins de consultations de suivi en présentiel) tout en en augmentant une autre (plus de coûts d'appareils, plus de temps de personnel clinique de surveillance) n'a pas nécessairement réduit le coût total par épisode, et seul un chiffrage complet au niveau de l'épisode saisit cet arbitrage ; examiner un poste de coût isolé risque de conduire à une conclusion trompeuse dans un sens comme dans l'autre. Comme les définitions d'épisode et les périodes de référence peuvent être construites de façon à favoriser une conclusion particulière, cette métrique exige plus de transparence méthodologique que la plupart des autres de cet ouvrage pour être digne de confiance aux yeux d'un payeur ou d'une équipe financière sceptique.

## Comment le calculer

```
Coût par épisode de soins = coût total de tous les soins dispensés dans
                            une fenêtre d'épisode définie (tous les
                            lieux de soins, toutes les catégories de
                            coûts) / nombre d'épisodes

Comparer au coût par épisode d'une cohorte de référence historique pour
le même type d'épisode cliniquement défini, ajusté sur la composition
de cas (âge, comorbidité, gravité) entre les deux cohortes.

Inclure, et pas seulement les coûts cliniques directs : les coûts de
plateforme technologique et d'appareils, le temps de personnel clinique
supplémentaire, et tout soin ayant changé de lieu (p. ex. de
l'hôpital au domicile) plutôt que disparu entièrement.
```

## Exemple résolu

Le coût de référence historique d'un système de santé pour un épisode d'arthroplastie totale de la hanche (de la chirurgie à 90 jours de convalescence) est de 28 000 $ par épisode, sur la base de 200 épisodes historiques. Un nouveau programme numérique de surveillance postopératoire est introduit, et 150 nouveaux épisodes utilisant le programme affichent un coût moyen de 24 500 $ par épisode — une réduction de 3 500 $ par épisode, due principalement à moins de passages aux urgences pendant la convalescence et à un séjour hospitalier moyen plus court. Après ajustement sur le risque pour une composition de cas légèrement plus jeune et à moindre comorbidité dans la cohorte surveillée numériquement par rapport à la référence historique, l'économie ajustée se réduit à 2 100 $ par épisode — toujours une amélioration réelle, mais sensiblement plus faible que ne le suggérait la comparaison brute non ajustée.

## Sources de données et mises en garde

Le coût total d'un épisode est généralement reconstitué à partir du système de comptabilité analytique ou de finance propre au système de santé, en combinant données de facturation, allocation interne des coûts et, lorsqu'une plateforme numérique est en jeu, ses coûts de licence et de matériel — reconstituer ce chiffre avec exactitude est généralement la partie la plus difficile et la plus coûteuse en ressources de toute analyse de valeur en santé numérique, car les coûts sont fréquemment enregistrés dans des systèmes distincts qui n'ont jamais été conçus pour être combinés au niveau de l'épisode. L'ajustement sur la composition de cas est indispensable chaque fois que la cohorte prise en charge numériquement et la cohorte de référence historique n'ont pas été constituées par une véritable randomisation, car les programmes numériques sont souvent proposés d'abord à des patients plus engagés, généralement en meilleure santé ou plus motivés, ce qui peut produire une économie apparente qui est en réalité un effet de sélection plutôt qu'un véritable effet du programme.

## Erreurs courantes

- **Comparer des coûts non ajustés entre cohortes de composition de cas différente** : une cohorte prise en charge numériquement qui se trouve en meilleure santé ou à plus faible risque que la référence historique affichera un coût par épisode plus bas pour des raisons sans rapport avec l'intervention numérique elle-même ; ajustez toujours sur le risque avant de comparer.
- **Omettre les coûts de technologie et de personnel du côté « numérique » de la comparaison** : une analyse de coûts qui ne suit que la réduction de l'utilisation clinique en ignorant les coûts de plateforme, d'appareils et de personnel nécessaires au fonctionnement du programme numérique surestimera les économies nettes.
- **Définir la fenêtre d'épisode de façon incohérente entre les cohortes** : comparer une fenêtre d'épisode de 90 jours pour une cohorte à une fenêtre de 60 jours pour une autre produira une comparaison de coûts qui ne mesure pas réellement la même chose.
- **Traiter un transfert de coûts comme une réduction de coûts** : un coût déplacé d'un lieu de soins à un autre (par exemple de l'hôpital vers un domicile surveillé) est un constat réel et précieux, mais analytiquement différent d'un coût supprimé, et les deux doivent être rapportés séparément.

## Sources

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) et orientations sur les modèles de paiement par épisode
- Healthcare Financial Management Association (HFMA), orientations sur la méthodologie de chiffrage des épisodes de soins
- Littérature évaluée par les pairs sur l'analyse des coûts des soins numériques fondés sur la valeur, par exemple des études publiées dans Health Affairs et l'American Journal of Managed Care

Voir aussi : [retour sur investissement (ROI) et valeur de l'investissement (VOI)](../roi-et-voi/), qui utilise le coût par épisode de soins comme l'une de ses principales données d'entrée.
