# Net Promoter Score do Paciente

O Net Promoter Score (NPS) do paciente mede a disponibilidade do paciente para recomendar a outros um produto de saúde digital ou um serviço de telessaúde, com base numa única pergunta de inquérito — "Qual é a probabilidade de recomendar este serviço a um amigo ou colega?" — pontuada de 0 a 10. Os respondentes que atribuem 9-10 são "promotores", os que atribuem 7-8 são "passivos", e os que atribuem 0-6 são "detratores"; o NPS é a percentagem de promotores menos a percentagem de detratores. É a métrica de satisfação do paciente mais amplamente utilizada, e também mais amplamente criticada, na saúde digital, valorizada pela sua simplicidade mas limitada no que consegue diagnosticar por si só.

## Porque é que isto importa

O NPS fornece às equipas de saúde digital um sinal de satisfação simples, normalizado e comparável entre contextos, barato de recolher e fácil de interpretar de relance por partes interessadas não especializadas (executivos, conselhos de administração, comissários), razão pela qual se mantém popular apesar das suas limitações metodológicas bem documentadas. No caso específico da telessaúde e dos produtos de "porta de entrada digital", o NPS é frequentemente o indicador precoce de se os pacientes continuarão a escolher o canal digital em detrimento de uma alternativa presencial quando ambos estão disponíveis, o que tem implicações diretas para o planeamento da combinação de canais e da capacidade. No entanto, o NPS é um único número de síntese de alto nível: um NPS em queda diz à equipa que algo está errado, mas não o quê, pelo que deve ser sempre associado a comentários textuais livres ou a um instrumento de usabilidade mais granular para ser acionável e não meramente um número de painel de controlo.

## Como se calcula

```
NPS = % de promotores (pontuação 9-10) − % de detratores (pontuação 0-6)

O resultado é um número de −100 a +100, e não uma percentagem, apesar de
derivar de percentagens — nunca acrescentar o sinal "%" a um valor de NPS.

Reportar em conjunto:
  taxa de resposta (% dos pacientes inquiridos que responderam)
  dimensão da amostra
  o texto exato da pergunta utilizada
```

## Exemplo resolvido

Uma plataforma de telessaúde inquire 1000 pacientes após uma consulta por vídeo e recebe 400 respostas (taxa de resposta de 40%). Destes 400 respondentes, 220 atribuem 9-10 (promotores, 55%), 100 atribuem 7-8 (passivos, 25%), e 80 atribuem 0-6 (detratores, 20%). O NPS é 55 − 20 = 35. Este valor só tem significado em contexto: um NPS de 35 pode ser um resultado forte em comparação com o setor da telessaúde em geral, ou um declínio preocupante face à pontuação de 48 da própria plataforma no trimestre anterior — o NPS é muito mais útil como tendência ao longo do tempo para um único produto do que como referência absoluta e pontual face a outro.

## Fontes de dados e ressalvas

O NPS é recolhido através de um inquérito pós-interação, tipicamente desencadeado imediatamente após uma consulta por vídeo, uma sessão na aplicação ou um episódio de cuidados, e a taxa de resposta é de enorme importância: uma taxa de resposta baixa (muito inferior aos cerca de 40% do exemplo resolvido) arrisca um enviesamento de não resposta, em que apenas os pacientes fortemente satisfeitos ou fortemente insatisfeitos se dão ao trabalho de responder, empurrando a pontuação para os extremos e afastando-a do sentimento real da população. Comparar o NPS entre organizações, ou mesmo entre diferentes canais de uma única organização (por exemplo, telessaúde versus presencial), só é válido se o texto da pergunta, o momento e a população inquirida forem genuinamente comparáveis; sabe-se que pequenas alterações de formulação deslocam as pontuações de forma mensurável. O NPS deve ser tratado como um resultado a explicar, e não como um fim em si mesmo — os comentários textuais livres que habitualmente acompanham um inquérito de NPS são geralmente mais acionáveis do que a pontuação.

## Erros comuns

- **Comparar valores de NPS recolhidos com formulações ou momentos diferentes da pergunta**: mesmo diferenças mínimas na conceção do inquérito podem alterar as pontuações em vários pontos, tornando a comparação de NPS entre organizações muito menos fiável do que aparenta.
- **Ignorar a taxa de resposta**: um NPS de destaque calculado a partir de uma taxa de resposta de 10% é muito menos fidedigno do que um calculado a partir de uma taxa de resposta de 60%, uma vez que as taxas de resposta baixas são propensas a enviesamento de não resposta a favor das opiniões mais extremas.
- **Tratar o NPS como uma ferramenta de diagnóstico em vez de uma métrica de síntese**: um NPS em queda indica que algo está errado, mas nunca o quê; deve ser sempre associado a feedback qualitativo ou a um instrumento de satisfação ou usabilidade mais granular para identificar a causa.
- **Perseguir o NPS como meta em si mesma**: otimizar de forma estreita o número do NPS (por exemplo, inquirindo apenas os pacientes após interações invulgarmente positivas) pode melhorar a pontuação reportada sem que a experiência subjacente do paciente melhore, ou até piorando-a ativamente.

## Fontes

- Bain & Company, metodologia original do Net Promoter System e orientações de comparação
- Agency for Healthcare Research and Quality (AHRQ), programa de inquéritos de experiência do paciente CAHPS (Consumer Assessment of Healthcare Providers and Systems), como alternativa complementar e mais granular
- Literatura revista por pares sobre a utilização e as limitações do Net Promoter Score em contextos de cuidados de saúde, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR)

Ver também: [taxa de retenção de utilizadores](../taxa-de-retencao-de-utilizadores/), uma vez que a satisfação reportada pelo paciente e a utilização continuada efetiva de um produto divergem frequentemente e justificam ser acompanhadas como sinais distintos.
