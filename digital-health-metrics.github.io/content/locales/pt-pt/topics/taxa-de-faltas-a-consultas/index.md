# Taxa de Faltas a Consultas

A taxa de faltas a consultas (também chamada taxa de "did not attend", ou DNA) é a proporção de consultas marcadas em que o paciente nem compareceu nem cancelou com um aviso razoável. É uma das métricas operacionais mais antigas nos cuidados de saúde, e as ferramentas digitais — em particular lembretes, remarcação em regime de autoatendimento, e marcação através do portal — estão hoje entre as alavancas mais eficazes e melhor fundamentadas para a reduzir.

## Porque é que isto importa

Cada falta é uma unidade de capacidade clínica que geralmente não pode ser recuperada, uma vez que a maioria dos serviços não consegue preencher uma vaga do mesmo dia com pouco aviso, pelo que a taxa influencia diretamente o comprimento das listas de espera, o custo por consulta concluída, e o tempo de clínico perdido. O comportamento de faltas não se distribui uniformemente: correlaciona-se com privação, acesso a transportes, responsabilidades de cuidado, e o peso de gerir múltiplas condições de longa duração, pelo que tratar uma taxa elevada puramente como um problema de comportamento do paciente, em vez de em parte como um sinal de barreiras de acesso, tende a produzir intervenções (como penalizações gerais) que agravam a iniquidade em vez de a reduzir. Lembretes digitais e remarcação digital fácil estão consistentemente entre as intervenções mais eficazes e de menor custo disponíveis, razão pela qual esta métrica pertence claramente a um programa de medição de saúde digital, e não apenas ao relatório operacional.

## Como se calcula

```
Taxa de faltas = consultas marcadas como "não compareceu" / total de consultas marcadas × 100
```

Uma consulta marcada é geralmente excluída do denominador, ou movida para uma categoria separada, se for cancelada por qualquer uma das partes com mais do que um período de aviso definido (comummente 24 horas). Cancelamentos tardios (abaixo desse período de aviso) são geralmente reportados separadamente das faltas verdadeiras, uma vez que as implicações operacionais e comportamentais diferem.

## Exemplo resolvido

Uma clínica comunitária marca 2000 consultas num mês. Destas, 140 são canceladas com mais de 24 horas de aviso (remarcadas e excluídas do denominador), 60 são canceladas tardiamente (menos de 24 horas), e 180 são registadas como uma falta verdadeira sem qualquer contacto. A taxa de faltas é 180 / 2000 × 100 = 9%. Se os 60 cancelamentos tardios fossem incluídos na mesma categoria das faltas verdadeiras, a taxa reportada subiria para 12%, razão pela qual a definição utilizada deve ser sempre indicada juntamente com o número.

## Fontes de dados e ressalvas

O sistema de agendamento ou gestão de consultório é a fonte principal, utilizando os seus códigos de estado de consulta; a qualidade da métrica depende inteiramente de os funcionários utilizarem consistentemente o estado correto em vez de uma categoria genérica de "cancelado" para tudo. As organizações que introduzem lembretes digitais (SMS, notificação push de aplicação, ou alertas do portal) devem medir a taxa de faltas antes e depois da mudança para uma combinação comparável de pacientes e serviços, uma vez que a eficácia dos lembretes está bem documentada em estudos aleatorizados e observacionais mas varia consoante a população e o canal.

## Erros comuns

- **Comparar taxas brutas entre clínicas com práticas de sobrerreserva diferentes**: uma clínica que sobrerreserva deliberadamente para compensar uma taxa de faltas esperada mostrará uma taxa aparente diferente de uma que não o faz, independentemente do comportamento real dos pacientes.
- **Confundir cancelamento tardio com falta verdadeira**: ambos têm causas e soluções digitais diferentes (um problema de cancelamento tardio é frequentemente resolvido com remarcação em autoatendimento mais fácil; um problema de falta verdadeira é frequentemente resolvido com melhores lembretes e maior precisão de contacto).
- **Enviesamento de sobrevivência resultante de políticas de alta**: serviços que dão alta a pacientes após faltas repetidas verão a sua própria taxa melhorar mecanicamente, deslocando simplesmente os mesmos pacientes para outra parte do sistema.
- **Culpar o paciente pela exclusão digital**: um paciente sem smartphone ou serviço de mensagens fiável não beneficiará de uma estratégia de lembrete exclusivamente digital, pelo que uma abordagem multicanal (carta, chamada, mensagem de texto, aplicação) é geralmente necessária para evitar alargar as disparidades de acesso.

## Fontes

- NHS England, consultas perdidas em cuidados primários e ambulatório, estatísticas e orientações publicadas
- Revisões sistemáticas Cochrane sobre intervenções para reduzir consultas de saúde perdidas, incluindo sistemas de lembrete
- Literatura revista por pares sobre correlatos socioeconómicos e demográficos da falta a consultas

Ver também: [taxa de consultas de telessaúde](../taxa-de-consultas-de-telessaude/), uma vez que o comportamento de faltas difere frequentemente consoante a modalidade de consulta, e [taxa de adoção do portal do paciente](../taxa-de-adocao-do-portal-do-paciente/), uma vez que a auto-marcação e os lembretes baseados no portal são uma intervenção digital primária nesta área.
