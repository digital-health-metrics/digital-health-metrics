# Tasa de Adherencia a la Medicación

La tasa de adherencia a la medicación mide en qué medida un paciente toma un medicamento prescrito según las indicaciones, y se expresa con mayor frecuencia como la proporción de días de un período definido en que el paciente tuvo acceso a su medicamento conforme a la prescripción. Es una de las métricas de salud digital de mayores consecuencias, porque la falta de adherencia es frecuente, en gran medida prevenible con el apoyo adecuado, y está directamente vinculada con peores resultados clínicos y mayores costos posteriores, que es precisamente la brecha que las aplicaciones de recordatorio de medicación, los frascos de pastillas inteligentes y los avisos de reposición en farmacia están diseñados para cerrar.

## Por qué importa

Los organismos de salud pública estiman que la falta de adherencia a la medicación para enfermedades crónicas puede alcanzar hasta el 50% en algunas afecciones, y es una de las principales causas prevenibles de hospitalizaciones evitables, progresión de la enfermedad y fracaso terapéutico que se atribuye erróneamente al medicamento en lugar de al uso inconsistente. Las herramientas digitales de adherencia existen específicamente para cerrar esta brecha, por lo que, en cualquier programa que incluya un componente de medicación, la tasa de adherencia suele ser la métrica individual más relevante para la toma de decisiones: se sitúa causalmente aguas arriba de la mejora biométrica, el reingreso y la mayoría de las demás métricas de resultados clínicos que un programa podría informar. Un programa que mejora la participación o la satisfacción sin modificar la adherencia probablemente aún no ha demostrado un mecanismo plausible de beneficio clínico.

## Cómo se calcula

```
Proporción de días cubiertos (PDC) = días del período con medicación
                                      disponible (según los días de
                                      suministro de las dispensaciones) /
                                      días del período de medición × 100

Razón de posesión de medicación (MPR) = total de días de suministro
                                         obtenidos durante el período /
                                         días del período × 100 (puede
                                         superar el 100% con reposiciones
                                         anticipadas; por ello se prefiere
                                         generalmente la PDC)

Un paciente se clasifica típicamente como "adherente" con un umbral de
PDC ≥ 80%, siguiendo la convención de medidas de calidad de uso
generalizado.
```

## Ejemplo resuelto

A un paciente se le prescribe un medicamento crónico diario durante un período de medición de 90 días. Los registros de dispensación de la farmacia muestran que el paciente obtuvo medicación suficiente para cubrir 76 de esos 90 días, con dos interrupciones: una de 9 días tras quedarse sin medicación antes de reponerla, y otra de 5 días en torno a un ingreso hospitalario. La PDC es 76 / 90 × 100 = 84%, que supera el umbral convencional de adherencia del 80%. Si las mismas interrupciones se midieran con la MPR basada en los días de suministro dispensados y no en los días realmente cubiertos, una reposición anticipada en otro momento del período podría elevar la razón por encima del 100%, lo que ilustra por qué la PDC es la medida más conservadora y, en general, preferida.

## Fuentes de datos y advertencias

Los datos de reclamaciones o dispensación de farmacia (ya sea de un administrador de beneficios farmacéuticos o de un sistema de farmacia conectado) son la fuente estándar, ya que reflejan lo que el paciente realmente obtuvo y no lo que se le prescribió; los datos de prescripción por sí solos sobreestiman la adherencia porque no confirman que el paciente haya retirado alguna vez el medicamento. Las herramientas digitales de adherencia —frascos de pastillas inteligentes, sensores ingeribles, inhaladores inteligentes conectados que registran cada activación en afecciones respiratorias como el asma y la EPOC, y los controles basados en aplicaciones— ofrecen datos de mayor resolución sobre si una dosis realmente se tomó, y no solo se obtuvo, pero las utiliza una minoría pequeña y potencialmente no representativa de pacientes, por lo que combinar la adherencia confirmada por dispositivos con la PDC basada en reclamaciones en una población exige cautela en la interpretación. La adherencia debe medirse durante un período lo bastante largo para suavizar las dosis omitidas aisladas, pero lo bastante corto para detectar un descenso significativo antes de que cause daño clínico; las ventanas móviles de 90 días son habituales para los medicamentos crónicos.

## Errores comunes

- **Usar la MPR sin revelar que puede superar el 100%**: las razones superiores al 100% sin explicación, debidas a reposiciones anticipadas o acumulación de existencias, hacen poco fiable la comparación entre pacientes y entre períodos, a menos que se use la PDC o la razón se limite explícitamente.
- **Tratar los datos de prescripción o de pedido como prueba de adherencia**: una prescripción emitida o enviada a una farmacia no dice nada sobre si el paciente retiró o tomó el medicamento; solo los datos de dispensación o de dispositivos cierran esa brecha.
- **Aplicar un único umbral de adherencia a todas las afecciones de forma indiscriminada**: la consecuencia clínica de omitir el 20% de las dosis varía enormemente según la clase de fármaco (por ejemplo, anticoagulantes frente a estatinas), por lo que un único umbral del 80% aplicado universalmente puede subestimar o sobrestimar el riesgo clínico en algunos medicamentos.
- **Ignorar los cambios y las suspensiones de medicación**: un paciente al que se cambia de forma clínicamente apropiada a otro medicamento puede aparecer como una gran caída de adherencia en el medicamento original si el cambio no se tiene en cuenta en el cálculo.

## Fuentes

- Pharmacy Quality Alliance (PQA), especificaciones de la medida de Proporción de Días Cubiertos
- Centers for Medicare & Medicaid Services (CMS), medidas de adherencia a la medicación de las Star Ratings
- Literatura revisada por pares sobre la medición de la adherencia a la medicación y las intervenciones digitales de adherencia, por ejemplo estudios publicados en el Journal of Managed Care & Specialty Pharmacy

Vea también: [tasa de mejora biométrica](../tasa-de-mejora-biométrica/), de la cual la adherencia a la medicación para enfermedades crónicas es un factor determinante principal.
