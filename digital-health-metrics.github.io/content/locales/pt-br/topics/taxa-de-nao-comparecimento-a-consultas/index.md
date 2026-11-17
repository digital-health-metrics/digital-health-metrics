# Taxa de Não Comparecimento a Consultas

A taxa de não comparecimento a consultas (também chamada de taxa de "no-show", de absenteísmo, ou, no Reino Unido, de "did not attend", DNA) é a proporção de consultas agendadas em que o paciente nem compareceu nem cancelou com um aviso razoável. É uma das métricas operacionais mais antigas da área da saúde, e as ferramentas digitais — em especial lembretes, reagendamento por autoatendimento e agendamento pelo portal — estão hoje entre as alavancas mais eficazes e mais bem fundamentadas para reduzi-la.

## Por que isso importa

Cada falta é uma unidade de capacidade clínica que, em geral, não pode ser recuperada, já que a maioria dos serviços não consegue preencher uma vaga do mesmo dia com pouca antecedência. Por isso a taxa influencia diretamente o tamanho das filas de espera, o custo por consulta realizada e o tempo de profissional perdido. O não comparecimento não se distribui de modo uniforme: correlaciona-se com privação social, acesso a transporte, responsabilidades de cuidado e o peso de lidar com várias condições de longa duração. Por isso, tratar uma taxa elevada apenas como um problema de comportamento do paciente, e não também como sinal de barreiras de acesso, tende a gerar intervenções (como penalizações generalizadas) que agravam a iniquidade em vez de reduzi-la. Lembretes digitais e reagendamento digital fácil estão consistentemente entre as intervenções mais eficazes e de menor custo disponíveis, razão pela qual esta métrica pertence claramente a um programa de medição de saúde digital, e não apenas ao relatório operacional.

## Como se calcula

```
Taxa de não comparecimento = consultas agendadas marcadas como "não compareceu" / total de consultas agendadas × 100
```

Uma consulta agendada geralmente é excluída do denominador, ou movida para uma categoria separada, se for cancelada por qualquer uma das partes com antecedência maior do que um prazo de aviso definido (comumente 24 horas). Os cancelamentos tardios (dentro desse prazo) costumam ser informados separadamente dos não comparecimentos propriamente ditos, já que as implicações operacionais e comportamentais são diferentes.

## Exemplo resolvido

Uma clínica comunitária agenda 2000 consultas em um mês. Dessas, 140 são canceladas com mais de 24 horas de antecedência (reagendadas e excluídas do denominador), 60 são canceladas tardiamente (menos de 24 horas) e 180 são registradas como não comparecimento verdadeiro, sem nenhum contato. A taxa de não comparecimento é 180 / 2000 × 100 = 9%. Se os 60 cancelamentos tardios fossem incluídos na mesma categoria dos não comparecimentos verdadeiros, a taxa informada subiria para 12%, razão pela qual a definição usada deve sempre ser indicada junto com o número.

## Fontes de dados e ressalvas

O sistema de agendamento ou de gestão do consultório é a fonte principal, com base nos seus códigos de situação da consulta; a qualidade da métrica depende inteiramente de a equipe usar sempre a situação correta, em vez de uma categoria genérica de "cancelado" para tudo. As organizações que introduzem lembretes digitais (SMS, notificação push do aplicativo ou alertas no portal) devem medir a taxa de não comparecimento antes e depois da mudança, em uma combinação comparável de pacientes e serviços, já que a eficácia dos lembretes está bem documentada em estudos randomizados e observacionais, mas varia conforme a população e o canal.

## Erros comuns

- **Comparar taxas brutas entre clínicas com práticas diferentes de overbooking**: uma clínica que faz overbooking de propósito para compensar uma taxa esperada de não comparecimento mostrará uma taxa aparente diferente da de uma clínica que não o faz, independentemente do comportamento real dos pacientes.
- **Confundir cancelamento tardio com não comparecimento verdadeiro**: os dois têm causas e soluções digitais diferentes (um problema de cancelamento tardio costuma ser resolvido com um reagendamento mais fácil por autoatendimento; um problema de não comparecimento verdadeiro costuma ser resolvido com lembretes melhores e dados de contato mais precisos).
- **Viés de sobrevivência causado por políticas de alta**: serviços que dão alta aos pacientes após faltas repetidas verão a própria taxa melhorar de forma mecânica, apenas deslocando os mesmos pacientes para outra parte do sistema.
- **Culpar o paciente pela exclusão digital**: um paciente sem smartphone ou sem serviço de mensagens confiável não será beneficiado por uma estratégia de lembretes exclusivamente digital, então em geral é necessária uma abordagem multicanal (carta, ligação, mensagem de texto, aplicativo) para não ampliar as disparidades de acesso.

## Fontes

- NHS England, consultas perdidas em atenção primária e ambulatório, estatísticas e orientações publicadas
- Revisões sistemáticas Cochrane sobre intervenções para reduzir consultas de saúde perdidas, incluindo sistemas de lembrete
- Literatura revisada por pares sobre correlatos socioeconômicos e demográficos do não comparecimento a consultas

Ver também: [taxa de consultas de telessaúde](../taxa-de-consultas-de-telessaude/), já que o comportamento de não comparecimento costuma diferir conforme a modalidade de consulta, e [taxa de adoção do portal do paciente](../taxa-de-adocao-do-portal-do-paciente/), já que o autoagendamento e os lembretes baseados no portal são uma intervenção digital primária nesta área.
