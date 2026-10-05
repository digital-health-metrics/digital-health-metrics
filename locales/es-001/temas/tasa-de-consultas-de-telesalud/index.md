# Tasa de Consultas de Telesalud

La tasa de consultas de telesalud es la proporción del total de contactos de un servicio que se prestan de forma remota, por video o por teléfono, en lugar de presencialmente. Es una métrica de mezcla de canal de prestación, no una métrica de actividad: indica cómo se presta la atención, lo cual importa para la planificación de capacidad, el acceso y la adecuación clínica, de forma bastante independiente de cuánta atención se presta en total.

## Por qué importa

La proporción de atención prestada de forma remota cambió el modelo operativo de muchos servicios tras la rápida expansión de las consultas virtuales durante la pandemia de COVID-19, y las organizaciones necesitan una forma estable de monitorizar si ese cambio se está manteniendo, está regresando a las normas previas a la pandemia, o está siendo dirigido activamente por la política institucional. La telesalud no es un sustituto uniforme de una visita presencial: la adecuación varía según la especialidad, el tipo de consulta (una revisión de medicación se comporta de forma muy distinta a una exploración física) y la preferencia del paciente, por lo que la tasa "correcta" es un juicio clínico y operativo, no un objetivo que maximizar. Los financiadores y reguladores también usan esta tasa, junto con las medidas de resultados y seguridad, para decidir la política de reembolso y comprobar que la atención remota no se esté simplemente sustituyendo en casos que necesitan ser vistos en persona.

## Cómo se calcula

```
Tasa de telesalud = consultas de telesalud / (consultas de telesalud + consultas presenciales) × 100

Informe por separado según la modalidad cuando sea posible:
  Tasa de video    = consultas por video / consultas totales × 100
  Tasa de teléfono = consultas solo por teléfono / consultas totales × 100

El denominador debe contar únicamente las consultas completadas (véanse los errores
comunes), para un servicio, especialidad y período de tiempo definidos.
```

## Ejemplo resuelto

Un servicio comunitario de salud mental registra 4.000 contactos ambulatorios completados en un trimestre: 1.200 presenciales, 1.600 por video y 1.200 por teléfono. La tasa de telesalud es (1.600 + 1.200) / 4.000 × 100 = 70%, con una tasa de video del 40% y una tasa exclusivamente telefónica del 30%. Informar solo la cifra combinada del 70% ocultaría que una gran parte de la "telesalud" aquí es únicamente audio, lo cual suele conllevar un perfil de riesgo clínico y una experiencia del paciente distintos.

## Fuentes de datos y advertencias

El tipo de consulta suele registrarse como un campo estructurado en la historia clínica electrónica (tipo de visita o ubicación) o inferirse a partir de códigos de facturación, como un código de lugar de servicio o un modificador de telesalud en una reclamación. La práctica de codificación varía significativamente entre organizaciones e incluso entre clínicos de la misma organización, por lo que una comparación de tasas entre centros debería primero confirmar que la "telesalud" se codifica de la misma manera en cada uno. Una visita que comienza por video pero pasa a teléfono por un problema técnico debería codificarse de forma coherente (comúnmente como la modalidad que aportó la mayor parte del contenido clínico), y esa regla debería documentarse en lugar de dejarse al criterio individual.

## Errores comunes

- **Contar visitas intentadas en lugar de completadas**: una cita de telesalud que no logra conectarse y se reprograma no debería inflar dos veces el denominador de telesalud.
- **Tratar el video y el teléfono como intercambiables**: tienen implicaciones clínicas y de equidad distintas (el teléfono excluye la evaluación visual, pero es más accesible para pacientes sin teléfono inteligente, datos fiables o un espacio privado para el video); informe siempre por separado cuando sea posible.
- **Ignorar la relación con las inasistencias**: el comportamiento de inasistencia suele diferir según la modalidad; consulte [tasa de inasistencia a citas](../tasa-de-inasistencia-a-citas/) antes de sacar conclusiones sobre un "mejor acceso" solo a partir de una tasa de telesalud en aumento.
- **Tratar una tasa alta como intrínsecamente buena**: para ciertas condiciones y tipos de consulta, una tasa de telesalud apropiada es baja por diseño clínico, no por falta de madurez digital.

## Fuentes

- Centers for Medicare & Medicaid Services (CMS), datos de uso de telesalud de Medicare y publicaciones de política
- NHS England, estadísticas de actividad de servicios ambulatorios y comunitarios, incluidos los desgloses de asistencia virtual/remota
- Literatura revisada por pares sobre tendencias de uso de la telesalud y resultados específicos por modalidad
