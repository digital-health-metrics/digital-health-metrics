# ISO/TS 82304-2

A ISO/TS 82304-2 é uma especificação técnica internacional, publicada sob a égide do Comité Técnico 215 da ISO (Informática de Saúde), que define um método estruturado para avaliar a qualidade de aplicativos de saúde e bem-estar — abrangendo usabilidade, robustez técnica e confiabilidade, interoperabilidade, qualidade dos conteúdos, e segurança e privacidade dos dados — para produtos que ficam fora do âmbito da regulamentação plena de dispositivos médicos mas que, ainda assim, afetam materialmente as decisões ou o comportamento de saúde de um usuário. Existe para preencher uma lacuna específica: a grande maioria dos aplicativos de saúde e bem-estar dirigidas ao consumidor (monitores de atividade física, diários de sintomas, aplicativos de coaching de bem-estar) não está regulamentada como dispositivo médico, e, no entanto, não existia anteriormente nenhuma forma comum e estruturada de avaliar ou comparar a sua qualidade e segurança básicas.

## Por que isso importa

As lojas de aplicativos alojam centenas de milhares de aplicativos de saúde e bem-estar com uma qualidade enormemente variável, e antes de existir uma especificação técnica comum, um paciente, clínico ou sistema de saúde não dispunha de nenhuma forma estruturada e comparável de avaliar a qualidade e a segurança básicas de um aplicativo em relação a outra, para além das classificações por estrelas e das alegações de marketing — uma lacuna que importa porque um aplicativo de saúde mal projetada pode ainda causar danos reais (conteúdo impreciso, fraca segurança de dados, alegações enganosas) mesmo sem atingir o limiar regulamentar de dispositivo médico. A ISO/TS 82304-2 está deliberadamente estruturada em torno de domínios que um avaliador não especialista consegue apreciar de forma consistente, o que a tornou a base técnica de vários serviços nacionais e comerciais de rotulagem de qualidade e de curadoria de aplicativos de saúde, dando aos sistemas de saúde e às bibliotecas de aplicativos uma forma defensável e padronizada de incluir ou excluir aplicativos de uma lista recomendada, em vez de dependerem de um juízo ad hoc.

## Como se aplica

```
A avaliação organiza-se em torno de domínios de qualidade definidos,
avaliados por revisão estruturada e não por uma única fórmula numérica:

Usabilidade                          — clareza, acessibilidade e
                                       facilidade de uso para o
                                       grupo de usuários pretendido
Robustez técnica/confiabilidade         — estabilidade, desempenho e
                                       ausência de defeitos técnicos
Interoperabilidade                   — capacidade de trocar dados com
                                       outros sistemas, quando relevante
                                       para a função do aplicativo
Qualidade e segurança dos conteúdos  — exatidão, atualidade e ausência de
                                       alegações de saúde prejudiciais
                                       ou enganosas
Segurança e privacidade              — prática de proteção de dados e
                                       transparência quanto ao uso
                                       dos dados

Cada domínio é pontuado através de critérios estruturados de revisão e
combinado em uma avaliação global de qualidade, que vários esquemas de
rotulagem de qualidade de aplicativos de saúde usam como base técnica
para um rótulo público de qualidade ou para uma decisão de inclusão em uma
biblioteca curada.
```

## Exemplo resolvido

O programa de biblioteca de aplicativos digitais de um sistema de saúde pretende curar uma lista recomendada de aplicativos de bem-estar para os pacientes, em vez de deixar a escolha de aplicativos inteiramente à pesquisa na loja de aplicativos. Cada aplicativo candidata é avaliada em relação aos domínios da ISO/TS 82304-2: um aplicativo de monitoramento do sono obtém boa pontuação em usabilidade e robustez técnica, adequada em qualidade dos conteúdos, mas é sinalizada durante a revisão de segurança e privacidade por compartilhar dados dos usuários com anunciantes terceiros sem divulgação clara — uma constatação suficientemente significativa para excluir o aplicativo da lista recomendada apesar da sua pontuação de usabilidade, de resto, forte. Este resultado por domínio é mais acionável, tanto para a equipe de curadoria como, se compartilhado, para o próprio programador do aplicativo, do que uma única pontuação de qualidade agregada, já que identifica precisamente que aspecto necessita de correção antes de o aplicativo poder ser reconsiderada.

## Fontes de dados e ressalvas

A avaliação em relação à ISO/TS 82304-2 é tipicamente realizada por um avaliador treinado ou por um serviço de avaliação acreditado, seguindo os critérios estruturados de revisão da especificação para cada domínio, e várias iniciativas nacionais e comerciais (organizações de rotulagem de qualidade e de curadoria de aplicativos de saúde, algumas operando sob aval formal de um sistema nacional de saúde) usam a norma como base técnica dos seus próprios rótulos públicos de qualidade de aplicativos — o que significa que o status "certificado" ou "rotulado" de um aplicativo reflete, na prática, a implementação da norma por um esquema de rotulagem específico, e não necessariamente um processo idêntico em todos os esquemas, de modo que a organização avaliadora específica e a sua metodologia devem ser verificadas e divulgadas junto com qualquer rótulo de qualidade citado. A especificação avalia as características de qualidade e de segurança básica de um aplicativo enquanto software; não substitui a autorização regulamentar de dispositivos médicos quando as alegações ou funções de um aplicativo atingem efetivamente o limiar de dispositivo médico, e usá-la como tal seria um erro de categoria.

## Erros comuns

- **Tratar um rótulo de qualidade como autorização regulamentar**: um aplicativo avaliada e rotulada ao abrigo da ISO/TS 82304-2 não recebeu, por isso, aprovação regulamentar como dispositivo médico; os dois servem finalidades diferentes e nunca devem ser confundidos na forma como um aplicativo é descrita ou comercializada.
- **Presumir que todos os esquemas de rotulagem baseados na norma são equivalentes**: diferentes organizações implementam a avaliação baseada na ISO/TS 82304-2 com os seus próprios processos de revisão e níveis de rigor; verificar que organização realizou uma avaliação e de que forma, em vez de tratar qualquer rótulo "baseado na ISO/TS 82304-2" como intercambiável com qualquer outro.
- **Avaliar apenas a usabilidade negligenciando a segurança e a privacidade**: os problemas de usabilidade são os mais visíveis para um usuário final e os mais fáceis de avaliar informalmente, o que pode levar os avaliadores a subvalorizar o domínio, menos visível mas potencialmente mais consequente, da segurança e privacidade.
- **Tratar a avaliação como uma certificação única e permanente**: os conteúdos, as práticas de segurança e os acordos de compartilha de dados com terceiros de um aplicativo podem todos mudar após uma avaliação inicial; um programa credível de rotulagem de qualidade reavalia periodicamente em vez de tratar uma aprovação inicial como permanente.

## Fontes

- International Organization for Standardization, ISO/TS 82304-2:2021, "Health software — Part 2: Health and wellness apps — Quality and reliability"
- ISO Technical Committee 215 (Health Informatics), informação sobre publicações e grupos de trabalho
- Organizações nacionais e comerciais de rotulagem de qualidade e de curadoria de aplicativos de saúde que publicam a sua metodologia de avaliação baseada nesta norma

Ver também: [pontuação da escala de usabilidade do sistema](../pontuacao-da-escala-de-usabilidade-do-sistema/), um instrumento complementar e mais restrito, específico de usabilidade, frequentemente usado junto com uma avaliação de qualidade mais ampla segundo a ISO/TS 82304-2.
