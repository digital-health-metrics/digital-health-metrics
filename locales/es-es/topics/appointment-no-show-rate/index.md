# Tasa de Inasistencia a Citas

La tasa de inasistencia a citas (también llamada tasa "did not attend", o DNA) es la proporción de citas programadas en las que el paciente ni asistió ni canceló con un aviso razonable. Es una de las métricas operativas más antiguas de la atención sanitaria, y las herramientas digitales —en particular los recordatorios, la reprogramación de autoservicio y la reserva a través del portal— se encuentran hoy entre las palancas más efectivas y mejor respaldadas por evidencia para reducirla.

## Por qué importa

Cada inasistencia es una unidad de capacidad clínica que normalmente no se puede recuperar, ya que la mayoría de los servicios no pueden llenar un hueco del mismo día con poco aviso, por lo que la tasa influye directamente en la duración de las listas de espera, el costo por cita completada y el tiempo clínico perdido. El comportamiento de inasistencia no se distribuye de forma uniforme: se correlaciona con la privación, el acceso al transporte, las responsabilidades de cuidado y la carga de gestionar múltiples afecciones a largo plazo, por lo que tratar una tasa alta puramente como un problema de comportamiento del paciente, en lugar de en parte como una señal de barreras de acceso, tiende a producir intervenciones (como sanciones generalizadas) que arraigan la inequidad en lugar de reducirla. Los recordatorios digitales y la reprogramación digital sencilla se encuentran de forma consistente entre las intervenciones más efectivas y de menor costo disponibles, y por eso esta métrica pertenece de pleno derecho a un programa de medición de salud digital y no solo a los informes operativos.

## Cómo se calcula

```
Tasa de inasistencia = citas marcadas como "no asistió" / total de citas programadas × 100
```

Una cita programada normalmente se excluye del denominador, o se traslada a una categoría distinta, si fue cancelada por cualquiera de las partes con más de un período de aviso definido (comúnmente 24 horas). Las cancelaciones tardías (por debajo de ese período de aviso) suelen informarse por separado de las inasistencias reales, ya que las implicaciones operativas y de comportamiento difieren.

## Ejemplo resuelto

Una clínica comunitaria programa 2.000 citas en un mes. De ellas, 140 se cancelan con más de 24 horas de aviso (se reprograman y se excluyen del denominador), 60 se cancelan tardíamente (menos de 24 horas), y 180 se registran como una inasistencia real sin ningún contacto en absoluto. La tasa de inasistencia es 180 / 2.000 × 100 = 9%. Si las 60 cancelaciones tardías se incluyeran en la misma categoría que las inasistencias reales, la tasa informada subiría al 12%, razón por la cual la definición utilizada siempre debe indicarse junto con la cifra.

## Fuentes de datos y advertencias

El sistema de programación o gestión de la consulta es la fuente principal, a partir de sus códigos de estado de cita; la calidad de la métrica depende por completo de que el personal use de forma coherente el estado correcto en lugar de una categoría genérica de "cancelada" para todo. Las organizaciones que introducen recordatorios digitales (SMS, notificación push de una aplicación o alertas del portal) deberían medir la tasa de inasistencia antes y después del cambio para una combinación comparable de pacientes y servicios, ya que la eficacia de los recordatorios está bien documentada en estudios aleatorizados y observacionales, pero varía según la población y el canal.

## Errores comunes

- **Comparar tasas brutas entre clínicas con distintas prácticas de sobrerreserva**: una clínica que sobrerreserva deliberadamente para compensar una tasa de inasistencia esperada mostrará una tasa aparente distinta a la de una que no lo hace, con independencia del comportamiento real de los pacientes.
- **Confundir cancelaciones tardías con inasistencias reales**: ambas tienen causas y soluciones digitales distintas (un problema de cancelación tardía a menudo se resuelve con una reprogramación de autoservicio más sencilla; un problema real de inasistencia a menudo se resuelve con mejores recordatorios y datos de contacto precisos).
- **Sesgo de supervivencia por las políticas de alta**: los servicios que dan de alta a pacientes tras inasistencias repetidas verán mejorar su propia tasa de forma mecánica, mientras simplemente desplazan a los mismos pacientes a otra parte del sistema.
- **Culpar de la exclusión digital al paciente**: un paciente sin teléfono inteligente ni un servicio de mensajes de texto fiable no se beneficiará de una estrategia de recordatorio exclusivamente digital, por lo que suele ser necesario un enfoque multicanal (carta, llamada, mensaje de texto, aplicación) para evitar ampliar las brechas de acceso.

## Fuentes

- NHS England, citas perdidas en atención primaria y consultas externas, estadísticas y guías publicadas
- Revisiones sistemáticas Cochrane sobre intervenciones para reducir las citas sanitarias perdidas, incluidos los sistemas de recordatorio
- Literatura revisada por pares sobre correlatos socioeconómicos y demográficos de la inasistencia a citas

Vea también: [tasa de consultas de telesalud](../telehealth-visit-rate/), ya que el comportamiento de inasistencia suele diferir según la modalidad de la consulta, y [tasa de adopción del portal del paciente](../patient-portal-adoption-rate/), ya que la autoprogramación y los recordatorios basados en el portal son una intervención digital principal en este ámbito.
