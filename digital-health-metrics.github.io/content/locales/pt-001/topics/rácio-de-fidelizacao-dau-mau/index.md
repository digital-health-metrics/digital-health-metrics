# Rácio de Fidelização DAU/MAU

O rácio de fidelização DAU/MAU compara os utilizadores ativos diários (DAU) com os utilizadores ativos mensais (MAU) — a mesma medida subjacente utilizada para os utilizadores ativos semanais (WAU) face aos MAU — para exprimir que proporção da base de utilizadores mais ampla de um produto interage com ele em qualquer dia. É a medida padrão de análise de produto da intensidade de envolvimento, distinta de saber se um utilizador é sequer retido (ver taxa de retenção de utilizadores) ou com que consistência um paciente inscrito específico se envolve ao longo do tempo (ver taxa de consistência do envolvimento do paciente): a fidelização descreve o ritmo de utilização ao nível da população, não o padrão de qualquer indivíduo.

## Porque é que isto importa

Dois produtos de saúde digital podem reportar uma contagem idêntica de utilizadores ativos mensais e ter intensidades de envolvimento subjacentes muito diferentes: num, a maioria desses utilizadores abre a aplicação quase todos os dias; noutro, a maioria abre-a uma vez por mês, mesmo antes de passar a contar como inativa. O rácio de fidelização DAU/MAU distingue estas duas situações muito diferentes com um único valor de referência, simples e bem compreendido, que as equipas de produto e clínicas podem acompanhar ao longo do tempo e comparar com intervalos conhecidos do setor — um rácio de cerca de 20% é uma referência razoável comummente citada para muitas aplicações de consumo, ao passo que os produtos de hábito diário (um diário alimentar ou de sintomas que se espera que o paciente utilize todos os dias) devem ser avaliados face a um patamar significativamente mais elevado. Como a fidelização é sensível à forma como "ativo" é definido, é mais útil como tendência de um produto ao longo do tempo, e como comparação com produtos concebidos para um padrão de utilização semelhante, do que como referência absoluta transversal ao setor.

## Como se calcula

```
Rácio de fidelização DAU/MAU = média de utilizadores ativos diários no
                                período / utilizadores ativos mensais no
                                mesmo período × 100

O rácio WAU/MAU (semanal, mesmo princípio) é uma variante mais branda,
mais apropriada para produtos que se espera serem utilizados algumas
vezes por semana e não diariamente.

"Ativo" deve ser definido de forma precisa e consistente (por exemplo,
uma ação qualificante concluída, e não uma abertura passiva da
aplicação) tanto no numerador como no denominador.
```

## Exemplo resolvido

Uma aplicação digital de gestão da diabetes tem 10 000 utilizadores ativos mensais num determinado mês, definidos como qualquer utilizador que complete pelo menos uma ação qualificante (um registo de glicose, um registo de refeição ou uma confirmação de medicação) nesse mês. A média das contagens de utilizadores ativos diários ao longo dos 30 dias desse mês dá uma média de DAU de 2200. O rácio de fidelização DAU/MAU é 2200 / 10 000 × 100 = 22%, o que indica que, num dia típico, cerca de 22% da base mensal de utilizadores da aplicação interage com ela — um valor razoável para uma ferramenta de condição crónica de hábito diário, embora um que a equipa de produto gostaria de ver aumentar ao longo do tempo à medida que o comportamento ideal (o registo diário) se torna mais habitual para os pacientes inscritos.

## Fontes de dados e ressalvas

Os DAU, WAU e MAU são todos calculados a partir dos mesmos registos de eventos subjacentes, utilizando uma definição consistente de evento "ativo qualificante" em todas as janelas; alterar essa definição entre os cálculos do numerador e do denominador (por exemplo, contar qualquer abertura da aplicação para os DAU mas apenas uma ação concluída para os MAU) produzirá um rácio distorcido que não reflete a intensidade real de envolvimento. A referência apropriada para a fidelização depende fortemente do padrão de utilização pretendido do produto: uma ferramenta destinada a ser utilizada uma vez por semana (um registo semanal de sintomas) terá, e deve ter, um rácio DAU/MAU inferior ao de uma ferramenta destinada a uso diário (uma aplicação complementar de um monitor contínuo de glicose), pelo que a fidelização deve ser sempre interpretada face à cadência de utilização pretendida do próprio produto, e não a um único objetivo universal.

## Erros comuns

- **Comparar rácios de fidelização entre produtos com frequências de utilização pretendidas diferentes**: uma ferramenta de uso semanal mostrará estruturalmente um rácio DAU/MAU inferior ao de uma ferramenta de uso diário, mesmo que ambas estejam a ter exatamente o desempenho pretendido para os respetivos casos de utilização; compare com a cadência pretendida do próprio produto, e não com um único objetivo universal.
- **Utilizar definições de atividade inconsistentes entre o numerador e o denominador**: isto pode produzir um rácio de fidelização que não reflete a intensidade genuína do envolvimento e que não pode ser comparado de forma significativa ao longo do tempo nem com outros produtos.
- **Tratar um rácio de fidelização crescente como inequivocamente positivo sem verificar a tendência global dos MAU**: um rácio crescente impulsionado por uma base nuclear de utilizadores cada vez menor e mais habitual, enquanto os MAU globais diminuem, é uma situação muito diferente — e mais preocupante — do que uma impulsionada por um envolvimento diário genuinamente crescente numa base de utilizadores estável ou em crescimento.
- **Ignorar os efeitos do dia da semana e da sazonalidade nos DAU**: os DAU podem variar substancialmente consoante o dia da semana (dia útil versus fim de semana) ou a estação do ano em muitos produtos de saúde; utilize a média dos DAU num período que capte um ciclo natural completo, e não uma janela curta que possa ser enviesada.

## Fontes

- Literatura académica e do setor sobre métricas de envolvimento em produtos móveis e digitais, quadros de referência de benchmarking amplamente utilizados em plataformas de análise móvel
- Digital Therapeutics Alliance, orientações de boas práticas sobre a medição do envolvimento em terapêuticas digitais
- Literatura revista por pares sobre a medição do envolvimento na saúde digital, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR mHealth and uHealth)

Ver também: [taxa de retenção de utilizadores](../taxa-de-retencao-de-utilizadores/) e [taxa de consistência do envolvimento do paciente](../taxa-de-consistencia-do-envolvimento-do-paciente/), as duas métricas de envolvimento relacionadas com que este rácio é mais frequentemente confundido.
