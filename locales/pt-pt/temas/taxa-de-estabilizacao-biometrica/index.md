# Taxa de Estabilização Biométrica

A taxa de estabilização biométrica é a proporção de pacientes inscritos que alcançam e mantêm um intervalo-alvo clinicamente definido para uma medida biométrica — mais comummente a pressão arterial abaixo de um limiar como 130/80 mmHg — utilizando um dispositivo de monitorização conectado, ao longo de um período prolongado e não num único momento. É distinta da taxa de melhoria biométrica (ver esse tema): a melhoria mede a dimensão de uma alteração face ao valor de base, ao passo que a estabilização mede se um paciente está a ser mantido de forma fiável dentro de um intervalo seguro depois de o tratamento ou a monitorização terem começado, que é o resultado que mais importa para os pacientes que já se encontram próximo do objetivo ou que já estão em tratamento.

## Porque é que isto importa

Para uma grande parte dos pacientes em programas de doenças crónicas — em particular na hipertensão, onde os objetivos de pressão arterial das normas de orientação clínica estão bem estabelecidos e diretamente associados ao risco cardiovascular — o objetivo clínico não é uma melhoria pontual, mas um controlo sustentado, e um paciente que oscila para dentro e para fora do intervalo-alvo apresenta um risco materialmente diferente do de um que melhora uma vez e se mantém. Os dispositivos conectados (braçadeiras de pressão arterial celulares, monitores contínuos de glicose) tornam possível medir a estabilização de forma contínua e não apenas nas consultas, revelando pacientes cujas leituras em consultório parecem controladas mas cujas leituras no domicílio são instáveis — um padrão conhecido como hipertensão mascarada, que a medição presencial periódica por si só não consegue detetar. Reportar a taxa de estabilização, em vez de apenas um único retrato de "no objetivo", obriga um programa a confrontar-se com a consistência — e não apenas a frequência — com que mantém os pacientes dentro do intervalo.

## Como se calcula

```
Taxa de estabilização biométrica = pacientes com ≥ 80% das leituras
                                    dentro do intervalo-alvo durante o
                                    período de medição / pacientes com um
                                    número mínimo de leituras válidas
                                    nesse período × 100

Exemplos de limiares:
  Pressão arterial — objetivo < 130/80 mmHg (ou o limiar aplicável da
                     norma de orientação clínica para o perfil de risco
                     do paciente)
  Glicose          — intervalo-alvo segundo as orientações de
                     monitorização contínua da glicose, reportado como
                     "tempo no intervalo"

Deve ser definido um limiar mínimo de frequência de leituras (por
exemplo, pelo menos 3 leituras por semana) antes de um paciente ser
incluído no denominador, para evitar que pacientes que fazem poucas
leituras pareçam artificialmente estáveis.
```

## Exemplo resolvido

Um programa de monitorização remota da hipertensão inscreve 600 pacientes com braçadeiras de pressão arterial celulares, de cada um dos quais se espera pelo menos 3 leituras por semana. Destes, 540 cumprem o limiar mínimo de frequência de leituras ao longo de um período de medição de 3 meses e são incluídos no denominador. Desses 540, 350 têm pelo menos 80% das suas leituras abaixo de 130/80 mmHg, o que dá uma taxa de estabilização biométrica de 350 / 540 × 100 = 65%. Os 60 pacientes excluídos por leituras insuficientes são reportados separadamente como uma lacuna de completude dos dados, e não incluídos nem no numerador nem no grupo "não estabilizado", uma vez que o seu verdadeiro estado de controlo é genuinamente desconhecido e não mau.

## Fontes de dados e ressalvas

As leituras provêm diretamente do fluxo de dados do próprio dispositivo conectado, que é mais objetivo e muito mais frequente do que a medição em consultório, mas os erros de colocação e de técnica do dispositivo (uma braçadeira de pressão arterial de tamanho incorreto ou mal posicionada) podem introduzir um enviesamento sistemático que uma única leitura de validação em consultório não detetará necessariamente. A escolha do intervalo-alvo deve seguir a norma de orientação clínica atualmente aplicável ao perfil de risco e às comorbilidades específicos do paciente, e não um único limiar universal, uma vez que os objetivos das normas de orientação diferem consoante a idade do paciente, a função renal e o risco cardiovascular. Um paciente com baixa frequência de leituras nunca deve ser silenciosamente contado como "estável" por defeito; excluí-lo do denominador, com reporte transparente da exclusão, é mais honesto do que contá-lo como controlado ou não controlado com base em dados insuficientes.

## Erros comuns

- **Tratar uma única leitura dentro do intervalo como estabilização**: a estabilização diz respeito a um controlo sustentado ao longo de um período definido, não a um retrato pontual; exija sempre uma proporção mínima de leituras dentro do intervalo ao longo desse período, e não uma única medição que cumpra o critério.
- **Excluir silenciosamente os pacientes que fazem poucas leituras sem o reportar**: os pacientes que raramente fazem leituras não são automaticamente estáveis ou instáveis; exclua-os de forma transparente do denominador e reporte a taxa de exclusão como uma métrica separada de completude dos dados.
- **Ignorar a calibração do dispositivo e os erros de técnica**: uma braçadeira mal ajustada ou um dispositivo não calibrado pode enviesar sistematicamente as leituras num sentido, algo que uma taxa de estabilização calculada de forma ingénua a partir de dados brutos do dispositivo não detetará sem validação periódica.
- **Utilizar um único intervalo-alvo universal para todos os pacientes**: os objetivos das normas de orientação clínica variam consoante o perfil de risco e a comorbilidade do paciente; aplicar um único limiar geral a uma população clinicamente heterogénea classificará erradamente alguns pacientes como estabilizados ou não estabilizados em relação ao seu objetivo individualizado real.

## Fontes

- American Heart Association (AHA) / American College of Cardiology (ACC), objetivos de pressão arterial das normas de orientação clínica e orientações sobre a monitorização da pressão arterial no domicílio
- International Diabetes Federation e American Diabetes Association (ADA), orientações de consenso sobre o "tempo no intervalo" da monitorização contínua da glicose
- Literatura revista por pares sobre monitorização biométrica remota e controlo sustentado de condições, por exemplo estudos publicados na npj Digital Medicine

Ver também: [taxa de melhoria biométrica](../taxa-de-melhoria-biometrica/), a métrica relacionada com a dimensão da alteração face ao valor de base, por oposição ao controlo sustentado depois de atingido um objetivo.
