# Taxa de Retenção de Usuários

A taxa de retenção de usuários é a proporção de usuários ativos em um período inicial que permanecem ativos em um período posterior, e o seu inverso, a taxa de abandono (churn), é a proporção dos que deixam de usar o produto por completo. Enquanto a taxa de adoção do portal do paciente (ver esse tema) mede se um paciente chega a ativar de forma significativa um produto de saúde digital, a retenção mede se ele continua usando o produto — e, para qualquer produto de saúde digital de assinatura ou de cuidado continuado, a retenção costuma ser a métrica mais associada tanto ao impacto clínico quanto à sustentabilidade comercial.

## Por que isso importa

Um produto de saúde digital que não consegue reter usuários não consegue proporcionar benefício clínico sustentado, por mais fortes que sejam seus números iniciais de adoção ou de ativação: uma ferramenta de gestão de doença crônica usada durante duas semanas e depois abandonada dificilmente mudará um resultado biométrico que depende de meses de mudança de comportamento sustentada. A retenção é também uma das métricas de maior consequência comercial que uma empresa de saúde digital apresenta a investidores e financiadores, porque as curvas de retenção (a forma da queda ao longo do tempo, e não apenas uma porcentagem de retenção única) revelam se o produto encontrou um padrão de uso genuinamente sustentável ou se está apenas captando um interesse inicial motivado pela novidade, que se esvai de forma previsível. Uma curva de retenção que estabiliza após uma queda inicial (os pacientes que ultrapassam o primeiro mês tendem a permanecer) é um sinal muito diferente, e muito mais saudável, do que uma curva que continua caindo de forma constante sem chegar a um patamar.

## Como se calcula

```
Taxa de retenção (período N) = usuários ativos no período N que também
                                estavam ativos no período da coorte inicial /
                                usuários no período da coorte inicial × 100

Taxa de abandono = 1 − taxa de retenção (para o mesmo período)

Informe como uma curva de retenção por coorte (retenção no dia/semana/mês
1, 2, 3…), e não como um valor em um único momento, já que um instantâneo
único confunde usuários que aderiram recentemente (que ainda não tiveram
oportunidade de abandonar) com usuários de longa data.
```

## Exemplo resolvido

Um aplicativo de saúde digital cadastra uma coorte de 1000 novos usuários em janeiro. No fim do mês 1, 640 desses 1000 originais continuam ativos (retenção no mês 1 de 64%). No fim do mês 3, 410 continuam ativos (retenção no mês 3 de 41%). No mês 6, 380 continuam ativos (retenção no mês 6 de 38%). O formato dessa curva — uma queda inicial acentuada seguida de estabilização entre os meses 3 e 6 — sugere que o produto retém um núcleo estável de usuários depois que eles superam um obstáculo inicial de adoção, o que é um sinal bem diferente, e mais animador, do que se a queda entre o mês 3 e o mês 6 tivesse continuado no mesmo ritmo da queda entre os meses 1 e 3.

## Fontes de dados e ressalvas

A retenção é calculada a partir dos registros de eventos de login ou de atividade do próprio produto, definindo "ativo" de forma consistente (por exemplo, pelo menos uma sessão qualificante no período) em todas as coortes comparadas. As coortes devem ser comparadas em condições equivalentes — a mesma definição inicial de "ativo", a mesma duração da janela de observação — já que mesmo pequenas diferenças de definição (meses de 30 dias versus 28 dias, ou um limiar de "ativo" mais ou menos rigoroso) podem deslocar uma porcentagem de retenção informada em vários pontos sem qualquer diferença real no comportamento dos usuários. Os efeitos sazonais são comuns em aplicativos de saúde associadas às resoluções de Ano Novo ou a períodos específicos de sensibilização para a saúde, de modo que a comparação de coortes homólogas de ano para ano é geralmente mais informativa do que comparar coortes adjacentes em épocas diferentes do ano.

## Erros comuns

- **Informar um único instantâneo de retenção em vez de uma curva**: um único valor de "X% dos usuários continuam ativos", sem a forma da queda ao longo do tempo, não consegue distinguir um produto que estabiliza (saudável) de um em declínio contínuo (não saudável).
- **Mudar a definição de "ativo" entre períodos de relatório**: ampliar a definição de usuário ativo (por exemplo, contando uma abertura passiva do aplicativo em vez de uma ação concluída) pode dar a impressão de que a retenção melhora quando o uso real não mudou em nada.
- **Ignorar a sazonalidade das coortes**: comparar a retenção de uma coorte de janeiro (muitas vezes inflada pelos cadastros das resoluções de Ano Novo, que trazem em média uma coorte menos motivada) com uma coorte adquirida em outra época do ano pode produzir conclusões enganosas sobre a tendência.
- **Misturar coortes orgânicas e de aquisição paga**: os usuários adquiridos por canais diferentes costumam ter retenção muito diferente; misturá-los em um único valor agregado de retenção pode esconder um problema de retenção específico de um canal.

## Fontes

- Literatura revisada por pares sobre o envolvimento e o abandono em aplicativos de saúde digital, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR mHealth and uHealth)
- Digital Therapeutics Alliance, orientações de boas práticas sobre a medição do envolvimento e da retenção em terapêuticas digitais
- Relatórios setoriais de referência sobre a retenção em aplicativos de saúde móvel, de plataformas de análise e de organizações de pesquisa de mercado em saúde digital

Ver também: [taxa de consistência do envolvimento do paciente](../taxa-de-consistencia-do-envolvimento-do-paciente/), que mede a qualidade do envolvimento entre os usuários retidos, e não se eles permanecem inscritos.
