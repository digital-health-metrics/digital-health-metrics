# Razão de Fidelização DAU/MAU

A razão de fidelização DAU/MAU compara os usuários ativos diários (DAU) com os usuários ativos mensais (MAU) — a mesma medida subjacente usada para os usuários ativos semanais (WAU) em relação aos MAU — para expressar que proporção da base de usuários de um produto interage com ele em um dia qualquer. É a medida padrão de análise de produto para a intensidade de envolvimento, distinta de saber se um usuário sequer é retido (ver taxa de retenção de usuários) ou com que consistência um paciente inscrito específico se envolve ao longo do tempo (ver taxa de consistência do envolvimento do paciente): a fidelização descreve o ritmo de uso em nível de população, e não o padrão de um indivíduo.

## Por que isso importa

Dois produtos de saúde digital podem informar uma contagem idêntica de usuários ativos mensais e ter intensidades de envolvimento subjacentes muito diferentes: em um, a maioria desses usuários abre o aplicativo quase todos os dias; em outro, a maioria o abre uma vez por mês, pouco antes de deixar de contar como ativa. A razão de fidelização DAU/MAU distingue estas duas situações muito diferentes com um único valor de referência, simples e bem compreendido, que as equipes clínicas e de produto podem acompanhar ao longo do tempo e comparar com faixas conhecidas do setor — uma razão de cerca de 20% é uma referência razoável comumente citada para muitas aplicativos de consumo, ao passo que os produtos de hábito diário (um diário alimentar ou de sintomas que se espera que o paciente use todos os dias) devem ser avaliados em relação a um patamar significativamente mais elevado. Como a fidelização é sensível à forma como "ativo" é definido, ela é mais útil como tendência de um produto ao longo do tempo, e como comparação com produtos projetados para um padrão de uso semelhante, do que como referência absoluta para todo o setor.

## Como se calcula

```
Razão de fidelização DAU/MAU = média de usuários ativos diários no
                                período / usuários ativos mensais no
                                mesmo período × 100

A razão WAU/MAU (semanal, mesmo princípio) é uma variante mais branda,
mais apropriada para produtos que se espera que sejam usados algumas
vezes por semana e não diariamente.

"Ativo" deve ser definido de forma precisa e consistente (por exemplo,
uma ação qualificante concluída, e não uma abertura passiva da
aplicativo) tanto no numerador como no denominador.
```

## Exemplo resolvido

Um aplicativo digital de controle do diabetes tem 10 000 usuários ativos mensais em determinado mês, definidos como qualquer usuário que complete pelo menos uma ação qualificante (um registro de glicose, um registro de refeição ou uma confirmação de medicação) nesse mês. A média das contagens de usuários ativos diários ao longo dos 30 dias desse mês resulta em um DAU médio de 2200. A razão de fidelização DAU/MAU é 2200 / 10 000 × 100 = 22%, o que indica que, em um dia típico, cerca de 22% da base mensal de usuários do aplicativo interage com ele — um valor razoável para uma ferramenta de condição crônica de hábito diário, embora a equipe de produto gostaria de vê-lo crescer ao longo do tempo, à medida que o comportamento ideal (o registro diário) se torna mais habitual para os pacientes inscritos.

## Fontes de dados e ressalvas

Os DAU, WAU e MAU são todos calculados a partir dos mesmos registros de eventos subjacentes, usando uma definição consistente de evento "ativo qualificante" em todas as janelas; alterar essa definição entre os cálculos do numerador e do denominador (por exemplo, contar qualquer abertura do aplicativo para os DAU mas apenas uma ação concluída para os MAU) produzirá uma razão distorcida, que não reflete a intensidade real de envolvimento. A referência apropriada para a fidelização depende fortemente do padrão de uso pretendido do produto: uma ferramenta destinada a ser usada uma vez por semana (um registro semanal de sintomas) terá, e deve ter, uma razão DAU/MAU inferior à de uma ferramenta destinada o uso diário (um aplicativo complementar de um monitor contínuo de glicose), de modo que a fidelização deve ser sempre interpretada em relação à cadência de uso pretendida do próprio produto, e não a uma única meta universal.

## Erros comuns

- **Comparar razões de fidelização entre produtos com frequências de uso pretendidas diferentes**: uma ferramenta de uso semanal mostrará estruturalmente uma razão DAU/MAU inferior à de uma ferramenta de uso diário, mesmo que ambas estejam tendo exatamente o desempenho pretendido para os respectivos casos de uso; compare com a cadência pretendida do próprio produto, e não com um único objetivo universal.
- **Usar definições de atividade inconsistentes entre o numerador e o denominador**: isso pode produzir uma razão de fidelização que não reflete a intensidade genuína do envolvimento e que não pode ser comparada de forma significativa ao longo do tempo nem com outros produtos.
- **Tratar uma razão de fidelização crescente como inequivocamente positiva sem verificar a tendência global dos MAU**: uma razão crescente impulsionada por uma base nuclear de usuários cada vez menor e mais habitual, enquanto os MAU globais diminuem, é uma situação muito diferente — e mais preocupante — do que uma impulsionada por um envolvimento diário genuinamente crescente em uma base de usuários estável ou em crescimento.
- **Ignorar os efeitos do dia da semana e da sazonalidade nos DAU**: os DAU podem variar substancialmente conforme o dia da semana (dia útil versus fim de semana) ou a estação do ano em muitos produtos de saúde; use a média dos DAU em um período que capte um ciclo natural completo, e não uma janela curta que possa ser enviesada.

## Fontes

- Literatura acadêmica e do setor sobre métricas de envolvimento em produtos móveis e digitais, frameworks de referência de benchmarking amplamente usados em plataformas de análise de aplicativos móveis
- Digital Therapeutics Alliance, orientações de boas práticas sobre a medição do envolvimento em terapêuticas digitais
- Literatura revisada por pares sobre a medição do envolvimento na saúde digital, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR mHealth and uHealth)

Ver também: [taxa de retenção de usuários](../taxa-de-retencao-de-usuarios/) e [taxa de consistência do envolvimento do paciente](../taxa-de-consistencia-do-envolvimento-do-paciente/), as duas métricas de envolvimento relacionadas com as quais esta razão é confundida com mais frequência.
