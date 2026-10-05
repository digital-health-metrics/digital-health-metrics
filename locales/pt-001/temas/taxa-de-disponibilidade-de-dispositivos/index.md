# Taxa de Disponibilidade de Dispositivos

A taxa de disponibilidade de dispositivos mede a proporção do tempo de monitorização programado em que um dispositivo de saúde conectado — um sensor de monitorização remota de pacientes, um dispositivo vestível ou uma unidade de telessaúde domiciliária — está efetivamente em linha, a transmitir dados e a funcionar corretamente, em vez de desligado, desconectado ou com avaria. É a métrica fundamental de infraestrutura subjacente a todos os programas de monitorização remota ou de dispositivos conectados: um alerta clínico, uma tendência biométrica ou um valor de envolvimento calculado a partir de um dispositivo que esteve frequentemente fora de linha é tão fiável quanto a conectividade que o sustenta.

## Porque é que isto importa

Toda a proposta de valor clínico de um programa de monitorização remota de pacientes depende da captação contínua ou quase contínua de dados; um dispositivo com baixa disponibilidade cria lacunas silenciosas no quadro clínico de um paciente que podem ser confundidas com estabilidade (sem alerta porque não há dados, e não porque nada mudou), em vez de serem corretamente identificadas como uma falha de monitorização. A disponibilidade dos dispositivos é também um indicador antecipado do custo do programa e da experiência do paciente: um dispositivo que perde frequentemente a ligação gera chamadas de apoio, frustração do paciente e, potencialmente, contactos clínicos desnecessários para verificar se uma lacuna de dados reflete um evento clínico real ou simplesmente uma falha técnica. Dado que as falhas de disponibilidade dos dispositivos são frequentemente atribuíveis a infraestrutura que a organização controla (um gateway celular mal configurado, cobertura Wi-Fi fraca no domicílio do paciente, uma frota de dispositivos mal mantida) e não ao paciente, esta métrica pertence inteiramente ao fornecedor e à equipa de operações técnicas, e não deve ser indiscriminadamente integrada nas métricas de envolvimento do paciente.

## Como se calcula

```
Taxa de disponibilidade de dispositivos = tempo em que o dispositivo
                                           esteve em linha e a transmitir
                                           dados válidos / tempo total de
                                           monitorização programado × 100

Segmentar as causas de raiz da indisponibilidade quando os dados o permitam:
  Falha do dispositivo   (bateria, avaria de hardware, falha de firmware)
  Falha de conectividade (perda de ligação celular/Wi-Fi/VPN)
  Fatores do paciente    (dispositivo desligado, deslocado para fora de alcance)

Parâmetros técnicos de apoio a acompanhar juntamente com a disponibilidade:
  Utilização média de CPU, utilização de memória e nível de bateria por dispositivo
  Tempo médio entre falhas de conectividade
  Tempo médio para restabelecer a ligação após uma perda
```

## Exemplo resolvido

Um programa de monitorização cardíaca remota implanta 1000 dispositivos conectados, de cada um dos quais se espera uma transmissão contínua. Ao longo de um mês de 30 dias (720 horas de monitorização programadas por dispositivo), a frota regista um total combinado de 705 600 horas efetivas em linha face a 720 000 horas programadas, o que dá uma taxa de disponibilidade de dispositivos de toda a frota de 705 600 / 720 000 × 100 = 98%. A análise das causas de raiz das 14 400 horas de indisponibilidade mostra que 60% são atribuíveis a perdas de conectividade celular concentradas numa região de serviço rural específica, 25% a dispositivos com baterias envelhecidas assinalados para substituição, e 15% a pacientes que desligaram temporariamente o seu dispositivo. Esta decomposição aponta para duas intervenções claras e diferentes — uma correção de conectividade para a região afetada e um programa proativo de substituição de baterias — que um único valor agregado de disponibilidade não teria distinguido.

## Fontes de dados e ressalvas

Os dados de disponibilidade provêm do sistema de gestão de dispositivos e de telemetria do fabricante do dispositivo ou do fornecedor da plataforma, que regista eventos de ligação e de pulsação por dispositivo; a organização deve confirmar exatamente o que o fornecedor conta como "em linha" (um dispositivo pode reportar-se como ligado a uma rede enquanto não consegue transmitir dados clínicos válidos, o que deve contar como indisponibilidade para efeitos clínicos mesmo que o painel do próprio fornecedor o apresente como ligado). A disponibilidade deve ser reportada por coorte de dispositivos ou por zona geográfica sempre que o volume o permita, uma vez que a qualidade da conectividade está frequentemente agrupada geograficamente (cobertura celular rural, Wi-Fi de edifícios mais antigos) em vez de distribuída uniformemente por uma população de pacientes, e um valor agregado de toda a frota pode mascarar um problema regional grave e passível de resolução.

## Erros comuns

- **Confundir ligação à rede com transmissão de dados válidos**: um dispositivo pode parecer "ligado" num painel de fornecedor enquanto não consegue transmitir dados clínicos utilizáveis; defina e meça a disponibilidade face à receção efetiva de dados válidos, e não apenas face à conectividade de rede em bruto.
- **Reportar apenas uma média de toda a frota**: isto pode ocultar um problema grave de indisponibilidade, específico de uma zona geográfica ou de uma coorte de dispositivos, que uma média direcionada revelaria e que tem uma correção específica e exequível.
- **Não distinguir a causa de raiz da indisponibilidade**: a indisponibilidade por falha do dispositivo, por conectividade e por fatores do paciente exigem, cada uma, uma intervenção completamente diferente; uma única percentagem de indisponibilidade sem segmentação por causa de raiz não permite agir.
- **Tratar uma lacuna de dados como estabilidade clínica por defeito**: um fluxo de dados em falta de um dispositivo fora de linha deve desencadear uma verificação técnica de conectividade, e não ser silenciosamente interpretado como "sem notícias, boas notícias" quanto ao estado clínico do paciente.

## Fontes

- Continua Design Guidelines / Personal Connected Health Alliance, normas técnicas de interoperabilidade para dispositivos de saúde conectados
- ONC / HealthIT.gov, orientações sobre a implementação e os requisitos técnicos de programas de monitorização remota de pacientes
- Literatura revista por pares sobre a fiabilidade de dispositivos de monitorização remota de pacientes e a completude dos dados, por exemplo estudos publicados na npj Digital Medicine

Ver também: [precisão do encaminhamento da triagem](../precisao-do-encaminhamento-na-triagem/), que depende da receção de dados de dispositivos completos e fiáveis para que seja possível tomar uma decisão de triagem correta logo à partida.
