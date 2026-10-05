# Taxa de Reinternamento Hospitalar

A taxa de reinternamento hospitalar é a proporção de pacientes que tiveram alta e são reinternados no hospital, de forma não planeada, dentro de uma janela definida após a alta — mais comummente 30 dias. Na saúde digital, é a métrica mais diretamente associada à economia dos pagadores e aos contratos de cuidados baseados em valor: um programa de monitorização remota, de seguimento pós-alta ou de transição digital de cuidados que não consiga demonstrar um efeito credível nos reinternamentos dificilmente obterá apoio de reembolso continuado, por melhores que pareçam os seus números de envolvimento.

## Porque é que isto importa

Um reinternamento não planeado é dispendioso, perturbador para o paciente e, em muitos sistemas de saúde, diretamente penalizado: esquemas como o US Hospital Readmissions Reduction Program reduzem o pagamento aos hospitais com taxas de reinternamento superiores ao esperado para determinadas condições, razão pela qual os hospitais encomendam ativamente programas digitais de seguimento pós-alta e de monitorização remota destinados a reduzi-los. Uma parte significativa dos reinternamentos é considerada potencialmente evitável — resultante de instruções de alta inadequadas, consultas de seguimento perdidas, mal-entendidos sobre a medicação, ou deterioração de sintomas não abordada que um ponto de contacto digital bem concebido pode detetar mais cedo — que é precisamente a lacuna visada pelas ferramentas digitais de cuidados de transição. A taxa de reinternamento deve ser sempre lida em conjunto com a casuística: um programa que serve uma população mais doente e mais complexa terá uma taxa de base estruturalmente mais elevada do que um que serve uma população mais saudável, independentemente da qualidade do programa.

## Como se calcula

```
Taxa de reinternamento a 30 dias = reinternamentos não planeados nos 30
                                   dias seguintes à alta / total de altas
                                   índice × 100

Excluir do numerador: reinternamentos planeados (por exemplo, um
procedimento de seguimento agendado), e transferências que constituam a
continuação do mesmo episódio de cuidados e não um novo internamento.

Ajustar ao risco sempre que possível, utilizando um índice aceite de
casuística ou de comorbilidade, antes de comparar taxas entre populações
de pacientes ou períodos de tempo diferentes.
```

## Exemplo resolvido

Um hospital dá alta a 1200 pacientes com insuficiência cardíaca num trimestre. Destes, 210 são reinternados nos 30 dias seguintes, dos quais 15 são reinternamentos planeados para um procedimento agendado e são excluídos. A taxa de reinternamento não planeado a 30 dias é (210 − 15) / 1200 × 100 = 16,25%. É introduzido um programa de monitorização remota para um subconjunto de 400 destes pacientes (selecionados por risco clínico, e não aleatoriamente), e a sua taxa de reinternamento não planeado é de 14%, em comparação com 18% para os 800 pacientes não inscritos. Uma vez que a inscrição se baseou no risco clínico e não numa atribuição aleatória, esta diferença constitui uma evidência sugestiva e não conclusiva do efeito do programa, e deve ser interpretada juntamente com uma análise de ajuste ao risco, em vez de aceite sem questionamento.

## Fontes de dados e ressalvas

Os dados de reinternamento são tipicamente obtidos do fluxo de admissão-alta-transferência (ADT) do próprio hospital para reinternamentos na mesma instituição, mas um paciente reinternado noutro hospital não aparecerá de todo nesse fluxo, pelo que o acompanhamento de reinternamentos de um único hospital subestima sistematicamente as taxas reais, a menos que seja complementado com dados de uma troca regional de informação de saúde, dados de reclamações de pagadores, ou bases de dados estaduais de todos os pagadores. A atribuição a um programa digital exige cuidado: os pacientes que aderem a um programa voluntário de monitorização remota raramente constituem uma amostra aleatória da população com alta, pelo que uma comparação ingénua das taxas de reinternamento entre inscritos e não inscritos tenderá a ser confundida precisamente pelos efeitos de seleção que tornaram alguns pacientes mais propensos a inscrever-se à partida.

## Erros comuns

- **Comparar taxas brutas, não ajustadas ao risco, entre populações**: um programa que serve uma população mais doente mostrará uma taxa bruta de reinternamento superior à de um que serve uma população mais saudável, mesmo que o próprio programa seja mais eficaz; ajustar sempre ao risco antes de comparar.
- **Subcontar reinternamentos noutras instituições**: basear-se apenas nos dados ADT de um único hospital falhará os reinternamentos noutros locais, subestimando a taxa real, em particular em zonas com vários sistemas hospitalares concorrentes.
- **Enviesamento de seleção na inscrição voluntária em programas**: os pacientes que optam por se inscrever num programa digital de seguimento diferem frequentemente de forma sistemática (em literacia em saúde, apoio social ou motivação) dos que não o fazem, confundindo qualquer comparação ingénua antes/depois ou entre inscritos e não inscritos.
- **Contar todo o regresso à mesma instituição como reinternamento**: um reinternamento agendado e planeado (por exemplo, um segundo procedimento planeado por fases) não é sinal de uma alta falhada e deve ser excluído do numerador, e não misturado com regressos genuinamente não planeados.

## Fontes

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program e especificações da medida Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), orientações sobre a redução de reinternamentos evitáveis
- Literatura revista por pares sobre intervenções digitais de monitorização remota e de cuidados de transição para a redução de reinternamentos, por exemplo estudos publicados na JAMA Network Open e na npj Digital Medicine

Ver também: [precisão do encaminhamento na triagem](../precisao-do-encaminhamento-na-triagem/), uma vez que um encaminhamento inicial inadequado pode ser, em si mesmo, um fator a jusante de internamentos evitáveis.
