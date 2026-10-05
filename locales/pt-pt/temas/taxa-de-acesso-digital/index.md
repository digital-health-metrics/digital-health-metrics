# Taxa de Acesso Digital

A taxa de acesso digital mede a proporção de uma população de pacientes elegíveis que tem os meios práticos para utilizar sequer um produto de saúde digital: uma ligação de banda larga ou de dados móveis fiável, um dispositivo com capacidade de acesso à internet e uma conta ativa no portal ou na aplicação do paciente relevante. É a métrica de pré-condição para todas as outras medidas de saúde digital neste livro — uma população não pode registar-se em, envolver-se com ou beneficiar de qualquer produto de saúde digital a que estruturalmente não consegue chegar, por muito bem concebido que esse produto seja.

## Porque é que isto importa

As métricas de adoção e de envolvimento na saúde digital pressupõem implicitamente uma população que já tem acesso digital, e reportar taxas de adoção ou de envolvimento sem estabelecer primeiro a taxa de acesso subjacente arrisca excluir discretamente os pacientes com menor probabilidade de ter esse acesso — que são frequentemente também os pacientes com maior necessidade de saúde. O Digital Health Equity Measurement Framework (DHEMF) da HIMSS e quadros semelhantes tratam o acesso digital como uma métrica de equidade fundamental e de primeira ordem precisamente porque as intervenções construídas sem ter em conta as lacunas de acesso tendem a reforçar, em vez de reduzir, as disparidades de saúde existentes: uma estratégia que privilegie a telessaúde pode inadvertidamente reduzir o acesso aos cuidados para os pacientes sem uma ligação ou um dispositivo fiável, mesmo enquanto melhora de forma mensurável a experiência dos pacientes que já tinham ambos. A taxa de acesso digital deve ser acompanhada e reportada por segmento demográfico e geográfico, uma vez que as médias nacionais ou de toda a organização mascaram rotineiramente grandes lacunas para populações específicas.

## Como se calcula

```
Taxa de acesso digital = pacientes com conectividade de banda larga/móvel
                          E um dispositivo com acesso à internet E uma
                          conta ativa no portal ou na aplicação do paciente /
                          população total de pacientes elegíveis × 100

Reportar cada subcomponente separadamente, bem como a taxa combinada:
  Taxa de conectividade       = pacientes com uma ligação à internet fiável /
                                 população elegível × 100
  Taxa de posse de dispositivo = pacientes com um dispositivo com acesso à
                                 internet / população elegível × 100
  Taxa de ativação do portal   = pacientes com uma conta ativa no portal/
                                 aplicação / população elegível × 100 (ver
                                 taxa de adoção do portal do paciente para o
                                 funil de adoção mais completo)
```

## Exemplo resolvido

Um sistema de saúde serve uma população elegível de 40 000 pacientes. Um inquérito aos pacientes e dados de infraestrutura indicam que 34 000 (85%) têm conectividade de banda larga ou móvel fiável, 33 000 (82,5%) têm um dispositivo com acesso à internet e, dos pacientes que cumprem ambas as condições, 27 000 (67,5% da população elegível total) têm uma conta ativa no portal do paciente. A desagregação por idade mostra que os pacientes com 65 anos ou mais têm uma taxa de acesso digital combinada de apenas 48%, em comparação com 78% para os pacientes com menos de 65 anos — uma lacuna que a média de 67,5% de toda a organização oculta por completo, e que deve informar diretamente se um determinado serviço pode ser oferecido com segurança apenas em formato digital a esta população.

## Fontes de dados e ressalvas

Os dados de conectividade e de posse de dispositivos provêm tipicamente de uma combinação de autorreporte do paciente (através de um inquérito ou de um questionário de admissão), de dados de mapeamento da disponibilidade de banda larga da Federal Communications Commission (FCC) ou equivalente nacional para a zona geográfica do paciente, e de dados de ativação do portal dos sistemas da própria organização. A disponibilidade de banda larga ao nível da zona (se um operador oferece serviço num determinado código postal) é um indicador menos fiável do que a conectividade ao nível do agregado familiar, uma vez que os dados de disponibilidade ao nível da zona nada dizem sobre se um paciente específico pode efetivamente pagar ou optou por subscrever esse serviço — as taxas de acesso ao nível da zona e ao nível do agregado familiar não devem ser confundidas. O acesso a dispositivos e à conectividade pode também ser partilhado dentro de um agregado familiar (por exemplo, um smartphone utilizado por vários membros da família), o que os dados de inquéritos ao nível do agregado captam melhor do que os dados individuais de início de sessão no portal por si sós.

## Erros comuns

- **Reportar apenas uma média de toda a organização**: isto oculta de forma fiável grandes lacunas de acesso para segmentos de pacientes mais idosos, de menores rendimentos, rurais ou de outra forma digitalmente marginalizados; desagregue sempre por segmento demográfico e geográfico.
- **Confundir a disponibilidade de banda larga ao nível da zona com o acesso efetivo do agregado familiar**: um código postal ser "servido" por um operador de banda larga não significa que todos os agregados familiares nele subscrevam ou possam pagar esse serviço.
- **Tratar a posse de dispositivos como um facto estático e pontual**: o acesso a dispositivos pode ser transitório (um dispositivo envelhecido, um telemóvel perdido ou danificado, um dispositivo familiar partilhado e reatribuído), pelo que a taxa de acesso deve ser medida de forma recorrente, e não presumida estável depois de avaliada uma vez.
- **Conceber um percurso exclusivamente digital antes de estabelecer a taxa de acesso da população afetada**: passar um serviço para um formato exclusivamente digital sem confirmar primeiro a taxa efetiva de acesso digital da população-alvo arrisca excluir silenciosamente precisamente os pacientes com menor capacidade de chegar a um canal alternativo.

## Fontes

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), dados nacionais de disponibilidade de banda larga e de equidade digital
- Pew Research Center, investigação sobre o acesso à internet, à banda larga e a dispositivos e sobre as tendências da divisão digital entre grupos demográficos

Ver também: [taxa de literacia digital](../taxa-de-literacia-digital/), a métrica estreitamente relacionada de saber se os pacientes que têm acesso o conseguem utilizar eficazmente.
