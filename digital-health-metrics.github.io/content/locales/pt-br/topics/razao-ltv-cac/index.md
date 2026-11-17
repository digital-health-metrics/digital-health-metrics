# Razão LTV-CAC

A razão LTV-CAC compara o valor do tempo de vida de um cliente (LTV, do inglês lifetime value) — a receita ou margem total que uma organização espera obter de um paciente ou cliente ao longo de toda a sua relação com o produto — com o custo real de adquirir esse cliente (ver custo real de aquisição de clientes). É a métrica de economia unitária mais importante para avaliar se o crescimento de uma organização de saúde digital é financeiramente sustentável, porque uma base de clientes crescente adquirida com prejuízo não é sinal de saúde, por mais positiva que pareça a curva de crescimento.

## Por que isso importa

Uma organização de saúde digital pode fazer crescer a sua base de usuários de forma constante enquanto destrói silenciosamente valor em cada novo cliente, se o custo de aquisição exceder o valor do tempo de vida; a razão LTV-CAC é a métrica que torna isso visível de uma forma que a taxa de crescimento ou o número bruto de clientes, por si sós, não conseguem. Uma razão de 3:1 (valor do tempo de vida pelo menos três vezes o custo de aquisição) é a referência de base amplamente citada para um negócio sustentável de assinatura ou de receita recorrente, permitindo margem suficiente para cobrir custos operacionais para além da aquisição e ainda gerar retorno; uma razão inferior a 1:1 significa que a organização perde dinheiro em cada cliente adquirido, e uma razão muito superior a 3:1 (por exemplo, 10:1 ou mais) pode na realidade indicar subinvestimento no crescimento, já que sugere que a organização poderia adquirir lucrativamente mais clientes do que atualmente adquire. Investidores, conselhos de administração e pagadores que avaliam a sustentabilidade financeira de uma empresa de saúde digital tratam esta razão como um dos primeiros números que solicitam.

## Como se calcula

```
LTV = receita (ou margem) média por cliente por período × duração média
      do tempo de vida do cliente na mesma unidade de período

Razão LTV-CAC = LTV / CAC real

Uma razão de 3:1 é a referência de sustentabilidade comumente citada;
abaixo de 1:1 indica que a organização perde dinheiro na aquisição;
muito acima de 3:1 (por exemplo, 10:1 ou mais) pode indicar
subinvestimento no crescimento.
```

## Exemplo resolvido

Um serviço de assinatura de saúde digital gera uma receita mensal média de 40 $ por paciente, e o paciente médio permanece assinante durante 18 meses, o que dá um LTV de 40 $ × 18 = 720 $. O CAC real deste serviço (ver a abordagem do exemplo resolvido desse tópico) é calculado em 180 $ por paciente adquirido. A razão LTV-CAC é 720 $ / 180 $ = 4:1, confortavelmente acima da referência de sustentabilidade de 3:1. Se o CAC real fosse calculado usando apenas o custo informado pela plataforma de anúncios (120 $, antes de incluir os honorários da agência e o trabalho de admissão), a razão pareceria ser 6:1 — um retrato materialmente mais favorável, e enganador, da economia unitária do que o valor real de 4:1.

## Fontes de dados e ressalvas

O LTV depende de um pressuposto sobre a duração média do tempo de vida do cliente, que é por sua vez derivado dos dados de retenção ou de abandono da própria organização (ver taxa de retenção de usuários) — um negócio com elevado abandono tem uma duração média efetiva mais curta e, portanto, um LTV mais baixo, mesmo que a receita por cliente por período pareça saudável. Já que o LTV é uma estimativa prospectiva e não um fato histórico observado, deve ser recalculado regularmente à medida que os dados de retenção se acumulam e revisto se os pressupostos de abandono se revelarem errados, em vez de ser fixado uma vez e deixado desatualizado. Usar o CAC informado pela plataforma em vez do CAC real nesta razão é uma das formas mais comuns de uma organização se convencer de que a sua economia unitária é mais saudável do que realmente é, já que um CAC subestimado infla mecanicamente a razão.

## Erros comuns

- **Usar o CAC informado pela plataforma em vez do CAC real**: isso infla mecanicamente a razão e pode fazer uma estratégia de aquisição insustentável parecer sustentável; usar sempre o valor do CAC real totalmente carregado.
- **Usar um pressuposto desatualizado ou otimista da duração média do tempo de vida do cliente**: um LTV calculado a partir de uma curva de retenção desatualizada não refletirá o comportamento de abandono atual, especialmente após uma alteração de produto, de preço ou de mercado que modifique a retenção.
- **Tratar uma razão muito elevado como inequivocamente bom**: uma razão muito superior a 3:1 pode sinalizar subinvestimento no crescimento e não eficiência excepcional, já que implica que a organização poderia provavelmente adquirir mais clientes de forma lucrativa do que atualmente adquire.
- **Calcular um único razão agregado entre segmentos de clientes muito diferentes**: um segmento com receita elevada e baixo abandono pode mascarar outro segmento com fraca economia unitária; calcular a razão por segmento relevante (por exemplo, por canal de aquisição ou linha de produto) sempre que o volume o permita.

## Fontes

- Literatura acadêmica e setorial sobre economia unitária de assinatura e de receita recorrente, enquadramentos de referência amplamente usados provenientes de organizações de capital de risco e de investigação de métricas SaaS
- Healthcare Financial Management Association (HFMA), orientações sobre métricas de sustentabilidade financeira para organizações de saúde digital
- Rock Health e organizações semelhantes de estudos de mercado de saúde digital, referências setoriais sobre a economia unitária da saúde digital

Ver também: [custo real de aquisição de clientes](../custo-real-de-aquisicao-de-clientes/) e [razão de eficiência de marketing](../razao-de-eficiencia-de-marketing/), as outras duas métricas centrais de economia do crescimento com as quais esta razão é tipicamente informado.
