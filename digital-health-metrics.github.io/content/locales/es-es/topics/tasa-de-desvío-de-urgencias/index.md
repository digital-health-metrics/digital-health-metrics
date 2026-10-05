# Tasa de Desvío de Urgencias

La tasa de desvío de urgencias (servicio de urgencias, SU) mide la proporción de contactos con pacientes atendidos por una herramienta de triaje digital o de atención virtual que plausiblemente habrían derivado en una visita a urgencias sin esa intervención, pero que en cambio se manejaron de forma segura a través de una vía de menor gravedad: consejos de autocuidado, una cita de atención primaria o una visita programada a atención de urgencia. Es un subconjunto específico y de alto valor de la precisión del enrutamiento de triaje (véase ese tema), centrado por completo en la utilización evitada del servicio de urgencias, que es el resultado más directamente vinculado tanto con el costo de la atención como con el alivio de la capacidad de urgencias.

## Por qué importa

Los servicios de urgencias se cuentan entre los entornos asistenciales más costosos por encuentro y se utilizan con frecuencia para problemas que podrían manejarse de forma segura en otro lugar, por lo que la capacidad de una herramienta de triaje digital para redirigir de forma segura los casos apropiados lejos de urgencias es una de sus capacidades más valiosas desde el punto de vista comercial y operativo, y una de las más fáciles de comunicar a un pagador o sistema de salud que evalúa el retorno de la inversión de la herramienta. Pero el desvío solo tiene valor si es seguro: una herramienta que desvía agresivamente a los pacientes lejos de urgencias a costa de pasar por alto emergencias genuinas ha optimizado por completo el lado equivocado del equilibrio, y por eso la tasa de desvío de urgencias siempre debe informarse junto con una métrica de seguridad que rastree las presentaciones de emergencia omitidas o retrasadas entre los pacientes desviados, y no de forma aislada como un puro logro de eficiencia.

## Cómo se calcula

```
Tasa de desvío de urgencias = contactos de pacientes redirigidos de forma
                               segura fuera de urgencias hacia una vía de
                               menor gravedad apropiada / total de
                               contactos de pacientes evaluados como
                               potencialmente destinados a urgencias × 100

"Redirigido de forma segura" requiere la confirmación, mediante
seguimiento o datos vinculados de la historia clínica, de que la
afección del paciente en realidad no requirió atención de emergencia
dentro de una ventana de seguimiento definida (p. ej., 72 horas); una
decisión de desvío no se valida como segura simplemente porque el
paciente no acudió de inmediato a urgencias después.

Informe junto con:
  Tasa de emergencias omitidas = pacientes desviados que sí requirieron
                                  atención de emergencia dentro de la
                                  ventana de seguimiento / total de
                                  pacientes desviados × 100
```

## Ejemplo resuelto

Un servicio de triaje digital evalúa 3.000 contactos de pacientes en un mes que su algoritmo clínico juzga como potencialmente destinados a urgencias en ausencia de intervención. De ellos, 1.800 se redirigen a una vía de menor gravedad (una tasa de desvío del 60%). El seguimiento de la cohorte desviada a las 72 horas, mediante datos vinculados de la historia clínica, revela que 45 de los 1.800 pacientes desviados sí acudieron posteriormente a un servicio de urgencias dentro de esa ventana (una tasa de emergencias omitidas de 45 / 1.800 × 100 = 2,5%). Informar la cifra de desvío del 60% sin la tasa de emergencias omitidas del 2,5% presentaría solo la mitad del equilibrio entre seguridad y eficiencia que realmente determina si el comportamiento de desvío de la herramienta está calibrado de forma adecuada.

## Fuentes de datos y advertencias

Confirmar que un paciente desviado no requirió posteriormente atención de emergencia depende de datos vinculados —ya sean los registros de urgencias del propio sistema de salud, un intercambio regional de información de salud o una llamada o encuesta estructurada de seguimiento al paciente—, y un programa de desvío que opere sin ninguna de estas fuentes de datos no puede validar realmente su propia seguridad, solo suponerla a partir de la ausencia de quejas. La tasa de desvío apropiada y la tasa aceptable de emergencias omitidas son decisiones de política clínica, no puramente estadísticas, y deben ser establecidas deliberadamente por la dirección clínica en lugar de surgir como un efecto secundario del umbral que un algoritmo de triaje utilice por defecto. La tasa de desvío debe informarse por síntoma de presentación o categoría de motivo de consulta, ya que las tasas de desvío apropiadas varían enormemente según la afección (una laceración leve frente a un dolor torácico justifican umbrales de desvío muy distintos).

## Errores comunes

- **Informar la tasa de desvío sin una métrica de seguridad vinculada de emergencias omitidas**: una tasa de desvío alta lograda mediante el subtriaje de emergencias genuinas no es un éxito; ambas métricas siempre deben informarse juntas.
- **Suponer que la ausencia de una visita a urgencias significa que el desvío fue seguro**: un paciente puede acudir a urgencias de otro sistema hospitalario no vinculado, o puede tener un desenlace realmente perjudicial sin acudir nunca a ningún servicio de urgencias; valide la seguridad mediante datos vinculados o seguimiento estructurado, y no solo por la ausencia de una visita a urgencias del mismo sistema.
- **Establecer el umbral de desvío con el único fin de maximizar la tasa de desvío**: un algoritmo o una política ajustados para maximizar el desvío sin una restricción de seguridad equivalente sacrificarán la seguridad del paciente a cambio de una cifra de eficiencia más atractiva.
- **Combinar la tasa de desvío de todos los tipos de motivo de consulta**: las tasas de desvío apropiadas difieren enormemente según el motivo de consulta; una única tasa combinada no puede mostrar si la herramienta funciona de forma segura y efectiva para las afecciones que más importan desde el punto de vista clínico.

## Fuentes

- Agency for Healthcare Research and Quality (AHRQ), investigación sobre la utilización de los servicios de urgencias y la redirección apropiada hacia otros entornos asistenciales
- NHS England, guías sobre los estándares de seguridad y efectividad del NHS 111 y del triaje digital de atención de urgencia
- Literatura revisada por pares sobre los resultados del desvío de urgencias mediante triaje digital y atención virtual, por ejemplo estudios publicados en Annals of Emergency Medicine y npj Digital Medicine

Vea también: [precisión del enrutamiento de triaje](../precisión-del-enrutamiento-de-triaje/), la métrica de precisión más amplia de la que esta es un subconjunto específico y crítico para la seguridad.
