# Razón LTV a CAC

La razón LTV a CAC compara el valor de vida de un cliente (LTV, por sus siglas en inglés) —los ingresos o el margen totales que una organización espera obtener de un paciente o cliente durante toda su relación con el producto— con el costo real de adquirir a ese cliente (véase costo real de adquisición de clientes). Es la métrica de economía unitaria más importante para juzgar si el crecimiento de una organización de salud digital es financieramente sostenible, porque una base de clientes en crecimiento adquirida con pérdidas no es una señal de salud, por muy positiva que parezca la curva de crecimiento.

## Por qué importa

Una organización de salud digital puede aumentar su base de usuarios de forma constante mientras destruye valor discretamente con cada nuevo cliente, si el costo de adquisición supera el valor de vida; la razón LTV a CAC es la métrica que hace visible esto de una manera que la tasa de crecimiento o el simple número de clientes no pueden. Una razón de 3:1 (un valor de vida al menos tres veces el costo de adquisición) es la referencia base más citada para un negocio sostenible de suscripción o de ingresos recurrentes, pues deja margen suficiente para cubrir los costos operativos más allá de la adquisición y aun así generar un retorno; una razón inferior a 1:1 significa que la organización pierde dinero con cada cliente adquirido, y una razón muy superior a 3:1 (por ejemplo, 10:1 o más) puede en realidad indicar una subinversión en crecimiento, ya que sugiere que la organización podría adquirir de forma rentable más clientes de los que adquiere actualmente. Los inversionistas, las juntas directivas y los pagadores que evalúan la sostenibilidad financiera de una empresa de salud digital tratan esta razón como una de las primeras cifras que solicitan.

## Cómo se calcula

```
LTV = ingreso (o margen) promedio por cliente por período × duración
      promedio de vida del cliente en esa misma unidad de período

Razón LTV a CAC = LTV / CAC real

Una razón de 3:1 es la referencia base sostenible más citada; por debajo
de 1:1 indica que la organización pierde dinero en la adquisición; muy
por encima de 3:1 (p. ej., 10:1 o más) puede indicar una subinversión en
crecimiento.
```

## Ejemplo resuelto

Un servicio de suscripción de salud digital genera ingresos mensuales promedio de US$ 40 por paciente, y el paciente promedio permanece suscrito durante 18 meses, lo que da un LTV de US$ 40 × 18 = US$ 720. El CAC real de este servicio (véase el enfoque del ejemplo resuelto de ese tema) se calcula en US$ 180 por paciente adquirido. La razón LTV a CAC es US$ 720 / US$ 180 = 4:1, cómodamente por encima de la referencia de sostenibilidad de 3:1. Si el CAC real se calculara usando solo el costo informado por la plataforma publicitaria (US$ 120, antes de incorporar los honorarios de agencia y la mano de obra de admisión), la razón aparecería como 6:1, un panorama de la economía unitaria materialmente más favorable, y engañoso, que la cifra real de 4:1.

## Fuentes de datos y advertencias

El LTV depende de un supuesto sobre la duración promedio de vida del cliente, que a su vez se deriva de los propios datos de retención o abandono de la organización (véase tasa de retención de usuarios): un negocio con un abandono alto tiene una vida promedio efectiva más corta y, por lo tanto, un LTV más bajo, incluso si el ingreso por cliente por período parece saludable. Dado que el LTV es una estimación prospectiva y no un hecho histórico observado, debe recalcularse con regularidad a medida que se acumulan datos de retención y revisarse si los supuestos de abandono resultan erróneos, en lugar de fijarse una sola vez y dejarse obsoleto. Utilizar en esta razón el CAC informado por la plataforma en lugar del CAC real es una de las formas más comunes en que una organización puede convencerse de que su economía unitaria es más saludable de lo que realmente es, ya que un CAC subestimado infla mecánicamente la razón.

## Errores comunes

- **Usar el CAC informado por la plataforma en lugar del CAC real**: esto infla mecánicamente la razón y puede hacer que una estrategia de adquisición insostenible parezca sostenible; utilice siempre la cifra del CAC real con todos los costos incluidos.
- **Usar un supuesto de duración de vida del cliente obsoleto u optimista**: un LTV calculado a partir de una curva de retención desactualizada no reflejará el comportamiento de abandono actual, en especial tras un cambio de producto, de precios o de mercado que modifique la retención.
- **Tratar una razón muy alta como inequívocamente buena**: una razón muy superior a 3:1 puede señalar una subinversión en crecimiento y no una eficiencia excepcional, ya que implica que la organización probablemente podría adquirir de forma rentable más clientes de los que adquiere actualmente.
- **Calcular una única razón combinada para segmentos de clientes muy distintos**: un segmento con ingresos altos y bajo abandono puede enmascarar otro segmento con mala economía unitaria; calcule la razón por cada segmento significativo (p. ej., por canal de adquisición o línea de producto) cuando el volumen lo permita.

## Fuentes

- Literatura académica y del sector sobre la economía unitaria de suscripciones e ingresos recurrentes, marcos de referencia ampliamente utilizados de organizaciones de investigación de métricas de capital de riesgo y SaaS
- Healthcare Financial Management Association (HFMA), guías sobre métricas de sostenibilidad financiera para organizaciones de salud digital
- Rock Health y organizaciones similares de investigación del mercado de salud digital, referencias comparativas del sector sobre la economía unitaria de la salud digital

Vea también: [costo real de adquisición de clientes](../costo-real-de-adquisición-de-clientes/) y [razón de eficiencia de marketing](../razón-de-eficiencia-de-marketing/), las otras dos métricas centrales de economía del crecimiento con las que esta razón suele informarse.
