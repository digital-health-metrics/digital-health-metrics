# Taux de rétention des utilisateurs

Le taux de rétention des utilisateurs est la part des utilisateurs actifs durant une période de départ qui restent actifs durant une période ultérieure, et son inverse, le taux d'attrition (ou d'abandon), est la part de ceux qui cessent complètement d'utiliser le produit. Là où le taux d'adoption du portail patient (voir ce sujet) mesure si un patient active un jour véritablement un produit de santé numérique, la rétention mesure s'il continue à l'utiliser — et pour tout produit de santé numérique de type abonnement ou de soins continus, la rétention est généralement la métrique la plus étroitement liée à la fois à l'impact clinique et à la viabilité commerciale.

## Pourquoi c'est important

Un produit de santé numérique incapable de retenir ses utilisateurs ne peut pas offrir de bénéfice clinique durable, quelle que soit la solidité de ses chiffres initiaux d'adoption ou d'activation : un outil de prise en charge d'une maladie chronique utilisé pendant deux semaines puis abandonné a peu de chances de faire évoluer un résultat biométrique qui dépend de mois de changement de comportement soutenu. La rétention est aussi l'une des métriques ayant les plus fortes conséquences commerciales qu'une entreprise de santé numérique rapporte aux investisseurs et aux payeurs, car les courbes de rétention (la forme de la décroissance dans le temps, et non un simple pourcentage de rétention) révèlent si le produit a trouvé un mode d'usage véritablement durable ou s'il ne fait que capter un intérêt initial lié à la nouveauté, qui s'estompe de façon prévisible. Une courbe de rétention qui s'aplatit après une chute initiale (les patients qui dépassent le premier mois tendent à rester) est un signal très différent, et bien plus sain, qu'une courbe qui continue de décliner régulièrement sans plancher.

## Comment le calculer

```
Taux de rétention (période N) = utilisateurs actifs durant la période N
                                 qui l'étaient aussi durant la période de
                                 la cohorte de départ / utilisateurs de
                                 la cohorte de départ × 100

Taux d'attrition = 1 − taux de rétention (pour la même période)

Rapporter sous forme de courbe de rétention par cohorte (rétention au
jour/à la semaine/au mois 1, 2, 3…), et non sous forme d'un chiffre
ponctuel, car un instantané unique confond les utilisateurs récemment
inscrits (qui n'ont pas encore eu l'occasion de partir) avec ceux de
longue date.
```

## Exemple résolu

Une application de santé numérique inscrit une cohorte de 1 000 nouveaux utilisateurs en janvier. À la fin du mois 1, 640 de ces 1 000 utilisateurs initiaux sont encore actifs (rétention au mois 1 de 64 %). À la fin du mois 3, 410 restent actifs (rétention au mois 3 de 41 %). Au mois 6, 380 restent actifs (rétention au mois 6 de 38 %). La forme de cette courbe — une forte chute initiale suivie d'un aplatissement entre les mois 3 et 6 — suggère que le produit retient un noyau stable d'utilisateurs une fois l'obstacle initial d'adoption franchi, ce qui est un signal sensiblement différent et plus encourageant que si le déclin du mois 3 au mois 6 s'était poursuivi au même rythme que celui des mois 1 à 3.

## Sources de données et mises en garde

La rétention est calculée à partir des journaux d'événements de connexion ou d'activité du produit lui-même, en définissant « actif » de façon cohérente (par exemple, au moins une session qualifiante dans la période) pour toutes les cohortes comparées. Les cohortes doivent être comparées à conditions égales — même définition de départ d'« actif », même durée de la fenêtre d'observation — car même de petites différences de définition (mois de 30 jours ou de 28 jours, seuil d'« actif » plus strict ou plus souple) peuvent décaler de plusieurs points un pourcentage de rétention rapporté sans aucune différence réelle de comportement des utilisateurs. Les effets saisonniers sont courants dans les applications de santé liées aux bonnes résolutions du Nouvel An ou à des périodes spécifiques de sensibilisation à la santé ; la comparaison de cohortes d'une année sur l'autre est donc généralement plus instructive que la comparaison de cohortes adjacentes issues de périodes différentes de l'année.

## Erreurs courantes

- **Rapporter un instantané unique de rétention plutôt qu'une courbe** : un chiffre unique du type « X % des utilisateurs sont encore actifs », sans la forme de la décroissance dans le temps, ne permet pas de distinguer un produit qui se stabilise (sain) d'un produit en déclin continu (malsain).
- **Changer la définition d'« actif » d'une période de rapport à l'autre** : assouplir la définition d'un utilisateur actif (par exemple compter une simple ouverture passive de l'application plutôt qu'une action accomplie) peut faire paraître la rétention améliorée alors que l'usage réel n'a pas changé.
- **Ignorer la saisonnalité des cohortes** : comparer la rétention d'une cohorte de janvier (souvent gonflée par les inscriptions liées aux bonnes résolutions du Nouvel An, qui amènent en moyenne une cohorte moins motivée) à celle d'une cohorte acquise à un autre moment de l'année peut conduire à des conclusions trompeuses sur la tendance.
- **Mélanger les cohortes organiques et celles acquises par la publicité payante** : les utilisateurs acquis par différents canaux ont souvent des rétentions très différentes ; les mélanger en un chiffre de rétention agrégé peut dissimuler un problème de rétention propre à un canal.

## Sources

- Littérature évaluée par les pairs sur l'engagement et l'attrition des applications de santé numérique, par exemple des études publiées dans le Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, orientations de bonnes pratiques sur la mesure de l'engagement et de la rétention pour les thérapeutiques numériques
- Rapports sectoriels d'étalonnage de la rétention des applications de santé mobile, émanant de plateformes d'analyse et d'organismes d'études de marché en santé numérique

Voir aussi : [taux de constance de l'engagement des patients](../taux-de-constance-de-l-engagement-des-patients/), qui mesure la qualité de l'engagement parmi les utilisateurs retenus, par opposition au fait qu'ils restent ou non inscrits.
