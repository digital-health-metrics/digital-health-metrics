# Custo por Episódio de Cuidados

O custo por episódio de cuidados é o custo total incorrido no tratamento de um episódio clínico definido — por exemplo, uma prótese da anca e a recuperação associada, ou um período de gestão da diabetes — comparado com uma coorte de referência histórica tratada sem a intervenção digital em avaliação. É a unidade padrão de comparação financeira nos cuidados baseados em valor, porque capta o framework econômico completo de um episódio e não qualquer item que custo isolada, e é a métrica que os pagadores e os sistemas de saúde mais frequentemente exigem antes de concordarem em financiar um programa de saúde digital em larga escala.

## Por que isso importa

Os contratos de cuidados baseados em valor pagam cada vez mais por resultados e episódios e não por serviços individuais, o que significa que o argumento financeiro de um programa de saúde digital tem que ser apresentado na mesma moeda: o custo total por episódio, comparado com o que custava o mesmo tipo de episódio antes de a intervenção existir. Um programa que reduz uma categoria de custo (por exemplo, menos consultas de seguimento presenciais) enquanto aumenta outra (mais custos de dispositivos, mais tempo do equipe clínica de monitoramento) não reduziu necessariamente o custo total por episódio, e só uma contabilização completa ao nível do episódio capta esta compensação; olhar para qualquer item que custo isolada arrisca uma conclusão enganadora em qualquer dos sentidos. Dado que as definições de episódio e os períodos de referência podem ser construídos de formas que favorecem uma determinada conclusão, esta métrica exige mais transparência metodológica do que a maioria das outras neste livro para ser digna de confiança perante um pagador ou uma equipe financeira céticos.

## Como se calcula

```
Custo por episódio de cuidados = custo total de todos os cuidados
                                  prestados dentro de uma janela de
                                  episódio definida (todos os contextos
                                  de cuidados, todas as categorias de
                                  custo) / número de episódios

Comparar com o custo por episódio de uma coorte de referência histórica
para o mesmo tipo de episódio clinicamente definido, ajustado à
casuística (idade, comorbidade, gravidade) entre as duas coortes.

Incluir, e não apenas os custos clínicos diretos: custos da plataforma
tecnológica e dos dispositivos, tempo adicional de equipe clínica, e
quaisquer cuidados que mudaram de contexto (por exemplo, da internação
para o domicílio) em vez de desaparecerem por completo.
```

## Exemplo resolvido

O custo de referência histórico de um sistema de saúde para um episódio de prótese total da anca (da cirurgia até a recuperação aos 90 dias) é de 28 000 $ por episódio, com base em 200 episódios históricos. É introduzido um novo programa digital de monitoramento pós-cirúrgica, e 150 novos episódios que usam o programa mostram um custo médio de 24 500 $ por episódio — uma redução de 3500 $ por episódio, impulsionada sobretudo por menos visitas ao pronto-socorro durante a recuperação e por uma internação médio mais curto. Após o ajuste ao risco para uma casuística ligeiramente mais jovem e com menos comorbidades na coorte monitorada digitalmente em comparação com a referência histórica, a economia ajustada reduz-se para 2100 $ por episódio — ainda uma melhoria genuína, mas materialmente menor do que a comparação bruta e não ajustada sugeria.

## Fontes de dados e ressalvas

O custo total do episódio é tipicamente reunido a partir do sistema de contabilidade de custos ou financeiro do próprio sistema de saúde, combinando dados de faturamento, imputação interna de custos e, quando está envolvida uma plataforma digital, os seus custos de licenciamento e de equipamento — reunir este valor com rigor é geralmente a parte mais difícil e que mais recursos consome em qualquer análise de valor da saúde digital, já que os custos são frequentemente registrados em sistemas separados que nunca foram projetados para serem combinados ao nível do episódio. O ajuste à casuística é essencial sempre que a coorte gerenciada digitalmente e a coorte de referência histórica não tenham sido atribuídas por verdadeira aleatorização, já que os programas digitais são frequentemente oferecidos primeiro aos pacientes mais envolvidos, geralmente mais saudáveis ou mais motivados, o que pode produzir uma aparente economia de custos que é na realidade um efeito de seleção e não um verdadeiro efeito do programa.

## Erros comuns

- **Comparar custos não ajustados entre coortes com casuística diferente**: uma coorte gerenciada digitalmente que seja, por acaso, mais saudável ou de menor risco do que a referência histórica mostrará um custo por episódio inferior por razões não relacionadas com a própria intervenção digital; ajuste sempre ao risco antes de comparar.
- **Omitir os custos de tecnologia e de pessoal do lado "digital" da comparação**: uma análise de custos que apenas acompanha o uso clínica reduzida, ignorando os custos de plataforma, de dispositivos e de pessoal da operação do programa digital, superestimará as economias líquidas.
- **Definir a janela do episódio de forma inconsistente entre coortes**: comparar uma janela de episódio de 90 dias para uma coorte com uma janela de 60 dias para outra produzirá uma comparação de custos que não está efetivamente medindo o mesmo.
- **Tratar uma deslocação de custos como uma redução de custos**: o custo transferido de um contexto de cuidados para outro (por exemplo, da internação para um contexto domiciliário monitorado) é uma conclusão genuína e valiosa, mas é analiticamente diferente de um custo eliminado por completo, e ambos devem ser informados separadamente.

## Fontes

- Centers for Medicare & Medicaid Services (CMS), Bundled Payments for Care Improvement (BPCI) e orientações sobre modelos de pagamento baseados em episódios
- Healthcare Financial Management Association (HFMA), orientações sobre a metodologia de contabilização de custos por episódio de cuidados
- Literatura revisada por pares sobre a análise de custos de cuidados baseados em valor na saúde digital, por exemplo estudos publicados na Health Affairs e no American Journal of Managed Care

Ver também: [retorno do investimento (ROI) e valor do investimento (VOI)](../roi-e-voi/), que usa o custo por episódio de cuidados como um dos seus principais dados de entrada.
