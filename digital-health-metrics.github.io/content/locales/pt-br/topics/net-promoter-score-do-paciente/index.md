# Net Promoter Score do Paciente

O Net Promoter Score (NPS) do paciente mede a disposição do paciente de recomendar a outras pessoas um produto de saúde digital ou um serviço de telessaúde, com base em uma única pergunta de pesquisa — "Qual é a probabilidade de recomendar este serviço a um amigo ou colega?" — pontuada de 0 a 10. Os respondentes que dão nota 9-10 são "promotores", os que dão 7-8 são "neutros" (ou "passivos"), e os que dão 0-6 são "detratores"; o NPS é a porcentagem de promotores menos a porcentagem de detratores. É a métrica de satisfação do paciente mais usada, e também mais criticada, na saúde digital, valorizada pela simplicidade, mas limitada naquilo que consegue diagnosticar sozinha.

## Por que isso importa

O NPS fornece às equipes de saúde digital um sinal de satisfação simples, normalizado e comparável entre contextos, barato de coletar e fácil de interpretar rapidamente por públicos não especializados (executivos, conselhos de administração, contratantes), razão pela qual continua popular apesar de suas limitações metodológicas bem documentadas. No caso específico da telessaúde e dos produtos de "porta de entrada digital", o NPS costuma ser o indicador precoce de se os pacientes continuarão escolhendo o canal digital em vez de uma alternativa presencial quando ambos estão disponíveis, o que tem implicações diretas para o planejamento do mix de canais e da capacidade. No entanto, o NPS é um único número-síntese de alto nível: um NPS em queda diz à equipe que algo está errado, mas não o quê, de modo que deve ser sempre associado a comentários de texto livre ou a um instrumento de usabilidade mais granular, para ser acionável e não apenas um número de painel.

## Como se calcula

```
NPS = % de promotores (pontuação 9-10) − % de detratores (pontuação 0-6)

O resultado é um número de −100 a +100, e não uma porcentagem, apesar de
derivar de porcentagens — nunca acrescente o sinal "%" a um valor de NPS.

Informe em conjunto:
  taxa de resposta (% dos pacientes pesquisados que responderam)
  tamanho da amostra
  o texto exato da pergunta usada
```

## Exemplo resolvido

Uma plataforma de telessaúde pesquisa 1000 pacientes após uma consulta por vídeo e recebe 400 respostas (taxa de resposta de 40%). Desses 400 respondentes, 220 atribuem 9-10 (promotores, 55%), 100 atribuem 7-8 (passivos, 25%), e 80 atribuem 0-6 (detratores, 20%). O NPS é 55 − 20 = 35. Esse valor só tem significado em contexto: um NPS de 35 pode ser um resultado forte em comparação com o setor de telessaúde em geral, ou uma queda preocupante em relação à pontuação de 48 da própria plataforma no trimestre anterior — o NPS é muito mais útil como tendência ao longo do tempo de um único produto do que como referência absoluta e pontual em relação a outro.

## Fontes de dados e ressalvas

O NPS é coletado por meio de uma pesquisa pós-interação, tipicamente disparada logo após uma consulta por vídeo, uma sessão no aplicativo ou um episódio de cuidados, e a taxa de resposta é muito importante: uma taxa de resposta baixa (bem inferior aos cerca de 40% do exemplo resolvido) corre o risco de viés de não resposta, em que só os pacientes muito satisfeitos ou muito insatisfeitos se dão ao trabalho de responder, empurrando a pontuação para os extremos e afastando-a do sentimento real da população. Comparar o NPS entre organizações, ou mesmo entre diferentes canais de uma única organização (por exemplo, telessaúde versus presencial), só é válido se o texto da pergunta, o momento e a população pesquisada forem genuinamente comparáveis; sabe-se que pequenas mudanças de formulação deslocam as pontuações de forma mensurável. O NPS deve ser tratado como um resultado a explicar, e não como um fim em si mesmo — os comentários em texto livre que costumam acompanhar uma pesquisa de NPS geralmente são mais acionáveis do que a pontuação.

## Erros comuns

- **Comparar valores de NPS coletados com formulações ou momentos diferentes da pergunta**: mesmo diferenças mínimas na elaboração da pesquisa podem mudar as pontuações em vários pontos, tornando a comparação de NPS entre organizações muito menos confiável do que aparenta.
- **Ignorar a taxa de resposta**: um NPS de destaque, calculado a partir de uma taxa de resposta de 10% é muito menos confiável do que um calculado a partir de uma taxa de resposta de 60%, já que taxas de resposta baixas são propensas a viés de não resposta em favor das opiniões mais extremas.
- **Tratar o NPS como uma ferramenta de diagnóstico em vez de uma métrica-síntese**: um NPS em queda indica que algo está errado, mas nunca o quê; deve ser sempre associado a feedback qualitativo ou a um instrumento de satisfação ou usabilidade mais granular para identificar a causa.
- **Perseguir o NPS como meta em si**: otimizar o número do NPS de forma estreita (por exemplo, pesquisando apenas os pacientes após interações incomumente positivas) pode melhorar a pontuação informada sem que a experiência subjacente do paciente melhore, ou até piorando-a de fato.

## Fontes

- Bain & Company, metodologia original do Net Promoter System e orientações de comparação
- Agency for Healthcare Research and Quality (AHRQ), programa de pesquisas de experiência do paciente CAHPS (Consumer Assessment of Healthcare Providers and Systems), como alternativa complementar e mais granular
- Literatura revisada por pares sobre o uso e as limitações do Net Promoter Score em contextos de assistência à saúde, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR)

Ver também: [taxa de retenção de usuários](../taxa-de-retencao-de-usuarios/), já que a satisfação informada pelo paciente e o uso continuada efetivo de um produto divergem frequentemente e justificam ser acompanhadas como sinais distintos.
