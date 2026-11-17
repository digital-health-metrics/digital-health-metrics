# Tempo até a Intervenção

O tempo até a intervenção é o tempo decorrido desde a geração de um alerta de saúde automatizado — por exemplo, um dispositivo de monitoramento remoto que detecta um sinal vital fora da faixa normal, ou uma ferramenta de triagem digital que sinaliza um paciente em piora — até o momento em que um membro da equipe clínica de fato inicia uma resposta. É a métrica de processo que determina se um sistema automatizado de alertas cumpre sua promessa essencial: detectar um problema mais cedo do que um modelo tradicional de consultas de acompanhamento agendadas ou de ligações iniciadas pelo paciente teria permitido.

## Por que isso importa

Um sistema de alertas que gera um alerta clinicamente correto mas não é seguido de uma resposta em tempo hábil não melhorou, na prática, a segurança do paciente; toda a proposta de valor do monitoramento remoto e dos alertas automatizados se baseia em fechar o ciclo mais rápido do que a alternativa, sem monitoramento. Como níveis de gravidade diferentes exigem graus diferentes de urgência na resposta, o tempo até a intervenção deve ser sempre informado por nível de gravidade, e não como uma média única, já que uma média rápida para todos os alertas pode esconder uma resposta perigosamente lenta ao pequeno número de alertas mais graves. Essa métrica também é uma das formas mais claras e persuasivas de demonstrar o valor de um programa de monitoramento automatizado à liderança clínica e aos financiadores, porque pode ser comparada diretamente com o tempo de resposta anterior, não automatizado, da mesma organização em um cenário clínico semelhante.

## Como se calcula

```
Tempo até a intervenção = data/hora(resposta clínica iniciada) −
                          data/hora(alerta gerado)

Informe a mediana e um percentil alto (por exemplo, o 90º), segmentados
por nível de gravidade do alerta, e não como uma média única agregada.

A "resposta clínica iniciada" deve ser definida de forma precisa e
consistente — por exemplo, um profissional que abre o prontuário do paciente e age,
ou uma tentativa de contato ativo documentada — e não meramente um
alerta visualizado ou reconhecido sem nenhuma ação tomada.
```

## Exemplo resolvido

O sistema de alertas de um programa de monitoramento cardíaco remota sinaliza 200 alertas de arritmia de alta gravidade em um mês. O tempo mediano desde a geração do alerta até o momento em que um profissional inicia o contato ativo é de 12 minutos, com um percentil 90 de 38 minutos. Os dados históricos do fluxo anterior, sem monitoramento, da mesma população (em que um evento semelhante só seria detectado, em geral, na consulta agendada seguinte ou em um atendimento hospitalar) mostram um tempo mediano até qualquer resposta clínica medido em dias, e não em minutos. É esta comparação — e não o valor de 12 minutos isoladamente — que demonstra o valor clínico do programa de monitoramento; o valor do percentil 90 é igualmente importante, já que identifica a cauda de alertas que levaram mais de meia hora para ser tratados e justifica uma revisão de causa raiz própria.

## Fontes de dados e ressalvas

As datas/horas de geração dos alertas vêm do registro de eventos da própria plataforma de monitoramento; as datas/horas da resposta clínica vêm, em geral, da trilha de auditoria do prontuário eletrônico ou do sistema de fluxo de trabalho ou de gestão de tarefas da equipe de cuidados, e esses dois sistemas precisam estar sincronizados com precisão para que o intervalo calculado seja confiável. A "resposta iniciada" precisa de uma definição rigorosa e documentada, já que um profissional que apenas visualiza ou dispensa um alerta, sem outras ações, é um evento fundamentalmente diferente, e muito menos tranquilizador, do que um que dispara um contato ou uma intervenção efetivos — confundir os dois fará o tempo de resposta parecer melhor do que a realidade clínica. O dimensionamento das equipes à noite e nos fins de semana costuma afetar de forma significativa o tempo até a intervenção, de modo que essa métrica deve ser informada por faixa de horário do dia e dia da semana, quando o volume de alertas permitir, e não apenas como uma média agregada 24/7, que pode esconder uma lacuna grave de resposta fora do horário comercial.

## Erros comuns

- **Contar o reconhecimento do alerta como resposta**: um profissional que visualiza ou dispensa um alerta não é o mesmo que um profissional que inicia uma resposta clínica; defina a resposta estritamente como uma ação documentada, e não como um reconhecimento passivo.
- **Informar um tempo único agregado para todas as gravidades**: uma média rápida para alertas de baixa e de alta gravidade combinados pode esconder um tempo de resposta perigosamente lento especificamente para os alertas de maior gravidade, que são os mais importantes.
- **Ignorar os efeitos do dimensionamento das equipes**: o tempo de resposta costuma variar bastante conforme a hora do dia e o dia da semana, por causa do dimensionamento das equipes; uma única média global pode esconder uma lacuna sistemática de resposta fora do horário comercial ou nos fins de semana.
- **Comparar o tempo até a intervenção entre organizações com limiares de alerta diferentes**: uma organização com um limiar de alerta mais conservador (mais sensível) gerará mais alertas de baixa gravidade, o que pode diluir seu tempo médio de resposta em comparação com uma organização que use um limiar mais restritivo, independentemente da capacidade real de resposta clínica.

## Fontes

- NHS England, orientações sobre monitoramento remoto e padrões de resposta clínica em enfermarias virtuais
- ONC / HealthIT.gov, orientações sobre o design e a segurança de sistemas de alertas clínicos
- Literatura revisada por pares sobre tempos de resposta a alertas de monitoramento remoto de pacientes e resultados clínicos, por exemplo estudos publicados na npj Digital Medicine

Ver também: [taxa de disponibilidade de dispositivos](../taxa-de-disponibilidade-de-dispositivos/), já que um valor confiável de tempo até a intervenção depende de o dispositivo de monitoramento subjacente estar de fato ligado para gerar o alerta, antes de tudo.
