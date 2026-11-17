# Taxa de Readmissão Hospitalar

A taxa de readmissão hospitalar é a proporção de pacientes que tiveram alta e são readmitidos no hospital, de forma não planejada, dentro de uma janela definida após a alta — mais comumente 30 dias. Na saúde digital, é a métrica mais diretamente associada à economia dos pagadores e aos contratos de cuidados baseados em valor: um programa de monitoramento remoto, de seguimento pós-alta ou de transição digital de cuidados que não consiga demonstrar um efeito credível nas readmissões dificilmente obterá apoio de reembolso continuado, por melhores que pareçam os seus números de envolvimento.

## Por que isso importa

Uma readmissão não planejado é caros, perturbador para o paciente e, em muitos sistemas de saúde, diretamente penalizado: esquemas como o US Hospital Readmissions Reduction Program reduzem o pagamento aos hospitais com taxas de readmissão superiores ao esperado para determinadas condições, razão pela qual os hospitais encomendam ativamente programas digitais de seguimento pós-alta e de monitoramento remoto destinados a reduzi-los. Uma parte significativa das readmissões é considerada potencialmente evitável — resultante de instruções de alta inadequadas, consultas de seguimento perdidas, mal-entendidos sobre a medicação, ou deterioração de sintomas não abordada que um ponto de contato digital bem projetado pode detectar mais cedo — que é precisamente a lacuna visada pelas ferramentas digitais de cuidados de transição. A taxa de readmissão deve ser sempre lida em conjunto com a casuística: um programa que serve uma população mais paciente e mais complexa terá uma taxa de base estruturalmente mais elevada do que um que serve uma população mais saudável, independentemente da qualidade do programa.

## Como se calcula

```
Taxa de readmissão a 30 dias = readmissões não planejados nos 30
                                   dias seguintes à alta / total de altas
                                   índice × 100

Excluir do numerador: readmissões planejados (por exemplo, um
procedimento de seguimento agendado), e transferências que constituam a
continuação do mesmo episódio de cuidados e não uma novo internação.

Ajustar ao risco sempre que possível, usando um índice aceite de
casuística ou de comorbidade, antes de comparar taxas entre populações
de pacientes ou períodos de tempo diferentes.
```

## Exemplo resolvido

Um hospital dá alta a 1200 pacientes com insuficiência cardíaca em um trimestre. Destes, 210 são readmitidos nos 30 dias seguintes, dos quais 15 são readmissões planejados para um procedimento agendado e são excluídos. A taxa de readmissão não planejado a 30 dias é (210 − 15) / 1200 × 100 = 16,25%. É introduzido um programa de monitoramento remoto para um subconjunto de 400 destes pacientes (selecionados por risco clínico, e não aleatoriamente), e a sua taxa de readmissão não planejado é de 14%, em comparação com 18% para os 800 pacientes não inscritos. Já que a inscrição se baseou no risco clínico e não em uma atribuição aleatória, esta diferença constitui uma evidência sugestiva e não conclusiva do efeito do programa, e deve ser interpretada junto com uma análise de ajuste ao risco, em vez de aceite sem questionamento.

## Fontes de dados e ressalvas

Os dados de readmissão são tipicamente obtidos do fluxo de admissão-alta-transferência (ADT) do próprio hospital para readmissões na mesma instituição, mas um paciente readmitido em outro hospital não aparecerá de todo nesse fluxo, de modo que o acompanhamento de readmissões de um único hospital subestima sistematicamente as taxas reais, a menos que seja complementado com dados de uma troca regional de informação de saúde, dados de reclamações de pagadores, ou bases de dados estaduais de todos os pagadores. A atribuição a um programa digital exige cuidado: os pacientes que aderem a um programa voluntário de monitoramento remoto raramente constituem uma amostra aleatória da população com alta, de modo que uma comparação ingênua das taxas de readmissão entre inscritos e não inscritos tenderá a ser confundida precisamente pelos efeitos de seleção que tornaram alguns pacientes mais propensos a inscrever-se à partida.

## Erros comuns

- **Comparar taxas brutas, não ajustadas ao risco, entre populações**: um programa que serve uma população mais paciente mostrará uma taxa bruta de readmissão superior à de um que serve uma população mais saudável, mesmo que o próprio programa seja mais eficaz; ajustar sempre ao risco antes de comparar.
- **Subcontar readmissões em outras instituições**: basear-se apenas nos dados ADT de um único hospital falhará as readmissões em outros locais, subestimando a taxa real, em particular em zonas com vários sistemas hospitalares concorrentes.
- **Viés de seleção na inscrição voluntária em programas**: os pacientes que optam por se inscrever em um programa digital de seguimento diferem frequentemente de forma sistemática (em letramento em saúde, apoio social ou motivação) dos que não o fazem, confundindo qualquer comparação ingênua antes/depois ou entre inscritos e não inscritos.
- **Contar todo o regresso à mesma instituição como readmissão**: uma readmissão agendado e planejado (por exemplo, um segundo procedimento planejado por fases) não é sinal de uma alta falhada e deve ser excluído do numerador, e não misturado com regressos genuinamente não planejados.

## Fontes

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program e especificações da medida Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), orientações sobre a redução de readmissões evitáveis
- Literatura revisada por pares sobre intervenções digitais de monitoramento remoto e de cuidados de transição para a redução de readmissões, por exemplo estudos publicados na JAMA Network Open e na npj Digital Medicine

Ver também: [precisão do encaminhamento na triagem](../precisao-do-encaminhamento-na-triagem/), já que um encaminhamento inicial inadequado pode ser, em si mesmo, um fator a jusante de internações evitáveis.
