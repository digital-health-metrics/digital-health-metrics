# Taxa de Desvio das Urgências

A taxa de desvio das urgências (serviço de urgência, SU) mede a proporção de contactos de pacientes tratados por uma ferramenta digital de triagem ou de cuidados virtuais que, sem essa intervenção, teriam plausivelmente resultado numa ida ao SU, mas que foram em vez disso geridos com segurança através de um percurso de menor acuidade — aconselhamento de autocuidado, uma consulta de cuidados de saúde primários, ou uma consulta agendada de atendimento urgente. É um subconjunto específico e de elevado valor da precisão do encaminhamento na triagem (ver esse tópico), centrado inteiramente na utilização evitada do serviço de urgência, que é o resultado mais diretamente associado tanto ao custo dos cuidados de saúde como ao alívio da capacidade do SU.

## Porque é que isto importa

Os serviços de urgência estão entre os contextos de cuidados mais dispendiosos por episódio e são frequentemente utilizados para problemas que poderiam ser geridos com segurança noutro local, pelo que a capacidade de uma ferramenta digital de triagem para redirecionar com segurança os casos apropriados para fora do SU é uma das suas capacidades mais valiosas do ponto de vista comercial e operacional — e uma das mais fáceis de comunicar a um pagador ou a um sistema de saúde que avalie o retorno do investimento na ferramenta. Mas o desvio só tem valor se for seguro: uma ferramenta que desvia agressivamente pacientes do SU à custa de falhar emergências genuínas otimizou o lado errado do compromisso, razão pela qual a taxa de desvio das urgências deve ser sempre reportada juntamente com uma métrica de segurança que acompanhe apresentações de emergência falhadas ou atrasadas entre os pacientes desviados, e não isoladamente como um mero ganho de eficiência.

## Como se calcula

```
Taxa de desvio das urgências = contactos de pacientes redirecionados com
                               segurança do SU para um percurso apropriado
                               de menor acuidade / total de contactos de
                               pacientes avaliados como potencialmente
                               destinados ao SU × 100

"Redirecionado com segurança" exige confirmação, através de seguimento ou
de dados de registos de saúde associados, de que o estado do paciente não
requereu de facto cuidados de emergência dentro de uma janela de
seguimento definida (por exemplo, 72 horas) — uma decisão de desvio não é
validada como segura apenas porque o paciente não foi imediatamente ao SU
depois.

Reportar juntamente com:
  Taxa de emergências falhadas = pacientes desviados que necessitaram de
                                 cuidados de emergência dentro da janela
                                 de seguimento / total de pacientes
                                 desviados × 100
```

## Exemplo resolvido

Um serviço digital de triagem avalia 3000 contactos de pacientes num mês que o seu algoritmo clínico considera potencialmente destinados ao SU na ausência de intervenção. Destes, 1800 são redirecionados para um percurso de menor acuidade (uma taxa de desvio de 60%). O seguimento da coorte desviada às 72 horas, com recurso a dados de registos de saúde associados, revela que 45 dos 1800 pacientes desviados se apresentaram posteriormente num SU dentro dessa janela (uma taxa de emergências falhadas de 45 / 1800 × 100 = 2,5%). Reportar o valor de desvio de 60% sem a taxa de emergências falhadas de 2,5% apresentaria apenas metade do compromisso entre segurança e eficiência que determina efetivamente se o comportamento de desvio da ferramenta está devidamente calibrado.

## Fontes de dados e ressalvas

Confirmar que um paciente desviado não necessitou posteriormente de cuidados de emergência depende de dados associados — os registos do SU do próprio sistema de saúde, uma troca regional de informação de saúde, ou uma chamada ou inquérito estruturado de seguimento do paciente — e um programa de desvio que opere sem qualquer destas fontes de dados não consegue na realidade validar a sua própria segurança, apenas presumi-la com base na ausência de queixa. A taxa de desvio apropriada e a taxa aceitável de emergências falhadas são decisões de política clínica, não puramente estatísticas, e devem ser definidas deliberadamente pela direção clínica, em vez de emergirem como um efeito secundário do limiar que um algoritmo de triagem utilize por defeito. A taxa de desvio deve ser reportada por sintoma de apresentação ou categoria de queixa, uma vez que as taxas de desvio apropriadas variam enormemente consoante a condição (uma laceração menor e uma dor torácica justificam limiares de desvio muito diferentes).

## Erros comuns

- **Reportar a taxa de desvio sem uma métrica de segurança associada de emergências falhadas**: uma taxa de desvio elevada alcançada através da subtriagem de emergências genuínas não é um sucesso; as duas métricas devem ser sempre reportadas em conjunto.
- **Presumir que a ausência de ida ao SU significa que o desvio foi seguro**: um paciente pode apresentar-se no SU de um sistema hospitalar diferente e não associado, ou pode ter um desfecho genuinamente prejudicial sem nunca se apresentar em qualquer SU; validar a segurança através de dados associados ou de seguimento estruturado, e não apenas pela ausência de uma ida ao SU do mesmo sistema.
- **Definir o limiar de desvio puramente para maximizar a taxa de desvio**: um algoritmo ou política afinado para maximizar o desvio sem uma restrição de segurança correspondente trocará a segurança do paciente por um número de eficiência com melhor aspeto.
- **Agregar a taxa de desvio entre todos os tipos de queixa**: as taxas de desvio apropriadas diferem enormemente consoante a queixa de apresentação; uma única taxa agregada não consegue mostrar se a ferramenta está a ter um desempenho seguro e eficaz para as condições clinicamente mais relevantes.

## Fontes

- Agency for Healthcare Research and Quality (AHRQ), investigação sobre a utilização dos serviços de urgência e o redirecionamento apropriado para o contexto de cuidados adequado
- NHS England, orientações sobre o NHS 111 e as normas de segurança e eficácia da triagem digital de atendimento urgente
- Literatura revista por pares sobre os resultados do desvio de urgências através de triagem digital e cuidados virtuais, por exemplo estudos publicados na Annals of Emergency Medicine e na npj Digital Medicine

Ver também: [precisão do encaminhamento na triagem](../precisao-do-encaminhamento-na-triagem/), a métrica de precisão mais abrangente da qual esta é um subconjunto específico e crítico para a segurança.
