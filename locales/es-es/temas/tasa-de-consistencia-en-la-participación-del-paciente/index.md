# Tasa de Consistencia en la Participación del Paciente

La tasa de consistencia en la participación del paciente mide con qué regularidad un paciente inscrito interactúa con un producto de salud digital a lo largo del tiempo —por ejemplo, registrando alimentos o síntomas, anotando la actividad física o consultando datos de salud— y no simplemente si lo ha usado alguna vez. Es una métrica longitudinal, distinta de un recuento puntual de uso activo: dos pacientes pueden tener un estado idéntico de "usó la aplicación este mes", mientras uno registra datos de forma constante todos los días y el otro registra una vez y desaparece durante tres semanas, y solo la métrica de consistencia los distingue.

## Por qué importa

La interacción sostenida y regular con una herramienta de salud digital es uno de los indicadores adelantados más fiables de beneficio clínico, en particular en afecciones dependientes del comportamiento como la diabetes, el control del peso y la salud mental, donde el valor de la herramienta proviene del hábito que respalda y no de una sesión aislada. Un producto puede informar un recuento saludable de usuarios activos mensuales mientras atiende en realidad a una población que ingresa una vez y se aleja, porque el uso activo mensual es una vara baja que no dice nada sobre el patrón de uso dentro del mes; las métricas de consistencia detectan esto de un modo en que los simples recuentos de actividad no pueden. Dado que la consistencia también es una de las cosas más difíciles de sostener durante meses y no semanas, es una señal más honesta de la calidad del producto y de su ajuste clínico que las cifras de participación en ventanas cortas, que son propensas a efectos de novedad inmediatamente después de la incorporación.

## Cómo se calcula

```
Tasa de consistencia en la participación = semanas con al menos una
                                            interacción calificada /
                                            total de semanas de
                                            inscripción × 100

Una "interacción calificada" debe definirse de forma explícita y
coherente (por ejemplo, un registro de alimentos, un control de síntomas
o una sincronización de actividad completada), nunca un evento pasivo
como abrir la aplicación sin ninguna acción registrada.

Informe como una distribución, no solo como una media poblacional:
  por ejemplo, proporción de pacientes con una consistencia semanal ≥ 80%,
               proporción con 50-79%, proporción con < 50%
```

## Ejemplo resuelto

Una aplicación de coaching nutricional inscribe a un paciente durante 12 semanas. El paciente registra al menos una entrada de alimentos calificada en 9 de esas 12 semanas, lo que da una tasa individual de consistencia en la participación de 9 / 12 × 100 = 75%. En toda la cohorte de la aplicación, de 2.000 pacientes inscritos durante al menos 12 semanas, 600 pacientes (30%) mantienen una consistencia semanal ≥ 80%, 900 (45%) se ubican en la banda del 50-79% y 500 (25%) quedan por debajo del 50%. Informar solo el promedio de la cohorte (que podría rondar el 65%) ocultaría que una cuarta parte completa de los pacientes apenas participa, un segmento que merece investigarse por separado en lugar de diluirse en una media global.

## Fuentes de datos y advertencias

Los datos de consistencia provienen de los registros de eventos del propio producto (entradas de alimentos, sincronizaciones de actividad, controles), y la definición de "interacción calificada" tiene un efecto enorme sobre la tasa resultante: una definición permisiva (cualquier apertura de la aplicación) siempre se verá mejor que una estricta (un registro completo y significativo), por lo que la definición utilizada debe indicarse claramente junto a cualquier cifra informada. Los datos sincronizados automáticamente (por ejemplo, un rastreador de actividad conectado que sincroniza en segundo plano) deben informarse por separado de los datos registrados manualmente, ya que la sincronización automática puede inflar la consistencia aparente sin reflejar ningún esfuerzo activo del paciente ni participación con la orientación del producto.

## Errores comunes

- **Confundir las aperturas de la aplicación con una participación significativa**: una apertura pasiva (por ejemplo, provocada por una notificación push) no equivale a un registro de alimentos o a un control completado; defina e informe únicamente las interacciones calificadas.
- **Informar solo el promedio poblacional**: una tasa media de consistencia de apariencia saludable puede ocultar una población bimodal de pacientes muy comprometidos y otros casi totalmente desvinculados; informe la distribución por bandas de consistencia, no solo la media.
- **Ignorar el denominador de la duración de la inscripción**: comparar tasas de consistencia entre pacientes inscritos durante períodos muy distintos sin tener en cuenta la duración de la inscripción sesgará el resultado a favor del grupo con una ventana de medición más corta y más fácil de sostener.
- **La sincronización automática en segundo plano infla la tasa**: un flujo de datos de un dispositivo portátil sincronizado de forma pasiva puede hacer que un paciente desvinculado parezca activo de forma constante sin ningún cambio real de comportamiento ni participación con el producto.

## Fuentes

- Literatura revisada por pares sobre los patrones de participación en salud digital y su relación con los resultados clínicos, por ejemplo estudios publicados en el Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), orientación sobre la calidad de los datos de salud generados por el paciente y la medición de la participación
- Digital Therapeutics Alliance, orientación de mejores prácticas sobre la medición de la participación y los resultados en terapias digitales

Vea también: [tasa de retención de usuarios](../tasa-de-retención-de-usuarios/), la métrica estrechamente relacionada que indica si un paciente permanece inscrito, a diferencia de cuán consistentemente participa mientras está inscrito.
