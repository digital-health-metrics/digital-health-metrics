# Tiempo de Respuesta de la Referencia Digital

El tiempo de respuesta de la referencia digital es el tiempo transcurrido desde que un clínico remitente envía una referencia electrónica hasta que el servicio receptor la clasifica y la acepta, la rechaza o la agenda. Es una métrica de proceso (flujo), distinta del tiempo total de espera del paciente, y es uno de los lugares más claros donde un cambio de sistema digital (referencia electrónica estructurada, triaje basado en imágenes, formularios de referencia estandarizados) puede demostrarse que mueve una cifra operativa y no solo un puntaje de satisfacción.

## Por qué importa

Un paso de triaje lento o muy variable añade demora antes incluso de que el paciente se incorpore a una lista de espera clínica, y como esa demora ocurre antes de que comience cualquier atención clínica, es un desperdicio de proceso puro que las herramientas digitales están bien posicionadas para eliminar. Los sistemas de referencia que fuerzan un ciclo de "devolución al remitente" por información faltante crean bucles de reproceso que son fáciles de pasar por alto si el tiempo de respuesta solo se mide en las referencias que pasan limpiamente a la primera. Cuando un servicio ha introducido formularios de referencia digital estructurados, campos obligatorios o triaje basado en imágenes (por ejemplo, en teledermatología), el tiempo de respuesta suele ser la métrica individual más persuasiva para demostrar el beneficio, porque es medible antes y después del cambio con la misma instrumentación.

## Cómo se calcula

```
Tiempo de respuesta = marca de tiempo(decisión de triaje) − marca de tiempo(envío de la referencia)

Reporte la mediana y un percentil alto (comúnmente el 90), no solo la media,
porque la distribución está muy sesgada hacia la derecha por las referencias
devueltas o complejas.

Considere los tiempos por subetapa cuando el sistema los capture:
  Envío → recibido por el servicio
  Recibido → decisión de triaje
  Decisión de triaje → cita agendada (cuando corresponda)
```

## Ejemplo resuelto

El registro de auditoría de un sistema de referencia electrónica muestra un tiempo mediano desde el envío hasta la decisión de triaje de 1.8 días en todas las especialidades, con un tiempo del percentil 90 de 6 días, impulsado principalmente por referencias que se devuelven al remitente por falta de información clínica. Una vía de teledermatología que usa triaje basado en imágenes en la misma plataforma logra un tiempo de respuesta mediano de 4 horas y un percentil 90 de 1 día, porque una fotografía y una historia estructurada casi siempre son suficientes para la decisión de triaje sin necesidad de correspondencia adicional.

## Fuentes de datos y advertencias

El propio registro de auditoría del sistema de referencia electrónica o de gestión de referencias es la fuente principal, a partir de las marcas de tiempo de envío y decisión; las organizaciones deberían confirmar si el "reloj" se pausa mientras una referencia se devuelve para solicitar más información o si sigue corriendo de forma continua, ya que ambas definiciones producen cifras sustancialmente distintas para el mismo proceso subyacente. El tiempo de respuesta debería reportarse de manera coherente en tiempo natural o en horario laboral, ya que de lo contrario los efectos de fines de semana y festivos pueden distorsionar las comparaciones entre servicios con distintos patrones de trabajo.

## Errores comunes

- **Medir solo las referencias "limpias"**: excluir del cálculo las referencias rechazadas o devueltas oculta la carga de reproceso que las herramientas digitales a menudo están destinadas específicamente a reducir.
- **Reportar la media en lugar de la mediana y los percentiles**: un pequeño número de referencias de larga duración y devueltas empujará la media muy por encima de la experiencia real del paciente típico.
- **Confundir el tiempo de respuesta con el tiempo total de espera**: el tiempo de respuesta cubre solo la etapa de triaje; la experiencia total del paciente también incluye la lista de espera clínica posterior, que es una métrica distinta gobernada por restricciones de capacidad independientes.
- **No distinguir las subetapas**: un servicio que solo mide el tiempo de extremo a extremo no puede saber si una cifra lenta se debe a que los remitentes envían información incompleta, a la capacidad de triaje del servicio receptor, o a ambas cosas.

## Fuentes

- NHS England, estadísticas y especificaciones de servicio del Servicio de e-Referencia (e-RS)
- Literatura revisada por pares sobre sistemas electrónicos de gestión de referencias y vías de triaje digital, incluida la teledermatología
- ONC / HealthIT.gov, guía sobre interoperabilidad y coordinación de referencias
