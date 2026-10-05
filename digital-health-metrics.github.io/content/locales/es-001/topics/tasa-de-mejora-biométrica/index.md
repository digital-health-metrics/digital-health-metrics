# Tasa de Mejora Biométrica

La tasa de mejora biométrica es la proporción de pacientes inscritos en un programa de salud digital que logran una mejora clínicamente significativa en un parámetro biométrico monitoreado —con mayor frecuencia la hemoglobina glucosilada (HbA1c) en los programas de diabetes y cardiometabólicos, o el índice de masa corporal (IMC) en los programas de control de peso— durante un período de inscripción definido. Es la métrica de resultado que en última instancia justifica las afirmaciones clínicas de un producto de salud digital: las cifras de participación y adopción describen cómo se utiliza un producto, pero la mejora biométrica se acerca más a la evidencia de que funciona.

## Por qué importa

Los programas de salud digital se venden y se contratan con frecuencia con la promesa de mejores resultados de salud, y la tasa de mejora biométrica es la forma más directa y cuantificable de contrastar esa promesa con un umbral específico y clínicamente reconocido, en lugar de una vaga afirmación de "mejor salud". Los pagadores, los empleadores y los sistemas de salud vinculan cada vez más el reembolso o la renovación del contrato a un cambio biométrico demostrado, de modo que un programa que no puede informar esta tasa de forma creíble se encuentra en desventaja tanto comercial como clínica. La métrica también es una verificación de disciplina sobre el diseño del programa: es mucho más fácil informar la participación (inicios de sesión, mensajes enviados) que los resultados, y un equipo debería desconfiar de cualquier programa que informe con entusiasmo sobre lo primero mientras es impreciso respecto de lo segundo.

## Cómo se calcula

```
Tasa de mejora biométrica = pacientes que logran una mejora clínicamente
                             significativa definida / pacientes con una
                             medición basal y de seguimiento válidas × 100

Umbrales clínicamente significativos comunes:
  HbA1c   — una reducción de ≥ 0,5 puntos porcentuales, o alcanzar un
            objetivo definido (p. ej., < 7,0 %) desde una línea de base
            fuera de rango
  IMC     — una reducción de ≥ 5 % del peso corporal basal, mantenida
            hasta el punto de medición de seguimiento

Se informa por separado para cada parámetro biométrico monitoreado; nunca
se combinan las mejoras de HbA1c y de IMC en un único porcentaje de
"mejora" combinado.
```

## Ejemplo resuelto

Un programa de salud digital cardiometabólico inscribe a 800 pacientes con una HbA1c basal fuera de rango. De ellos, 620 tienen tanto una medición basal válida como una medición de seguimiento a los 6 meses (180 se pierden durante el seguimiento y se excluyen del denominador, no se cuentan como fracasos). De los 620 con mediciones pareadas, 340 logran una reducción de al menos 0,5 puntos porcentuales. La tasa de mejora biométrica es 340 / 620 × 100 = 55 %. Informar esta cifra sobre los 800 inscritos (340 / 800 = 42,5 %) confundiría la pérdida durante el seguimiento con el fracaso del tratamiento, subestimando la tasa de los pacientes que efectivamente completaron la medición.

## Fuentes de datos y advertencias

Los valores biométricos basales y de seguimiento suelen provenir de un dispositivo conectado (un glucómetro Bluetooth o una báscula inteligente), de un resultado de laboratorio importado de la historia clínica electrónica, o de un valor autoinformado ingresado por el paciente, y estas tres fuentes tienen niveles de fiabilidad muy distintos, por lo que la fuente debe informarse junto con la tasa. La pérdida durante el seguimiento rara vez es aleatoria: los pacientes que abandonan un programa suelen ser también los que menos probabilidades tienen de haber mejorado, de modo que una tasa de mejora alta calculada solo sobre los pacientes que completaron el seguimiento puede sobrestimar el efecto real del programa a nivel poblacional. Los efectos estacionales y de regresión a la media son reales tanto para la HbA1c como para el peso, por lo que un programa debería comparar con un grupo de control concurrente o histórico siempre que sea posible, en lugar de tratar cualquier mejora como prueba del efecto del programa.

## Errores comunes

- **Excluir, en lugar de informar, la pérdida durante el seguimiento**: eliminar discretamente del denominador a los pacientes sin medición de seguimiento puede inflar de forma sustancial la tasa de mejora aparente; siempre debe informarse la tasa de realización de la medición de seguimiento junto con la propia tasa de mejora.
- **Mezclar mediciones autoinformadas y obtenidas por dispositivo sin etiquetarlas**: un peso autoinformado es sistemáticamente menos fiable que una lectura de una báscula inteligente conectada, y combinar ambas fuentes oculta qué parte de una mejora aparente es ruido de medición.
- **Ausencia de control o contrafáctico**: muchas medidas biométricas crónicas fluctúan o regresan a la media por sí solas; una tasa de mejora de un solo grupo sin ningún grupo de comparación es una evidencia sugerente, no concluyente, del efecto del programa.
- **Tratar un cambio promedio modesto como evidencia de una mejora generalizada**: una pequeña mejora promedio a nivel poblacional puede estar impulsada por unos pocos grandes respondedores mientras la mayoría de los pacientes no experimenta cambios; debe informarse la distribución (p. ej., la proporción que cruza el umbral clínicamente significativo), y no solo el cambio medio.

## Fuentes

- American Diabetes Association (ADA), Standards of Care in Diabetes, guías sobre el objetivo de HbA1c y el cambio clínicamente significativo
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, guías de evaluación de programas
- Literatura revisada por pares sobre los resultados de los programas digitales de diabetes y control de peso, por ejemplo estudios publicados en npj Digital Medicine y Diabetes Care

Vea también: [tasa de adherencia a la medicación](../tasa-de-adherencia-a-la-medicación/), un factor previo frecuente de la mejora biométrica en los programas de afecciones crónicas.
