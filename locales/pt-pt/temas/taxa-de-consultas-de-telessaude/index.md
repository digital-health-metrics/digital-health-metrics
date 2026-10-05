# Taxa de Consultas de Telessaúde

A taxa de consultas de telessaúde é a proporção do total de contactos de um serviço que são prestados remotamente, por vídeo ou telefone, em vez de presencialmente. É uma métrica de mistura de canal de prestação de cuidados, não uma métrica de atividade: indica como os cuidados estão a ser prestados, o que importa para o planeamento de capacidade, o acesso e a adequação clínica, de forma bastante independente da quantidade total de cuidados prestados.

## Porque é que isto importa

A proporção de cuidados prestados remotamente mudou o modelo operacional de muitos serviços após a rápida expansão das consultas virtuais durante a pandemia de COVID-19, e as organizações precisam de uma forma estável de monitorizar se essa mudança se está a manter, a regressar às normas pré-pandemia, ou a ser ativamente orientada por política. A telessaúde não é um substituto uniforme de uma consulta presencial: a adequação varia consoante a especialidade, o tipo de consulta (uma revisão de medicação comporta-se de forma muito diferente de um exame físico), e a preferência do paciente, pelo que a taxa "certa" é um julgamento clínico e operacional, não um objetivo a maximizar. Financiadores e reguladores também utilizam esta taxa, a par de medidas de resultados e segurança, para decidir a política de reembolso e para verificar que os cuidados remotos não estão simplesmente a ser substituídos em casos que precisam de ser vistos presencialmente.

## Como se calcula

```
Taxa de telessaúde = consultas de telessaúde / (consultas de telessaúde + consultas presenciais) × 100

Reporte separadamente por modalidade sempre que possível:
  Taxa de vídeo    = consultas por vídeo / total de consultas × 100
  Taxa de telefone = consultas apenas por telefone / total de consultas × 100

O denominador deve contar apenas as consultas concluídas (ver erros
comuns), para um serviço, especialidade e período definidos.
```

## Exemplo resolvido

Um serviço comunitário de saúde mental regista 4000 contactos ambulatórios concluídos num trimestre: 1200 presenciais, 1600 por vídeo, e 1200 por telefone. A taxa de telessaúde é (1600 + 1200) / 4000 × 100 = 70%, com uma taxa de vídeo de 40% e uma taxa apenas por telefone de 30%. Reportar apenas o número combinado de 70% ocultaria que uma grande parte da "telessaúde" aqui é apenas áudio, o que geralmente tem um perfil de risco clínico e uma experiência do paciente diferentes.

## Fontes de dados e ressalvas

O tipo de consulta é geralmente registado como um campo estruturado no registo de saúde eletrónico (tipo de visita ou local), ou inferido a partir de códigos de faturação, como um código de local de serviço ou um modificador de telessaúde numa reclamação. A prática de codificação varia significativamente entre organizações, e mesmo entre clínicos da mesma organização, pelo que qualquer comparação de taxas entre locais deve primeiro confirmar que a "telessaúde" está a ser codificada da mesma forma em cada um. Uma consulta que começa por vídeo mas passa para telefone devido a um problema técnico deve ser codificada de forma consistente (geralmente como a modalidade que transportou a maior parte do conteúdo clínico), e essa regra deve ser documentada em vez de deixada ao critério individual.

## Erros comuns

- **Contar visitas tentadas em vez de concluídas**: uma consulta de telessaúde que falha a ligação e é remarcada não deve inflacionar duas vezes o denominador de telessaúde.
- **Tratar vídeo e telefone como intermutáveis**: têm implicações clínicas e de equidade diferentes (o telefone exclui a avaliação visual mas é mais acessível a pacientes sem smartphone, dados fiáveis, ou espaço privado para vídeo); reporte-os sempre separadamente quando possível.
- **Ignorar a relação com as faltas**: o comportamento de faltas difere frequentemente consoante a modalidade; consulte [taxa de faltas a consultas](../taxa-de-faltas-a-consultas/) antes de tirar conclusões sobre "melhor acesso" apenas a partir de uma taxa de telessaúde crescente.
- **Tratar uma taxa elevada como inerentemente boa**: para algumas condições e tipos de consulta, uma taxa de telessaúde apropriada é baixa por design clínico, não por falta de maturidade digital.

## Fontes

- Centers for Medicare & Medicaid Services (CMS), dados de utilização de telessaúde do Medicare e publicações de política
- NHS England, estatísticas de atividade de serviços ambulatórios e comunitários, incluindo a desagregação de presenças virtuais/remotas
- Literatura revista por pares sobre tendências de utilização de telessaúde e resultados específicos por modalidade
