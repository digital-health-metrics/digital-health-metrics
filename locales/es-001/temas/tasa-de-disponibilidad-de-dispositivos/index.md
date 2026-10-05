# Tasa de Disponibilidad de Dispositivos

La tasa de disponibilidad de dispositivos mide la proporción del tiempo de monitoreo programado durante la cual un dispositivo de salud conectado —un sensor de monitoreo remoto de pacientes, un dispositivo vestible o una unidad de telesalud domiciliaria— está realmente en línea, transmitiendo datos y funcionando correctamente, en lugar de estar fuera de línea, desconectado o averiado. Es la métrica de infraestructura fundamental que subyace a todo programa de monitoreo remoto o de dispositivos conectados: una alerta clínica, una tendencia biométrica o una cifra de participación calculadas a partir de un dispositivo que estuvo con frecuencia fuera de línea son tan fiables como la conectividad que las respalda.

## Por qué importa

Toda la propuesta de valor clínico de un programa de monitoreo remoto de pacientes depende de la captura de datos continua o casi continua; un dispositivo con baja disponibilidad crea vacíos silenciosos en el cuadro clínico del paciente que pueden confundirse con estabilidad (no hay alerta porque no hay datos, no porque nada haya cambiado) en lugar de identificarse correctamente como un fallo de monitoreo. La disponibilidad del dispositivo es también un indicador adelantado del costo del programa y de la experiencia del paciente: un dispositivo que pierde la conexión con frecuencia genera llamadas de soporte, frustración del paciente y, potencialmente, contactos clínicos innecesarios para comprobar si un vacío de datos refleja un evento clínico real o simplemente una falla técnica. Dado que los fallos de disponibilidad de los dispositivos suelen atribuirse a una infraestructura que la organización controla (una pasarela celular mal configurada, una cobertura Wi-Fi débil en el domicilio del paciente, una flota de dispositivos con mantenimiento deficiente) y no al paciente, esta métrica corresponde de lleno al proveedor y al equipo de operaciones técnicas, y no debe incorporarse indiscriminadamente a las métricas de participación del paciente.

## Cómo se calcula

```
Tasa de disponibilidad de dispositivos = tiempo en que el dispositivo estuvo
                                          en línea y transmitiendo datos
                                          válidos / tiempo total de
                                          monitoreo programado × 100

Segmentar las causas raíz del tiempo de inactividad cuando los datos lo
permitan:
  Falla del dispositivo   (batería, avería de hardware, fallo de firmware)
  Falla de conectividad   (caída de la red celular/Wi-Fi/VPN)
  Factores del paciente   (dispositivo apagado, fuera de alcance)

Parámetros técnicos complementarios que deben monitorearse junto con la
disponibilidad:
  Utilización promedio de CPU, uso de memoria y nivel de batería por
  dispositivo
  Tiempo medio entre fallas de conectividad
  Tiempo medio de reconexión tras una caída
```

## Ejemplo resuelto

Un programa de monitoreo cardíaco remoto despliega 1.000 dispositivos conectados, de los que se espera que transmitan de forma continua. A lo largo de un mes de 30 días (720 horas de monitoreo programadas por dispositivo), la flota registra un total combinado de 705.600 horas en línea reales frente a 720.000 horas programadas, lo que da una tasa de disponibilidad de dispositivos de toda la flota de 705.600 / 720.000 × 100 = 98 %. El análisis de causa raíz de las 14.400 horas de inactividad muestra que el 60 % es atribuible a caídas de la conectividad celular concentradas en una región rural de servicio específica, el 25 % a dispositivos con baterías envejecidas marcados para su reemplazo y el 15 % a pacientes que apagaron temporalmente su dispositivo. Este desglose apunta a dos intervenciones claras y distintas —una solución de conectividad para la región afectada y un programa proactivo de reemplazo de baterías— que una única cifra agregada de disponibilidad no habría distinguido.

## Fuentes de datos y advertencias

Los datos de disponibilidad provienen del propio sistema de gestión de dispositivos y telemetría del fabricante o del proveedor de la plataforma, que registra eventos de conexión y de latido por dispositivo; la organización debe confirmar exactamente qué cuenta el proveedor como "en línea" (un dispositivo puede informar que está conectado a una red mientras no transmite datos clínicos válidos, lo cual debe contarse como inactividad a efectos clínicos aunque el propio panel del proveedor lo informe como conectado). La disponibilidad debe informarse por cohorte de dispositivos o por zona geográfica cuando el volumen lo permita, ya que la calidad de la conectividad suele estar agrupada geográficamente (cobertura celular rural, Wi-Fi de edificios antiguos) y no distribuida de manera uniforme en la población de pacientes, y una cifra agregada de toda la flota puede enmascarar un problema regional grave y susceptible de corrección.

## Errores comunes

- **Confundir la conexión de red con la transmisión de datos válidos**: un dispositivo puede aparecer como "conectado" en el panel de un proveedor mientras no transmite datos clínicos utilizables; la disponibilidad debe definirse y medirse en función de la recepción real de datos válidos, y no solo de la conectividad de red en bruto.
- **Informar solo un promedio de toda la flota**: esto puede ocultar un problema grave de inactividad específico de una zona geográfica o de una cohorte de dispositivos que un promedio focalizado revelaría y que tiene una solución concreta.
- **No distinguir la causa raíz de la inactividad**: la inactividad por el dispositivo, por la conectividad y por el paciente requiere cada una una intervención completamente distinta; un único porcentaje de inactividad sin segmentación por causa raíz no permite actuar.
- **Tratar por defecto un vacío de datos como estabilidad clínica**: un flujo de datos ausente de un dispositivo fuera de línea debe desencadenar una verificación técnica de conectividad, y no interpretarse silenciosamente como "la falta de noticias son buenas noticias" para el estado clínico del paciente.

## Fuentes

- Continua Design Guidelines / Personal Connected Health Alliance, estándares técnicos de interoperabilidad para dispositivos de salud conectados
- ONC / HealthIT.gov, guías sobre la implementación de programas de monitoreo remoto de pacientes y sus requisitos técnicos
- Literatura revisada por pares sobre la fiabilidad de los dispositivos de monitoreo remoto de pacientes y la integridad de los datos, por ejemplo estudios publicados en npj Digital Medicine

Vea también: [precisión del enrutamiento de triaje](../precisión-del-enrutamiento-de-triaje/), que depende de recibir datos de dispositivos completos y fiables para poder tomar, en primer lugar, una decisión de triaje correcta.
