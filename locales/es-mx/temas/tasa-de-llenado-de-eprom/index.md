# Tasa de Llenado de ePROM

La tasa de llenado de ePROM mide la proporción de medidas electrónicas de resultados reportados por el paciente (ePROM, por sus siglas en inglés) programadas —cuestionarios estandarizados y validados que recogen el relato del propio paciente sobre sus síntomas, su funcionalidad o su calidad de vida, administrados de forma digital en lugar de en papel— que efectivamente se completan. Es tanto una métrica de calidad de los datos como de participación: el valor clínico y de investigación de un programa de PROM depende por completo de que la tasa de llenado sea lo bastante alta para que las respuestas recopiladas sean representativas de toda la población inscrita, y no solo del subconjunto más comprometido o menos sintomático.

## Por qué importa

Los resultados reportados por el paciente son el complemento directo, avalado por el propio paciente, de los datos registrados por el clínico o medidos por dispositivos, y capturan dimensiones de la salud —dolor, funcionalidad, calidad de vida— que una revisión del expediente clínico o una lectura biométrica no pueden captar; la digitalización de la recopilación de PROM existe específicamente para hacer que estos datos sean más baratos y fáciles de recopilar a escala de lo que jamás permitió la administración en papel. Pero un programa de PROM con una tasa de llenado baja corre el riesgo de un sesgo específico y grave: los pacientes que se sienten peor suelen tener menos probabilidades de completar un cuestionario extenso, de modo que una tasa de llenado en descenso puede ser en sí misma una señal temprana de empeoramiento de la salud de la población, y una tasa global baja puede hacer que las respuestas recopiladas parezcan mejores que la experiencia real de la población simplemente porque los pacientes más sintomáticos están subrepresentados en lo que se completa. Por eso la tasa de llenado siempre debe reportarse junto con las propias puntajes de PROM, y no tratarse como un detalle operativo secundario.

## Cómo se calcula

```
Tasa de llenado de ePROM = ePROM completadas en su totalidad /
                                    ePROM enviadas o programadas × 100

reporte por separado para:
  Tasa de llenado inicial     (primer cuestionario de una
                                       secuencia de seguimiento)
  Tasa de llenado longitudinal (cuestionarios posteriores de una
                                       secuencia de seguimiento en curso,
                                       que suele disminuir con el tiempo
                                       y debe rastrearse como tendencia,
                                       no como una cifra única)

Un cuestionario "parcialmente completado" debe definirse e reportarse
por separado tanto de "completado en su totalidad" como de "no
iniciado".
```

## Ejemplo resuelto

Una clínica de oncología envía un ePROM validado de carga de síntomas a 400 pacientes antes de cada visita mensual de seguimiento. En el primer mes, 340 pacientes completan el cuestionario en su totalidad (tasa de llenado del 85%), 30 lo completan parcialmente y 30 no lo inician. Hacia el sexto mes de la misma secuencia de seguimiento, las respuestas completas han bajado a 260 de la misma cohorte de 400 pacientes (65%), un descenso longitudinal significativo que pasaría totalmente inadvertido si solo se reportara la cifra del 85% del primer mes como una métrica global estática. Investigar qué pacientes abandonan (por gravedad de los síntomas, estadio de la enfermedad o edad) puede revelar si el descenso refleja fatiga ante las encuestas, un empeoramiento de los síntomas que dificulta completar el cuestionario o una barrera técnica de acceso.

## Fuentes de datos y advertencias

Los datos de llenado provienen de los propios registros de entrega y respuesta de la plataforma de ePROM, que pueden distinguir los estados "no iniciado", "parcialmente completado" y "completado en su totalidad", una distinción que siempre debe conservarse e reportarse en lugar de reducirse a una cifra binaria de completado/no completado, ya que el llenado parcial suele indicar un punto específico del cuestionario en el que los pacientes tienen dificultades o pierden el interés. La tasa de llenado debe interpretarse junto con la forma en que se entrega el cuestionario (un enlace por mensaje de texto, una notificación de aplicación o un método que requiere iniciar sesión en un portal), ya que la fricción en la entrega afecta por sí misma al llenado, con independencia del contenido del cuestionario o de la afección subyacente del paciente. Siempre debe utilizarse un instrumento validado (en lugar de un conjunto improvisado de preguntas) para el propio PROM, ya que la tasa de llenado de un instrumento no validado no dice nada fiable sobre la utilidad clínica de los datos resultantes, aunque el llenado sea alto.

## Errores comunes

- **Tratar una tasa de llenado en descenso solo como un problema de entrega**: una caída longitudinal del llenado puede reflejar un empeoramiento real de los síntomas de los pacientes (demasiado enfermos para completar la encuesta) y no fatiga ante las encuestas ni un problema técnico, y esta distinción es enormemente importante para la interpretación clínica.
- **Reunir el llenado parcial y el total en una sola categoría**: un cuestionario parcialmente completado representa datos de una calidad significativamente distinta a la de uno completado en su totalidad; infórmelos por separado e investigue en qué punto del flujo del cuestionario tienden los pacientes a abandonarlo.
- **Reportar la tasa de llenado sin reportar el riesgo de sesgo de respuesta**: una tasa de llenado moderada debería motivar una investigación sobre si quienes responden difieren sistemáticamente (en gravedad de los síntomas, edad, alfabetización digital) de quienes no responden, ya que los puntajes de PROM calculados solo a partir de quienes responden pueden tergiversar a la población completa.
- **Usar un cuestionario no validado o de elaboración propia**: la tasa de llenado carece de sentido como señal de calidad de los datos si el instrumento que se completa no ha sido validado clínicamente para la afección y la población que se miden.

## Fuentes

- International Consortium for Health Outcomes Measurement (ICHOM), desarrollo de conjuntos estándar y guías de implementación de PROM
- U.S. Food and Drug Administration (FDA), guías sobre medidas de resultados reportados por el paciente en ensayos clínicos y presentaciones regulatorias
- Literatura revisada por pares sobre la implementación y las tasas de llenado de PROM electrónicas, por ejemplo estudios publicados en Quality of Life Research y el Journal of Medical Internet Research (JMIR)

Vea también: [puntaje neto de promotores del paciente](../puntaje-neto-de-promotores-del-paciente/), una métrica relacionada pero distinta, reportada por el paciente, que mide la satisfacción y no el resultado clínico.
