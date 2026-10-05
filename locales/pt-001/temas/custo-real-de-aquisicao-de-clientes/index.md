# Custo Real de Aquisição de Clientes

O custo real de aquisição de clientes (CAC real) é o custo totalmente imputado de adquirir um novo cliente pagante ou paciente inscrito, incluindo não só a despesa em publicidade paga, mas todos os outros custos que contribuíram materialmente para essa aquisição: honorários de agências e de criatividade, infraestrutura de tecnologia de marketing e de análise e — específico da saúde digital — o custo do trabalho clínico ou operacional de admissão, verificação de elegibilidade e integração. Existe como métrica distinta porque os valores de custo de aquisição reportados pelas plataformas de anúncios subestimam de forma rotineira e substancial o custo real por cliente adquirido pela organização.

## Porque é que isto importa

As organizações de saúde digital que gerem o crescimento utilizando apenas os valores de custo por aquisição reportados pelas plataformas de anúncios tomam rotineiramente decisões de afetação de recursos com base em números que omitem 30-50% do custo real de aquisição, porque esses valores das plataformas captam apenas a despesa em meios e excluem os honorários de agências, o licenciamento de tecnologia de marketing e — de forma crítica nos cuidados de saúde — o trabalho intensivo de admissão e de verificação de elegibilidade que uma equipa clínica ou operacional realiza para cada novo paciente antes de este poder ser contabilizado como adquirido. Esta lacuna é mais relevante na saúde digital do que na maioria dos outros setores precisamente porque o trabalho clínico de admissão é dispendioso e obrigatório, ao contrário do comércio eletrónico, onde uma "venda" não requer praticamente nenhum trabalho de retaguarda comparável. Uma equipa que otimize a despesa de marketing face a um CAC artificialmente baixo investirá sistematicamente de forma excessiva em canais que parecem baratos num painel de plataforma, mas são caros quando o CAC real é calculado.

## Como se calcula

```
CAC real = (despesa em meios pagos + honorários de agência e criatividade +
            custos de tecnologia de marketing e análise + custo do trabalho
            clínico/operacional de admissão) / novos clientes ou pacientes
            adquiridos no período

O custo do trabalho clínico/operacional de admissão deve ser estimado a
partir do custo de mão de obra totalmente imputado (salário, benefícios,
custos gerais) × horas médias despendidas por paciente adquirido em
admissão, verificação de elegibilidade e integração.
```

## Exemplo resolvido

Uma empresa de saúde digital adquire 500 novos pacientes num mês. Os painéis das plataformas de anúncios reportam um custo por aquisição agregado de 120 $, com base em 60 000 $ de despesa em meios pagos. Somando honorários de agência de 9000 $, custos de tecnologia de marketing de 6000 $ e um custo estimado de trabalho de admissão de 45 minutos por paciente, a um custo de pessoal totalmente imputado de 40 $/hora (500 × 0,75 × 40 $ = 15 000 $), o custo total de aquisição ascende a 60 000 $ + 9000 $ + 6000 $ + 15 000 $ = 90 000 $. O CAC real é 90 000 $ / 500 = 180 $ — 50% superior ao valor de 120 $ reportado apenas pela plataforma de anúncios, e o valor que deve efetivamente fundamentar a afetação do orçamento por canal e as decisões de economia unitária.

## Fontes de dados e ressalvas

A despesa em meios pagos e o custo por aquisição reportado pela plataforma provêm diretamente das próprias plataformas de publicidade (pesquisa, redes sociais, programática); os honorários de agência e os custos de tecnologia de marketing provêm dos registos financeiros ou de contas a pagar; o custo do trabalho de admissão é o componente mais difícil de obter com rigor e requer geralmente um estudo de tempos e movimentos ou uma estimativa razoável acordada com a liderança operacional, uma vez que a maioria das organizações não regista nativamente o tempo do pessoal por aquisição. O CAC real deve ser calculado por canal de aquisição sempre que o volume o permita, dado que o custo do trabalho de admissão por paciente é frequentemente semelhante entre canais, enquanto o custo dos meios varia enormemente, o que significa que a diferença entre o CAC reportado pela plataforma e o CAC real é proporcionalmente maior nos canais que aparentam ser mais baratos.

## Erros comuns

- **Depender exclusivamente dos painéis das plataformas de anúncios**: o custo por aquisição reportado pela plataforma exclui estruturalmente os honorários de agência, os custos de tecnologia de marketing e o trabalho de admissão, e não substitui um cálculo do CAC real.
- **Omitir o trabalho clínico ou operacional de admissão**: este é, de forma consistente, o componente de custo mais frequentemente esquecido especificamente na saúde digital, e é muitas vezes o maior contributo isolado para a diferença entre o custo reportado pela plataforma e o CAC real.
- **Fazer a média do CAC real entre todos os canais**: um valor agregado de CAC real pode ocultar que um canal é dramaticamente mais caro quando os custos totalmente imputados são incluídos, embora tenha parecido o mais barato apenas na plataforma de anúncios.
- **Não atualizar as estimativas de custo de mão de obra quando os processos de admissão se alteram**: a reformulação de um processo de admissão (por exemplo, a automatização da verificação de elegibilidade) pode alterar materialmente o CAC real, e uma estimativa de mão de obra desatualizada distorcerá o valor atual.

## Fontes

- Association of National Advertisers (ANA), orientações sobre a medição de custos de marketing e a transparência dos meios
- Literatura revista por pares e do setor sobre a economia unitária da saúde digital e as estruturas de custos de entrada no mercado, por exemplo análises publicadas pela Rock Health e por organizações semelhantes de investigação em saúde digital
- Healthcare Financial Management Association (HFMA), orientações sobre a contabilidade de custos totalmente imputados nas operações de cuidados de saúde

Ver também: [rácio LTV/CAC](../rácio-ltv-cac/), de que o CAC real é um dos dois fatores.
