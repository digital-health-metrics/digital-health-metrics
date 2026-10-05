# Puntuación Neta de Promotores del Paciente

La puntuación neta de promotores (NPS, por sus siglas en inglés) del paciente mide la disposición de los pacientes a recomendar a otros un producto de salud digital o un servicio de telesalud, a partir de una única pregunta de encuesta —"¿Qué tan probable es que recomiende este servicio a un amigo o colega?"— puntuada de 0 a 10. Los encuestados que puntúan 9-10 son "promotores", 7-8 son "pasivos" y 0-6 son "detractores"; la NPS es el porcentaje de promotores menos el porcentaje de detractores. Es la métrica de satisfacción del paciente más utilizada, y también la más criticada, en salud digital: se valora por su sencillez, pero es limitada en lo que puede diagnosticar por sí sola.

## Por qué importa

La NPS ofrece a los equipos de salud digital una señal de satisfacción simple, estandarizada y comparable entre contextos, barata de recopilar y fácil de interpretar de un vistazo para las partes interesadas no especializadas (directivos, juntas, comisionados), razón por la cual sigue siendo popular pese a sus limitaciones metodológicas bien documentadas. En los productos de telesalud y de puerta de entrada digital en particular, la NPS suele ser el indicador adelantado de si los pacientes seguirán eligiendo el canal digital frente a una alternativa presencial cuando ambos estén disponibles, lo que tiene implicaciones directas para la planificación de la combinación de canales y de la capacidad. Sin embargo, la NPS es un único número de resumen de alto nivel: una NPS en descenso indica a un equipo que algo anda mal, pero no qué, por lo que siempre debe combinarse con comentarios textuales abiertos o con un instrumento de usabilidad más granular para que sea accionable y no meramente una cifra de tablero.

## Cómo se calcula

```
NPS = % de promotores (puntuación 9-10) − % de detractores (puntuación 0-6)

El resultado es un número de −100 a +100, no un porcentaje, a pesar de
derivarse de porcentajes: nunca añada el signo "%" a una cifra de NPS.

Informe junto con:
  tasa de respuesta (% de pacientes encuestados que respondieron)
  tamaño de la muestra
  la redacción exacta de la pregunta utilizada
```

## Ejemplo resuelto

Una plataforma de telesalud encuesta a 1.000 pacientes tras una consulta por video y recibe 400 respuestas (tasa de respuesta del 40%). De esos 400 encuestados, 220 puntúan 9-10 (promotores, 55%), 100 puntúan 7-8 (pasivos, 25%) y 80 puntúan 0-6 (detractores, 20%). La NPS es 55 − 20 = 35. Esta cifra solo significa algo en contexto: una NPS de 35 puede ser un resultado sólido en comparación con el sector más amplio de la telesalud, o un descenso preocupante respecto de la propia puntuación de 48 de esa misma plataforma el trimestre anterior; la NPS es mucho más útil como tendencia en el tiempo para un producto que como referencia absoluta puntual frente a otro distinto.

## Fuentes de datos y advertencias

La NPS se recopila mediante una encuesta posterior a la interacción, normalmente activada inmediatamente después de una consulta por video, una sesión en la aplicación o un episodio de atención, y la tasa de respuesta importa enormemente: una tasa de respuesta baja (muy por debajo del ~40% del ejemplo resuelto) arriesga un sesgo de no respuesta, en el que solo responden los pacientes muy satisfechos o muy insatisfechos, lo que empuja la puntuación hacia los extremos y la aleja del sentir real de la población. Comparar la NPS entre organizaciones, o incluso entre distintos canales de una misma organización (por ejemplo, telesalud frente a atención presencial), solo es válido si la redacción de la pregunta, el momento y la población encuestada son realmente comparables; se sabe que pequeños cambios de redacción modifican las puntuaciones de forma medible. La NPS debe tratarse como un resultado que explicar, no como un fin en sí mismo: los comentarios de texto abierto que suelen acompañar a una encuesta de NPS suelen ser más accionables que la puntuación.

## Errores comunes

- **Comparar cifras de NPS recopiladas con distinta redacción de la pregunta o distinto momento**: incluso diferencias menores en el diseño de la encuesta pueden desplazar las puntuaciones varios puntos, lo que hace que la comparación de NPS entre organizaciones sea mucho menos fiable de lo que parece.
- **Ignorar la tasa de respuesta**: una NPS principal calculada con una tasa de respuesta del 10% es mucho menos confiable que una calculada con una del 60%, ya que las tasas de respuesta bajas son propensas a un sesgo de no respuesta hacia las opiniones más extremas.
- **Tratar la NPS como una herramienta de diagnóstico en lugar de una métrica de resumen**: una NPS en descenso indica que algo anda mal, pero nunca qué; siempre debe combinarse con comentarios cualitativos o con un instrumento de satisfacción o usabilidad más granular para identificar la causa.
- **Perseguir la NPS como un objetivo en sí mismo**: optimizar estrechamente la cifra de NPS (por ejemplo, encuestando solo a pacientes tras interacciones inusualmente positivas) puede mejorar la puntuación informada sin que la experiencia real del paciente mejore, o incluso empeorándola.

## Fuentes

- Bain & Company, metodología original del Net Promoter System y orientación de comparación referencial
- Agency for Healthcare Research and Quality (AHRQ), programa de encuestas de experiencia del paciente CAHPS (Consumer Assessment of Healthcare Providers and Systems), como alternativa complementaria y más granular
- Literatura revisada por pares sobre el uso y las limitaciones de la puntuación neta de promotores en entornos sanitarios, por ejemplo estudios publicados en el Journal of Medical Internet Research (JMIR)

Vea también: [tasa de retención de usuarios](../tasa-de-retención-de-usuarios/), ya que la satisfacción informada por el paciente y el uso continuado real de un producto a menudo divergen y conviene seguirlos como señales separadas.
