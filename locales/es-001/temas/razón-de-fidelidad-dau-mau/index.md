# Razón de Fidelidad DAU/MAU

La razón de fidelidad DAU/MAU compara los usuarios activos diarios (DAU) con los usuarios activos mensuales (MAU) —la misma medida subyacente que se usa para los usuarios activos semanales (WAU) frente a los MAU— para expresar qué proporción de la base de usuarios más amplia de un producto interactúa con él en un día cualquiera. Es la medida estándar de analítica de producto para la intensidad de la participación, distinta de si un usuario se retiene en absoluto (véase la tasa de retención de usuarios) o de con qué consistencia participa a lo largo del tiempo un paciente inscrito específico (véase la tasa de consistencia en la participación del paciente): la fidelidad describe el ritmo de uso a nivel poblacional, no el patrón de un individuo.

## Por qué importa

Dos productos de salud digital pueden informar un número idéntico de usuarios activos mensuales y tener, sin embargo, una intensidad de participación subyacente muy distinta: uno donde la mayoría de esos usuarios abre la aplicación casi a diario, y otro donde la mayoría la abre una vez al mes, justo antes de que dejaría de contar como activo. La razón de fidelidad DAU/MAU distingue estas dos situaciones tan diferentes con una única cifra de referencia sencilla y bien comprendida que los equipos de producto y clínicos pueden seguir a lo largo del tiempo y comparar con rangos conocidos del sector: una razón en torno al 20 % es una referencia razonable comúnmente citada para muchas aplicaciones de consumo, mientras que los productos de hábito diario (un diario de alimentación o de síntomas que se espera que el paciente use todos los días) deben juzgarse con un umbral sensiblemente más alto. Dado que la fidelidad es sensible a cómo se defina "activo", resulta más útil como tendencia de un mismo producto a lo largo del tiempo, y como comparación con productos concebidos para un patrón de uso similar, que como referencia absoluta entre sectores.

## Cómo se calcula

```
Razón de fidelidad DAU/MAU = usuarios activos diarios promedio en el
                              período / usuarios activos mensuales en el
                              mismo período × 100

La razón WAU/MAU (semanal, mismo principio) es una variante más suave,
más apropiada para productos que se espera usar unas pocas veces por
semana y no a diario.

"Activo" debe definirse con precisión y de forma coherente (p. ej., una
acción calificada completada, no una apertura pasiva de la aplicación)
tanto en el numerador como en el denominador.
```

## Ejemplo resuelto

Una aplicación digital de manejo de la diabetes tiene 10.000 usuarios activos mensuales en un mes determinado, definidos como cualquier usuario que completa al menos una acción calificada (un registro de glucosa, un registro de comidas o una confirmación de medicación) en ese mes. Al promediar los recuentos diarios de usuarios activos a lo largo de los 30 días de ese mes se obtiene un DAU promedio de 2.200. La razón de fidelidad DAU/MAU es 2.200 / 10.000 × 100 = 22 %, lo que indica que en un día típico aproximadamente el 22 % de la base mensual de usuarios de la aplicación interactúa con ella: una cifra razonable para una herramienta de afección crónica de hábito diario, aunque el equipo de producto querría verla aumentar con el tiempo a medida que el comportamiento ideal (el registro diario) se vuelva más habitual entre los pacientes inscritos.

## Fuentes de datos y advertencias

Los DAU, WAU y MAU se calculan todos a partir de los mismos registros de eventos subyacentes, utilizando una única definición coherente de evento "activo calificado" en cada ventana; cambiar esa definición entre los cálculos del numerador y del denominador (por ejemplo, contar cualquier apertura de la aplicación para los DAU pero solo una acción completada para los MAU) producirá una razón distorsionada que no refleja la intensidad real de la participación. La referencia adecuada para la fidelidad depende en gran medida del patrón de uso previsto del producto: una herramienta pensada para usarse una vez por semana (un control semanal de síntomas) tendrá, y debe tener, una razón DAU/MAU menor que una pensada para usarse a diario (una aplicación complementaria de un monitor continuo de glucosa), por lo que la fidelidad siempre debe interpretarse frente a la cadencia de uso prevista del propio producto y no frente a un único objetivo universal.

## Errores comunes

- **Comparar razones de fidelidad entre productos con distinta frecuencia de uso prevista**: una herramienta de uso semanal mostrará estructuralmente una razón DAU/MAU menor que una de uso diario aunque ambas funcionen exactamente como se pretende para sus respectivos casos de uso; debe compararse con la cadencia prevista del propio producto y no con un único objetivo universal.
- **Usar definiciones de actividad incoherentes entre el numerador y el denominador**: esto puede producir una razón de fidelidad que no refleja una intensidad de participación genuina y que no puede compararse de forma significativa a lo largo del tiempo ni con otros productos.
- **Tratar una razón de fidelidad creciente como inequívocamente positiva sin revisar la tendencia general de los MAU**: una razón en aumento impulsada por una base de usuarios central cada vez más pequeña pero más habitual, mientras los MAU generales disminuyen, es una situación muy distinta —y más preocupante— que la impulsada por un aumento genuino de la participación diaria en una base de usuarios estable o creciente.
- **Ignorar los efectos del día de la semana y de la estacionalidad en los DAU**: los DAU pueden variar sustancialmente según el día de la semana (entre semana frente a fin de semana) o la estación en muchos productos de salud; debe promediarse el DAU en un período que abarque un ciclo natural completo y no en una ventana corta que pueda estar sesgada.

## Fuentes

- Literatura académica y del sector sobre las métricas de participación en productos móviles y digitales, marcos de referencia ampliamente utilizados de las plataformas de analítica móvil
- Digital Therapeutics Alliance, guías de buenas prácticas sobre la medición de la participación en terapias digitales
- Literatura revisada por pares sobre la medición de la participación en salud digital, por ejemplo estudios publicados en el Journal of Medical Internet Research (JMIR mHealth and uHealth)

Vea también: [tasa de retención de usuarios](../tasa-de-retención-de-usuarios/) y [tasa de consistencia en la participación del paciente](../tasa-de-consistencia-en-la-participación-del-paciente/), las dos métricas de participación relacionadas con las que esta razón se confunde con mayor frecuencia.
