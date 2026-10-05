# ISO/TS 82304-2

L'ISO/TS 82304-2 est une spécification technique internationale, publiée sous l'égide du comité technique ISO/TC 215 (Informatique de santé), qui définit une méthode structurée d'évaluation de la qualité des applications de santé et de bien-être — couvrant l'utilisabilité, la robustesse et la fiabilité techniques, l'interopérabilité, la qualité du contenu, ainsi que la sécurité et la confidentialité des données — pour les produits qui échappent au champ de la réglementation complète des dispositifs médicaux mais influencent néanmoins de façon notable les décisions ou les comportements de santé de l'utilisateur. Elle répond à une lacune précise : la grande majorité des applications de santé et de bien-être destinées au grand public (trackers de forme physique, journaux de symptômes, applications de coaching bien-être) ne sont pas réglementées comme dispositifs médicaux, et pourtant aucun moyen commun et structuré n'existait auparavant pour évaluer ou comparer leur qualité et leur sécurité de base.

## Pourquoi c'est important

Les boutiques d'applications hébergent des centaines de milliers d'applications de santé et de bien-être d'une qualité extrêmement variable, et avant l'existence d'une spécification technique commune, un patient, un clinicien ou un système de santé ne disposait d'aucun moyen structuré et comparable de juger la qualité et la sécurité de base d'une application par rapport à une autre, au-delà des notes en étoiles et des allégations marketing — une lacune qui compte car une application de santé mal conçue peut causer un réel préjudice (contenu inexact, mauvaise sécurité des données, allégations trompeuses) même sans atteindre le seuil réglementaire d'un dispositif médical. L'ISO/TS 82304-2 est délibérément structurée autour de domaines qu'un évaluateur non spécialiste peut apprécier de manière cohérente, ce qui en a fait la base technique de plusieurs services nationaux et commerciaux de labellisation et de curation de la qualité des applications de santé, offrant aux systèmes de santé et aux bibliothèques d'applications un moyen défendable et standardisé d'inclure ou d'exclure des applications d'une liste recommandée plutôt que de s'appuyer sur un jugement ad hoc.

## Comment elle s'applique

```
L'évaluation est organisée autour de domaines de qualité définis,
examinés par une revue structurée plutôt que par une formule numérique
unique :

Utilisabilité                      — clarté, accessibilité et facilité
                                      d'utilisation pour le groupe
                                      d'utilisateurs visé
Robustesse/fiabilité techniques    — stabilité, performance et absence
                                      de défauts techniques
Interopérabilité                   — capacité à échanger des données avec
                                      d'autres systèmes lorsque cela est
                                      pertinent pour la fonction de
                                      l'application
Qualité et sécurité du contenu     — exactitude, actualité et absence
                                      d'allégations de santé nuisibles ou
                                      trompeuses
Sécurité et confidentialité        — pratiques de protection des données
                                      et transparence sur l'usage des
                                      données

Chaque domaine est noté selon des critères de revue structurés et combiné
en une évaluation globale de la qualité, que plusieurs dispositifs de
labellisation des applications de santé utilisent comme base technique
d'un label de qualité public ou d'une décision d'inclusion dans une
bibliothèque curatée.
```

## Exemple résolu

Le programme de bibliothèque d'applications numériques d'un système de santé souhaite constituer une liste recommandée d'applications de bien-être pour les patients, plutôt que de laisser le choix des applications entièrement à la recherche dans les boutiques d'applications. Chaque application candidate est évaluée selon les domaines de l'ISO/TS 82304-2 : une application de suivi du sommeil obtient de bons résultats en utilisabilité et en robustesse technique, un résultat satisfaisant en qualité du contenu, mais elle est signalée lors de la revue de sécurité et de confidentialité pour le partage de données d'utilisateurs avec des annonceurs tiers sans information claire — un constat suffisamment important pour exclure l'application de la liste recommandée malgré son excellent score d'utilisabilité. Ce résultat domaine par domaine est plus exploitable, tant pour l'équipe de curation que, s'il lui est communiqué, pour le développeur de l'application lui-même, qu'un score de qualité unique et fusionné, car il identifie précisément quel aspect doit être corrigé avant que l'application puisse être reconsidérée.

## Sources de données et mises en garde

L'évaluation selon l'ISO/TS 82304-2 est généralement menée par un évaluateur formé ou par un service d'évaluation accrédité, selon les critères de revue structurés de la spécification pour chaque domaine, et plusieurs initiatives nationales et commerciales (organismes de labellisation et de curation de la qualité des applications de santé, certains agissant sous une approbation formelle du système de santé national) utilisent la norme comme base technique de leurs propres labels publics de qualité des applications — ce qui signifie que le statut « certifié » ou « labellisé » d'une application reflète en pratique la mise en œuvre de la norme par un dispositif de labellisation particulier, et pas nécessairement un processus identique d'un dispositif à l'autre ; l'organisme évaluateur et sa méthodologie doivent donc être vérifiés et indiqués en même temps que tout label de qualité cité. La spécification évalue les caractéristiques de qualité et de sécurité de base d'une application en tant que logiciel ; elle ne se substitue pas à l'autorisation réglementaire des dispositifs médicaux lorsque les allégations ou les fonctions d'une application atteignent effectivement le seuil d'un dispositif médical, et l'utiliser comme tel constituerait une erreur de catégorie.

## Erreurs courantes

- **Traiter un label de qualité comme une autorisation réglementaire** : une application évaluée et labellisée selon l'ISO/TS 82304-2 n'a pas pour autant reçu d'approbation réglementaire comme dispositif médical ; les deux répondent à des objectifs différents et ne doivent jamais être confondus dans la manière dont une application est décrite ou commercialisée.
- **Supposer que tous les dispositifs de labellisation fondés sur la norme sont équivalents** : différents organismes mettent en œuvre l'évaluation fondée sur l'ISO/TS 82304-2 avec leurs propres processus de revue et leur propre rigueur ; vérifiez quel organisme a réalisé l'évaluation et comment, plutôt que de traiter tout label « fondé sur l'ISO/TS 82304-2 » comme interchangeable avec un autre.
- **Évaluer uniquement l'utilisabilité en négligeant la sécurité et la confidentialité** : les problèmes d'utilisabilité sont les plus visibles pour un utilisateur final et les plus faciles à évaluer de façon informelle, ce qui peut conduire les évaluateurs à sous-pondérer le domaine, moins visible mais potentiellement plus lourd de conséquences, de la sécurité et de la confidentialité.
- **Traiter l'évaluation comme une certification ponctuelle et permanente** : le contenu d'une application, ses pratiques de sécurité et ses accords de partage de données avec des tiers peuvent tous changer après une évaluation initiale ; un programme crédible de labellisation de la qualité réévalue périodiquement plutôt que de traiter une réussite initiale comme définitive.

## Sources

- Organisation internationale de normalisation, ISO/TS 82304-2:2021, « Logiciel de santé — Partie 2 : Applications de santé et de bien-être — Qualité et fiabilité »
- Comité technique ISO/TC 215 (Informatique de santé), informations sur les publications et les groupes de travail
- Organismes nationaux et commerciaux de labellisation et de curation de la qualité des applications de santé qui publient leur méthodologie d'évaluation fondée sur cette norme

Voir aussi : [score de l'échelle d'utilisabilité du système](../score-de-l-echelle-d-utilisabilite-du-systeme/), un instrument complémentaire, plus étroit et propre à l'utilisabilité, souvent utilisé avec une évaluation de qualité plus large selon l'ISO/TS 82304-2.
