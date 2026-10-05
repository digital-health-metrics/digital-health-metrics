# Taxa de Retenção de Utilizadores

A taxa de retenção de utilizadores é a proporção de utilizadores ativos num período inicial que permanecem ativos num período posterior, e o seu inverso, a taxa de abandono (churn), é a proporção dos que deixam de utilizar por completo o produto. Enquanto a taxa de adoção do portal do paciente (ver esse tema) mede se um paciente alguma vez ativa de forma significativa um produto de saúde digital, a retenção mede se continua a utilizá-lo — e, para qualquer produto de saúde digital de tipo subscrição ou de cuidados continuados, a retenção é geralmente a métrica mais estreitamente associada tanto ao impacto clínico como à sustentabilidade comercial.

## Porque é que isto importa

Um produto de saúde digital que não consegue reter utilizadores não consegue proporcionar benefício clínico sustentado, por mais fortes que sejam os seus números iniciais de adoção ou de ativação: uma ferramenta de gestão de doença crónica utilizada durante duas semanas e depois abandonada dificilmente alterará um resultado biométrico que depende de meses de mudança de comportamento sustentada. A retenção é também uma das métricas de maior consequência comercial que uma empresa de saúde digital reporta a investidores e financiadores, porque as curvas de retenção (a forma da queda ao longo do tempo, e não apenas uma percentagem de retenção única) revelam se o produto encontrou um padrão de utilização genuinamente sustentável ou se está apenas a captar um interesse inicial motivado pela novidade, que se desvanece de forma previsível. Uma curva de retenção que estabiliza após uma queda inicial (os pacientes que ultrapassam o primeiro mês tendem a permanecer) é um sinal muito diferente, e muito mais saudável, do que uma que continua a descer de forma constante sem um patamar.

## Como se calcula

```
Taxa de retenção (período N) = utilizadores ativos no período N que também
                                estavam ativos no período da coorte inicial /
                                utilizadores no período da coorte inicial × 100

Taxa de abandono = 1 − taxa de retenção (para o mesmo período)

Reportar como uma curva de retenção por coorte (retenção ao dia/semana/mês
1, 2, 3…), e não como um valor num único momento, uma vez que um instantâneo
único confunde utilizadores que aderiram recentemente (que ainda não tiveram
oportunidade de abandonar) com utilizadores de longa data.
```

## Exemplo resolvido

Uma aplicação de saúde digital inscreve uma coorte de 1000 novos utilizadores em janeiro. No final do mês 1, 640 desses 1000 originais continuam ativos (retenção ao mês 1 de 64%). No final do mês 3, 410 continuam ativos (retenção ao mês 3 de 41%). Ao mês 6, 380 continuam ativos (retenção ao mês 6 de 38%). A forma desta curva — uma queda inicial acentuada seguida de uma estabilização entre os meses 3 e 6 — sugere que o produto retém um núcleo estável de utilizadores depois de estes ultrapassarem um obstáculo inicial de adoção, o que é um sinal materialmente diferente e mais encorajador do que se o declínio entre o mês 3 e o mês 6 tivesse continuado ao mesmo ritmo do que entre os meses 1 e 3.

## Fontes de dados e ressalvas

A retenção é calculada a partir dos registos de eventos de início de sessão ou de atividade do próprio produto, definindo "ativo" de forma consistente (por exemplo, pelo menos uma sessão qualificante no período) em todas as coortes comparadas. As coortes devem ser comparadas em condições equivalentes — a mesma definição inicial de "ativo", a mesma duração da janela de observação — uma vez que mesmo pequenas diferenças de definição (meses de 30 dias versus 28 dias, ou um limiar de "ativo" mais ou menos rigoroso) podem deslocar uma percentagem de retenção reportada em vários pontos sem qualquer diferença real no comportamento dos utilizadores. Os efeitos sazonais são comuns em aplicações de saúde associadas às resoluções de Ano Novo ou a períodos específicos de sensibilização para a saúde, pelo que a comparação de coortes homólogas de ano para ano é geralmente mais informativa do que comparar coortes adjacentes em épocas diferentes do ano.

## Erros comuns

- **Reportar um único instantâneo de retenção em vez de uma curva**: um único valor de "X% dos utilizadores continuam ativos", sem a forma da queda ao longo do tempo, não consegue distinguir um produto que estabiliza (saudável) de um em declínio contínuo (não saudável).
- **Alterar a definição de "ativo" entre períodos de reporte**: alargar a definição de utilizador ativo (por exemplo, contando uma abertura passiva da aplicação em vez de uma ação concluída) pode fazer parecer que a retenção melhora quando a utilização real não se alterou de todo.
- **Ignorar a sazonalidade das coortes**: comparar a retenção de uma coorte de janeiro (frequentemente inflacionada pelas inscrições das resoluções de Ano Novo, que trazem em média uma coorte menos motivada) com uma coorte adquirida noutra época do ano pode produzir conclusões enganosas sobre a tendência.
- **Misturar coortes orgânicas e de aquisição paga**: os utilizadores adquiridos através de diferentes canais retêm-se frequentemente de forma muito diferente; misturá-los num único valor de retenção agregado pode ocultar um problema de retenção específico de um canal.

## Fontes

- Literatura revista por pares sobre o envolvimento e o abandono em aplicações de saúde digital, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, orientações de boas práticas sobre a medição do envolvimento e da retenção em terapêuticas digitais
- Relatórios setoriais de referência sobre a retenção em aplicações de saúde móvel, de plataformas de análise e de organizações de estudos de mercado em saúde digital

Ver também: [taxa de consistência do envolvimento do paciente](../taxa-de-consistencia-do-envolvimento-do-paciente/), que mede a qualidade do envolvimento entre os utilizadores retidos, por oposição a saber se permanecem inscritos.
