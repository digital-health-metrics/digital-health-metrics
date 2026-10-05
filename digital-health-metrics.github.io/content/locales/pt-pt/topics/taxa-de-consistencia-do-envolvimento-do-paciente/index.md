# Taxa de Consistência do Envolvimento do Paciente

A taxa de consistência do envolvimento do paciente mede com que regularidade um paciente inscrito interage com um produto de saúde digital ao longo do tempo — por exemplo, registando alimentos ou sintomas, registando atividade física, ou consultando dados de saúde — e não apenas se chegou a utilizá-lo. É uma métrica longitudinal, distinta de uma contagem de utilização ativa num momento determinado: dois pacientes podem ter um estado idêntico de "utilizou a aplicação este mês" enquanto um regista diariamente de forma consistente e o outro regista uma vez e desaparece durante três semanas, e apenas a métrica de consistência os distingue.

## Porque é que isto importa

A interação regular e sustentada com uma ferramenta de saúde digital é um dos indicadores precoces mais fiáveis de benefício clínico, em particular em condições dependentes do comportamento, como a diabetes, a gestão do peso e a saúde mental, nas quais o valor da ferramenta decorre do hábito que ela apoia e não de qualquer sessão isolada. Um produto pode reportar um número saudável de utilizadores ativos mensais e, na realidade, servir uma população que inicia sessão uma vez e depois se afasta, porque a utilização ativa mensal é um critério pouco exigente que nada diz sobre o padrão de utilização dentro do mês; as métricas de consistência detetam isto de uma forma que as simples contagens de atividade não conseguem. Dado que a consistência é também uma das coisas mais difíceis de sustentar ao longo de meses e não de semanas, constitui um sinal mais honesto da qualidade do produto e da sua adequação clínica do que os valores de envolvimento de janela curta, que são propensos a efeitos de novidade imediatamente após a integração.

## Como se calcula

```
Taxa de consistência do envolvimento = semanas com pelo menos uma
                                        interação qualificante
                                        / total de semanas de inscrição
                                        × 100

Uma "interação qualificante" deve ser definida de forma explícita e
consistente (por exemplo, um registo alimentar, uma verificação de
sintomas ou uma sincronização de atividade concluída) — nunca um evento
passivo, como a abertura da aplicação sem qualquer ação registada.

Reportar como distribuição, e não apenas como média da população:
  por exemplo, percentagem de pacientes com consistência semanal ≥ 80%,
       percentagem com 50-79%, percentagem com < 50%
```

## Exemplo resolvido

Uma aplicação de aconselhamento nutricional inscreve um paciente durante 12 semanas. O paciente efetua pelo menos um registo alimentar qualificante em 9 dessas 12 semanas, o que dá uma taxa individual de consistência do envolvimento de 9 / 12 × 100 = 75%. Na totalidade da coorte da aplicação, composta por 2000 pacientes inscritos durante pelo menos 12 semanas, 600 pacientes (30%) mantêm uma consistência semanal ≥ 80%, 900 (45%) situam-se na faixa de 50-79%, e 500 (25%) ficam abaixo de 50%. Reportar apenas a média da coorte (que poderia rondar os 65%) obscureceria o facto de um quarto completo dos pacientes mal se envolver — um segmento que merece ser investigado separadamente em vez de diluído numa média global.

## Fontes de dados e ressalvas

Os dados de consistência provêm dos registos de eventos do próprio produto (registos alimentares, sincronizações de atividade, verificações), e a definição de "interação qualificante" tem um efeito enorme sobre a taxa resultante — uma definição permissiva (qualquer abertura da aplicação) parecerá sempre melhor do que uma definição estrita (um registo concluído e significativo), pelo que a definição utilizada deve ser claramente indicada juntamente com qualquer valor reportado. Os dados sincronizados automaticamente (por exemplo, uma pulseira de atividade ligada que sincroniza dados em segundo plano) devem ser reportados separadamente dos dados registados manualmente, uma vez que a sincronização automática pode inflacionar a consistência aparente sem refletir qualquer esforço ativo do paciente nem envolvimento com as orientações do produto.

## Erros comuns

- **Confundir aberturas da aplicação com envolvimento significativo**: uma abertura passiva da aplicação (por exemplo, desencadeada por uma notificação push) não é o mesmo que um registo alimentar ou uma verificação concluída; definir e reportar apenas as interações qualificantes.
- **Reportar apenas a média da população**: uma taxa média de consistência com bom aspeto pode ocultar uma população bimodal de pacientes muito envolvidos e de pacientes quase totalmente desligados; reportar a distribuição pelas faixas de consistência, e não apenas a média.
- **Ignorar o denominador da duração da inscrição**: comparar taxas de consistência entre pacientes inscritos durante períodos muito diferentes, sem ter em conta a duração da inscrição, enviesará os resultados a favor do grupo que teve uma janela de medição mais curta e mais fácil de sustentar.
- **A sincronização automática em segundo plano inflacionar a taxa**: um fluxo de dados de um dispositivo vestível sincronizado passivamente pode fazer com que um paciente desligado pareça consistentemente ativo, sem qualquer mudança real de comportamento nem envolvimento com o produto da sua parte.

## Fontes

- Literatura revista por pares sobre os padrões de envolvimento em saúde digital e a sua relação com os resultados clínicos, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR)
- American Medical Informatics Association (AMIA), orientações sobre a qualidade dos dados de saúde gerados pelo paciente e a medição do envolvimento
- Digital Therapeutics Alliance, orientações de boas práticas sobre a medição do envolvimento e dos resultados em terapêuticas digitais

Ver também: [taxa de retenção de utilizadores](../taxa-de-retencao-de-utilizadores/), a métrica estreitamente relacionada que indica se um paciente permanece inscrito, por oposição à consistência com que se envolve enquanto está inscrito.
