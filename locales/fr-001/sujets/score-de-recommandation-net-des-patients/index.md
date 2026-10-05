# Score de Recommandation Net des Patients

Le score de recommandation net des patients (NPS, de l'anglais Net Promoter Score) mesure la propension des patients à recommander à d'autres un produit de santé numérique ou un service de télésanté, à partir d'une seule question d'enquête — « Dans quelle mesure recommanderiez-vous ce service à un ami ou à un collègue ? » — notée de 0 à 10. Les répondants qui donnent 9 ou 10 sont des « promoteurs », ceux qui donnent 7 ou 8 sont des « passifs », et ceux qui donnent de 0 à 6 sont des « détracteurs » ; le NPS est le pourcentage de promoteurs moins le pourcentage de détracteurs. C'est la métrique de satisfaction des patients la plus utilisée, et la plus critiquée, en santé numérique, appréciée pour sa simplicité mais limitée dans ce qu'elle peut diagnostiquer à elle seule.

## Pourquoi c'est important

Le NPS donne aux équipes de santé numérique un signal de satisfaction simple, standardisé et comparable d'un contexte à l'autre, peu coûteux à recueillir et facile à interpréter d'un coup d'œil pour des parties prenantes non spécialistes (dirigeants, conseils d'administration, commissaires), ce qui explique qu'il reste populaire malgré des limites méthodologiques bien documentées. Pour la télésanté et les portails d'accès numériques en particulier, le NPS est souvent l'indicateur avancé de la propension des patients à continuer de choisir le canal numérique plutôt qu'une alternative en présentiel lorsque les deux sont disponibles, ce qui a des implications directes pour la planification du mix de canaux et de la capacité. Cependant, le NPS est un chiffre de synthèse unique et de haut niveau : un NPS en baisse indique à une équipe que quelque chose ne va pas, mais pas quoi ; il doit donc toujours être associé à des commentaires libres textuels ou à un instrument d'utilisabilité plus granulaire pour être exploitable plutôt que d'être un simple chiffre de tableau de bord.

## Comment le calculer

```
NPS = % de promoteurs (note 9-10) − % de détracteurs (note 0-6)

Le résultat est un nombre de −100 à +100, et non un pourcentage, bien
qu'il soit dérivé de pourcentages — n'ajoutez jamais de signe « % » à un
chiffre de NPS.

Rapporter en même temps :
  le taux de réponse (% des patients interrogés qui ont répondu)
  la taille de l'échantillon
  la formulation exacte de la question utilisée
```

## Exemple résolu

Une plateforme de télésanté interroge 1 000 patients après une consultation vidéo et reçoit 400 réponses (taux de réponse de 40 %). Parmi ces 400 répondants, 220 donnent 9-10 (promoteurs, 55 %), 100 donnent 7-8 (passifs, 25 %) et 80 donnent 0-6 (détracteurs, 20 %). Le NPS est de 55 − 20 = 35. Ce chiffre n'a de sens que dans son contexte : un NPS de 35 peut être un excellent résultat par rapport à l'ensemble du secteur de la télésanté, ou un recul préoccupant par rapport au score de 48 de cette même plateforme le trimestre précédent — le NPS est bien plus utile comme tendance dans le temps pour un même produit que comme référence absolue ponctuelle par rapport à un autre.

## Sources de données et mises en garde

Le NPS est recueilli par une enquête post-interaction, généralement déclenchée immédiatement après une visite vidéo, une session d'application ou un épisode de soins, et le taux de réponse compte énormément : un faible taux de réponse (bien inférieur aux quelque 40 % de l'exemple résolu) fait courir un risque de biais de non-réponse, où seuls les patients très satisfaits ou très insatisfaits prennent la peine de répondre, ce qui tire le score vers les extrêmes et l'éloigne du sentiment réel de la population. Comparer le NPS entre organisations, ou même entre différents canaux d'une même organisation (par exemple télésanté et présentiel), n'est valable que si la formulation de la question, le moment et la population interrogée sont réellement comparables ; de petits changements de formulation sont connus pour modifier sensiblement les scores. Le NPS doit être traité comme un résultat à expliquer, et non comme une fin en soi — les commentaires libres qui accompagnent généralement une enquête NPS sont habituellement plus exploitables que le score.

## Erreurs courantes

- **Comparer des NPS recueillis avec des formulations ou des moments différents** : même de légères différences de conception de l'enquête peuvent décaler les scores de plusieurs points, ce qui rend les comparaisons de NPS entre organisations bien moins fiables qu'il n'y paraît.
- **Ignorer le taux de réponse** : un NPS affiché calculé à partir d'un taux de réponse de 10 % est bien moins digne de confiance qu'un NPS calculé à partir d'un taux de 60 %, car les faibles taux de réponse sont sujets à un biais de non-réponse en faveur des opinions les plus extrêmes.
- **Traiter le NPS comme un outil de diagnostic plutôt que comme une métrique de synthèse** : un NPS en baisse dit que quelque chose ne va pas mais jamais quoi ; il doit toujours être associé à des retours qualitatifs ou à un instrument de satisfaction ou d'utilisabilité plus granulaire pour identifier la cause.
- **Poursuivre le NPS comme un objectif en soi** : optimiser étroitement le chiffre du NPS (par exemple en n'interrogeant les patients qu'après des interactions exceptionnellement positives) peut améliorer le score rapporté sans que l'expérience réelle des patients soit meilleure, voire en la dégradant.

## Sources

- Bain & Company, méthodologie d'origine du Net Promoter System et orientations d'étalonnage
- Agency for Healthcare Research and Quality (AHRQ), programme d'enquêtes sur l'expérience des patients CAHPS (Consumer Assessment of Healthcare Providers and Systems), alternative complémentaire et plus granulaire
- Littérature évaluée par les pairs sur l'usage et les limites du Net Promoter Score dans les contextes de soins de santé, par exemple des études publiées dans le Journal of Medical Internet Research (JMIR)

Voir aussi : [taux de rétention des utilisateurs](../taux-de-retention-des-utilisateurs/), car la satisfaction déclarée par les patients et l'utilisation effective continue d'un produit divergent souvent et gagnent à être suivies comme des signaux distincts.
