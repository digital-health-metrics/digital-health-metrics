# Tempo até à Intervenção

O tempo até à intervenção é o tempo decorrido desde a geração de um alerta de saúde automatizado — por exemplo, um dispositivo de monitorização remota que deteta um sinal vital fora do intervalo normal, ou uma ferramenta de triagem digital que assinala um paciente em deterioração — até ao momento em que um membro da equipa clínica inicia efetivamente uma resposta. É a métrica de processo que determina se um sistema de alertas automatizado cumpre a sua promessa essencial: detetar um problema mais cedo do que um modelo tradicional de consultas de seguimento agendadas ou de chamadas telefónicas iniciadas pelo paciente teria permitido.

## Porque é que isto importa

Um sistema de alertas que gera um alerta clinicamente correto mas não é seguido de uma resposta atempada não melhorou, na realidade, a segurança do paciente; toda a proposta de valor da monitorização remota e dos alertas automatizados assenta em fechar o ciclo mais depressa do que a via alternativa, sem monitorização. Uma vez que diferentes níveis de gravidade dos alertas exigem diferentes graus de urgência na resposta, o tempo até à intervenção deve ser sempre reportado por nível de gravidade e não como uma média única, dado que uma média rápida para todos os alertas pode ocultar uma resposta perigosamente lenta ao pequeno número dos alertas mais graves. Esta métrica é também uma das formas mais claras e persuasivas de demonstrar o valor de um programa de monitorização automatizada à liderança clínica e aos financiadores, porque pode ser comparada diretamente com o tempo de resposta anterior, não automatizado, da mesma organização num cenário clínico semelhante.

## Como se calcula

```
Tempo até à intervenção = data/hora(resposta clínica iniciada) −
                          data/hora(alerta gerado)

Reportar a mediana e um percentil elevado (p. ex., o 90.º), segmentados
por nível de gravidade do alerta, e não como uma média única agregada.

A "resposta clínica iniciada" deve ser definida de forma precisa e
consistente — p. ex., um clínico que abre o registo do paciente e atua,
ou uma tentativa de contacto ativo documentada — e não meramente um
alerta visualizado ou reconhecido sem qualquer ação tomada.
```

## Exemplo resolvido

O sistema de alertas de um programa de monitorização cardíaca remota assinala 200 alertas de arritmia de gravidade elevada num mês. O tempo mediano desde a geração do alerta até ao momento em que um clínico inicia o contacto ativo é de 12 minutos, com um tempo no percentil 90 de 38 minutos. Os dados históricos da via anterior, sem monitorização, da mesma população (em que um evento semelhante só viria tipicamente a ser detetado na consulta agendada seguinte ou numa apresentação hospitalar) mostram um tempo mediano até qualquer resposta clínica medido em dias, e não em minutos. É esta comparação — e não o valor de 12 minutos isoladamente — que demonstra o valor clínico do programa de monitorização; o valor do percentil 90 é igualmente importante, uma vez que identifica a cauda de alertas que demoraram mais de meia hora a ser tratados e justifica a sua própria revisão de causa raiz.

## Fontes de dados e ressalvas

As datas/horas de geração dos alertas provêm do registo de eventos da própria plataforma de monitorização; as datas/horas da resposta clínica provêm tipicamente da pista de auditoria do registo de saúde eletrónico ou do próprio sistema de fluxo de trabalho ou de gestão de tarefas da equipa de cuidados, e estes dois sistemas têm de estar sincronizados com precisão para que o intervalo calculado seja fiável. A "resposta iniciada" necessita de uma definição rigorosa e documentada, uma vez que um clínico que apenas visualiza ou dispensa um alerta sem mais ações é um evento fundamentalmente diferente, e muito menos tranquilizador, do que um que desencadeia um contacto ou uma intervenção efetivos — confundir ambos fará com que o tempo de resposta pareça melhor do que a realidade clínica. Os níveis de dotação de pessoal noturnos e de fim de semana afetam frequentemente de forma significativa o tempo até à intervenção, pelo que esta métrica deve ser reportada por segmento de hora do dia e de dia da semana, quando o volume de alertas o permitir, e não apenas como uma média agregada 24/7 que pode ocultar uma lacuna grave na resposta fora do horário normal.

## Erros comuns

- **Contar o reconhecimento do alerta como resposta**: um clínico que visualiza ou dispensa um alerta não é o mesmo que um clínico que inicia uma resposta clínica; defina a resposta estritamente como uma ação documentada, e não como um reconhecimento passivo.
- **Reportar um tempo único agregado para todas as gravidades**: uma média rápida para alertas de baixa e de alta gravidade combinados pode ocultar um tempo de resposta perigosamente lento especificamente para os alertas de maior gravidade, que são os mais importantes.
- **Ignorar os efeitos dos padrões de dotação de pessoal**: o tempo de resposta varia frequentemente de forma significativa consoante a hora do dia e o dia da semana, devido aos níveis de dotação de pessoal; uma única média global pode ocultar uma lacuna sistemática de resposta fora do horário normal ou ao fim de semana.
- **Comparar o tempo até à intervenção entre organizações com limiares de alerta diferentes**: uma organização com um limiar de alerta mais conservador (mais sensível) gerará mais alertas de baixa acuidade, o que pode diluir o seu tempo médio de resposta em comparação com uma organização que utilize um limiar mais restritivo, independentemente da capacidade de resposta clínica real.

## Fontes

- NHS England, orientações sobre monitorização remota e normas de resposta clínica em enfermarias virtuais
- ONC / HealthIT.gov, orientações sobre a conceção e a segurança de sistemas de alertas clínicos
- Literatura revista por pares sobre tempos de resposta a alertas de monitorização remota de pacientes e resultados clínicos, por exemplo estudos publicados na npj Digital Medicine

Ver também: [taxa de disponibilidade de dispositivos](../taxa-de-disponibilidade-de-dispositivos/), uma vez que um valor fiável de tempo até à intervenção depende de o dispositivo de monitorização subjacente estar efetivamente ligado para gerar o alerta em primeiro lugar.
