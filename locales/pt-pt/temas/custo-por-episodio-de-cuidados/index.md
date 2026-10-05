# Custo por Episódio de Cuidados

O custo por episódio de cuidados é o custo total incorrido no tratamento de um episódio clínico definido — por exemplo, uma prótese da anca e a recuperação associada, ou um período de gestão da diabetes — comparado com uma coorte de referência histórica tratada sem a intervenção digital em avaliação. É a unidade padrão de comparação financeira nos cuidados baseados em valor, porque capta o quadro económico completo de um episódio e não qualquer rubrica de custo isolada, e é a métrica que os pagadores e os sistemas de saúde mais frequentemente exigem antes de concordarem em financiar um programa de saúde digital em larga escala.

## Porque é que isto importa

Os contratos de cuidados baseados em valor pagam cada vez mais por resultados e episódios e não por serviços individuais, o que significa que o argumento financeiro de um programa de saúde digital tem de ser apresentado na mesma moeda: o custo total por episódio, comparado com o que custava o mesmo tipo de episódio antes de a intervenção existir. Um programa que reduz uma categoria de custo (por exemplo, menos consultas de seguimento presenciais) enquanto aumenta outra (mais custos de dispositivos, mais tempo do pessoal clínico de monitorização) não reduziu necessariamente o custo total por episódio, e só uma contabilização completa ao nível do episódio capta esta compensação; olhar para qualquer rubrica de custo isolada arrisca uma conclusão enganadora em qualquer dos sentidos. Dado que as definições de episódio e os períodos de referência podem ser construídos de formas que favorecem uma determinada conclusão, esta métrica exige mais transparência metodológica do que a maioria das outras neste livro para ser digna de confiança perante um pagador ou uma equipa financeira céticos.

## Como se calcula

```
Custo por episódio de cuidados = custo total de todos os cuidados
                                  prestados dentro de uma janela de
                                  episódio definida (todos os contextos
                                  de cuidados, todas as categorias de
                                  custo) / número de episódios

Comparar com o custo por episódio de uma coorte de referência histórica
para o mesmo tipo de episódio clinicamente definido, ajustado à
casuística (idade, comorbilidade, gravidade) entre as duas coortes.

Incluir, e não apenas os custos clínicos diretos: custos da plataforma
tecnológica e dos dispositivos, tempo adicional de pessoal clínico, e
quaisquer cuidados que mudaram de contexto (por exemplo, do internamento
para o domicílio) em vez de desaparecerem por completo.
```

## Exemplo resolvido

O custo de referência histórico de um sistema de saúde para um episódio de prótese total da anca (da cirurgia até à recuperação aos 90 dias) é de 28 000 $ por episódio, com base em 200 episódios históricos. É introduzido um novo programa digital de monitorização pós-cirúrgica, e 150 novos episódios que utilizam o programa mostram um custo médio de 24 500 $ por episódio — uma redução de 3500 $ por episódio, impulsionada sobretudo por menos visitas ao serviço de urgência durante a recuperação e por um internamento médio mais curto. Após o ajustamento ao risco para uma casuística ligeiramente mais jovem e com menos comorbilidades na coorte monitorizada digitalmente em comparação com a referência histórica, a poupança ajustada reduz-se para 2100 $ por episódio — ainda uma melhoria genuína, mas materialmente menor do que a comparação bruta e não ajustada sugeria.

## Fontes de dados e ressalvas

O custo total do episódio é tipicamente reunido a partir do sistema de contabilidade de custos ou financeiro do próprio sistema de saúde, combinando dados de faturação, imputação interna de custos e, quando está envolvida uma plataforma digital, os seus custos de licenciamento e de equipamento — reunir este valor com rigor é geralmente a parte mais difícil e que mais recursos consome em qualquer análise de valor da saúde digital, uma vez que os custos são frequentemente registados em sistemas separados que nunca foram concebidos para serem combinados ao nível do episódio. O ajustamento à casuística é essencial sempre que a coorte gerida digitalmente e a coorte de referência histórica não tenham sido atribuídas por verdadeira aleatorização, uma vez que os programas digitais são frequentemente oferecidos primeiro aos pacientes mais envolvidos, geralmente mais saudáveis ou mais motivados, o que pode produzir uma aparente poupança de custos que é na realidade um efeito de seleção e não um verdadeiro efeito do programa.

## Erros comuns

- **Comparar custos não ajustados entre coortes com casuística diferente**: uma coorte gerida digitalmente que seja, por acaso, mais saudável ou de menor risco do que a referência histórica mostrará um custo por episódio inferior por razões não relacionadas com a própria intervenção digital; ajuste sempre ao risco antes de comparar.
- **Omitir os custos de tecnologia e de pessoal do lado "digital" da comparação**: uma análise de custos que apenas acompanha a utilização clínica reduzida, ignorando os custos de plataforma, de dispositivos e de pessoal da operação do programa digital, sobrestimará as poupanças líquidas.
- **Definir a janela do episódio de forma inconsistente entre coortes**: comparar uma janela de episódio de 90 dias para uma coorte com uma janela de 60 dias para outra produzirá uma comparação de custos que não está efetivamente a medir o mesmo.
- **Tratar uma deslocação de custos como uma redução de custos**: o custo transferido de um contexto de cuidados para outro (por exemplo, do internamento para um contexto domiciliário monitorizado) é uma conclusão genuína e valiosa, mas é analiticamente diferente de um custo eliminado por completo, e ambos devem ser reportados separadamente.

## Fontes

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) e orientações sobre modelos de pagamento baseados em episódios
- Healthcare Financial Management Association (HFMA), orientações sobre a metodologia de contabilização de custos por episódio de cuidados
- Literatura revista por pares sobre a análise de custos de cuidados baseados em valor na saúde digital, por exemplo estudos publicados na Health Affairs e no American Journal of Managed Care

Ver também: [retorno do investimento (ROI) e valor do investimento (VOI)](../roi-e-voi/), que utiliza o custo por episódio de cuidados como um dos seus principais dados de entrada.
