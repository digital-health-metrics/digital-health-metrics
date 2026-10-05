# Rácio LTV-CAC

O rácio LTV-CAC compara o valor do tempo de vida de um cliente (LTV, do inglês lifetime value) — a receita ou margem total que uma organização espera obter de um paciente ou cliente ao longo de toda a sua relação com o produto — com o custo real de adquirir esse cliente (ver custo real de aquisição de clientes). É a métrica de economia unitária mais importante para avaliar se o crescimento de uma organização de saúde digital é financeiramente sustentável, porque uma base de clientes crescente adquirida com prejuízo não é sinal de saúde, por mais positiva que pareça a curva de crescimento.

## Porque é que isto importa

Uma organização de saúde digital pode fazer crescer a sua base de utilizadores de forma constante enquanto destrói silenciosamente valor em cada novo cliente, se o custo de aquisição exceder o valor do tempo de vida; o rácio LTV-CAC é a métrica que torna isto visível de uma forma que a taxa de crescimento ou o número bruto de clientes, por si sós, não conseguem. Um rácio de 3:1 (valor do tempo de vida pelo menos três vezes o custo de aquisição) é a referência de base amplamente citada para um negócio sustentável de subscrição ou de receita recorrente, permitindo margem suficiente para cobrir custos operacionais para além da aquisição e ainda gerar retorno; um rácio inferior a 1:1 significa que a organização perde dinheiro em cada cliente adquirido, e um rácio muito superior a 3:1 (por exemplo, 10:1 ou mais) pode na realidade indicar subinvestimento no crescimento, uma vez que sugere que a organização poderia adquirir lucrativamente mais clientes do que atualmente adquire. Investidores, conselhos de administração e pagadores que avaliam a sustentabilidade financeira de uma empresa de saúde digital tratam este rácio como um dos primeiros números que solicitam.

## Como se calcula

```
LTV = receita (ou margem) média por cliente por período × duração média
      do tempo de vida do cliente na mesma unidade de período

Rácio LTV-CAC = LTV / CAC real

Um rácio de 3:1 é a referência de sustentabilidade comummente citada;
abaixo de 1:1 indica que a organização perde dinheiro na aquisição;
muito acima de 3:1 (por exemplo, 10:1 ou mais) pode indicar
subinvestimento no crescimento.
```

## Exemplo resolvido

Um serviço de subscrição de saúde digital gera uma receita mensal média de 40 $ por paciente, e o paciente médio permanece subscritor durante 18 meses, o que dá um LTV de 40 $ × 18 = 720 $. O CAC real deste serviço (ver a abordagem do exemplo resolvido desse tópico) é calculado em 180 $ por paciente adquirido. O rácio LTV-CAC é 720 $ / 180 $ = 4:1, confortavelmente acima da referência de sustentabilidade de 3:1. Se o CAC real fosse calculado utilizando apenas o custo reportado pela plataforma de anúncios (120 $, antes de incluir os honorários da agência e o trabalho de admissão), o rácio pareceria ser 6:1 — um retrato materialmente mais favorável, e enganador, da economia unitária do que o valor real de 4:1.

## Fontes de dados e ressalvas

O LTV depende de um pressuposto sobre a duração média do tempo de vida do cliente, que é por sua vez derivado dos dados de retenção ou de abandono da própria organização (ver taxa de retenção de utilizadores) — um negócio com elevado abandono tem uma duração média efetiva mais curta e, portanto, um LTV mais baixo, mesmo que a receita por cliente por período pareça saudável. Uma vez que o LTV é uma estimativa prospetiva e não um facto histórico observado, deve ser recalculado regularmente à medida que os dados de retenção se acumulam e revisto se os pressupostos de abandono se revelarem errados, em vez de ser fixado uma vez e deixado desatualizado. Utilizar o CAC reportado pela plataforma em vez do CAC real neste rácio é uma das formas mais comuns de uma organização se convencer de que a sua economia unitária é mais saudável do que realmente é, uma vez que um CAC subestimado infla mecanicamente o rácio.

## Erros comuns

- **Utilizar o CAC reportado pela plataforma em vez do CAC real**: isto infla mecanicamente o rácio e pode fazer uma estratégia de aquisição insustentável parecer sustentável; utilizar sempre o valor do CAC real totalmente carregado.
- **Utilizar um pressuposto desatualizado ou otimista da duração média do tempo de vida do cliente**: um LTV calculado a partir de uma curva de retenção desatualizada não refletirá o comportamento de abandono atual, especialmente após uma alteração de produto, de preço ou de mercado que modifique a retenção.
- **Tratar um rácio muito elevado como inequivocamente bom**: um rácio muito superior a 3:1 pode sinalizar subinvestimento no crescimento e não eficiência excecional, uma vez que implica que a organização poderia provavelmente adquirir mais clientes de forma lucrativa do que atualmente adquire.
- **Calcular um único rácio agregado entre segmentos de clientes muito diferentes**: um segmento com receita elevada e baixo abandono pode mascarar outro segmento com fraca economia unitária; calcular o rácio por segmento relevante (por exemplo, por canal de aquisição ou linha de produto) sempre que o volume o permita.

## Fontes

- Literatura académica e setorial sobre economia unitária de subscrição e de receita recorrente, enquadramentos de referência amplamente utilizados provenientes de organizações de capital de risco e de investigação de métricas SaaS
- Healthcare Financial Management Association (HFMA), orientações sobre métricas de sustentabilidade financeira para organizações de saúde digital
- Rock Health e organizações semelhantes de estudos de mercado de saúde digital, referências setoriais sobre a economia unitária da saúde digital

Ver também: [custo real de aquisição de clientes](../custo-real-de-aquisicao-de-clientes/) e [rácio de eficiência de marketing](../rácio-de-eficiencia-de-marketing/), as outras duas métricas centrais de economia do crescimento com as quais este rácio é tipicamente reportado.
