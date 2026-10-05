# Tasa de Estabilización Biométrica

La tasa de estabilización biométrica es la proporción de pacientes inscritos que alcanzan y mantienen un rango objetivo clínicamente definido para una medida biométrica —con mayor frecuencia la presión arterial por debajo de un umbral como 130/80 mmHg— mediante un dispositivo de monitoreo conectado, durante un período sostenido y no en un único momento. Es distinta de la tasa de mejora biométrica (véase ese tema): la mejora mide la magnitud de un cambio respecto de la línea de base, mientras que la estabilización mide si se mantiene a un paciente de forma fiable dentro de un rango seguro una vez iniciado el tratamiento o el monitoreo, que es el resultado que más importa para los pacientes que ya están cerca del objetivo o que ya reciben tratamiento.

## Por qué importa

Para una gran proporción de los pacientes de los programas de enfermedades crónicas —en particular la hipertensión, donde los objetivos de presión arterial de las guías están bien establecidos y vinculados directamente con el riesgo cardiovascular— el objetivo clínico no es una mejora puntual sino un control sostenido, y un paciente que oscila dentro y fuera del rango objetivo plantea un riesgo sustancialmente distinto del de uno que mejora una vez y se mantiene. Los dispositivos conectados (tensiómetros celulares, monitores continuos de glucosa) permiten medir la estabilización de forma continua y no solo en las consultas, poniendo de manifiesto a los pacientes cuyas lecturas en consulta parecen controladas pero cuyas lecturas domiciliarias son inestables —un patrón conocido como hipertensión enmascarada que la medición presencial periódica por sí sola no puede detectar—. Informar la tasa de estabilización y no solo una instantánea de "en objetivo" obliga a un programa a confrontar con qué consistencia, y no solo con qué frecuencia, mantiene a los pacientes dentro del rango.

## Cómo se calcula

```
Tasa de estabilización biométrica = pacientes con ≥ 80 % de las lecturas
                                     dentro del rango objetivo durante el
                                     período de medición / pacientes con un
                                     número mínimo de lecturas válidas en
                                     ese período × 100

Ejemplos de umbrales:
  Presión arterial — objetivo < 130/80 mmHg (o el umbral de la guía
                     clínica aplicable al perfil de riesgo del paciente)
  Glucosa          — rango objetivo según las guías de monitoreo
                     continuo de glucosa, informado como "tiempo en
                     rango"

Debe fijarse un umbral mínimo de frecuencia de lecturas (p. ej., al menos
3 lecturas por semana) antes de incluir a un paciente en el denominador,
para evitar que quienes miden con poca frecuencia parezcan estables de
forma artificial.
```

## Ejemplo resuelto

Un programa de monitoreo remoto de la hipertensión inscribe a 600 pacientes con tensiómetros celulares, de quienes se espera que tomen al menos 3 lecturas por semana. De ellos, 540 cumplen el umbral mínimo de frecuencia de lecturas durante un período de medición de 3 meses y se incluyen en el denominador. De esos 540, 350 tienen al menos el 80 % de sus lecturas por debajo de 130/80 mmHg, lo que da una tasa de estabilización biométrica de 350 / 540 × 100 = 65 %. Los 60 pacientes excluidos por lecturas insuficientes se informan por separado como una brecha de integridad de datos, y no se incorporan ni al numerador ni al grupo de "no estabilizados", ya que su estado real de control es genuinamente desconocido y no deficiente.

## Fuentes de datos y advertencias

Las lecturas provienen directamente del flujo de datos del propio dispositivo conectado, que es más objetivo y mucho más frecuente que la medición en consulta, pero los errores de colocación y de técnica del dispositivo (un manguito de presión arterial de tamaño o posición incorrectos) pueden introducir un sesgo sistemático que una única lectura de validación en consulta no detectará necesariamente. La elección del rango objetivo debe seguir la guía clínica vigente aplicable al perfil de riesgo y las comorbilidades específicas del paciente, y no un único umbral universal, ya que los objetivos de las guías difieren según la edad del paciente, su función renal y su riesgo cardiovascular. Un paciente con baja frecuencia de lecturas nunca debe contarse silenciosamente como "estable" por defecto; excluirlo del denominador informando con transparencia la exclusión es más honesto que contarlo como controlado o no controlado a partir de datos insuficientes.

## Errores comunes

- **Tratar una única lectura dentro de rango como estabilización**: la estabilización consiste en un control sostenido durante un período definido, no en una instantánea; siempre debe exigirse una proporción mínima de lecturas dentro de rango durante ese período, y no una sola medición que cumpla el criterio.
- **Excluir silenciosamente a quienes miden con poca frecuencia sin informarlo**: los pacientes que rara vez toman lecturas no son automáticamente estables ni inestables; deben excluirse de forma transparente del denominador e informarse la tasa de exclusión como una métrica separada de integridad de datos.
- **Ignorar la calibración del dispositivo y los errores de técnica**: un manguito mal ajustado o un dispositivo sin calibrar puede sesgar sistemáticamente las lecturas en una dirección, algo que una tasa de estabilización calculada de forma ingenua a partir de datos brutos del dispositivo no detectará sin una validación periódica.
- **Usar un único rango objetivo universal para todos los pacientes**: los objetivos de las guías clínicas varían según el perfil de riesgo y la comorbilidad del paciente; aplicar un umbral único a una población clínicamente heterogénea clasificará erróneamente a algunos pacientes como estabilizados o no estabilizados en relación con su objetivo individualizado real.

## Fuentes

- American Heart Association (AHA) / American College of Cardiology (ACC), objetivos de las guías de presión arterial y guías de monitoreo domiciliario de la presión arterial
- International Diabetes Federation y American Diabetes Association (ADA), guías de consenso sobre el "tiempo en rango" del monitoreo continuo de glucosa
- Literatura revisada por pares sobre el monitoreo biométrico remoto y el control sostenido de afecciones, por ejemplo estudios publicados en npj Digital Medicine

Vea también: [tasa de mejora biométrica](../tasa-de-mejora-biométrica/), la métrica relacionada de la magnitud del cambio respecto de la línea de base, distinta del control sostenido una vez alcanzado el objetivo.
