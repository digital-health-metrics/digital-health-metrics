# Tasa de Reingreso Hospitalario

La tasa de reingreso hospitalario es la proporción de pacientes dados de alta que vuelven a ser hospitalizados, de forma no planificada, dentro de una ventana definida tras el alta, con mayor frecuencia de 30 días. Para la salud digital, es la métrica más directamente vinculada con la economía de los pagadores y los contratos de atención basada en el valor: un programa de monitoreo remoto, de seguimiento posterior al alta o de transición asistencial digital que no pueda demostrar un efecto creíble sobre los reingresos difícilmente obtendrá un respaldo de reembolso continuado, por muy buenas que parezcan sus cifras de participación.

## Por qué importa

Un reingreso no planificado es costoso, perturbador para el paciente y, en muchos sistemas de salud, hoy se penaliza directamente: esquemas como el Hospital Readmissions Reduction Program de Estados Unidos reducen el pago a los hospitales con tasas de reingreso superiores a las esperadas para determinadas afecciones, y por eso los hospitales encargan activamente programas digitales posteriores al alta y de monitoreo remoto orientados a reducirlos. Una proporción significativa de los reingresos se considera potencialmente prevenible —debida a instrucciones de alta inadecuadas, citas de seguimiento omitidas, malentendidos sobre la medicación o un deterioro de los síntomas no atendido que un punto de contacto digital bien diseñado puede detectar antes—, que es precisamente la brecha a la que apuntan las herramientas digitales de atención en la transición. La tasa de reingreso siempre debe leerse junto con la complejidad de los casos (case mix): un programa que atiende a una población más enferma y compleja tendrá una tasa de base estructuralmente más alta que uno que atiende a una población más sana, con independencia de la calidad del programa.

## Cómo se calcula

```
Tasa de reingreso a 30 días = reingresos no planificados dentro de los
                               30 días posteriores al alta
                               / total de altas índice × 100

Excluya del numerador: los reingresos planificados (p. ej., un
procedimiento de seguimiento programado) y los traslados que son una
continuación del mismo episodio de atención y no un nuevo ingreso.

Ajuste por riesgo cuando sea posible, utilizando un índice aceptado de
complejidad de casos o de comorbilidad, antes de comparar tasas entre
distintas poblaciones de pacientes o períodos.
```

## Ejemplo resuelto

Un hospital da de alta a 1.200 pacientes con insuficiencia cardíaca en un trimestre. De ellos, 210 reingresan en un plazo de 30 días, de los cuales 15 son reingresos planificados para un procedimiento programado y se excluyen. La tasa de reingreso no planificado a 30 días es (210 − 15) / 1.200 × 100 = 16,25%. Se introduce un programa de monitoreo remoto para un subconjunto de 400 de estos pacientes (seleccionados por riesgo clínico, no al azar), y su tasa de reingreso no planificado es del 14%, frente al 18% de los 800 pacientes no inscritos. Dado que la inscripción se basó en el riesgo clínico y no en una asignación aleatoria, esta diferencia constituye una evidencia sugerente pero no concluyente del efecto del programa, y debe interpretarse junto con un análisis de ajuste por riesgo y no tomarse al pie de la letra.

## Fuentes de datos y advertencias

Los datos de reingreso suelen extraerse del flujo de admisión, alta y traslado (ADT) del propio hospital para los reingresos al mismo centro, pero un paciente reingresado en otro hospital no aparecerá en ese flujo, por lo que el seguimiento de reingresos de un solo hospital subestima sistemáticamente las tasas reales, a menos que se complemente con datos de un intercambio regional de información de salud, datos de reclamaciones de pagadores o bases de datos estatales de todos los pagadores. La atribución a un programa digital requiere cuidado: los pacientes que optan por un programa voluntario de monitoreo remoto rara vez son una muestra aleatoria de la población dada de alta, por lo que una comparación ingenua de las tasas de reingreso entre inscritos y no inscritos tenderá a verse confundida precisamente por los efectos de selección que hicieron que algunos pacientes fueran más propensos a inscribirse desde un principio.

## Errores comunes

- **Comparar tasas brutas, sin ajuste por riesgo, entre poblaciones**: un programa que atiende a una población más enferma mostrará una tasa bruta de reingreso más alta que uno que atiende a una población más sana, incluso si el programa en sí es más efectivo; ajuste siempre por riesgo antes de comparar.
- **Subestimar los reingresos a otros centros**: basarse únicamente en los datos ADT de un solo hospital pasará por alto los reingresos en otros lugares, lo que subestima la tasa real, en particular en zonas con varios sistemas hospitalarios competidores.
- **Sesgo de selección en la inscripción voluntaria a un programa**: los pacientes que eligen inscribirse en un programa digital de seguimiento suelen diferir sistemáticamente (en alfabetización en salud, apoyo social o motivación) de quienes no lo hacen, lo que confunde cualquier comparación ingenua de antes y después o entre inscritos y no inscritos.
- **Contabilizar como reingreso cualquier regreso al mismo centro**: un reingreso programado y planificado (por ejemplo, un procedimiento planificado en una segunda etapa) no es una señal de un alta fallida y debe excluirse del numerador, no mezclarse con los regresos genuinamente no planificados.

## Fuentes

- Centers for Medicare & Medicaid Services (CMS), Hospital Readmissions Reduction Program y especificaciones de la medida Hospital-Wide Readmission
- Institute for Healthcare Improvement (IHI), guías sobre la reducción de reingresos evitables
- Literatura revisada por pares sobre intervenciones digitales de monitoreo remoto y de atención en la transición para la reducción de reingresos, por ejemplo estudios publicados en JAMA Network Open y npj Digital Medicine

Vea también: [precisión del enrutamiento de triaje](../precisión-del-enrutamiento-de-triaje/), ya que un enrutamiento inicial inapropiado puede ser en sí mismo un factor posterior de ingresos evitables.
