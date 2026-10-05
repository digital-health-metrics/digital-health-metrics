# Taux de Stabilisation Biométrique

Le taux de stabilisation biométrique est la part des patients inscrits qui atteignent et maintiennent une plage cible cliniquement définie pour une mesure biométrique — le plus souvent une pression artérielle inférieure à un seuil tel que 130/80 mmHg — à l'aide d'un appareil de surveillance connecté, sur une période soutenue plutôt qu'à un instant unique. Il se distingue du taux d'amélioration biométrique (voir ce sujet) : l'amélioration mesure l'ampleur d'un changement par rapport à la valeur initiale, tandis que la stabilisation mesure si un patient est maintenu de façon fiable dans une plage sûre une fois le traitement ou la surveillance engagé, ce qui est le résultat le plus important pour les patients déjà proches de la cible ou déjà sous traitement.

## Pourquoi c'est important

Pour une large part des patients des programmes de maladies chroniques — en particulier l'hypertension, où les cibles tensionnelles des recommandations sont bien établies et directement liées au risque cardiovasculaire — l'objectif clinique n'est pas une amélioration ponctuelle mais un contrôle durable, et un patient qui oscille entre l'intérieur et l'extérieur de la plage cible présente un risque sensiblement différent de celui qui s'améliore une fois et s'y maintient. Les appareils connectés (tensiomètres cellulaires, capteurs de glucose en continu) permettent de mesurer la stabilisation en continu plutôt que seulement lors des consultations, révélant des patients dont les mesures en cabinet paraissent contrôlées mais dont les mesures à domicile sont instables — un schéma connu sous le nom d'hypertension masquée, que la seule mesure périodique en présentiel ne peut détecter. Rapporter le taux de stabilisation plutôt qu'un simple instantané « à la cible » oblige un programme à se confronter à la constance, et pas seulement à la fréquence, avec laquelle il maintient les patients dans la plage.

## Comment le calculer

```
Taux de stabilisation biométrique = patients dont ≥ 80 % des mesures se
                                situent dans la plage cible sur la période
                                de mesure / patients disposant d'un nombre
                                minimal de mesures valides sur cette
                                période × 100

Exemples de seuils :
  Pression artérielle — cible < 130/80 mmHg (ou le seuil applicable des
                        recommandations cliniques pour le profil de
                        risque du patient)
  Glucose             — plage cible selon les recommandations de
                        surveillance continue du glucose, rapportée en
                        « temps dans la plage »

Un seuil minimal de fréquence de mesure (p. ex. au moins 3 mesures par
semaine) doit être fixé avant d'inclure un patient dans le dénominateur,
afin d'éviter que les patients qui mesurent rarement paraissent
artificiellement stables.
```

## Exemple résolu

Un programme de télésurveillance de l'hypertension inscrit 600 patients dotés de tensiomètres cellulaires, chacun devant effectuer au moins 3 mesures par semaine. Parmi eux, 540 satisfont au seuil minimal de fréquence de mesure sur une période de mesure de 3 mois et sont inclus dans le dénominateur. Sur ces 540, 350 ont au moins 80 % de leurs mesures inférieures à 130/80 mmHg, ce qui donne un taux de stabilisation biométrique de 350 / 540 × 100 = 65 %. Les 60 patients exclus pour mesures insuffisantes sont rapportés séparément comme une lacune de complétude des données, et non intégrés au numérateur ni au groupe « non stabilisé », car leur véritable statut de contrôle est réellement inconnu plutôt que mauvais.

## Sources de données et mises en garde

Les mesures proviennent directement du flux de données de l'appareil connecté, plus objectif et bien plus fréquent que la mesure en cabinet, mais des erreurs de positionnement et de technique (un brassard de tensiomètre de mauvaise taille ou mal placé) peuvent introduire un biais systématique qu'une seule mesure de validation en cabinet ne détectera pas nécessairement. Le choix de la plage cible doit suivre la recommandation clinique en vigueur applicable au profil de risque et aux comorbidités du patient plutôt qu'un seuil universel unique, car les cibles des recommandations diffèrent selon l'âge, la fonction rénale et le risque cardiovasculaire. Un patient mesurant peu fréquemment ne doit jamais être compté silencieusement comme « stable » par défaut ; l'exclure du dénominateur avec un rapport transparent de l'exclusion est plus honnête que de le compter comme contrôlé ou non contrôlé sur la base de trop peu de données.

## Erreurs courantes

- **Traiter une seule mesure dans la plage comme une stabilisation** : la stabilisation concerne un contrôle durable sur une période définie, et non un instantané ; exigez toujours une proportion minimale de mesures dans la plage sur cette période, et non une seule mesure qualifiante.
- **Exclure silencieusement les patients mesurant peu sans le rapporter** : les patients qui effectuent rarement des mesures ne sont ni automatiquement stables ni automatiquement instables ; excluez-les de façon transparente du dénominateur et rapportez le taux d'exclusion comme métrique distincte de complétude des données.
- **Ignorer l'étalonnage de l'appareil et les erreurs de technique** : un brassard mal ajusté ou un appareil non étalonné peut fausser systématiquement les mesures dans un sens, ce qu'un taux de stabilisation calculé naïvement à partir des données brutes de l'appareil ne détectera pas sans validation périodique.
- **Utiliser une plage cible universelle unique pour tous les patients** : les cibles des recommandations cliniques varient selon le profil de risque et les comorbidités ; appliquer un seuil uniforme à une population cliniquement hétérogène classera à tort certains patients comme stabilisés ou non stabilisés par rapport à leur cible individualisée réelle.

## Sources

- American Heart Association (AHA) / American College of Cardiology (ACC), cibles des recommandations sur la pression artérielle et orientations sur l'automesure tensionnelle
- Fédération internationale du diabète et American Diabetes Association (ADA), orientations de consensus sur le « temps dans la plage » de la surveillance continue du glucose
- Littérature évaluée par les pairs sur la surveillance biométrique à distance et le contrôle durable des pathologies, par exemple des études publiées dans npj Digital Medicine

Voir aussi : [taux d'amélioration biométrique](../taux-d-amelioration-biometrique/), la métrique voisine de l'ampleur du changement par rapport à la valeur initiale, distincte du contrôle durable une fois la cible atteinte.
