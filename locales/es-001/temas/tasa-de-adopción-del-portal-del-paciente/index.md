# Tasa de Adopción del Portal del Paciente

La tasa de adopción del portal del paciente mide la proporción de pacientes elegibles que se han registrado y usan activamente un portal de paciente en línea (por ejemplo, NHS App, Patient Access, o un portal vinculado a una historia clínica electrónica como MyChart) para ver sus registros, reservar citas o enviar mensajes a su equipo de atención. Es el indicador de nivel de entrada de la participación digital: un paciente que nunca ha activado una cuenta no puede beneficiarse de ningún servicio digital posterior construido sobre el portal.

## Por qué importa

Un portal solo crea valor una vez que el paciente lo usa, por lo que las organizaciones deberían rastrear la adopción como un embudo en lugar de como una sola cifra: registro, activación (primera acción significativa) y uso activo (uso dentro de una ventana de tiempo determinada) son tres tasas distintas que con demasiada frecuencia se confunden como una sola. Los equipos de servicios digitales suelen estar bajo presión para reportar una única cifra favorable, y se necesita disciplina para insistir en el desglose más honesto y exigente. Una adopción baja o desigualmente distribuida también es una señal de equidad: los pacientes de mayor edad, con menor alfabetización digital, que no hablan el idioma mayoritario, o que carecen de banda ancha fiable o de un teléfono inteligente, tienen sistemáticamente menos probabilidades de ser contados en el numerador, por lo que una tasa de adopción promedio en aumento puede ocultar una brecha cada vez mayor para los pacientes que a menudo más necesitan el contacto con los servicios.

## Cómo se calcula

```
Tasa de registro = pacientes con cuenta de portal creada / población de pacientes elegibles × 100
Tasa de activación = pacientes que completaron una primera acción significativa (ver un
                      resultado, reservar una cita, enviar un mensaje) / pacientes con cuenta × 100
Tasa de uso activo = pacientes que iniciaron sesión al menos una vez en los últimos 12 meses /
                      población de pacientes elegibles × 100
```

La población de pacientes elegibles suele definirse como aquellos con al menos un contacto con la organización en un período retrospectivo definido (comúnmente 24 meses), que tengan la edad y el estado de consentimiento que les permita tener su propia cuenta.

## Ejemplo resuelto

Una red de atención primaria atiende a 50.000 pacientes que cumplen la definición de elegibilidad. De ellos, 32.000 se han registrado en el portal (tasa de registro del 64%). De esos 32.000 registros, 27.000 han completado al menos una acción significativa, como ver un resultado de laboratorio (tasa de activación del 84% de los registrados). En los últimos 12 meses, 21.000 de los 50.000 pacientes elegibles originales iniciaron sesión al menos una vez (tasa de uso activo del 42%). Informar solo la cifra de registro del 64% exageraría considerablemente la participación real; la cifra de uso activo del 42% es la que debería guiar las decisiones de recursos del programa de portal.

## Fuentes de datos y advertencias

Los datos analíticos del portal suelen provenir de la propia plataforma del proveedor (eventos de inicio de sesión, uso de funciones) o del registro de auditoría de la historia clínica electrónica subyacente, y las organizaciones deberían ser escépticas ante los paneles de proveedores que solo muestran cifras de registro. El acceso por delegación (un padre o cuidador que gestiona una cuenta en nombre de un paciente) debería etiquetarse e informarse por separado, ya que cambia quién es realmente el "usuario". La elección del denominador importa enormemente: contar contra la lista total de pacientes registrados en lugar de una población genuinamente elegible y contactable siempre subestimará la adopción, mientras que contar solo contra los pacientes que fueron invitados activamente siempre la sobreestimará, por lo que la definición de elegibilidad debe fijarse y publicarse junto con cada tasa informada.

## Errores comunes

- **Contar el registro como adopción**: una cuenta creada pero nunca usada tiene un valor cercano a cero; informe la activación y el uso activo junto con el registro, no en su lugar.
- **Ignorar la exclusión digital**: las cifras de adopción agregadas pueden aumentar mientras la brecha entre los grupos más y menos incluidos digitalmente se amplía; segmente siempre por edad, privación, idioma y discapacidad cuando la gobernanza de datos lo permita.
- **Comparar organizaciones con distintas definiciones de elegibilidad**: un programa de portal que solo invita a pacientes con una dirección de correo electrónico registrada informará una tasa más alta que uno que mide contra toda la lista de registrados, sin que exista una diferencia real de rendimiento.
- **Tratar un solo inicio de sesión como participación continua**: una ventana retrospectiva de 12 meses es habitual, pero una ventana más corta (por ejemplo, 90 días) proporciona una alerta más temprana de un uso en declive.

## Fuentes

- NHS England, estadísticas de uso y registro de la NHS App (publicaciones de nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, medidas del Programa de Promoción de la Interoperabilidad, incluidas las medidas de acceso del paciente Ver, Descargar, Transmitir (VDT)
- Literatura revisada por pares sobre adopción de portales de pacientes y disparidades en salud digital, por ejemplo estudios publicados en el Journal of the American Medical Informatics Association (JAMIA)

Vea también: [tasa de inasistencia a citas](../tasa-de-inasistencia-a-citas/), a la que influyen directamente la autoprogramación y los recordatorios basados en el portal.
