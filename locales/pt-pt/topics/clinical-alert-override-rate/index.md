# Taxa de Rejeição de Alertas Clínicos

A taxa de rejeição de alertas clínicos mede a proporção de alertas de apoio à decisão clínica (CDS) — como avisos de interação medicamentosa, alertas de alergia, e verificações de intervalo posológico gerados por um sistema de prescrição eletrónica (CPOE) — que um clínico dispensa ou rejeita em vez de agir sobre eles. É o sinal quantitativo padrão utilizado para detetar e gerir a "fadiga de alertas": a tendência bem documentada de os clínicos se tornarem insensíveis a alertas quando o volume de avisos de baixo valor se torna excessivo.

## Porque é que isto importa

As taxas de rejeição publicadas para alertas de interação medicamentosa variam comummente entre cerca de metade e mais de noventa por cento, e uma taxa elevada não é automaticamente uma falha de segurança: muitos alertas interruptivos disparam para interações clinicamente insignificantes no seu contexto, ou repetem um alerta sobre o qual o clínico já agiu anteriormente no mesmo conjunto de prescrições, pelo que um sistema bem calibrado dispara deliberadamente menos alertas, de maior valor, em vez de tentar levar a taxa de rejeição a zero. O que realmente importa para a segurança é a tendência ao longo do tempo, a distribuição entre níveis de gravidade, e se os clínicos documentam um motivo ao rejeitar um alerta de alta gravidade; uma taxa de rejeição crescente em interações de alta gravidade e bem fundamentadas é uma preocupação de governação real mesmo quando a média em todos os alertas parece estável.

## Como se calcula

```
Taxa de rejeição = alertas rejeitados / total de alertas disparados × 100

Segmente por:
  - nível de gravidade (por exemplo, contraindicado, major, moderado)
  - tipo de alerta (interação medicamentosa, alergia, terapia duplicada, intervalo posológico)
  - se foi documentado um motivo de rejeição

Uma "taxa de rejeição documentada" acompanha a proporção de rejeições que
transportam uma justificação registada, o que é, em si mesma, uma medida
de governação.
```

## Exemplo resolvido

O sistema CPOE de um hospital dispara 10 000 alertas de interação medicamentosa num mês, dos quais 8700 são rejeitados, dando uma taxa de rejeição global de 87%. Ao segmentar por gravidade, de 500 alertas "contraindicados", 60 são rejeitados (12%), enquanto de 6000 alertas "moderados", 5700 são rejeitados (95%). O número do nível moderado é amplamente consistente com as referências publicadas e não é, por si só, motivo de preocupação; o número do nível contraindicado justifica revisão individual de casos, e a conclusão de governação mais acionável é que apenas 340 das 500 rejeições nesse nível transportam um motivo documentado.

## Fontes de dados e ressalvas

O registo de auditoria do registo de saúde eletrónico, ou o próprio módulo de alertas do fornecedor de CDS, regista cada evento de alerta disparado e de resposta ao alerta, incluindo se o clínico introduziu uma justificação em texto livre ou estruturada. Comparar taxas de rejeição entre organizações, ou mesmo entre departamentos da mesma organização, requer verificar que os conjuntos de regras de alerta subjacentes e a estratificação de gravidade são iguais; um hospital com um conjunto de regras calibrado de forma agressiva mostrará uma taxa de rejeição mais baixa por motivos que nada têm a ver com o comportamento dos clínicos.

## Erros comuns

- **Tratar a taxa de rejeição bruta como uma pontuação de segurança única**: isto mistura rejeições bem justificadas de alertas de baixo valor com rejeições inseguras de interações genuinamente perigosas; segmente sempre por gravidade.
- **Falta de captura do motivo de rejeição**: sem um motivo documentado, é impossível distinguir "este alerta estava errado" de "este alerta estava certo e o clínico tomou uma decisão insegura", que é a distinção real que importa para a segurança do paciente.
- **Inflação de regras de alerta ao longo do tempo**: adicionar mais alertas "por precaução" sem eliminar os de baixo valor é a causa direta do aumento das taxas de rejeição e da fadiga de alertas; a governação de alertas deve incluir revisão e retirada periódicas de regras com fraco desempenho, não apenas monitorização.
- **Comparar taxas entre sistemas com design de interrupção diferente**: um alerta interruptivo de paragem obrigatória produz um comportamento de rejeição diferente de um alerta passivo e não bloqueante, pelo que os dois não são métricas diretamente comparáveis.

## Fontes

- Literatura revista por pares sobre fadiga de alertas de apoio à decisão clínica, amplamente publicada em revistas como a JAMIA e a npj Digital Medicine
- ONC / HealthIT.gov, orientações de segurança de TI de saúde sobre apoio à decisão clínica
- Institute for Safe Medication Practices (ISMP), orientações sobre design e governação de alertas CDS
