# Redução de Dias de Internação

A redução de dias de internação mede o número total de dias de leito de internação hospitalar evitados ao deslocar um episódio de cuidados definido — mais comumente a recuperação pós-cirúrgica ou a gestão de uma condição aguda — de uma internação tradicional para uma alternativa com apoio digital, como uma enfermaria virtual ou um programa de atenção domiciliar ("hospital em casa"). É a principal métrica de capacidade das iniciativas de enfermaria virtual e de atenção domiciliar ("hospital em casa"), traduzindo uma mudança no modelo de cuidados clínicos diretamente na moeda (capacidade de leitos) com que as operações hospitalares e os planejadores do sistema de fato trabalham.

## Por que isso importa

A capacidade de leitos de internação é um dos recursos mais limitados e caros de qualquer sistema hospitalar, e a proposta de valor central de uma enfermaria virtual ou de um programa de atenção domiciliar ("hospital em casa") é que ele consegue prestar com segurança um nível definido de cuidados clínicos sem ocupar um leito físico, liberando essa capacidade para pacientes que não podem ser tratados de nenhuma outra forma. A redução de dias de internação converte uma afirmação muitas vezes abstrata ("este programa melhora o cuidado") em um número operacional concreto, sobre o qual os planejadores de capacidade hospitalar, as equipes financeiras e os contratantes podem agir diretamente: pode ser usada para modelar se um investimento em um programa de monitoramento se paga em custos de leito evitados, e em que medida. Como a redução de dias de internação só tem valor se a segurança do paciente for mantida, ela deve ser sempre informada junto com uma métrica de resultado de segurança (como a taxa de readmissão ou de escalada para cuidados de internação) para a mesma população, e nunca no lugar dela.

## Como se calcula

```
Redução de dias de internação = dias de internação esperados com
                                   cuidados de internação habituais
                                   (com base em dados históricos de
                                   duração da internação de uma coorte
                                   de pacientes pareada) − dias de
                                   internação efetivamente usados
                                   pelos pacientes na linha de cuidado virtual/digital

Informar por fluxo clínico (por exemplo, recuperação pós-cirúrgica,
exacerbação respiratória aguda), já que a duração esperada da
internação varia enormemente conforme a condição e um valor agregado
de fluxos sem relação entre si não tem significado.
```

## Exemplo resolvido

Os dados históricos de um hospital mostram que os pacientes em recuperação de um determinado procedimento cirúrgico eletivo têm uma duração média de internação de 4 dias. Um programa de enfermaria virtual inscreve 150 pacientes em recuperação do mesmo procedimento, dando-lhes alta após uma média de 1,5 dia de internação, com o restante da recuperação monitorado à distância. A redução de dias de internação é (4 − 1,5) × 150 = 375 dias de internação no período de medição. Esse valor deve ser informado junto com a taxa de escalada para cuidados de internação em 30 dias e a taxa de readmissão da coorte da enfermaria virtual para os mesmos 150 pacientes, já que uma economia de dias de internação obtida à custa de uma taxa de escalada ou de readmissão bem mais alta não é o ganho clínico que o valor principal sugeriria.

## Fontes de dados e ressalvas

Os dias de internação esperados exigem uma base de referência histórica credível, idealmente proveniente de uma coorte de pacientes pareada, tratada com cuidados de internação habituais e com características clínicas semelhantes (idade, comorbidade, tipo de procedimento, gravidade) às da população da enfermaria virtual, já que a comparação com uma média histórica não pareada corre o risco de superestimar ou subestimar a redução real se a coorte acompanhada digitalmente for sistematicamente mais saudável ou menos grave do que o grupo histórico de comparação. Os dias de internação efetivamente usados no fluxo digital vêm do sistema de admissão, alta e transferência (ADT) do próprio hospital; qualquer escalada de volta para cuidados de internação durante o período de recuperação monitorada deve ser contabilizada com honestidade contra o programa (como dias de internação usados, e não excluídos), já que excluir as escaladas do cálculo inflaria artificialmente a redução aparente.

## Erros comuns

- **Informar a redução de dias de internação sem uma comparação de segurança pareada**: uma enfermaria virtual que economiza dias de internação mas tem uma taxa de escalada ou de readmissão bem pior do que a dos cuidados habituais não demonstrou uma melhoria genuína; informe sempre as duas juntas.
- **Usar uma base de referência histórica não pareada ou desatualizada**: a comparação com uma coorte histórica com casuística, carga de comorbidade ou época de prática clínica diferentes pode superestimar ou subestimar de forma significativa a economia real de dias de internação.
- **Excluir do cálculo as escaladas de volta para cuidados de internação**: um paciente que é monitorado virtualmente mas depois é escalado para um leito de internação no meio da recuperação deve ter esses dias de internação contabilizados contra o programa, e não omitidos em silêncio da análise.
- **Agregar linhas de cuidado com durações esperadas de internação muito diferentes**: somar a redução de dias de internação de linhas de cuidado clinicamente não relacionadas (por exemplo, combinando a recuperação pós-cirúrgica e o manejo respiratório crônico) em um único valor esconde qual linha de cuidado específica realmente gera a economia.

## Fontes

- NHS England, orientações sobre programas de enfermaria virtual e de atenção domiciliar ("hospital em casa") e normas de informe do impacto em dias de internação
- Literatura revisada por pares sobre modelos de atenção domiciliar ("hospital em casa") e de enfermaria virtual, por exemplo estudos publicados na JAMA Internal Medicine e na npj Digital Medicine
- Institute for Healthcare Improvement (IHI), orientações sobre gestão de capacidade e modelos alternativos de cuidado

Ver também: [taxa de readmissão hospitalar](../taxa-de-readmissao-hospitalar/), a métrica de segurança que deve ser sempre informada junto com qualquer afirmação de redução de dias de internação para a mesma população de pacientes.
