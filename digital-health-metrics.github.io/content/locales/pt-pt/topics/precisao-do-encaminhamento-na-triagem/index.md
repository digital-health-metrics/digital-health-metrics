# Precisão do Encaminhamento na Triagem

A precisão do encaminhamento na triagem é a proporção de encontros com pacientes em que uma ferramenta de triagem automatizada ou assistida por IA encaminha corretamente o paciente para o nível e o contexto de cuidados adequados — por exemplo, autocuidado, cuidados de saúde primários, cuidados urgentes ou urgência — avaliada face a um padrão de referência clinicamente validado. É a métrica de segurança e eficácia de qualquer porta de entrada digital, verificador de sintomas ou sistema de triagem com IA: toda a proposta de valor da ferramenta assenta em encaminhar os pacientes de forma correta, rápida e consistente.

## Porque é que isto importa

Uma ferramenta de triagem imprecisa causa danos em ambos os sentidos: a subtriagem (encaminhar um paciente para um nível de cuidados inferior ao necessário) pode atrasar o tratamento de uma emergência genuína, enquanto a sobretriagem (encaminhar um paciente para um nível de cuidados superior ao necessário) desperdiça a escassa capacidade de urgência e de cuidados urgentes e aumenta o custo e a ansiedade do paciente sem qualquer benefício clínico. Dado que estes dois modos de falha têm consequências tão diferentes, a precisão do encaminhamento na triagem deve ser sempre reportada juntamente com a direção dos erros, e não como um valor de precisão agregado único que oculta se a ferramenta erra de forma segura ou perigosa. Os reguladores e os sistemas de saúde que avaliam uma ferramenta de triagem com IA para implementação exigem cada vez mais este tipo de reporte estratificado da precisão como condição de aprovação clínica, em particular para ferramentas que funcionam com algum grau de autonomia face a um clínico.

## Como se calcula

```
Precisão do encaminhamento na triagem = encontros corretamente encaminhados / total de encontros triados × 100

Reportar separadamente a subtriagem e a sobretriagem:
  Taxa de subtriagem  = encontros encaminhados para um nível de acuidade
                        inferior ao do padrão de referência / total de
                        encontros triados × 100
  Taxa de sobretriagem = encontros encaminhados para um nível de acuidade
                        superior ao do padrão de referência / total de
                        encontros triados × 100

O padrão de referência é tipicamente uma revisão clínica retrospetiva do
mesmo caso, cega ao resultado da ferramenta sempre que possível.
```

## Exemplo resolvido

Uma ferramenta de verificação de sintomas com IA tria 5000 encontros com pacientes num mês. Uma revisão clínica cega de uma amostra aleatória de 500 destes encontros conclui que 430 foram encaminhados para o nível de acuidade correto (precisão de 86%), 45 foram subtriados (9%) e 25 foram sobretriados (5%). A taxa de subtriagem de 9% é o valor que necessita de investigação mais urgente, uma vez que representa encontros em que um paciente pode ter sido orientado para cuidados menos urgentes do que aqueles de que realmente necessitava; a taxa de sobretriagem de 5% é uma preocupação de capacidade e de custo, mas não uma preocupação direta de segurança.

## Fontes de dados e ressalvas

O padrão de referência face ao qual a precisão da triagem é medida é extremamente importante: a revisão por um único clínico introduz a variabilidade de juízo desse mesmo clínico, pelo que um valor de precisão credível exige geralmente ou vários revisores independentes com uma concordância entre avaliadores documentada, ou a comparação com um resultado clínico subsequente e confirmado (os cuidados de que o paciente realmente necessitou, apurados a posteriori). A amostragem também é importante: rever apenas uma amostra de conveniência de encontros, ou apenas os assinalados como invulgares, não produzirá um valor que se generalize ao desempenho global da ferramenta. Os valores de precisão devem ser reportados separadamente por categoria de sintoma ou queixa apresentada, sempre que o volume de casos subjacente o permita, uma vez que as ferramentas de triagem raramente têm um desempenho uniforme em todas as condições.

## Erros comuns

- **Reportar um único valor de precisão agregado**: reduzir a subtriagem e a sobretriagem a um único número oculta se os erros da ferramenta tendem para o modo de falha mais perigoso; reporte-as sempre separadamente.
- **Utilizar um único revisor, não cego, como padrão de referência**: isto pode enviesar discretamente o valor de precisão em direção ao que esse revisor teria feito, em vez de um padrão clínico independente.
- **Validar apenas com dados retrospetivos e de conveniência**: a precisão de encaminhamento de uma ferramenta no mundo real, perante informação ambígua fornecida em tempo real pelo paciente, difere frequentemente de forma material da sua precisão num conjunto de validação selecionado, reunido durante o desenvolvimento.
- **Ignorar a deriva do desempenho após a implementação**: a precisão de um modelo de triagem com IA pode degradar-se ao longo do tempo à medida que se alteram as populações de pacientes, os sintomas apresentados ou a disponibilidade de vias de cuidados; a precisão deve ser novamente medida de forma recorrente, e não validada uma única vez e assumida como estável.

## Fontes

- ONC / HealthIT.gov, orientações sobre a segurança e a garantia de qualidade de ferramentas de apoio à decisão clínica e baseadas em IA
- Literatura revista por pares sobre a precisão de verificadores de sintomas e de ferramentas de triagem com IA, por exemplo estudos publicados na JAMIA, na npj Digital Medicine e na BMJ Health & Care Informatics
- NHS England, orientações sobre a segurança clínica de ferramentas de triagem digital e de consulta remota (normas de gestão do risco clínico DCB0129/DCB0160)

Ver também: [tempo de resposta da referenciação digital](../tempo-de-resposta-da-referenciacao-digital/), a métrica de processo mais diretamente a jusante de uma decisão de triagem.
