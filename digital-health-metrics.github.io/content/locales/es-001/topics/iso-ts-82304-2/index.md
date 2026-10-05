# ISO/TS 82304-2

ISO/TS 82304-2 es una especificación técnica internacional, publicada por el Comité Técnico 215 de ISO (Informática de la Salud), que define un método estructurado para evaluar la calidad de las aplicaciones de salud y bienestar —abarcando usabilidad, robustez técnica y confiabilidad, interoperabilidad, calidad del contenido, y seguridad y privacidad de los datos— para productos que quedan fuera del alcance de la regulación plena de dispositivos médicos pero que aun así influyen de forma material en las decisiones o el comportamiento de salud de un usuario. Existe para llenar un vacío específico: la gran mayoría de las aplicaciones de salud y bienestar dirigidas al consumidor (rastreadores de actividad física, diarios de síntomas, aplicaciones de coaching de bienestar) no están reguladas como dispositivos médicos, y sin embargo antes no existía una forma común y estructurada de evaluar o comparar su calidad y seguridad básicas.

## Por qué importa

Las tiendas de aplicaciones alojan cientos de miles de aplicaciones de salud y bienestar de una calidad enormemente variable, y antes de que existiera una especificación técnica común, un paciente, un clínico o un sistema de salud no disponía de una forma estructurada y comparable de juzgar la calidad y la seguridad básicas de una aplicación frente a otra más allá de las calificaciones por estrellas y las afirmaciones publicitarias, una brecha que importa porque una aplicación de salud mal diseñada puede causar daños reales (contenido inexacto, mala seguridad de los datos, afirmaciones engañosas) incluso sin alcanzar el umbral regulatorio de un dispositivo médico. ISO/TS 82304-2 está estructurada deliberadamente en torno a dominios que un revisor no especialista puede evaluar de forma coherente, lo que la ha convertido en la base técnica de varios servicios nacionales y comerciales de etiquetado y curación de la calidad de las aplicaciones de salud, y ofrece a los sistemas de salud y a las bibliotecas de aplicaciones una forma defendible y estandarizada de incluir o excluir aplicaciones de una lista recomendada, en lugar de basarse en un criterio improvisado.

## Cómo se aplica

```
La evaluación se organiza en torno a dominios de calidad definidos,
valorados mediante una revisión estructurada y no mediante una única
fórmula numérica:

Usabilidad                       — claridad, accesibilidad y facilidad
                                    de uso para el grupo de usuarios
                                    previsto
Robustez técnica/confiabilidad   — estabilidad, rendimiento y ausencia
                                    de defectos técnicos
Interoperabilidad                — capacidad de intercambiar datos con
                                    otros sistemas cuando sea relevante
                                    para la función de la aplicación
Calidad y seguridad del contenido — exactitud, actualidad y ausencia de
                                    afirmaciones de salud perjudiciales
                                    o engañosas
Seguridad y privacidad           — práctica de protección de datos y
                                    transparencia sobre el uso de los
                                    datos

Cada dominio se puntúa mediante criterios de revisión estructurados y se
combina en una evaluación global de la calidad, que varios esquemas de
etiquetado de la calidad de aplicaciones de salud utilizan como base
técnica para una etiqueta pública de calidad o una decisión de inclusión
en una biblioteca curada.
```

## Ejemplo resuelto

El programa de biblioteca de aplicaciones digitales de un sistema de salud quiere curar una lista recomendada de aplicaciones de bienestar para los pacientes en lugar de dejar la selección de aplicaciones enteramente a la búsqueda en las tiendas de aplicaciones. Cada aplicación candidata se evalúa con respecto a los dominios de ISO/TS 82304-2: una aplicación de seguimiento del sueño obtiene buenos resultados en usabilidad y robustez técnica, resultados adecuados en calidad del contenido, pero durante la revisión de seguridad y privacidad se detecta que comparte datos de los usuarios con anunciantes de terceros sin una divulgación clara, un hallazgo lo bastante significativo como para excluir la aplicación de la lista recomendada pese a su sólida puntuación de usabilidad. Este resultado por dominios es más accionable, tanto para el equipo de curación como, si se comparte, para el propio desarrollador de la aplicación, que una única puntuación de calidad combinada, ya que identifica con precisión qué aspecto requiere corrección antes de que la aplicación pueda volver a considerarse.

## Fuentes de datos y advertencias

La evaluación conforme a ISO/TS 82304-2 suele ser realizada por un revisor capacitado o por un servicio de evaluación acreditado, siguiendo los criterios de revisión estructurados de la especificación para cada dominio, y varias iniciativas nacionales y comerciales (organizaciones de etiquetado y curación de la calidad de aplicaciones de salud, algunas de ellas con respaldo formal de un sistema nacional de salud) utilizan la norma como base técnica de sus propias etiquetas públicas de calidad de aplicaciones; esto significa que el estado "certificado" o "etiquetado" de una aplicación suele reflejar la implementación de la norma por parte de un esquema de etiquetado específico, y no necesariamente un proceso idéntico en todos los esquemas, por lo que debe verificarse y divulgarse la organización evaluadora concreta y su metodología junto con cualquier etiqueta de calidad que se cite. La especificación evalúa las características de calidad y de seguridad básica de una aplicación como software; no sustituye la autorización regulatoria de dispositivos médicos cuando las afirmaciones o funciones de una aplicación alcanzan realmente el umbral de un dispositivo médico, y utilizarla como tal sería un error de categoría.

## Errores comunes

- **Tratar una etiqueta de calidad como una autorización regulatoria**: una aplicación evaluada y etiquetada conforme a ISO/TS 82304-2 no ha recibido por ello la aprobación regulatoria de dispositivo médico; ambas cosas tienen fines distintos y nunca deben confundirse en la forma de describir o comercializar una aplicación.
- **Suponer que todos los esquemas de etiquetado basados en la norma son equivalentes**: distintas organizaciones implementan la evaluación basada en ISO/TS 82304-2 con sus propios procesos de revisión y niveles de rigor; verifique qué organización realizó una evaluación y cómo, en lugar de tratar cualquier etiqueta "basada en ISO/TS 82304-2" como intercambiable con cualquier otra.
- **Evaluar solo la usabilidad y descuidar la seguridad y la privacidad**: los problemas de usabilidad son los más visibles para un usuario final y los más fáciles de evaluar informalmente, lo que puede llevar a los revisores a otorgar menor peso al dominio de seguridad y privacidad, menos visible pero potencialmente más trascendente.
- **Tratar la evaluación como una certificación única y permanente**: el contenido, las prácticas de seguridad y los acuerdos de intercambio de datos con terceros de una aplicación pueden cambiar después de una evaluación inicial; un programa creíble de etiquetado de calidad reevalúa periódicamente en lugar de tratar una aprobación inicial como permanente.

## Fuentes

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), información sobre publicaciones y grupos de trabajo
- Organizaciones nacionales y comerciales de etiquetado y curación de la calidad de aplicaciones de salud que publican su metodología de evaluación basada en esta norma

Vea también: [puntuación de la escala de usabilidad del sistema](../puntuación-de-la-escala-de-usabilidad-del-sistema/), un instrumento complementario y más acotado, específico de usabilidad, que suele utilizarse junto con una evaluación de calidad más amplia conforme a ISO/TS 82304-2.
