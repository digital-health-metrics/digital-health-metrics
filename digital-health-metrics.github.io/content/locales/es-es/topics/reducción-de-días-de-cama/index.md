# Reducción de Días de Cama

La reducción de días de cama mide el número total de días de cama de hospitalización evitados al trasladar un episodio de atención definido —con mayor frecuencia la recuperación posquirúrgica o el manejo de una afección aguda— desde una estancia hospitalaria tradicional hacia una alternativa con apoyo digital, como una sala virtual o un programa de hospitalización a domicilio. Es la métrica principal de capacidad para las iniciativas de salas virtuales y de hospitalización a domicilio, pues traduce un cambio en el modelo de atención clínica directamente a la moneda (capacidad de camas) con la que las operaciones hospitalarias y los planificadores del sistema gestionan realmente su trabajo.

## Por qué importa

La capacidad de camas de hospitalización es uno de los recursos más limitados y costosos de cualquier sistema hospitalario, y la propuesta de valor central de una sala virtual o de un programa de hospitalización a domicilio es que puede prestar con seguridad un nivel definido de atención clínica sin ocupar una cama física, liberando esa capacidad para pacientes que no pueden ser atendidos de ninguna otra manera. La reducción de días de cama convierte una afirmación a menudo abstracta ("este programa mejora la atención") en una cifra operativa concreta sobre la que los planificadores de capacidad hospitalaria, los equipos de finanzas y los comisionados pueden actuar directamente: puede utilizarse para modelar si la inversión en un programa de monitoreo se amortiza mediante los costos de cama evitados, y en qué medida. Dado que la reducción de días de cama solo tiene valor si se mantiene la seguridad del paciente, siempre debe informarse junto con una métrica de resultado de seguridad (como la tasa de reingreso o la de escalamiento a atención hospitalaria) para la misma población, y nunca en su lugar.

## Cómo se calcula

```
Reducción de días de cama = días de cama esperados con atención
                             hospitalaria estándar (según datos
                             históricos de duración de la estancia de una
                             cohorte de pacientes equiparable) − días de
                             cama realmente utilizados por los pacientes
                             en la vía virtual/digital

Se informa por vía clínica (p. ej., recuperación posquirúrgica,
exacerbación respiratoria aguda), ya que la duración esperada de la
estancia varía enormemente según la afección y una cifra combinada de
vías no relacionadas carece de significado.
```

## Ejemplo resuelto

Los datos históricos de un hospital muestran que los pacientes que se recuperan de un procedimiento quirúrgico electivo específico tienen una estancia hospitalaria promedio de 4 días. Un programa de sala virtual incorpora a 150 pacientes que se recuperan del mismo procedimiento y les da el alta tras un promedio de 1,5 días de hospitalización, mientras el resto de la recuperación se monitorea a distancia. La reducción de días de cama es (4 − 1,5) × 150 = 375 días de cama durante el período de medición. Esta cifra debe informarse junto con la tasa de escalamiento a atención hospitalaria a 30 días y la tasa de reingreso de la cohorte de la sala virtual para esos mismos 150 pacientes, ya que un ahorro de días de cama a costa de una tasa de escalamiento o de reingreso sensiblemente mayor no es el logro clínico que sugeriría la cifra principal.

## Fuentes de datos y advertencias

Los días de cama esperados requieren una línea de base histórica creíble, idealmente de una cohorte de pacientes equiparable tratada con atención hospitalaria estándar y con características clínicas similares (edad, comorbilidad, tipo de procedimiento, gravedad) a las de la población de la sala virtual, pues comparar con un promedio histórico no equiparado corre el riesgo de sobrestimar o subestimar la reducción real si la cohorte gestionada digitalmente es sistemáticamente más sana o más enferma que el grupo histórico de comparación. Los días de cama realmente utilizados en la vía digital provienen del propio sistema de admisión, alta y traslado (ADT) del hospital; cualquier escalamiento de vuelta a atención hospitalaria durante el período de recuperación monitoreada debe contabilizarse con honestidad en contra del programa (como días de cama utilizados, no excluidos), ya que excluir los escalamientos del cálculo inflaría artificialmente la reducción aparente.

## Errores comunes

- **Informar la reducción de días de cama sin una comparación de seguridad equiparable**: una sala virtual que ahorra días de cama pero presenta una tasa de escalamiento o de reingreso sensiblemente peor que la atención estándar no ha demostrado una mejora genuina; siempre deben informarse ambas cifras juntas.
- **Usar una línea de base histórica no equiparada u obsoleta**: comparar con una cohorte histórica con distinta combinación de casos, carga de comorbilidad o época de práctica clínica puede sobrestimar o subestimar de forma significativa el ahorro real de días de cama.
- **Excluir del cálculo los escalamientos de vuelta a atención hospitalaria**: un paciente monitoreado virtualmente que luego es trasladado a una cama de hospitalización a mitad de su recuperación debe tener esos días de cama contabilizados en contra del programa, y no omitidos silenciosamente del análisis.
- **Combinar vías con duraciones esperadas de estancia muy distintas**: agregar la reducción de días de cama de vías clínicamente no relacionadas (por ejemplo, combinar la recuperación posquirúrgica y el manejo respiratorio crónico) en una sola cifra oculta qué vía específica es la que realmente genera el ahorro.

## Fuentes

- NHS England, guías de programas de salas virtuales y hospitalización a domicilio y estándares de informe del impacto en días de cama
- Literatura revisada por pares sobre los modelos de hospitalización a domicilio y de salas virtuales, por ejemplo estudios publicados en JAMA Internal Medicine y npj Digital Medicine
- Institute for Healthcare Improvement (IHI), guías sobre gestión de la capacidad y modelos alternativos de atención

Vea también: [tasa de reingreso hospitalario](../tasa-de-reingreso-hospitalario/), la métrica de seguridad que siempre debe informarse junto con cualquier afirmación de reducción de días de cama para la misma población de pacientes.
