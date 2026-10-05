# Tasa de Agotamiento Profesional Médico

La tasa de agotamiento profesional (burnout) médico mide la proporción de clínicos que informan síntomas significativos de agotamiento —evaluados comúnmente como agotamiento emocional, despersonalización o una baja sensación de logro personal mediante un instrumento de encuesta validado— y, en el ámbito específico de la salud digital, se sigue junto con medidas de la carga de las herramientas digitales sobre los clínicos, como el tiempo dedicado al trabajo administrativo o a la documentación en la historia clínica electrónica (HCE). Forma parte de un marco de métricas de salud digital porque el software clínico mal diseñado es un factor contribuyente al agotamiento bien documentado y medible, y el éxito de una herramienta de salud digital nunca debe evaluarse únicamente con métricas orientadas al paciente, ignorando su efecto sobre los clínicos que deben operarla.

## Por qué importa

Las herramientas de salud digital suelen introducirse con el objetivo explícito de reducir la carga administrativa de los clínicos, pero un flujo de trabajo mal diseñado de la historia clínica electrónica, un volumen excesivo de alertas clínicas de poco valor (véase la tasa de anulación de alertas clínicas) o una interfaz de telesalud torpe pueden aumentar el agotamiento con la misma facilidad con que lo reducen; y una herramienta que mejora una métrica de participación orientada al paciente mientras aumenta silenciosamente la carga de documentación del clínico no ha logrado un resultado neto positivo para el sistema de atención en su conjunto. La literatura clínica vincula con fuerza el agotamiento con los errores médicos, la rotación de clínicos y una menor calidad de la atención, por lo que funciona como indicador adelantado de problemas posteriores de seguridad y de sostenibilidad de la fuerza laboral, y no como una mera cuestión de satisfacción laboral. Todo programa de salud digital que afirme reducir la carga clínica debería poder demostrar esa afirmación frente a una línea de base medida, en lugar de plantearla como una intención de diseño.

## Cómo se calcula

```
Tasa de agotamiento profesional médico = clínicos con puntuación superior
                                          al umbral de agotamiento del
                                          instrumento validado / total de
                                          clínicos encuestados × 100

Instrumentos validados comunes: Maslach Burnout Inventory (MBI), el
Professional Fulfillment Index, o una pregunta única de cribado de
agotamiento validada frente a un instrumento más completo.

Informe junto con un indicador indirecto de carga digital cuando esté
disponible:
  tiempo en el sistema de la HCE por encuentro con el paciente
  tiempo de documentación fuera del horario clínico programado
  ("tiempo de pijama")
```

## Ejemplo resuelto

Un sistema hospitalario encuesta a 300 médicos con el Maslach Burnout Inventory antes de introducir una herramienta de documentación clínica ambiental destinada a reducir el tiempo de redacción de notas. En la línea de base, 135 médicos (45%) puntúan por encima del umbral de agotamiento, y los datos del registro de auditoría de la HCE muestran un promedio de 58 minutos diarios de tiempo de documentación por médico fuera del horario clínico programado. Seis meses después del despliegue de la herramienta, una nueva encuesta a los mismos médicos halla 108 (36%) por encima del umbral de agotamiento, junto con una reducción del tiempo de documentación fuera de horario a 34 minutos diarios. El movimiento correlacionado tanto en la tasa de agotamiento como en el indicador indirecto objetivo derivado de la HCE refuerza el argumento de que la herramienta contribuye a la mejora, aunque una comparación formal antes/después debería tener en cuenta además otros cambios simultáneos en la carga de trabajo durante el mismo período.

## Fuentes de datos y advertencias

Los datos de agotamiento provienen de un instrumento validado aplicado de forma recurrente (anualmente o con mayor frecuencia), y la tasa de respuesta importa: una tasa de respuesta baja arriesga un sesgo de no respuesta, en el que los clínicos más agotados (con menos capacidad para completar una encuesta adicional) quedan sistemáticamente subrepresentados, lo que subestima la tasa real. Los indicadores indirectos derivados de la HCE para la carga digital —tiempo en el sistema, tiempo de documentación fuera de horario, número de clics por encuentro— son útiles como complementos objetivos y disponibles de forma continua de los datos periódicos de encuesta, pero deben validarse frente al agotamiento informado en la encuesta en una organización determinada antes de tratarse como un indicador independiente fiable de agotamiento, ya que la relación entre el tiempo en el sistema y el agotamiento real puede variar según la especialidad y el estilo de trabajo individual.

## Errores comunes

- **Depender únicamente de indicadores indirectos derivados de la HCE**: el tiempo en el sistema y el número de clics se correlacionan con el agotamiento en conjunto, pero no son lo mismo que el agotamiento en sí, y pueden inducir a error en clínicos individuales o especialidades con necesidades de documentación genuinamente distintas.
- **Que una baja tasa de respuesta a la encuesta enmascare la tasa real**: los clínicos más afectados por el agotamiento suelen ser los que menos capacidad tienen para responder a una encuesta voluntaria, lo que sesga un resultado con baja tasa de respuesta hacia una cifra artificialmente más saludable.
- **Atribuir un cambio en el agotamiento a una sola herramienta sin considerar los factores de confusión**: el agotamiento se ve afectado por muchos factores simultáneos (dotación de personal, volumen de pacientes, cambio organizacional); una comparación antes/después en torno al despliegue de una herramienta debería controlar estos factores cuando sea posible, en lugar de asumir una causa única.
- **Tratar el agotamiento puramente como un problema de resiliencia individual**: la investigación sobre el agotamiento halla de forma consistente que la carga de trabajo, el diseño del sistema y los factores organizacionales son los impulsores principales; enmarcarlo como un problema exclusivo del clínico individual desvía la intervención de las herramientas digitales y los flujos de trabajo que con frecuencia son la verdadera causa raíz.

## Fuentes

- Maslach Burnout Inventory (MBI), instrumento de encuesta validado y orientación de puntuación
- American Medical Association (AMA), investigación sobre el agotamiento médico y el programa de mejora de la práctica STEPS Forward
- Literatura revisada por pares sobre la usabilidad de la HCE, la carga de documentación y el agotamiento de los clínicos, por ejemplo estudios publicados en JAMIA y en Annals of Internal Medicine

Vea también: [tasa de anulación de alertas clínicas](../tasa-de-anulación-de-alertas-clínicas/), ya que la fatiga por alertas es uno de los factores contribuyentes al agotamiento de los clínicos más específicos y medibles que las herramientas digitales pueden abordar directamente.
