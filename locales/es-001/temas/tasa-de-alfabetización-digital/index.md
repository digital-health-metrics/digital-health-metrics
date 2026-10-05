# Tasa de Alfabetización Digital

La tasa de alfabetización digital mide la proporción de una población de pacientes capaz de completar de forma independiente y exitosa tareas comunes en una plataforma de salud digital —iniciar sesión, programar una cita, unirse a una consulta por video o leer el resultado de una prueba— sin necesitar la ayuda de otra persona. Es distinta de la tasa de acceso digital y siempre debe medirse por separado: un paciente puede tener un teléfono inteligente y una conexión de banda ancha y aun así ser incapaz de manejar por sí solo una plataforma de telesalud, y confundir ambas métricas oculta precisamente a la población que esta métrica existe para identificar.

## Por qué importa

El acceso digital por sí solo no garantiza que un paciente pueda usar un servicio de salud digital de forma efectiva: los pacientes con menor alfabetización en salud, poca experiencia general con la tecnología, deterioro cognitivo o visual, o barreras de idioma con la interfaz de la plataforma pueden contar con acceso técnico completo y aun así no lograr completar una tarea de forma independiente, y esta brecha se correlaciona sistemáticamente con los mismos grupos demográficos que ya enfrentan otras disparidades en salud. El Marco de Medición de la Equidad en Salud Digital de HIMSS trata la alfabetización digital como un pilar distinto del acceso precisamente por esta razón: cerrar una brecha de acceso sin abordar también una brecha de alfabetización puede dejar a una población conectada técnicamente pero incapaz, en la práctica, de beneficiarse. Las organizaciones que miden la finalización de tareas y el tiempo de finalización de las acciones comunes de la plataforma, segmentados por idioma e indicadores socioeconómicos, pueden identificar las barreras de alfabetización y dirigir el apoyo (interfaces simplificadas, incorporación asistida, contenido en otros idiomas) con mucha mayor precisión que las organizaciones que se basan únicamente en métricas de acceso o en puntuaciones generales de satisfacción.

## Cómo se calcula

```
Tasa de alfabetización digital = pacientes que completan de forma
                                  independiente una tarea definida sin
                                  ayuda / pacientes que intentan esa
                                  tarea × 100

Tareas medidas comúnmente: inicio de sesión en la cuenta, programación
de citas, unirse a una consulta por video, ver el resultado de una
prueba, completar un formulario de admisión.

Informe por tarea, no como una única puntuación combinada, ya que la
alfabetización para tareas sencillas (iniciar sesión) y tareas complejas
(completar un formulario de admisión de varios pasos) difiere
sustancialmente, y combinarlas oculta dónde se encuentra la barrera
específica.
```

## Ejemplo resuelto

Un sistema de salud rastrea la incorporación a una consulta por video como una tarea definida en 5.000 citas de telesalud programadas en un mes. De ellas, 4.100 pacientes se unen con éxito sin ninguna llamada de soporte ni asistencia técnica durante la consulta (tasa de alfabetización digital para esta tarea: 82%). Al segmentar por idioma principal se observa una tasa del 89% entre los pacientes de habla inglesa frente al 61% entre los pacientes cuyo idioma principal difiere del idioma predeterminado de la interfaz de la plataforma: una brecha de 28 puntos que sería invisible si solo se informara la cifra combinada del 82%, y que apunta directamente a una intervención específica y abordable (interfaz e instrucciones traducidas) en lugar de a un vago problema general de alfabetización.

## Fuentes de datos y advertencias

Los datos de finalización de tareas suelen obtenerse de los registros de eventos de la propia plataforma (si el paciente llegó a la consulta por video, si el flujo de programación de citas se completó sin abandono), complementados con datos de llamadas de soporte o de contacto con la mesa de ayuda para identificar las tareas que técnicamente se "completaron" solo porque el paciente recibió asistencia en vivo a mitad del proceso. Una tarea contabilizada como "completada" únicamente a partir de los registros del sistema puede ocultar que el paciente necesitó una llamada de un familiar o del personal de soporte para lograrlo; una finalización verdaderamente independiente debe definirse y rastrearse por separado de una asistida siempre que la plataforma pueda distinguir ambas. La alfabetización digital se correlaciona con la alfabetización en salud y la alfabetización general, pero es analíticamente distinta de ellas; debe utilizarse un instrumento validado (en lugar de una suposición informal basada solo en la edad o en datos demográficos) siempre que se requiera una evaluación formal.

## Errores comunes

- **Confundir la alfabetización digital con el acceso digital**: un paciente con acceso técnico completo aún puede carecer de la alfabetización necesaria para usarlo de forma efectiva; son métricas distintas que requieren intervenciones distintas, y nunca deben informarse como una única cifra combinada.
- **Contabilizar las finalizaciones asistidas como éxitos sin ayuda**: si un paciente solo completa una tarea con una llamada de soporte o la ayuda de un familiar, se trata de una brecha de alfabetización que la plataforma ha disimulado, no resuelto; distinga las finalizaciones asistidas de las independientes siempre que los datos lo permitan.
- **Informar una única puntuación combinada de finalización de tareas**: la alfabetización para una tarea sencilla (iniciar sesión) y para una compleja (completar un formulario de admisión detallado) difiere sustancialmente; informe por tarea para identificar exactamente dónde se encuentra la barrera.
- **Suponer que la edad por sí sola predice la alfabetización digital**: si bien la edad se correlaciona con una menor alfabetización digital en conjunto, el dominio del idioma de la interfaz de la plataforma y la familiaridad general con la tecnología suelen ser predictores individuales más sólidos, y deben medirse directamente en lugar de inferirse a partir de la edad.

## Fuentes

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), investigación sobre la usabilidad de la tecnología de la información en salud y la alfabetización en salud digital
- Literatura revisada por pares sobre la medición e intervención en alfabetización en salud digital, por ejemplo estudios publicados en el Journal of Medical Internet Research (JMIR)

Vea también: [tasa de acceso digital](../tasa-de-acceso-digital/), la métrica de condición previa con la que esta se confunde con mayor frecuencia, y casi siempre de forma errónea.
