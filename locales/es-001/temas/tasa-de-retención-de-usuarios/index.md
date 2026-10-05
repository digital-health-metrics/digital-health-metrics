# Tasa de Retención de Usuarios

La tasa de retención de usuarios es la proporción de usuarios activos en un período inicial que siguen activos en un período posterior, y su inversa, la tasa de abandono (o deserción), es la proporción que deja de usar el producto por completo. Mientras que la tasa de adopción del portal del paciente (véase ese tema) mide si un paciente llega a activar de forma significativa un producto de salud digital, la retención mide si sigue usándolo y, para cualquier producto de salud digital de tipo suscripción o de atención continua, la retención suele ser la métrica más estrechamente vinculada tanto con el impacto clínico como con la sostenibilidad comercial.

## Por qué importa

Un producto de salud digital que no puede retener a sus usuarios no puede ofrecer un beneficio clínico sostenido, por sólidas que sean sus cifras iniciales de adopción o activación: es poco probable que una herramienta de manejo de afecciones crónicas usada durante dos semanas y luego abandonada modifique un resultado biométrico que depende de meses de cambio de comportamiento sostenido. La retención es también una de las métricas de mayores consecuencias comerciales que una empresa de salud digital informa a inversionistas y pagadores, porque las curvas de retención (la forma de la caída a lo largo del tiempo, y no solo un único porcentaje de retención) revelan si el producto ha encontrado un patrón de uso genuinamente sostenible o si simplemente capta un interés inicial impulsado por la novedad que se desvanece de forma previsible. Una curva de retención que se aplana después de una caída inicial (los pacientes que superan el primer mes tienden a permanecer) es una señal muy distinta, y mucho más saludable, que una que sigue descendiendo de manera constante sin un piso.

## Cómo se calcula

```
Tasa de retención (período N) = usuarios activos en el período N que también
                                estuvieron activos en el período de la
                                cohorte inicial / usuarios en el período de
                                la cohorte inicial × 100

Tasa de abandono = 1 − tasa de retención (para el mismo período)

Informe como curva de retención de cohorte (retención al día/semana/mes
1, 2, 3…), no como una cifra puntual, ya que una instantánea única
confunde a los usuarios recién incorporados (que aún no han tenido
oportunidad de abandonar) con los de larga permanencia.
```

## Ejemplo resuelto

Una aplicación de salud digital inscribe una cohorte de 1.000 nuevos usuarios en enero. Al final del mes 1, 640 de esos 1.000 originales siguen activos (retención del mes 1: 64 %). Al final del mes 3, 410 siguen activos (retención del mes 3: 41 %). Para el mes 6, 380 siguen activos (retención del mes 6: 38 %). La forma de esta curva —una caída inicial pronunciada seguida de un aplanamiento entre los meses 3 y 6— sugiere que el producto retiene un núcleo estable de usuarios una vez superado un obstáculo inicial de adopción, lo que es una señal materialmente distinta y más alentadora que si el descenso del mes 3 al mes 6 hubiera continuado al mismo ritmo que el de los meses 1 a 3.

## Fuentes de datos y advertencias

La retención se calcula a partir de los registros de eventos de inicio de sesión o de actividad del propio producto, definiendo "activo" de manera coherente (por ejemplo, al menos una sesión que cumpla los requisitos en el período) en todas las cohortes comparadas. Las cohortes deben compararse en igualdad de condiciones —la misma definición inicial de "activo" y la misma duración de la ventana de observación—, ya que incluso pequeñas diferencias de definición (meses de 30 días frente a 28, o un umbral de "activo" más estricto o más laxo) pueden modificar el porcentaje de retención informado en varios puntos sin que exista ninguna diferencia real en el comportamiento de los usuarios. Los efectos estacionales son comunes en las aplicaciones de salud vinculadas a los propósitos de Año Nuevo o a períodos específicos de concientización sobre la salud, por lo que la comparación interanual de cohortes suele ser más informativa que comparar cohortes adyacentes de distintas épocas del año.

## Errores comunes

- **Informar una instantánea única de retención en lugar de una curva**: una sola cifra del tipo "el X % de los usuarios sigue activo", sin la forma de la caída a lo largo del tiempo, no puede distinguir un producto que se estabiliza (saludable) de uno en declive continuo (no saludable).
- **Cambiar la definición de "activo" entre períodos de informe**: relajar la definición de usuario activo (por ejemplo, contar una apertura pasiva de la aplicación en lugar de una acción completada) puede hacer que la retención parezca mejorar cuando el uso real no ha cambiado en absoluto.
- **Ignorar la estacionalidad de las cohortes**: comparar la retención de una cohorte de enero (a menudo inflada por la inscripción de los propósitos de Año Nuevo, que atrae a una cohorte en promedio menos motivada) con la de una cohorte adquirida en otra época del año puede producir conclusiones engañosas sobre la tendencia.
- **Combinar cohortes orgánicas y de adquisición pagada**: los usuarios adquiridos por distintos canales suelen retenerse de manera muy diferente; combinarlos en una única cifra agregada de retención puede ocultar un problema de retención específico de un canal.

## Fuentes

- Literatura revisada por pares sobre la participación y el abandono en las aplicaciones de salud digital, por ejemplo estudios publicados en el Journal of Medical Internet Research (JMIR mHealth y uHealth)
- Digital Therapeutics Alliance, guías de mejores prácticas sobre la medición de la participación y la retención en terapias digitales
- Informes sectoriales de referencia sobre la retención en aplicaciones de salud móvil, de plataformas de analítica y de organizaciones de investigación de mercado de salud digital

Vea también: [tasa de consistencia en la participación del paciente](../tasa-de-consistencia-en-la-participación-del-paciente/), que mide la calidad de la participación entre los usuarios retenidos, en contraste con que sigan o no inscritos.
