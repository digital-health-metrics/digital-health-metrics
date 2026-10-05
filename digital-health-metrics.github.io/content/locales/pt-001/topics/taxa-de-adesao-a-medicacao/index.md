# Taxa de Adesão à Medicação

A taxa de adesão à medicação mede em que medida um paciente toma um medicamento prescrito conforme indicado, sendo mais comummente expressa como a proporção de dias, num período definido, em que o paciente teve acesso à sua medicação conforme prescrito. É uma das métricas de saúde digital mais relevantes, porque a não adesão é frequente, em grande parte evitável com o apoio adequado, e está diretamente associada a piores resultados clínicos e a custos a jusante mais elevados — que é precisamente a lacuna que as aplicações de lembrete de medicação, os frascos de comprimidos inteligentes e os avisos de renovação das farmácias foram concebidos para colmatar.

## Porque é que isto importa

Estima-se, segundo entidades de saúde pública, que a não adesão à medicação para doenças crónicas possa atingir 50% em algumas patologias, e constitui uma das principais causas evitáveis de hospitalizações evitáveis, de progressão da doença e de falência terapêutica, frequentemente atribuída erradamente ao medicamento em vez de à utilização irregular. As ferramentas digitais de adesão existem especificamente para colmatar esta lacuna, pelo que, em qualquer programa que inclua uma componente de medicação, a taxa de adesão é geralmente a métrica mais relevante para a decisão: situa-se, em termos causais, a montante da melhoria biométrica, da readmissão e da maioria das restantes métricas de resultados clínicos que um programa possa reportar. Um programa que melhora o envolvimento ou a satisfação sem alterar a adesão provavelmente ainda não demonstrou um mecanismo plausível de benefício clínico.

## Como se calcula

```
Proporção de Dias Cobertos (PDC) = dias do período com medicação disponível
                                    (com base no fornecimento em dias das
                                    aquisições) / dias do período de
                                    medição × 100

Rácio de Posse de Medicação (MPR) = total de dias de fornecimento obtidos
                                    durante o período / dias do período
                                    × 100 (pode exceder 100% com
                                    renovações antecipadas; por este
                                    motivo, o PDC é geralmente preferido)

Um paciente é tipicamente classificado como "aderente" com um limiar de
PDC ≥ 80%, seguindo a convenção amplamente utilizada nas medidas de
qualidade.
```

## Exemplo resolvido

A um paciente é prescrita uma medicação crónica diária ao longo de um período de medição de 90 dias. Os registos de aquisição na farmácia mostram que o paciente obteve medicação suficiente para cobrir 76 desses 90 dias, com duas interrupções: uma de 9 dias após ficar sem medicação antes de uma renovação, e outra de 5 dias em torno de um internamento hospitalar. O PDC é 76 / 90 × 100 = 84%, o que ultrapassa o limiar convencional de adesão de 80%. Se as mesmas interrupções fossem medidas através do MPR, com base nos dias de fornecimento dispensados em vez dos dias efetivamente cobertos, uma renovação antecipada noutro ponto do período poderia fazer o rácio ultrapassar 100%, ilustrando por que razão o PDC é a medida mais conservadora e geralmente preferida.

## Fontes de dados e ressalvas

Os dados de reclamações ou de aquisição da farmácia (provenientes de um gestor de benefícios farmacêuticos ou de um sistema de farmácia ligado) são a fonte habitual, uma vez que refletem o que o paciente efetivamente obteve e não o que lhe foi prescrito; os dados de prescrição, por si sós, sobrestimam a adesão, porque não confirmam que o paciente alguma vez tenha levantado a medicação. As ferramentas digitais de adesão — frascos de comprimidos inteligentes, sensores ingeríveis, inaladores inteligentes ligados que registam cada atuação em doenças respiratórias como a asma e a DPOC, e verificações através de aplicações — oferecem dados de maior resolução sobre se uma dose foi efetivamente tomada, e não apenas obtida, mas são utilizadas por uma minoria reduzida e potencialmente não representativa de pacientes, pelo que a combinação da adesão confirmada por dispositivos com o PDC baseado em reclamações numa população exige cuidado na interpretação. A adesão deve ser medida durante um período suficientemente longo para atenuar falhas isoladas de doses, mas suficientemente curto para detetar um declínio significativo antes de este causar dano clínico — as janelas móveis de 90 dias são comuns para medicamentos crónicos.

## Erros comuns

- **Utilizar o MPR sem divulgar que pode exceder 100%**: rácios superiores a 100% sem explicação, resultantes de renovações antecipadas ou de acumulação de reservas, tornam pouco fiável a comparação entre pacientes e entre períodos, a menos que se utilize o PDC ou que o rácio seja explicitamente limitado.
- **Tratar os dados de prescrição ou de pedido como prova de adesão**: uma prescrição emitida ou enviada para uma farmácia nada diz sobre se o paciente levantou ou tomou a medicação; apenas os dados de aquisição ou de dispositivos colmatam essa lacuna.
- **Aplicar indiscriminadamente um único limiar de adesão a todas as patologias**: a consequência clínica de falhar 20% das doses varia enormemente consoante a classe de fármaco (por exemplo, anticoagulantes versus estatinas), pelo que um único limiar de 80% utilizado universalmente pode subestimar ou sobrestimar o risco clínico para alguns medicamentos.
- **Ignorar as mudanças e as descontinuações de medicação**: um paciente que é, clínica e adequadamente, mudado para um medicamento diferente pode surgir como uma grande quebra de adesão ao medicamento original, se a mudança não for tida em conta no cálculo.

## Fontes

- Pharmacy Quality Alliance (PQA), especificações da medida Proportion of Days Covered
- Centers for Medicare & Medicaid Services (CMS), medidas de adesão à medicação das Star Ratings
- Literatura revista por pares sobre a medição da adesão à medicação e as intervenções digitais de adesão, por exemplo estudos publicados no Journal of Managed Care & Specialty Pharmacy

Ver também: [taxa de melhoria biométrica](../taxa-de-melhoria-biometrica/), da qual a adesão à medicação para doenças crónicas é um dos principais determinantes.
