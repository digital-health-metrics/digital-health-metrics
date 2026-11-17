# Taxa de Rejeição de Alertas Clínicos

A taxa de rejeição de alertas clínicos mede a proporção de alertas de apoio à decisão clínica (CDS) — como avisos de interação medicamentosa, alertas de alergia, e verificações de intervalo posológico gerados por um sistema de prescrição eletrônica (CPOE) — que um profissional dispensa ou rejeita em vez de agir sobre eles. É o sinal quantitativo padrão usado para detectar e gerenciar a "fadiga de alertas": a tendência bem documentada de os profissionais se tornarem insensíveis a alertas quando o volume de avisos de baixo valor se torna excessivo.

## Por que isso importa

As taxas de rejeição publicadas para alertas de interação medicamentosa variam comumente entre cerca de metade e mais de noventa por cento, e uma taxa elevada não é automaticamente uma falha de segurança: muitos alertas interruptivos disparam para interações clinicamente insignificantes no contexto, ou repetem um alerta sobre o qual o profissional já agiu antes no mesmo conjunto de prescrições, de modo que um sistema bem calibrado dispara deliberadamente menos alertas, de maior valor, em vez de tentar levar a taxa de rejeição a zero. O que realmente importa para a segurança é a tendência ao longo do tempo, a distribuição entre níveis de gravidade, e se os profissionais documentam um motivo ao rejeitar um alerta de alta gravidade; uma taxa de rejeição crescente em interações de alta gravidade e bem fundamentadas é uma preocupação real de governança, mesmo quando a média de todos os alertas parece estável.

## Como se calcula

```
Taxa de rejeição = alertas rejeitados / total de alertas disparados × 100

Segmente por:
  - nível de gravidade (por exemplo, contraindicado, major, moderado)
  - tipo de alerta (interação medicamentosa, alergia, terapia duplicada, intervalo posológico)
  - se foi documentado um motivo de rejeição

Uma "taxa de rejeição documentada" acompanha a proporção de rejeições que
trazem uma justificativa registrada, o que é, em si mesma, uma medida
de governança.
```

## Exemplo resolvido

O sistema CPOE de um hospital dispara 10 000 alertas de interação medicamentosa em um mês, dos quais 8700 são rejeitados, resultando em uma taxa global de rejeição de 87%. Ao segmentar por gravidade, de 500 alertas "contraindicados", 60 são rejeitados (12%), enquanto de 6000 alertas "moderados", 5700 são rejeitados (95%). O número do nível moderado é amplamente consistente com as referências publicadas e não é, por si só, motivo de preocupação; o número do nível contraindicado justifica revisão caso a caso, e a conclusão de governança mais acionável é que apenas 340 das 500 rejeições nesse nível trazem um motivo documentado.

## Fontes de dados e ressalvas

O registro de auditoria do prontuário eletrônico, ou o próprio módulo de alertas do fornecedor de CDS, registra cada evento de alerta disparado e de resposta ao alerta, incluindo se o profissional introduziu uma justificativa em texto livre ou estruturada. Comparar taxas de rejeição entre organizações, ou mesmo entre departamentos da mesma organização, exige verificar que os conjuntos de regras de alerta subjacentes e a estratificação de gravidade são iguais; um hospital com um conjunto de regras calibrado de forma agressiva mostrará uma taxa de rejeição mais baixa por motivos que nada têm a ver com o comportamento dos profissionais.

## Erros comuns

- **Tratar a taxa de rejeição bruta como uma pontuação de segurança única**: isso mistura rejeições bem justificadas de alertas de baixo valor com rejeições inseguras de interações genuinamente perigosas; segmente sempre por gravidade.
- **Não capturar o motivo da rejeição**: sem um motivo documentado, é impossível distinguir "este alerta estava errado" de "este alerta estava certo e o profissional tomou uma decisão insegura", que é a distinção real que importa para a segurança do paciente.
- **Inflação de regras de alerta ao longo do tempo**: adicionar mais alertas "por precaução" sem eliminar os de baixo valor é a causa direta do aumento das taxas de rejeição e da fadiga de alertas; a governança de alertas deve incluir revisão e retirada periódicas de regras com baixo desempenho, e não apenas monitoramento.
- **Comparar taxas entre sistemas com desenho de interrupção diferente**: um alerta interruptivo de bloqueio obrigatório produz um comportamento de rejeição diferente de um alerta passivo e não bloqueante, de modo que as duas não são métricas diretamente comparáveis.

## Fontes

- Literatura revisada por pares sobre fadiga de alertas de apoio à decisão clínica, amplamente publicada em revistas como a JAMIA e a npj Digital Medicine
- ONC / HealthIT.gov, orientações de segurança de TI de saúde sobre apoio à decisão clínica
- Institute for Safe Medication Practices (ISMP), orientações sobre design e governança de alertas CDS
