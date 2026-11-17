# Taxa de Conclusão de ePROM

A taxa de conclusão de ePROM mede a proporção de medidas eletrônicas de resultados informados pelo paciente (ePROM, do inglês electronic Patient-Informed Outcome Measures) agendadas — questionários padronizados e validados que captam o relato do próprio paciente sobre os seus sintomas, função ou qualidade de vida, administrados digitalmente em vez de em papel — que são efetivamente concluídas. É tanto uma métrica de qualidade de dados como de envolvimento: o valor clínico e de investigação de um programa de PROM depende inteiramente de se ter uma taxa de conclusão suficientemente elevada para que as respostas coletadas sejam representativas de toda a população inscrita, e não apenas do subconjunto mais envolvido ou menos sintomático.

## Por que isso importa

Os resultados informados pelo paciente são o complemento direto, garantido pelo próprio paciente, dos dados registrados pelo profissional ou medidos por dispositivos, captando dimensões da saúde — dor, função, qualidade de vida — que uma revisão do processo clínico ou uma leitura biométrica não conseguem; a digitalização da coleta de PROM existe especificamente para tornar estes dados mais baratos e fáceis de coletar em larga escala do que a administração em papel alguma vez permitiu. Mas um programa de PROM com uma baixa taxa de conclusão arrisca um viés específico e grave: os pacientes que se sentem pior são frequentemente menos propensos a preencher um questionário extenso, de modo que uma taxa de conclusão em declínio pode ser, em si mesma, um sinal de alerta precoce de agravamento da saúde da população, e uma baixa taxa de conclusão global pode fazer as respostas coletadas parecerem melhores do que a experiência real da população simplesmente porque os pacientes mais sintomáticos estão sub-representados no que é concluído. É por isso que a taxa de conclusão deve ser sempre informada junto com as próprias pontuações de PROM, e não tratada como um detalhe operacional secundário.

## Como se calcula

```
Taxa de conclusão de ePROM = ePROM totalmente concluídas / ePROM enviadas
                             ou agendadas × 100

Informar separadamente:
  Taxa de conclusão inicial      (primeiro questionário em uma sequência de
                                  monitoramento)
  Taxa de conclusão longitudinal (questionários subsequentes em uma
                                  sequência de monitoramento em curso, que
                                  tipicamente diminui ao longo do tempo e
                                  deve ser acompanhada como uma tendência,
                                  e não como um valor único)

Um questionário "parcialmente concluído" deve ser definido e informado
separadamente tanto de "totalmente concluído" como de "não iniciado".
```

## Exemplo resolvido

Uma clínica de oncologia envia uma ePROM validada de carga sintomática a 400 pacientes antes de cada consulta mensal de seguimento. No primeiro mês, 340 pacientes preenchem totalmente o questionário (taxa de conclusão de 85%), 30 preenchem-no parcialmente e 30 não o iniciam. No sexto mês da mesma sequência de monitoramento, as respostas completas desceram para 260 da mesma coorte de 400 pacientes (65%), um declínio longitudinal significativo que passaria totalmente despercebido se apenas o valor de 85% do primeiro mês fosse informado como uma métrica global estática. Investigar quais os pacientes que abandonam (por gravidade dos sintomas, estádio da doença ou idade) pode revelar se o declínio reflete fadiga com os pesquisas, o agravamento dos sintomas tornando o questionário mais difícil de preencher, ou uma barreira técnica de acesso.

## Fontes de dados e ressalvas

Os dados de conclusão vêm dos registros de entrega e de resposta da própria plataforma de ePROM, que conseguem distinguir os estados "não iniciado", "parcialmente concluído" e "totalmente concluído" — uma distinção que deve ser sempre preservada e informada, em vez de colapsada em um valor binário concluído/não concluído, já que a conclusão parcial indica frequentemente um ponto específico do questionário em que os pacientes têm dificuldades ou perdem o interesse. A taxa de conclusão deve ser interpretada tendo em conta a forma como o questionário é entregue (uma ligação em uma mensagem de texto, uma notificação de aplicativo, ou um método de entrega que exija login no portal), já que a própria fricção na entrega afeta a conclusão independentemente do conteúdo do questionário ou da condição subjacente do paciente. Deve ser sempre usado um instrumento validado (em vez de um conjunto ad hoc de perguntas) para a própria PROM, já que a taxa de conclusão de um instrumento não validado nada diz de confiável sobre a utilidade clínica dos dados resultantes, mesmo que a conclusão seja elevada.

## Erros comuns

- **Tratar uma taxa de conclusão em declínio apenas como um problema de entrega**: uma queda longitudinal na conclusão pode refletir um agravamento genuíno dos sintomas dos pacientes (pacientes muito pacientes para preencher a pesquisa) em vez de fadiga com a pesquisa ou um problema técnico, e esta distinção é enormemente importante para a interpretação clínica.
- **Colapsar a conclusão parcial e total em uma só categoria**: um questionário parcialmente concluído tem uma qualidade de dados significativamente diferente de um totalmente concluído; informá-los separadamente, e investigar em que ponto do fluxo do questionário os pacientes tendem a abandoná-lo.
- **Informar a taxa de conclusão sem informar o risco de viés de resposta**: uma taxa de conclusão moderada deve motivar a investigação sobre se os respondentes diferem sistematicamente (em gravidade dos sintomas, idade, letramento digital) dos não respondentes, já que pontuações de PROM calculadas apenas a partir dos respondentes podem deturpar a população completa.
- **Usar um questionário não validado ou de design própria**: a taxa de conclusão não tem significado como sinal de qualidade de dados se o próprio instrumento preenchido não tiver sido clinicamente validado para a condição e a população medidas.

## Fontes

- International Consortium for Health Outcomes Measurement (ICHOM), desenvolvimento de conjuntos padrão e orientações de implementação de PROM
- U.S. Food and Drug Administration (FDA), orientações sobre medidas de resultados informados pelo paciente em ensaios clínicos e submissões regulamentares
- Literatura revisada por pares sobre a implementação de PROM eletrônicas e as respectivas taxas de conclusão, por exemplo estudos publicados na Quality of Life Research e no Journal of Medical Internet Research (JMIR)

Ver também: [net promoter score do paciente](../net-promoter-score-do-paciente/), uma métrica relacionada mas distinta, informada pelo paciente, que mede a satisfação e não o resultado clínico.
