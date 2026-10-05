# Pontuação da Escala de Usabilidade do Sistema

A pontuação da Escala de Usabilidade do Sistema (System Usability Scale, SUS) é um questionário padronizado de 10 itens utilizado para quantificar o grau de usabilidade de um software, produzindo uma pontuação única de 0 a 100 que pode ser comparada com normas setoriais bem estabelecidas. Ao contrário do Net Promoter Score, que mede a disposição para recomendar, ou das medidas de resultados reportados pelo paciente, que medem o estado clínico ou funcional, a SUS mede uma única coisa específica: a facilidade com que o próprio software pode ser aprendido e utilizado, quer por pacientes, quer por profissionais clínicos.

## Porque é que isto importa

Uma ferramenta de saúde digital pode ter uma sólida evidência clínica e um argumento comercial convincente e, ainda assim, falhar na prática porque os pacientes ou os clínicos consideram a interface confusa, lenta ou frustrante — e, dado que a SUS é um instrumento validado e amplamente utilizado, com décadas de dados de referência publicados em vários setores, permite a uma equipa de saúde digital comparar a usabilidade do seu próprio produto com uma distribuição conhecida, em vez de depender de impressões informais ou de queixas anedóticas. A SUS é deliberadamente independente da tecnologia e rápida de administrar (tipicamente menos de cinco minutos), o que a torna prática para ser aplicada repetidamente ao longo de iterações de conceção, ao contrário de um estudo de usabilidade completo ou de um ensaio clínico formal. Uma vez que as falhas de usabilidade voltadas para o clínico são um fator documentado de burnout (ver taxa de burnout dos médicos) e as falhas de usabilidade voltadas para o paciente são um fator documentado de abandono e de maus resultados em literacia digital (ver taxa de literacia digital), a SUS funciona como um sinal de usabilidade de alerta precoce e baixo custo, capaz de detetar um problema de conceção antes de este se manifestar nessas métricas a jusante, mais consequentes.

## Como se calcula

```
Pontuação SUS = ((soma das pontuações dos itens ímpares − 5) +
                 (25 − soma das pontuações dos itens pares)) × 2,5

O resultado é uma pontuação única de 0 a 100 (não é uma percentagem,
apesar da escala, uma vez que não representa "percentagem de respostas
corretas" ou algo semelhante).

Interpretação de referência publicada (Bangor et al.):
  Acima de 80  — usabilidade excelente
  68           — média, com base na norma setorial geral
  Abaixo de 51 — usabilidade fraca, que justifica investigação
```

## Exemplo resolvido

Uma plataforma de telessaúde administra o questionário SUS padrão de 10 itens a 150 pacientes após a sua primeira consulta por vídeo. A pontuação SUS média calculada para todos os respondentes é 74. Comparada com a média setorial amplamente citada de 68, isto indica uma usabilidade acima da média para esta população de pacientes e caso de utilização específicos, embora ainda significativamente abaixo do limiar de "excelente" de 80, que sugeriria poucas barreiras de usabilidade remanescentes. Segmentando as mesmas 150 respostas por idade, obtém-se uma pontuação média de 81 para os pacientes com menos de 50 anos e de 62 para os pacientes com 65 anos ou mais — uma diferença que aponta para um problema de usabilidade específico e passível de correção para os pacientes mais velhos, e não para um problema geral de usabilidade do produto, e que uma única média agregada teria ocultado.

## Fontes de dados e ressalvas

Os dados da SUS provêm diretamente de pacientes ou clínicos que preenchem o questionário padronizado de 10 itens, e o instrumento tem de ser administrado exatamente como foi validado (os mesmos 10 itens, a mesma escala de concordância de 5 pontos, a mesma fórmula de pontuação) para que a pontuação resultante seja comparável com os valores de referência publicados; uma versão modificada ou abreviada do questionário, por mais bem-intencionada que seja, produz uma pontuação que não pode ser interpretada de forma fiável face à distribuição de referência padrão. A SUS mede a usabilidade percebida, que se correlaciona com o êxito objetivo na conclusão de tarefas, mas não é idêntica a ele (ver taxa de literacia digital, para uma medida baseada na conclusão de tarefas); um produto pode ter uma boa pontuação SUS junto de pacientes que não tentaram utilizar as funcionalidades mais complexas, pelo que associar a SUS a dados objetivos de conclusão de tarefas dá uma imagem mais completa do que qualquer um deles isoladamente. O momento da resposta é importante: administrar a SUS imediatamente após um incidente específico frustrante (uma ligação falhada, um passo confuso), em vez de após uma sessão sem problemas, pode alterar as pontuações independentemente da usabilidade global do produto.

## Erros comuns

- **Modificar os itens ou a pontuação do questionário padrão**: mesmo pequenas alterações de formulação ou de escala invalidam a comparação com a distribuição de referência publicada e bem estabelecida; utilize o instrumento padrão de 10 itens exatamente como foi validado.
- **Reportar apenas a pontuação média sem segmentação**: a usabilidade varia frequentemente de forma substancial consoante a idade do utilizador, a literacia digital ou o papel (paciente versus clínico); segmente o reporte para encontrar lacunas de usabilidade específicas e passíveis de correção que uma única média oculta.
- **Tratar a SUS como uma medida de eficácia clínica**: a SUS mede especificamente a usabilidade, e não o resultado clínico nem a satisfação com os cuidados; uma ferramenta muito utilizável pode, ainda assim, não melhorar os resultados clínicos, e estas dimensões nunca devem ser confundidas nem substituídas uma pela outra.
- **Administrar o inquérito apenas após sessões invulgarmente fluidas ou invulgarmente frustrantes**: o momento e o contexto da administração podem enviesar a pontuação; administre-o de forma consistente a uma amostra representativa de sessões reais, e não apenas a sessões convenientes ou selecionadas.

## Fontes

- Brooke, J., "SUS: A Quick and Dirty Usability Scale", o instrumento original publicado
- Bangor, Kortum e Miller, investigação publicada sobre valores de referência da SUS que estabelece as faixas de interpretação das pontuações amplamente citadas
- Literatura revista por pares sobre a utilização da SUS na avaliação da usabilidade em saúde digital e telessaúde, por exemplo estudos publicados na JMIR Human Factors

Ver também: [net promoter score do paciente](../net-promoter-score-do-paciente/), uma métrica relacionada mas distinta, reportada pelo paciente, que mede a satisfação e a lealdade e não especificamente a usabilidade do software.
