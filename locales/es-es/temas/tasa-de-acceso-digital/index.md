# Tasa de Acceso Digital

La tasa de acceso digital mide la proporción de una población de pacientes elegible que dispone de los medios prácticos para usar un producto de salud digital: una conexión de banda ancha o de datos móviles fiable, un dispositivo con acceso a internet y una cuenta activa en el portal del paciente o la aplicación correspondiente. Es la métrica de precondición de todas las demás medidas de salud digital de este libro: una población no puede registrarse en un producto de salud digital, interactuar con él ni beneficiarse de él si estructuralmente no puede alcanzarlo, por bien diseñado que esté.

## Por qué importa

Las métricas de adopción y participación en salud digital asumen implícitamente una población que ya tiene acceso digital, y informar las tasas de adopción o participación sin establecer primero la tasa de acceso subyacente corre el riesgo de excluir silenciosamente a los pacientes con menos probabilidades de tener ese acceso, que con frecuencia son también los de mayor necesidad de salud. El Marco de Medición de la Equidad en Salud Digital de HIMSS (DHEMF) y marcos similares tratan el acceso digital como una métrica de equidad fundamental y de primer orden precisamente porque las intervenciones construidas sin tener en cuenta las brechas de acceso tienden a reforzar, en lugar de cerrar, las disparidades de salud existentes: una estrategia de telesalud como primera opción puede reducir inadvertidamente el acceso a la atención de los pacientes sin una conexión o un dispositivo fiables, aun cuando mejora de forma medible la experiencia de quienes ya tenían ambos. La tasa de acceso digital debe seguirse e informarse por segmento demográfico y geográfico, ya que los promedios nacionales o de toda la organización enmascaran de forma rutinaria grandes brechas para poblaciones específicas.

## Cómo se calcula

```
Tasa de acceso digital = pacientes con conectividad de banda ancha/móvil Y
                          un dispositivo con acceso a internet Y una cuenta
                          activa en el portal del paciente o la aplicación /
                          población total de pacientes elegibles × 100

Se informa cada subcomponente por separado además de la tasa combinada:
  Tasa de conectividad     = pacientes con una conexión a internet fiable /
                              población elegible × 100
  Tasa de posesión de      = pacientes con un dispositivo con acceso a
  dispositivos               internet / población elegible × 100
  Tasa de activación del   = pacientes con una cuenta activa en el portal o
  portal                     la aplicación / población elegible × 100
                             (véase la tasa de adopción del portal del
                             paciente para el embudo de adopción completo)
```

## Ejemplo resuelto

Un sistema de salud atiende a una población elegible de 40.000 pacientes. Una encuesta a pacientes y datos de infraestructura indican que 34.000 (85 %) tienen conectividad fiable de banda ancha o móvil, 33.000 (82,5 %) tienen un dispositivo con acceso a internet y, de los pacientes que cumplen ambas condiciones, 27.000 (67,5 % de toda la población elegible) tienen una cuenta activa en el portal del paciente. Al desglosar por edad se observa que los pacientes de 65 años o más tienen una tasa de acceso digital combinada de solo 48 %, frente a 78 % para los menores de 65: una brecha que el promedio del 67,5 % de toda la organización oculta por completo, y que debería informar directamente si un servicio determinado puede ofrecerse con seguridad de forma exclusivamente digital para esta población.

## Fuentes de datos y advertencias

Los datos de conectividad y de posesión de dispositivos suelen provenir de una combinación de autoinformes de los pacientes (mediante una encuesta o un cuestionario de admisión), de los datos cartográficos de disponibilidad de banda ancha de la Federal Communications Commission (FCC) o de un organismo nacional equivalente para la zona geográfica del paciente, y de los datos de activación del portal de los propios sistemas de la organización. La disponibilidad de banda ancha a nivel de zona (si un proveedor ofrece servicio en un código postal determinado) es un indicador indirecto más débil que la conectividad a nivel de hogar, ya que los datos de disponibilidad por zona nada dicen sobre si un paciente específico puede costear ese servicio o ha decidido suscribirse a él; las tasas de acceso a nivel de zona y a nivel de hogar no deben confundirse. El acceso a dispositivos y a conectividad también puede compartirse dentro de un hogar (por ejemplo, un único teléfono inteligente usado por varios miembros de la familia), algo que los datos de encuestas a nivel de hogar captan mejor que los datos de inicio de sesión en el portal a nivel individual por sí solos.

## Errores comunes

- **Informar solo un promedio de toda la organización**: esto oculta de forma sistemática grandes brechas de acceso en los segmentos de pacientes de mayor edad, de menores ingresos, rurales o marginados digitalmente de otro modo; siempre debe desglosarse por segmento demográfico y geográfico.
- **Confundir la disponibilidad de banda ancha a nivel de zona con el acceso real de los hogares**: que un código postal esté "cubierto" por un proveedor de banda ancha no significa que todos los hogares de esa zona estén suscritos al servicio o puedan costearlo.
- **Tratar la posesión de dispositivos como un hecho estático y puntual**: el acceso a dispositivos puede ser transitorio (un dispositivo envejecido, un teléfono perdido o dañado, un dispositivo familiar compartido que se reasigna), por lo que la tasa de acceso debe medirse de forma periódica y no darse por estable una vez evaluada.
- **Diseñar una vía exclusivamente digital antes de establecer la tasa de acceso de la población afectada**: trasladar un servicio a un formato exclusivamente digital sin confirmar primero la tasa real de acceso digital de la población objetivo corre el riesgo de excluir silenciosamente a los pacientes con menos capacidad de acceder a un canal alternativo.

## Fuentes

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), datos nacionales de disponibilidad de banda ancha y de equidad digital
- Pew Research Center, investigaciones sobre el acceso a internet, banda ancha y dispositivos, y sobre las tendencias de la brecha digital entre grupos demográficos

Vea también: [tasa de alfabetización digital](../tasa-de-alfabetización-digital/), la métrica estrechamente relacionada de si los pacientes que sí tienen acceso pueden usarlo de forma eficaz.
