# Precisión del Enrutamiento de Triaje

La precisión del enrutamiento de triaje es la proporción de encuentros con pacientes en los que una herramienta de triaje automatizada o asistida por IA dirige correctamente al paciente al nivel y al entorno de atención adecuados —por ejemplo, autocuidado, atención primaria, atención urgente o atención de emergencia—, según se juzga frente a un estándar de referencia clínicamente validado. Es la métrica de seguridad y efectividad de cualquier puerta de entrada digital, verificador de síntomas o sistema de triaje con IA: toda la propuesta de valor de la herramienta se apoya en enrutar a los pacientes de forma correcta, rápida y coherente.

## Por qué importa

Una herramienta de triaje inexacta causa daño en ambas direcciones: el subtriaje (dirigir a un paciente a un nivel de atención inferior al que necesita) puede retrasar el tratamiento de una emergencia genuina, mientras que el sobretriaje (dirigir a un paciente a un nivel de atención superior al que necesita) desperdicia una capacidad escasa de urgencias y atención urgente, y aumenta el costo y la ansiedad del paciente sin ningún beneficio clínico. Dado que estos dos modos de fallo tienen consecuencias tan distintas, la precisión del enrutamiento de triaje debe informarse siempre junto con la dirección de los errores, y no como una única cifra agregada de precisión que oculta si la herramienta yerra de forma segura o peligrosa. Los reguladores y los sistemas de salud que evalúan una herramienta de triaje con IA para su implementación exigen cada vez más este tipo de informes de precisión estratificados como condición para la aprobación clínica, en particular para las herramientas que operan con algún grado de autonomía respecto de un clínico.

## Cómo se calcula

```
Precisión del enrutamiento de triaje = encuentros enrutados correctamente /
                                       total de encuentros clasificados × 100

Informe del subtriaje y del sobretriaje por separado:
  Tasa de subtriaje   = encuentros enrutados a un nivel de agudeza inferior
                        al del estándar de referencia / total de encuentros
                        clasificados × 100
  Tasa de sobretriaje = encuentros enrutados a un nivel de agudeza superior
                        al del estándar de referencia / total de encuentros
                        clasificados × 100

El estándar de referencia suele ser una revisión clínica retrospectiva
del mismo caso, ciega a la salida de la herramienta siempre que sea
posible.
```

## Ejemplo resuelto

Una herramienta verificadora de síntomas con IA clasifica 5.000 encuentros con pacientes en un mes. Una revisión clínica ciega de una muestra aleatoria de 500 de estos encuentros encuentra que 430 fueron enrutados al nivel de agudeza correcto (precisión del 86 %), 45 fueron subclasificados (9 %) y 25 fueron sobreclasificados (5 %). La tasa de subtriaje del 9 % es la cifra que más urgentemente necesita investigación, ya que representa encuentros en los que es posible que se haya dirigido a un paciente a una atención menos urgente de la que realmente necesitaba; la tasa de sobretriaje del 5 % es una preocupación de capacidad y costo, pero no una de seguridad directa.

## Fuentes de datos y advertencias

El estándar de referencia con el que se mide la precisión del triaje importa enormemente: la revisión de un solo clínico introduce la propia variabilidad de juicio de ese clínico, por lo que una cifra de precisión creíble suele requerir varios revisores independientes con un acuerdo entre evaluadores documentado, o bien la comparación con un resultado clínico posterior y confirmado (la atención que el paciente realmente requirió, establecida a posteriori). El muestreo también importa: revisar solo una muestra de conveniencia de encuentros, o solo aquellos señalados como inusuales, no producirá una cifra generalizable al desempeño global de la herramienta. Las cifras de precisión deben informarse por separado según la categoría de síntoma o motivo de consulta presentado cuando el volumen de casos subyacente lo permita, ya que las herramientas de triaje rara vez rinden de manera uniforme en todas las afecciones.

## Errores comunes

- **Informar una única cifra de precisión combinada**: reunir el subtriaje y el sobretriaje en un solo número oculta si los errores de la herramienta se inclinan hacia el modo de fallo más peligroso; infórmelos siempre por separado.
- **Usar a un solo revisor no ciego como estándar de referencia**: esto puede sesgar silenciosamente la cifra de precisión hacia lo que ese revisor habría hecho por sí mismo, en lugar de hacia un estándar clínico independiente.
- **Validar únicamente con datos retrospectivos y convenientes**: la precisión real del enrutamiento de una herramienta ante información de pacientes en vivo y ambigua suele diferir de manera material de su precisión en un conjunto de validación curado, reunido durante el desarrollo.
- **Ignorar la deriva del desempeño tras la implementación**: la precisión de un modelo de triaje con IA puede degradarse con el tiempo a medida que cambian las poblaciones de pacientes, los síntomas de presentación o la disponibilidad de las vías asistenciales; la precisión debe volver a medirse de forma periódica, y no validarse una sola vez y darse por estable.

## Fuentes

- ONC / HealthIT.gov, guías sobre la seguridad y el aseguramiento de la calidad del apoyo a la decisión clínica y de las herramientas habilitadas por IA
- Literatura revisada por pares sobre la precisión de los verificadores de síntomas y de las herramientas de triaje con IA, por ejemplo estudios publicados en JAMIA, npj Digital Medicine y BMJ Health & Care Informatics
- NHS England, guías sobre la seguridad clínica de las herramientas de triaje digital y de consulta remota (estándares de gestión del riesgo clínico DCB0129/DCB0160)

Vea también: [tiempo de respuesta de la derivación digital](../tiempo-de-respuesta-de-la-derivación-digital/), la métrica de proceso más directamente posterior a una decisión de triaje.
