# Puntuación de la Escala de Usabilidad del Sistema

La puntuación de la Escala de Usabilidad del Sistema (SUS, por sus siglas en inglés) es un cuestionario estandarizado de 10 ítems que se utiliza para cuantificar cuán usable es un software, y que produce una única puntuación de 0 a 100 que puede compararse con normas sectoriales bien establecidas. A diferencia de la puntuación neta de promotores, que mide la disposición a recomendar, o de las medidas de resultados informadas por el paciente, que miden el estado clínico o funcional, la SUS mide una sola cosa específica: cuán fácil es aprender y usar el propio software, ya sea para pacientes o para el personal clínico.

## Por qué importa

Una herramienta de salud digital puede contar con una sólida evidencia clínica y un caso de negocio convincente y, aun así, fracasar en la práctica porque los pacientes o los clínicos encuentran la interfaz confusa, lenta o frustrante, y, dado que la SUS es un instrumento validado y ampliamente utilizado, con décadas de datos de referencia publicados en distintos sectores, permite que un equipo de salud digital compare la usabilidad de su propio producto con una distribución conocida, en lugar de basarse en impresiones informales o quejas anecdóticas. La SUS es deliberadamente agnóstica respecto de la tecnología y rápida de administrar (normalmente en menos de cinco minutos), lo que la hace práctica para aplicarla de forma repetida a lo largo de las iteraciones de diseño, a diferencia de un estudio de usabilidad completo o de un ensayo clínico formal. Dado que los fallos de usabilidad orientados a los clínicos son un factor documentado de agotamiento profesional (véase la tasa de agotamiento profesional médico) y que los fallos de usabilidad orientados a los pacientes son un factor documentado de abandono y de malos resultados de alfabetización digital (véase la tasa de alfabetización digital), la SUS funciona como una señal de usabilidad de alerta temprana y bajo costo, capaz de detectar un problema de diseño antes de que aparezca en esas métricas posteriores de mayores consecuencias.

## Cómo se calcula

```
Puntuación SUS = ((suma de las puntuaciones de los ítems impares − 5) +
                  (25 − suma de las puntuaciones de los ítems pares)) × 2,5

El resultado es una única puntuación de 0 a 100 (no es un porcentaje, a
pesar de la escala, ya que no representa "porcentaje de aciertos" ni
nada similar).

Interpretación de referencia publicada (Bangor et al.):
  Más de 80  — usabilidad excelente
  68         — promedio, según la norma sectorial general
  Menos de 51 — usabilidad deficiente, que justifica una investigación
```

## Ejemplo resuelto

Una plataforma de telesalud administra el cuestionario SUS estándar de 10 ítems a 150 pacientes después de su primera consulta por video. La puntuación SUS promedio calculada entre todos los encuestados es 74. Comparada con el promedio sectorial ampliamente citado de 68, esto indica una usabilidad superior al promedio para esta población de pacientes y este caso de uso específicos, aunque todavía significativamente por debajo del umbral de "excelente" de 80, que sugeriría pocas barreras de usabilidad restantes. Al segmentar las mismas 150 respuestas por edad, se obtiene una puntuación promedio de 81 para los pacientes menores de 50 años y de 62 para los de 65 años o más, una brecha que apunta a un problema de usabilidad específico y abordable para los pacientes de mayor edad, y no a un problema general de usabilidad del producto, y que un único promedio combinado habría ocultado.

## Fuentes de datos y advertencias

Los datos de la SUS provienen directamente de los pacientes o los clínicos que completan el cuestionario estandarizado de 10 ítems, y el instrumento debe administrarse exactamente como fue validado (los mismos 10 ítems, la misma escala de acuerdo de 5 puntos y la misma fórmula de puntuación) para que la puntuación resultante sea comparable con los valores de referencia publicados; una versión modificada o abreviada del cuestionario, por bien intencionada que sea, produce una puntuación que no puede interpretarse de forma fiable frente a la distribución de referencia estándar. La SUS mide la usabilidad percibida, que se correlaciona con el éxito objetivo en la realización de tareas, pero no es idéntica a este (véase la tasa de alfabetización digital como medida basada en la realización de tareas); un producto puede obtener una buena puntuación SUS de pacientes que no intentaron utilizar las funciones más complejas, por lo que combinar la SUS con datos objetivos de realización de tareas ofrece un panorama más completo que cualquiera de los dos por separado. El momento de la respuesta importa: administrar la SUS inmediatamente después de un incidente específico frustrante (una conexión fallida, un paso confuso) o después de una sesión fluida puede modificar las puntuaciones con independencia de la usabilidad global del producto.

## Errores comunes

- **Modificar los ítems del cuestionario estándar o su puntuación**: incluso pequeños cambios de redacción o de escala invalidan la comparación con la distribución de referencia publicada y bien establecida; utilice el instrumento estándar de 10 ítems exactamente como fue validado.
- **Informar solo la puntuación promedio sin segmentación**: la usabilidad suele variar de manera sustancial según la edad del usuario, su alfabetización digital o su rol (paciente frente a clínico); segmente los informes para encontrar brechas de usabilidad específicas y abordables que un único promedio oculta.
- **Tratar la SUS como una medida de efectividad clínica**: la SUS mide específicamente la usabilidad, no el resultado clínico ni la satisfacción con la atención; una herramienta muy usable puede aun así no mejorar los resultados clínicos, y estos conceptos nunca deben confundirse ni sustituirse entre sí.
- **Administrar la encuesta solo después de sesiones inusualmente fluidas o inusualmente frustrantes**: el momento y el contexto de la administración pueden sesgar la puntuación; administre la encuesta de manera coherente a una muestra representativa de sesiones reales, y no solo a las convenientes o seleccionadas.

## Fuentes

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", el instrumento original publicado
- Bangor, Kortum y Miller, investigación publicada de referencia sobre la SUS que establece las bandas de interpretación de puntuación ampliamente citadas
- Literatura revisada por pares sobre el uso de la SUS en la evaluación de la usabilidad de la salud digital y la telesalud, por ejemplo estudios publicados en JMIR Human Factors

Vea también: [puntuación neta de promotores del paciente](../puntuación-neta-de-promotores-del-paciente/), una métrica informada por el paciente relacionada pero distinta, que mide la satisfacción y la lealtad en lugar de la usabilidad del software en particular.
