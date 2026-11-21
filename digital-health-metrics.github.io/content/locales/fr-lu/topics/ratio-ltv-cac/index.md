# Ratio LTV/CAC

Le ratio LTV/CAC compare la valeur vie client (LTV, de l'anglais lifetime value) d'un client — le total des revenus ou de la marge qu'une organisation s'attend à tirer d'un patient ou d'un client sur l'ensemble de sa relation avec le produit — au coût réel d'acquisition de ce client (voir coût réel d'acquisition client). C'est la métrique d'économie unitaire la plus importante pour juger si la croissance d'une organisation de santé numérique est financièrement soutenable, car une base de clients croissante acquise à perte n'est pas un signe de bonne santé, quelle que soit la courbe de croissance.

## Pourquoi c'est important

Une organisation de santé numérique peut accroître régulièrement sa base d'utilisateurs tout en détruisant discrètement de la valeur à chaque nouveau client, si le coût d'acquisition dépasse la valeur vie client ; le ratio LTV/CAC est la métrique qui rend cela visible, ce que le taux de croissance ou le simple nombre de clients ne peuvent pas faire. Un ratio de 3:1 (une valeur vie client au moins égale à trois fois le coût d'acquisition) est la référence la plus citée pour une activité durable fondée sur l'abonnement ou les revenus récurrents, laissant une marge suffisante pour couvrir les coûts d'exploitation au-delà de l'acquisition et dégager encore un rendement ; un ratio inférieur à 1:1 signifie que l'organisation perd de l'argent sur chaque client acquis, et un ratio très supérieur à 3:1 (par exemple 10:1 ou plus) peut en réalité indiquer un sous-investissement dans la croissance, puisqu'il suggère que l'organisation pourrait acquérir de façon rentable davantage de clients qu'elle ne le fait actuellement. Les investisseurs, les conseils d'administration et les payeurs qui évaluent la soutenabilité financière d'une entreprise de santé numérique comptent ce ratio parmi les premiers chiffres qu'ils demandent.

## Comment le calculer

```
LTV = revenu (ou marge) moyen par client et par période × durée de vie
      moyenne du client exprimée dans la même unité de période

Ratio LTV/CAC = LTV / CAC réel

Un ratio de 3:1 est la référence de soutenabilité couramment citée ; en
dessous de 1:1, l'organisation perd de l'argent sur l'acquisition ; bien
au-dessus de 3:1 (par ex. 10:1 et plus), cela peut indiquer un
sous-investissement dans la croissance.
```

## Exemple résolu

Un service d'abonnement de santé numérique génère un revenu mensuel moyen de 40 $ par patient, et le patient moyen reste abonné 18 mois, ce qui donne une LTV de 40 $ × 18 = 720 $. Le CAC réel de ce service (voir l'approche de l'exemple résolu de ce sujet) est calculé à 180 $ par patient acquis. Le ratio LTV/CAC est de 720 $ / 180 $ = 4:1, nettement au-dessus de la référence de soutenabilité de 3:1. Si le CAC réel était calculé avec le seul coût déclaré par les plateformes publicitaires (120 $, avant l'ajout des honoraires d'agence et du travail d'accueil), le ratio apparaîtrait à 6:1 — une image sensiblement plus favorable, et trompeuse, de l'économie unitaire par rapport au véritable chiffre de 4:1.

## Sources de données et mises en garde

La LTV repose sur une hypothèse de durée de vie moyenne du client, elle-même dérivée des propres données de rétention ou d'attrition de l'organisation (voir taux de rétention des utilisateurs) — une activité à forte attrition a une durée de vie moyenne effective plus courte et donc une LTV plus faible, même si le revenu par client et par période semble sain. Comme la LTV est une estimation prospective et non un fait historique observé, elle doit être recalculée régulièrement à mesure que les données de rétention s'accumulent, et révisée si les hypothèses d'attrition se révèlent erronées, plutôt que d'être fixée une fois pour toutes et laissée périmée. Utiliser le CAC déclaré par les plateformes au lieu du CAC réel dans ce ratio est l'une des manières les plus courantes pour une organisation de se convaincre que son économie unitaire est plus saine qu'elle ne l'est réellement, car un CAC sous-estimé gonfle mécaniquement le ratio.

## Erreurs courantes

- **Utiliser le CAC déclaré par les plateformes plutôt que le CAC réel** : cela gonfle mécaniquement le ratio et peut faire paraître soutenable une stratégie d'acquisition qui ne l'est pas ; utilisez toujours le chiffre du CAC réel entièrement chargé.
- **Utiliser une hypothèse de durée de vie moyenne périmée ou optimiste** : une LTV calculée à partir d'une courbe de rétention obsolète ne reflétera pas le comportement d'attrition actuel, surtout après un changement de produit, de prix ou de marché qui modifie la rétention.
- **Considérer un ratio très élevé comme sans ambiguïté positif** : un ratio très supérieur à 3:1 peut signaler un sous-investissement dans la croissance plutôt qu'une efficacité exceptionnelle, car il implique que l'organisation pourrait probablement acquérir de façon rentable davantage de clients qu'elle ne le fait.
- **Calculer un seul ratio fusionné sur des segments de clientèle très différents** : un segment à revenus élevés et faible attrition peut masquer un autre segment à l'économie unitaire médiocre ; calculez le ratio par segment significatif (par ex. par canal d'acquisition ou ligne de produits) lorsque les volumes le permettent.

## Sources

- Littérature universitaire et sectorielle sur l'économie unitaire de l'abonnement et des revenus récurrents, cadres de référence largement utilisés issus du capital-risque et d'organismes de recherche sur les métriques SaaS
- Healthcare Financial Management Association (HFMA), orientations sur les métriques de soutenabilité financière des organisations de santé numérique
- Rock Health et organismes similaires d'études de marché sur la santé numérique, analyses comparatives sectorielles de l'économie unitaire de la santé numérique

Voir aussi : [coût réel d'acquisition client](../cout-reel-d-acquisition-client/) et [ratio d'efficacité marketing](../ratio-d-efficacite-marketing/), les deux autres métriques essentielles d'économie de la croissance avec lesquelles ce ratio est généralement rapporté.
