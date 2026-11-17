# Pontuação da Escala de Usabilidade do Sistema

A pontuação da Escala de Usabilidade do Sistema (System Usability Scale, SUS) é um questionário padronizado de 10 itens usado para quantificar o grau de usabilidade de um software, produzindo uma pontuação única de 0 a 100 que pode ser comparada com referências setoriais bem estabelecidas. Ao contrário do Net Promoter Score, que mede a disposição para recomendar, ou das medidas de resultados informados pelo paciente, que medem o estado clínico ou funcional, a SUS mede uma única coisa específica: a facilidade com que o próprio software pode ser aprendido e usado, seja por pacientes, seja por profissionais clínicos.

## Por que isso importa

Uma ferramenta de saúde digital pode ter uma sólida evidência clínica e um argumento comercial convincente e, ainda assim, fracassar na prática porque pacientes ou profissionais acham a interface confusa, lenta ou frustrante — e, como a SUS é um instrumento validado e amplamente usado, com décadas de dados de referência publicados em vários setores, ela permite que uma equipe de saúde digital compare a usabilidade do próprio produto com uma distribuição conhecida, em vez de depender de impressões informais ou de queixas anedóticas. A SUS é deliberadamente independente da tecnologia e rápida de aplicar (em geral, menos de cinco minutos), o que a torna prática para ser usada repetidamente ao longo das iterações de design, ao contrário de um estudo de usabilidade completo ou de um ensaio clínico formal. Como as falhas de usabilidade voltadas ao profissional de saúde são um fator documentado de burnout (ver taxa de burnout dos médicos) e as falhas voltadas ao paciente são um fator documentado de abandono e de maus resultados de letramento digital (ver taxa de letramento digital), a SUS funciona como um sinal de usabilidade de alerta precoce e baixo custo, capaz de detectar um problema de design antes que ele apareça nessas métricas posteriores, de maior consequência.

## Como se calcula

```
Pontuação SUS = ((soma das pontuações dos itens ímpares − 5) +
                 (25 − soma das pontuações dos itens pares)) × 2,5

O resultado é uma pontuação única de 0 a 100 (não é uma porcentagem,
apesar da escala, já que ela não representa "porcentagem de respostas
corretas" ou algo semelhante).

Interpretação de referência publicada (Bangor et al.):
  Acima de 80  — usabilidade excelente
  68           — média, com base na referência setorial geral
  Abaixo de 51 — usabilidade fraca, que justifica investigação
```

## Exemplo resolvido

Uma plataforma de telessaúde aplica o questionário SUS padrão de 10 itens a 150 pacientes após a primeira consulta por vídeo. A pontuação SUS média calculada para todos os respondentes é 74. Comparada com a média setorial amplamente citada de 68, isso indica uma usabilidade acima da média para essa população de pacientes e esse caso de uso específicos, embora ainda bem abaixo do limiar de "excelente" de 80, que sugeriria poucas barreiras de usabilidade remanescentes. Segmentando as mesmas 150 respostas por idade, chega-se a uma pontuação média de 81 para os pacientes com menos de 50 anos e de 62 para os pacientes com 65 anos ou mais — uma diferença que aponta para um problema de usabilidade específico e corrigível para os pacientes mais velhos, e não para um problema geral de usabilidade do produto, e que uma única média agregada teria escondido.

## Fontes de dados e ressalvas

Os dados da SUS vêm diretamente de pacientes ou profissionais que preenchem o questionário padronizado de 10 itens, e o instrumento tem que ser aplicado exatamente como foi validado (os mesmos 10 itens, a mesma escala de concordância de 5 pontos, a mesma fórmula de pontuação) para que a pontuação resultante seja comparável aos valores de referência publicados; uma versão modificada ou abreviada do questionário, por mais bem-intencionada que seja, produz uma pontuação que não pode ser interpretada de forma confiável em relação à distribuição de referência padrão. A SUS mede a usabilidade percebida, que se correlaciona com o êxito objetivo na conclusão de tarefas, mas não é idêntica a ele (ver taxa de letramento digital, para uma medida baseada na conclusão de tarefas); um produto pode ter uma boa pontuação SUS entre pacientes que não tentaram usar as funcionalidades mais complexas, de modo que associar a SUS a dados objetivos de conclusão de tarefas dá um quadro mais completo do que qualquer um dos dois isoladamente. O momento da resposta importa: aplicar a SUS logo após um incidente frustrante específico (uma conexão que caiu, uma etapa confusa), em vez de após uma sessão sem problemas, pode alterar as pontuações independentemente da usabilidade geral do produto.

## Erros comuns

- **Modificar os itens ou a pontuação do questionário padrão**: mesmo pequenas mudanças de formulação ou de escala invalidam a comparação com a distribuição de referência publicada e consolidada; use o instrumento padrão de 10 itens exatamente como foi validado.
- **Informar apenas a pontuação média sem segmentação**: a usabilidade costuma variar bastante conforme a idade do usuário, o letramento digital ou o papel (paciente versus profissional); segmente o relatório para encontrar lacunas de usabilidade específicas e corrigíveis que uma única média esconde.
- **Tratar a SUS como uma medida de eficácia clínica**: a SUS mede especificamente a usabilidade, e não o resultado clínico nem a satisfação com os cuidados; uma ferramenta muito usável pode, ainda assim, não melhorar os resultados clínicos, e essas dimensões nunca devem ser confundidas nem substituídas uma pela outra.
- **Aplicar a pesquisa apenas após sessões incomumente fluidas ou incomumente frustrantes**: o momento e o contexto da aplicação podem enviesar a pontuação; aplique-a de forma consistente a uma amostra representativa de sessões reais, e não apenas a sessões convenientes ou selecionadas.

## Fontes

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", o instrumento original publicado
- Bangor, Kortum e Miller, pesquisa publicada sobre valores de referência da SUS que estabelece as faixas de interpretação das pontuações amplamente citadas
- Literatura revisada por pares sobre o uso da SUS na avaliação da usabilidade em saúde digital e telessaúde, por exemplo estudos publicados na JMIR Human Factors

Ver também: [net promoter score do paciente](../net-promoter-score-do-paciente/), uma métrica relacionada, mas distinta, informada pelo paciente, que mede a satisfação e a lealdade, e não especificamente a usabilidade do software.
