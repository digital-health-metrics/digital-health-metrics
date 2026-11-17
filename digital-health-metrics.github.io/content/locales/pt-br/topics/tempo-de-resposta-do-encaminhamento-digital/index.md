# Tempo de Resposta do Encaminhamento digital

O tempo de resposta do encaminhamento digital é o tempo decorrido entre o envio de um encaminhamento eletrônico por um profissional solicitante e a sua triagem, que resulta em aceitação, rejeição ou agendamento pelo serviço de destino. É uma métrica de processo (fluxo), distinta do tempo total de espera do paciente, e é um dos pontos mais claros em que uma mudança de sistema digital (encaminhamento eletrônico estruturado, triagem baseada em imagem, formulários de encaminhamento padronizados) pode ser demonstrada movendo um número operacional real, e não apenas uma pontuação de satisfação.

## Por que isso importa

Uma etapa de triagem lenta ou altamente variável acrescenta atraso mesmo antes de o paciente entrar em uma fila de espera clínica, e, como esse atraso ocorre antes de qualquer cuidado clínico começar, é puro desperdício de processo, que as ferramentas digitais estão bem posicionadas para eliminar. Sistemas de encaminhamento que forçam um ciclo de "devolução ao solicitante" por falta de informação criam ciclos de retrabalho fáceis de ignorar se o tempo de resposta for medido apenas nos encaminhamentos que passam limpas à primeira. Onde um serviço introduziu formulários de encaminhamento digitais estruturados, campos obrigatórios, ou triagem baseada em imagem (por exemplo, em teledermatologia), o tempo de resposta costuma ser a métrica isolada mais persuasiva para demonstrar o benefício, porque pode ser medido antes e depois da mudança com a mesma instrumentação.

## Como se calcula

```
Tempo de resposta = carimbo de data/hora(decisão de triagem) − carimbo de data/hora(envio do encaminhamento)

Informe a mediana e um percentil alto (comumente o 90º), não apenas
a média, porque a distribuição é fortemente enviesada à direita por
encaminhamentos devolvidos ou complexas.

Considere os tempos de subetapas, quando o sistema os registrar:
  Envio → recebido pelo serviço
  Recebido → decisão de triagem
  Decisão de triagem → consulta agendada (quando aplicável)
```

## Exemplo resolvido

O registro de auditoria de um sistema de encaminhamento eletrônico mostra um tempo mediano do envio à decisão de triagem de 1,8 dia em todas as especialidades, com um percentil 90 de 6 dias, puxado sobretudo por encaminhamentos devolvidos ao solicitante por falta de informação clínica. Um fluxo de teledermatologia que usa triagem baseada em imagem na mesma plataforma alcança um tempo de resposta mediano de 4 horas e um percentil 90 de 1 dia, porque uma fotografia e um histórico estruturado quase sempre bastam para a decisão de triagem, sem necessidade de troca de informações adicionais.

## Fontes de dados e ressalvas

O próprio registro de auditoria do sistema de encaminhamento eletrônico ou de gestão de encaminhamentos é a fonte principal, usando os carimbos de data/hora de envio e decisão; as organizações devem confirmar se o "relógio" pausa enquanto um encaminhamento é devolvida para mais informação ou continua correndo continuamente, já que as duas definições produzem números substancialmente diferentes para o mesmo processo subjacente. O tempo de resposta deve ser informado de forma consistente em tempo corrido ou em horas úteis, já que, caso contrário, os efeitos de fins de semana e feriados podem distorcer comparações entre serviços com escalas de trabalho diferentes.

## Erros comuns

- **Medir apenas encaminhamentos "limpas"**: excluir encaminhamentos rejeitados ou devolvidas do cálculo oculta o peso de retrabalho que as ferramentas digitais são frequentemente destinadas especificamente a reduzir.
- **Informar a média em vez da mediana e dos percentis**: um pequeno número de encaminhamentos de longa duração e devolvidas puxará a média para muito acima da experiência real do paciente típico.
- **Confundir tempo de resposta com tempo de espera total**: o tempo de resposta cobre apenas a etapa de triagem; a experiência total do paciente também inclui a fila de espera clínica a jusante, que é uma métrica separada, regida por restrições de capacidade distintas.
- **Não distinguir subetapas**: um serviço que mede apenas o tempo ponta a ponta não consegue determinar se um número lento se deve a solicitantes que enviam informação incompleta, à capacidade de triagem do serviço de destino ou a ambos.

## Fontes

- NHS England, estatísticas e especificações de serviço do Serviço de e-Encaminhamento (e-RS)
- Literatura revisada por pares sobre sistemas eletrônicos de gestão de encaminhamentos e fluxos de triagem digital, incluindo teledermatologia
- ONC / HealthIT.gov, orientações sobre interoperabilidade e coordenação de encaminhamentos
