# Tasa de Anulación de Alertas Clínicas

La tasa de anulación de alertas clínicas mide la proporción de alertas de apoyo a la decisión clínica (CDS) —como las advertencias de interacción entre medicamentos, las alertas de alergia y las comprobaciones de rango de dosis generadas por un sistema de prescripción electrónica (CPOE)— que un clínico descarta o anula en lugar de actuar sobre ellas. Es la señal cuantitativa estándar utilizada para detectar y gestionar la "fatiga de alertas": la tendencia bien documentada de los clínicos a volverse insensibles a las alertas cuando el volumen de advertencias de bajo valor se vuelve abrumador.

## Por qué importa

Las tasas de anulación publicadas para las alertas de interacción entre medicamentos suelen oscilar entre aproximadamente la mitad y más del noventa por ciento, y una tasa alta no es automáticamente un fallo de seguridad: muchas alertas interruptivas se activan para interacciones clínicamente insignificantes en su contexto, o repiten una alerta sobre la que el clínico ya actuó antes en el mismo conjunto de órdenes, por lo que un sistema bien calibrado activa deliberadamente menos alertas de mayor valor en lugar de intentar llevar la tasa de anulación a cero. Lo que realmente importa para la seguridad es la tendencia a lo largo del tiempo, la distribución entre niveles de gravedad, y si los clínicos documentan un motivo al anular una alerta de alta gravedad; una tasa de anulación creciente en interacciones de alta gravedad y buena evidencia es una preocupación real de gobernanza incluso cuando el promedio de todas las alertas parezca estable.

## Cómo se calcula

```
Tasa de anulación = alertas anuladas / total de alertas activadas × 100

Segmente por:
  - nivel de gravedad (por ejemplo, contraindicado, mayor, moderado)
  - tipo de alerta (interacción entre medicamentos, alergia, terapia duplicada, rango de dosis)
  - si se documentó un motivo de anulación

Una "tasa de anulación documentada" rastrea la proporción de anulaciones que
llevan una justificación registrada, lo cual es una medida de gobernanza en sí misma.
```

## Ejemplo resuelto

El sistema CPOE de un hospital activa 10.000 alertas de interacción entre medicamentos en un mes, de las cuales 8.700 se anulan, lo que da una tasa de anulación general del 87%. Al segmentar por gravedad, de 500 alertas "contraindicadas", se anulan 60 (12%), mientras que de 6.000 alertas "moderadas", se anulan 5.700 (95%). La cifra del nivel moderado es en general coherente con los valores de referencia publicados y no es, por sí sola, motivo de preocupación; la cifra del nivel contraindicado merece una revisión de caso individual, y el hallazgo de gobernanza más relevante es que solo 340 de las 500 anulaciones en ese nivel llevan un motivo documentado.

## Fuentes de datos y advertencias

El registro de auditoría de la historia clínica electrónica, o el propio módulo de alertas del proveedor de CDS, registra cada evento de alerta activada y de respuesta a la alerta, incluyendo si el clínico introdujo una justificación en texto libre o estructurada. Comparar las tasas de anulación entre organizaciones, o incluso entre departamentos de la misma organización, requiere comprobar que los conjuntos de reglas de alerta subyacentes y la clasificación de gravedad son los mismos; un hospital con un conjunto de reglas calibrado de forma agresiva mostrará una tasa de anulación más baja por motivos que no tienen nada que ver con el comportamiento de los clínicos.

## Errores comunes

- **Tratar la tasa de anulación bruta como una única puntuación de seguridad**: mezcla anulaciones bien justificadas de alertas de bajo valor con anulaciones inseguras de interacciones genuinamente peligrosas; segmente siempre por gravedad.
- **Falta de captura del motivo de anulación**: sin un motivo documentado, es imposible distinguir "esta alerta era incorrecta" de "esta alerta era correcta y el clínico tomó una decisión insegura", que es la distinción real que importa para la seguridad del paciente.
- **Inflación de reglas de alerta con el tiempo**: añadir más alertas "por precaución" sin eliminar las de bajo valor es la causa directa del aumento de las tasas de anulación y de la fatiga de alertas; la gobernanza de alertas debería incluir una revisión y retirada periódicas de las reglas de bajo rendimiento, no solo su monitorización.
- **Comparar tasas entre sistemas con distinto diseño de interrupción**: una alerta interruptiva, de parada obligatoria, produce un comportamiento de anulación distinto al de una alerta pasiva y no bloqueante, por lo que ambas no son métricas directamente comparables.

## Fuentes

- Literatura revisada por pares sobre la fatiga de alertas de apoyo a la decisión clínica, ampliamente publicada en revistas como JAMIA y npj Digital Medicine
- ONC / HealthIT.gov, guía de seguridad de TI sanitaria sobre apoyo a la decisión clínica
- Institute for Safe Medication Practices (ISMP), guía sobre el diseño y la gobernanza de las alertas de CDS
