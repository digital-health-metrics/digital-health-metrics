# Tempo de Resposta da Referenciação Digital

O tempo de resposta da referenciação digital é o tempo decorrido entre a submissão de uma referenciação eletrónica por um clínico referenciador e a sua triagem, resultando em aceitação, rejeição, ou marcação pelo serviço recetor. É uma métrica de processo (fluxo), distinta do tempo total de espera do paciente, e é um dos locais mais claros onde uma mudança de sistema digital (referenciação eletrónica estruturada, triagem baseada em imagem, formulários de referenciação padronizados) pode ser demonstrada como fazendo mover um número operacional real, e não apenas uma pontuação de satisfação.

## Porque é que isto importa

Uma etapa de triagem lenta ou altamente variável acrescenta atraso mesmo antes de o paciente entrar numa lista de espera clínica, e como esse atraso ocorre antes de qualquer cuidado clínico começar, é desperdício de processo puro que as ferramentas digitais estão bem posicionadas para eliminar. Sistemas de referenciação que forçam um ciclo de "devolução ao referenciador" por falta de informação criam ciclos de retrabalho fáceis de ignorar se o tempo de resposta for medido apenas nas referenciações que passam limpas à primeira. Onde um serviço introduziu formulários de referenciação digitais estruturados, campos obrigatórios, ou triagem baseada em imagem (por exemplo, em teledermatologia), o tempo de resposta é geralmente a métrica isolada mais persuasiva para demonstrar o benefício, porque é mensurável antes e depois da mudança com a mesma instrumentação.

## Como se calcula

```
Tempo de resposta = registo temporal(decisão de triagem) − registo temporal(submissão da referenciação)

Reporte a mediana e um percentil elevado (comummente o 90.º), não apenas
a média, porque a distribuição é fortemente enviesada à direita por
referenciações devolvidas ou complexas.

Considere os tempos de subetapas onde o sistema os capture:
  Submissão → recebida pelo serviço
  Recebida → decisão de triagem
  Decisão de triagem → consulta marcada (quando aplicável)
```

## Exemplo resolvido

O registo de auditoria de um sistema de referenciação eletrónica mostra um tempo mediano de submissão a decisão de triagem de 1,8 dias em todas as especialidades, com um tempo no percentil 90 de 6 dias, impulsionado sobretudo por referenciações devolvidas ao referenciador por falta de informação clínica. Um percurso de teledermatologia que utiliza triagem baseada em imagem na mesma plataforma alcança um tempo de resposta mediano de 4 horas e um percentil 90 de 1 dia, porque uma fotografia e uma história estruturada são quase sempre suficientes para a decisão de triagem sem necessidade de correspondência adicional.

## Fontes de dados e ressalvas

O próprio registo de auditoria do sistema de referenciação eletrónica ou de gestão de referenciações é a fonte principal, utilizando os registos temporais de submissão e decisão; as organizações devem confirmar se o "relógio" pausa enquanto uma referenciação é devolvida para mais informação ou continua a correr continuamente, uma vez que as duas definições produzem números substancialmente diferentes para o mesmo processo subjacente. O tempo de resposta deve ser reportado de forma consistente em tempo de calendário ou em horas úteis, uma vez que, caso contrário, os efeitos de fins de semana e feriados podem distorcer comparações entre serviços com padrões de trabalho diferentes.

## Erros comuns

- **Medir apenas referenciações "limpas"**: excluir referenciações rejeitadas ou devolvidas do cálculo oculta o peso de retrabalho que as ferramentas digitais são frequentemente destinadas especificamente a reduzir.
- **Reportar a média em vez da mediana e dos percentis**: um pequeno número de referenciações de longa duração e devolvidas puxará a média para muito acima da experiência real do paciente típico.
- **Confundir tempo de resposta com tempo de espera total**: o tempo de resposta cobre apenas a etapa de triagem; a experiência total do paciente também inclui a lista de espera clínica a jusante, que é uma métrica separada governada por restrições de capacidade distintas.
- **Não distinguir subetapas**: um serviço que mede apenas o tempo ponta a ponta não consegue determinar se um número lento se deve a referenciadores a submeterem informação incompleta, à capacidade de triagem do serviço recetor, ou a ambos.

## Fontes

- NHS England, estatísticas e especificações de serviço do Serviço de e-Referenciação (e-RS)
- Literatura revista por pares sobre sistemas eletrónicos de gestão de referenciações e percursos de triagem digital, incluindo teledermatologia
- ONC / HealthIT.gov, orientações sobre interoperabilidade e coordenação de referenciações
