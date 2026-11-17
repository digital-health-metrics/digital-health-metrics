# Taxa de Consistência do Envolvimento do Paciente

A taxa de consistência do envolvimento do paciente mede com que regularidade um paciente inscrito interage com um produto de saúde digital ao longo do tempo — por exemplo, registrando alimentos ou sintomas, registrando atividade física ou consultando dados de saúde — e não apenas se chegou a usá-lo. É uma métrica longitudinal, distinta de uma contagem de uso ativo em um momento específico: dois pacientes podem ter o mesmo status de "usou o aplicativo este mês" enquanto um registra todos os dias de forma consistente e o outro registra uma vez e some por três semanas, e só a métrica de consistência os diferencia.

## Por que isso importa

A interação regular e sustentada com uma ferramenta de saúde digital é um dos indicadores precoces mais confiáveis de benefício clínico, em particular em condições que dependem de comportamento, como o diabetes, o controle de peso e a saúde mental, nas quais o valor da ferramenta vem do hábito que ela apoia, e não de uma sessão isolada. Um produto pode informar um número saudável de usuários ativos mensais e, na realidade, atender uma população que faz login uma vez e depois se afasta, porque o uso ativo mensal é um critério pouco exigente, que nada diz sobre o padrão de uso dentro do mês; as métricas de consistência captam isso de um jeito que as simples contagens de atividade não conseguem. Como a consistência também é uma das coisas mais difíceis de sustentar ao longo de meses, e não de semanas, ela é um sinal mais honesto da qualidade do produto e da sua adequação clínica do que os valores de envolvimento de janela curta, que são propensos a efeitos de novidade logo após o início do uso.

## Como se calcula

```
Taxa de consistência do envolvimento = semanas com pelo menos uma
                                        interação qualificante
                                        / total de semanas de inscrição
                                        × 100

Uma "interação qualificante" deve ser definida de forma explícita e
consistente (por exemplo, um registro alimentar, uma verificação de
sintomas ou uma sincronização de atividade concluída) — nunca um evento
passivo, como a abertura do aplicativo sem nenhuma ação registrada.

Informe como distribuição, e não apenas como média da população:
  por exemplo, porcentagem de pacientes com consistência semanal ≥ 80%,
       porcentagem com 50-79%, porcentagem com < 50%
```

## Exemplo resolvido

Um aplicativo de de orientação nutricional inscreve um paciente por 12 semanas. O paciente faz pelo menos um registro alimentar qualificante em 9 dessas 12 semanas, o que dá uma taxa individual de consistência do envolvimento de 9 / 12 × 100 = 75%. Na coorte inteira do aplicativo, composta por 2000 pacientes inscritos por pelo menos 12 semanas, 600 pacientes (30%) mantêm consistência semanal ≥ 80%, 900 (45%) ficam na faixa de 50-79% e 500 (25%) ficam abaixo de 50%. Informar apenas a média da coorte (que poderia ficar em torno de 65%) esconderia o fato de que um quarto dos pacientes mal se envolve — um segmento que merece ser investigado separadamente, em vez de diluído em uma média global.

## Fontes de dados e ressalvas

Os dados de consistência vêm dos registros de eventos do próprio produto (registros alimentares, sincronizações de atividade, verificações), e a definição de "interação qualificante" tem um efeito enorme sobre a taxa resultante — uma definição permissiva (qualquer abertura do aplicativo) sempre parecerá melhor do que uma definição estrita (um registro concluído e significativo), de modo que a definição usada deve ser indicada com clareza junto com qualquer valor informado. Os dados sincronizados automaticamente (por exemplo, uma pulseira de atividade conectada que sincroniza dados em segundo plano) devem ser informados separadamente dos dados registrados manualmente, já que a sincronização automática pode inflar a consistência aparente sem refletir nenhum esforço ativo do paciente nem envolvimento com as orientações do produto.

## Erros comuns

- **Confundir aberturas do aplicativo com envolvimento significativo**: uma abertura passiva do aplicativo (por exemplo, disparada por uma notificação push) não é o mesmo que um registro alimentar ou uma verificação concluída; defina e informe apenas as interações qualificantes.
- **Informar apenas a média da população**: uma taxa média de consistência com boa aparência pode esconder uma população bimodal, de pacientes muito envolvidos e de pacientes quase totalmente desligados; informe a distribuição pelas faixas de consistência, e não apenas a média.
- **Ignorar o denominador da duração da inscrição**: comparar taxas de consistência entre pacientes inscritos por períodos muito diferentes, sem levar em conta a duração da inscrição, enviesará os resultados a favor do grupo que teve uma janela de medição mais curta e mais fácil de sustentar.
- **Deixar a sincronização automática em segundo plano inflar a taxa**: um fluxo de dados de um dispositivo vestível sincronizado passivamente pode fazer um paciente desligado parecer consistentemente ativo, sem nenhuma mudança real de comportamento nem envolvimento dele com o produto.

## Fontes

- Literatura revisada por pares sobre os padrões de envolvimento em saúde digital e sua relação com os resultados clínicos, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), orientações sobre a qualidade dos dados de saúde gerados pelo paciente e a medição do envolvimento
- Digital Therapeutics Alliance, orientações de boas práticas sobre a medição do envolvimento e dos resultados em terapêuticas digitais

Ver também: [taxa de retenção de usuários](../taxa-de-retencao-de-usuarios/), a métrica intimamente relacionada que indica se um paciente permanece inscrito, e não a consistência com que se envolve enquanto está inscrito.
