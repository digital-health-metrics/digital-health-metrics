# Redução de Dias de Internamento

A redução de dias de internamento mede o número total de dias de cama de internamento hospitalar evitados ao deslocar um episódio de cuidados definido — mais comummente a recuperação pós-cirúrgica ou a gestão de uma condição aguda — de um internamento tradicional para uma alternativa com apoio digital, como uma enfermaria virtual ou um programa de hospitalização no domicílio. É a principal métrica de capacidade das iniciativas de enfermaria virtual e de hospitalização no domicílio, traduzindo uma alteração do modelo de cuidados clínicos diretamente na moeda (capacidade de camas) com que as operações hospitalares e os planeadores do sistema efetivamente trabalham.

## Porque é que isto importa

A capacidade de camas de internamento é um dos recursos mais limitados e dispendiosos de qualquer sistema hospitalar, e a proposta de valor central de uma enfermaria virtual ou de um programa de hospitalização no domicílio é que consegue prestar com segurança um nível definido de cuidados clínicos sem ocupar uma cama física, libertando essa capacidade para doentes que não podem ser tratados de nenhuma outra forma. A redução de dias de internamento converte uma afirmação frequentemente abstrata ("este programa melhora os cuidados") num número operacional concreto sobre o qual os planeadores de capacidade hospitalar, as equipas financeiras e os comissários podem agir diretamente: pode ser utilizada para modelar se um investimento num programa de monitorização se paga a si próprio em custos de cama evitados, e em que medida. Uma vez que a redução de dias de internamento só tem valor se a segurança do doente for mantida, deve ser sempre reportada em conjunto com uma métrica de resultado de segurança (como a taxa de readmissão ou de escalada para cuidados de internamento) para a mesma população, e nunca em vez dela.

## Como se calcula

```
Redução de dias de internamento = dias de internamento esperados com
                                   cuidados de internamento habituais
                                   (com base em dados históricos de
                                   duração do internamento de uma coorte
                                   de doentes equiparada) − dias de
                                   internamento efetivamente utilizados
                                   pelos doentes no percurso virtual/digital

Reportar por percurso clínico (por exemplo, recuperação pós-cirúrgica,
exacerbação respiratória aguda), uma vez que a duração esperada do
internamento varia enormemente consoante a condição e um valor agregado
de percursos sem relação entre si não tem significado.
```

## Exemplo resolvido

Os dados históricos de um hospital mostram que os doentes em recuperação de um determinado procedimento cirúrgico eletivo têm uma duração média de internamento de 4 dias. Um programa de enfermaria virtual inscreve 150 doentes em recuperação do mesmo procedimento, dando-lhes alta após uma média de 1,5 dias de internamento, com o restante da recuperação monitorizado à distância. A redução de dias de internamento é (4 − 1,5) × 150 = 375 dias de internamento no período de medição. Este valor deve ser reportado juntamente com a taxa de escalada para cuidados de internamento a 30 dias e a taxa de readmissão da coorte da enfermaria virtual para os mesmos 150 doentes, uma vez que uma poupança de dias de internamento obtida à custa de uma taxa de escalada ou de readmissão materialmente mais elevada não é o ganho clínico que o valor principal sugeriria.

## Fontes de dados e ressalvas

Os dias de internamento esperados exigem uma base de referência histórica credível, idealmente proveniente de uma coorte de doentes equiparada, tratada com cuidados de internamento habituais e com características clínicas semelhantes (idade, comorbilidade, tipo de procedimento, gravidade) às da população da enfermaria virtual, uma vez que a comparação com uma média histórica não equiparada corre o risco de sobrestimar ou subestimar a verdadeira redução se a coorte gerida digitalmente for sistematicamente mais saudável ou mais doente do que o grupo de comparação histórico. Os dias de internamento efetivamente utilizados no percurso digital provêm do próprio sistema de admissão, alta e transferência (ADT) do hospital; qualquer escalada de volta para cuidados de internamento durante o período de recuperação monitorizada deve ser contabilizada com honestidade contra o programa (como dias de internamento utilizados, e não excluídos), uma vez que excluir as escaladas do cálculo inflacionaria artificialmente a redução aparente.

## Erros comuns

- **Reportar a redução de dias de internamento sem uma comparação de segurança equiparada**: uma enfermaria virtual que poupa dias de internamento mas tem uma taxa de escalada ou de readmissão materialmente pior do que a dos cuidados habituais não demonstrou uma melhoria genuína; reporte sempre ambas em conjunto.
- **Utilizar uma base de referência histórica não equiparada ou desatualizada**: a comparação com uma coorte histórica com casuística, carga de comorbilidade ou época de prática clínica diferentes pode sobrestimar ou subestimar significativamente a verdadeira poupança de dias de internamento.
- **Excluir do cálculo as escaladas de volta para cuidados de internamento**: um doente que é monitorizado virtualmente mas que é depois escalado para uma cama de internamento a meio da recuperação deve ter esses dias de internamento contabilizados contra o programa, e não silenciosamente omitidos da análise.
- **Agregar percursos com durações esperadas de internamento muito diferentes**: agregar a redução de dias de internamento de percursos clinicamente não relacionados (por exemplo, combinando a recuperação pós-cirúrgica e a gestão respiratória crónica) num único valor oculta qual o percurso específico que realmente origina a poupança.

## Fontes

- NHS England, orientações sobre programas de enfermaria virtual e de hospitalização no domicílio e normas de reporte do impacto em dias de internamento
- Literatura revista por pares sobre modelos de hospitalização no domicílio e de enfermaria virtual, por exemplo estudos publicados na JAMA Internal Medicine e na npj Digital Medicine
- Institute for Healthcare Improvement (IHI), orientações sobre gestão de capacidade e modelos alternativos de cuidados

Ver também: [taxa de readmissão hospitalar](../taxa-de-reinternamento-hospitalar/), a métrica de segurança que deve ser sempre reportada juntamente com qualquer afirmação de redução de dias de internamento para a mesma população de doentes.
