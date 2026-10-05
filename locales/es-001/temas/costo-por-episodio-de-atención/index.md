# Costo por Episodio de Atención

El costo por episodio de atención es el costo total en que se incurre al tratar un episodio clínico definido —por ejemplo, una prótesis de cadera y su recuperación asociada, o un período de manejo de la diabetes— comparado con una cohorte de línea de base histórica tratada sin la intervención digital que se evalúa. Es la unidad estándar de comparación financiera en la atención basada en el valor, porque capta el panorama económico completo de un episodio y no una partida de costo aislada, y es la métrica que los pagadores y los sistemas de salud exigen con más frecuencia antes de aceptar financiar un programa de salud digital a gran escala.

## Por qué importa

Los contratos de atención basada en el valor pagan cada vez más por resultados y episodios en lugar de por servicios individuales, lo que significa que el argumento financiero de un programa de salud digital debe plantearse en la misma moneda: el costo total por episodio, comparado con lo que costaba el mismo tipo de episodio antes de que existiera la intervención. Un programa que reduce una categoría de costo (por ejemplo, menos visitas de seguimiento presenciales) mientras aumenta otra (más costos de dispositivos, más tiempo del personal clínico de monitoreo) no ha reducido necesariamente el costo total por episodio, y solo una estimación de costos completa a nivel de episodio capta esta compensación; examinar cualquier partida de costo de forma aislada conlleva el riesgo de una conclusión engañosa en cualquier dirección. Dado que las definiciones de episodio y los períodos de línea de base pueden construirse de maneras que favorezcan una conclusión particular, esta métrica requiere más transparencia metodológica que la mayoría de las demás de este libro para resultar fiable ante un pagador o un equipo de finanzas escépticos.

## Cómo se calcula

```
Costo por episodio de atención = costo total de toda la atención prestada
                                  dentro de una ventana de episodio definida
                                  (todos los entornos asistenciales, todas
                                  las categorías de costo) / número de
                                  episodios

Se compara con el costo por episodio de una cohorte de línea de base
histórica para el mismo tipo de episodio clínicamente definido, ajustado
por la combinación de casos (edad, comorbilidad, gravedad) entre las dos
cohortes.

Se incluyen, y no solo los costos clínicos directos: los costos de la
plataforma tecnológica y de los dispositivos, el tiempo adicional del
personal clínico y cualquier atención que haya cambiado de entorno (p. ej.,
de hospitalización al domicilio) en lugar de desaparecer por completo.
```

## Ejemplo resuelto

El costo de línea de base histórico de un sistema de salud para un episodio de prótesis total de cadera (desde la cirugía hasta los 90 días de recuperación) es de 28.000 USD por episodio, con base en 200 episodios históricos. Se introduce un nuevo programa digital de monitoreo posquirúrgico, y 150 nuevos episodios que utilizan el programa muestran un costo promedio de 24.500 USD por episodio: una reducción de 3.500 USD por episodio, impulsada principalmente por menos visitas al servicio de urgencias durante la recuperación y una estancia hospitalaria promedio más corta. Tras ajustar por riesgo una combinación de casos ligeramente más joven y con menor comorbilidad en la cohorte monitoreada digitalmente respecto de la línea de base histórica, el ahorro ajustado se reduce a 2.100 USD por episodio: sigue siendo una mejora genuina, pero sustancialmente menor que la que sugería la comparación bruta sin ajustar.

## Fuentes de datos y advertencias

El costo total del episodio suele reunirse a partir del propio sistema de contabilidad de costos o de finanzas del sistema de salud, combinando datos de reclamaciones, la asignación interna de costos y, cuando interviene una plataforma digital, sus costos de licencia y de hardware; reunir esta cifra con exactitud es normalmente la parte más difícil y que más recursos consume de cualquier análisis de valor de la salud digital, ya que los costos se registran con frecuencia en sistemas separados que nunca se diseñaron para combinarse a nivel de episodio. El ajuste por combinación de casos es esencial siempre que la cohorte gestionada digitalmente y la cohorte de línea de base histórica no hayan sido asignadas mediante una verdadera aleatorización, ya que los programas digitales se ofrecen con frecuencia primero a pacientes más comprometidos, en general más sanos o más motivados, lo que puede producir un ahorro de costos aparente que en realidad es un efecto de selección y no un verdadero efecto del programa.

## Errores comunes

- **Comparar costos sin ajustar entre cohortes con distinta combinación de casos**: una cohorte gestionada digitalmente que resulte más sana o de menor riesgo que la línea de base histórica mostrará un menor costo por episodio por razones ajenas a la intervención digital; siempre debe ajustarse por riesgo antes de comparar.
- **Omitir los costos de tecnología y de personal del lado "digital" de la comparación**: un análisis de costos que solo registra la menor utilización clínica e ignora los costos de plataforma, dispositivos y personal de operar el programa digital sobrestimará los ahorros netos.
- **Definir la ventana del episodio de forma incoherente entre las cohortes**: comparar una ventana de episodio de 90 días para una cohorte con una de 60 días para otra producirá una comparación de costos que en realidad no mide lo mismo.
- **Tratar un traslado de costos como una reducción de costos**: el costo que pasa de un entorno asistencial a otro (por ejemplo, de la hospitalización a un entorno domiciliario monitoreado) es un hallazgo genuino y valioso, pero analíticamente distinto del costo eliminado por completo, y ambos deben informarse por separado.

## Fuentes

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) y guías de los modelos de pago basados en episodios
- Healthcare Financial Management Association (HFMA), guías sobre la metodología de estimación de costos por episodio de atención
- Literatura revisada por pares sobre el análisis de costos de la atención basada en el valor en salud digital, por ejemplo estudios publicados en Health Affairs y en el American Journal of Managed Care

Vea también: [retorno de la inversión (ROI) y valor de la inversión (VOI)](../retorno-de-la-inversión-roi-y-valor-de-la-inversión-voi/), que utiliza el costo por episodio de atención como uno de sus insumos principales.
