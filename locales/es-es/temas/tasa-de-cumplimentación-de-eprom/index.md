# Tasa de Cumplimentación de ePROM

La tasa de cumplimentación de ePROM mide la proporción de medidas electrónicas de resultados informados por el paciente (ePROM, por sus siglas en inglés) programadas —cuestionarios estandarizados y validados que recogen el relato del propio paciente sobre sus síntomas, su funcionalidad o su calidad de vida, administrados de forma digital en lugar de en papel— que efectivamente se completan. Es tanto una métrica de calidad de los datos como de participación: el valor clínico y de investigación de un programa de PROM depende por completo de que la tasa de cumplimentación sea lo bastante alta para que las respuestas recogidas sean representativas de toda la población inscrita, y no solo del subconjunto más comprometido o menos sintomático.

## Por qué importa

Los resultados informados por el paciente son el complemento directo, avalado por el propio paciente, de los datos registrados por el clínico o medidos por dispositivos, y capturan dimensiones de la salud —dolor, funcionalidad, calidad de vida— que una revisión de la historia clínica o una lectura biométrica no pueden captar; la digitalización de la recogida de PROM existe específicamente para hacer que estos datos sean más baratos y fáciles de recopilar a escala de lo que jamás permitió la administración en papel. Pero un programa de PROM con una tasa de cumplimentación baja corre el riesgo de un sesgo específico y grave: los pacientes que se sienten peor suelen tener menos probabilidades de completar un cuestionario extenso, de modo que una tasa de cumplimentación en descenso puede ser en sí misma una señal temprana de empeoramiento de la salud de la población, y una tasa global baja puede hacer que las respuestas recogidas parezcan mejores que la experiencia real de la población simplemente porque los pacientes más sintomáticos están subrepresentados en lo que se completa. Por eso la tasa de cumplimentación siempre debe informarse junto con las propias puntuaciones de PROM, y no tratarse como un detalle operativo secundario.

## Cómo se calcula

```
Tasa de cumplimentación de ePROM = ePROM completadas en su totalidad /
                                    ePROM enviadas o programadas × 100

Informe por separado para:
  Tasa de cumplimentación inicial     (primer cuestionario de una
                                       secuencia de seguimiento)
  Tasa de cumplimentación longitudinal (cuestionarios posteriores de una
                                       secuencia de seguimiento en curso,
                                       que suele disminuir con el tiempo
                                       y debe rastrearse como tendencia,
                                       no como una cifra única)

Un cuestionario "parcialmente completado" debe definirse e informarse
por separado tanto de "completado en su totalidad" como de "no
iniciado".
```

## Ejemplo resuelto

Una clínica de oncología envía un ePROM validado de carga de síntomas a 400 pacientes antes de cada visita mensual de seguimiento. En el primer mes, 340 pacientes completan el cuestionario en su totalidad (tasa de cumplimentación del 85%), 30 lo completan parcialmente y 30 no lo inician. Hacia el sexto mes de la misma secuencia de seguimiento, las respuestas completas han bajado a 260 de la misma cohorte de 400 pacientes (65%), un descenso longitudinal significativo que pasaría totalmente inadvertido si solo se informara la cifra del 85% del primer mes como una métrica global estática. Investigar qué pacientes abandonan (por gravedad de los síntomas, estadio de la enfermedad o edad) puede revelar si el descenso refleja fatiga ante las encuestas, un empeoramiento de los síntomas que dificulta completar el cuestionario o una barrera técnica de acceso.

## Fuentes de datos y advertencias

Los datos de cumplimentación provienen de los propios registros de entrega y respuesta de la plataforma de ePROM, que pueden distinguir los estados "no iniciado", "parcialmente completado" y "completado en su totalidad", una distinción que siempre debe conservarse e informarse en lugar de reducirse a una cifra binaria de completado/no completado, ya que la cumplimentación parcial suele indicar un punto específico del cuestionario en el que los pacientes tienen dificultades o pierden el interés. La tasa de cumplimentación debe interpretarse junto con la forma en que se entrega el cuestionario (un enlace por mensaje de texto, una notificación de aplicación o un método que requiere iniciar sesión en un portal), ya que la fricción en la entrega afecta por sí misma a la cumplimentación, con independencia del contenido del cuestionario o de la afección subyacente del paciente. Siempre debe utilizarse un instrumento validado (en lugar de un conjunto improvisado de preguntas) para el propio PROM, ya que la tasa de cumplimentación de un instrumento no validado no dice nada fiable sobre la utilidad clínica de los datos resultantes, aunque la cumplimentación sea alta.

## Errores comunes

- **Tratar una tasa de cumplimentación en descenso solo como un problema de entrega**: una caída longitudinal de la cumplimentación puede reflejar un empeoramiento real de los síntomas de los pacientes (demasiado enfermos para completar la encuesta) y no fatiga ante las encuestas ni un problema técnico, y esta distinción es enormemente importante para la interpretación clínica.
- **Reunir la cumplimentación parcial y la total en una sola categoría**: un cuestionario parcialmente completado representa datos de una calidad significativamente distinta a la de uno completado en su totalidad; infórmelos por separado e investigue en qué punto del flujo del cuestionario tienden los pacientes a abandonarlo.
- **Informar la tasa de cumplimentación sin informar el riesgo de sesgo de respuesta**: una tasa de cumplimentación moderada debería motivar una investigación sobre si quienes responden difieren sistemáticamente (en gravedad de los síntomas, edad, alfabetización digital) de quienes no responden, ya que las puntuaciones de PROM calculadas solo a partir de quienes responden pueden tergiversar a la población completa.
- **Usar un cuestionario no validado o de elaboración propia**: la tasa de cumplimentación carece de sentido como señal de calidad de los datos si el instrumento que se completa no ha sido validado clínicamente para la afección y la población que se miden.

## Fuentes

- International Consortium for Health Outcomes Measurement (ICHOM), desarrollo de conjuntos estándar y guías de implementación de PROM
- U.S. Food and Drug Administration (FDA), guías sobre medidas de resultados informados por el paciente en ensayos clínicos y presentaciones regulatorias
- Literatura revisada por pares sobre la implementación y las tasas de cumplimentación de PROM electrónicas, por ejemplo estudios publicados en Quality of Life Research y el Journal of Medical Internet Research (JMIR)

Vea también: [puntuación neta de promotores del paciente](../puntuación-neta-de-promotores-del-paciente/), una métrica relacionada pero distinta, informada por el paciente, que mide la satisfacción y no el resultado clínico.
