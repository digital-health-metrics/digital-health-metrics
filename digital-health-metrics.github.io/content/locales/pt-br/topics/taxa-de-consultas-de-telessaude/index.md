# Taxa de Consultas de Telessaúde

A taxa de consultas de telessaúde é a proporção do total de contatos de um serviço que são realizados remotamente, por vídeo ou telefone, em vez de presencialmente. É uma métrica da mistura de canais de atendimento, não uma métrica de volume de atividade: indica como o cuidado está sendo prestado, o que importa para o planejamento de capacidade, o acesso e a adequação clínica, de forma bastante independente da quantidade total de cuidado prestado.

## Por que isso importa

A proporção de cuidado prestado remotamente mudou o modelo operacional de muitos serviços após a rápida expansão das consultas virtuais durante a pandemia de COVID-19, e as organizações precisam de uma forma estável de monitorar se essa mudança está se mantendo, voltando aos padrões pré-pandemia ou sendo conduzida ativamente por uma política. A telessaúde não é um substituto uniforme de uma consulta presencial: a adequação varia conforme a especialidade, o tipo de consulta (uma revisão de medicação se comporta de modo muito diferente de um exame físico), e a preferência do paciente, de modo que a taxa "certa" é um julgamento clínico e operacional, não um objetivo a maximizar. Financiadores e reguladores também usam esta taxa, junto com medidas de resultados e segurança, para decidir a política de reembolso e para verificar que os cuidados remotos não estão simplesmente sendo substituídos em casos que precisam de ser vistos presencialmente.

## Como se calcula

```
Taxa de telessaúde = consultas de telessaúde / (consultas de telessaúde + consultas presenciais) × 100

Informe separadamente por modalidade sempre que possível:
  Taxa de vídeo    = consultas por vídeo / total de consultas × 100
  Taxa de telefone = consultas apenas por telefone / total de consultas × 100

O denominador deve contar apenas as consultas realizadas (ver erros
comuns), para um serviço, uma especialidade e um período definidos.
```

## Exemplo resolvido

Um serviço comunitário de saúde mental registra 4000 atendimentos ambulatoriais realizados em um trimestre: 1200 presenciais, 1600 por vídeo, e 1200 por telefone. A taxa de telessaúde é (1600 + 1200) / 4000 × 100 = 70%, com uma taxa de vídeo de 40% e uma taxa apenas por telefone de 30%. Informar apenas o número combinado de 70% esconderia que uma grande parte da "telessaúde" aqui é só áudio, o que em geral tem um perfil de risco clínico e uma experiência do paciente diferentes.

## Fontes de dados e ressalvas

O tipo de consulta geralmente é registrado como um campo estruturado no prontuário eletrônico (tipo de atendimento ou local), ou inferido a partir de códigos de faturamento, como um código de local de atendimento ou um modificador de telessaúde na cobrança. A prática de codificação varia bastante entre organizações, e até entre profissionais da mesma organização, de modo que qualquer comparação de taxas entre locais deve antes confirmar que a "telessaúde" está sendo codificada da mesma forma em cada um. Uma consulta que começa por vídeo mas passa para telefone por causa de um problema técnico deve ser codificada de forma consistente (em geral, como a modalidade que concentrou a maior parte do conteúdo clínico), e essa regra deve ser documentada, em vez de ficar a critério de cada profissional.

## Erros comuns

- **Contar atendimentos tentados em vez de realizados**: uma consulta de telessaúde cuja conexão falha e que é reagendada não deve inflar duas vezes o denominador de telessaúde.
- **Tratar vídeo e telefone como intercambiáveis**: têm implicações clínicas e de equidade diferentes (o telefone exclui a avaliação visual, mas é mais acessível a pacientes sem smartphone, sem internet confiável ou sem um espaço privado para o vídeo); informe-os sempre separadamente, quando possível.
- **Ignorar a relação com o não comparecimento**: o comportamento de não comparecimento costuma diferir conforme a modalidade; consulte [taxa de não comparecimento a consultas](../taxa-de-nao-comparecimento-a-consultas/) antes de tirar conclusões sobre "melhor acesso" apenas a partir de uma taxa de telessaúde em alta.
- **Tratar uma taxa elevada como inerentemente boa**: para algumas condições e tipos de consulta, uma taxa de telessaúde apropriada é baixa por desenho clínico, e não por falta de maturidade digital.

## Fontes

- Centers for Medicare & Medicaid Services (CMS), dados de uso de telessaúde do Medicare e publicações de política
- NHS England, estatísticas de atividade de serviços ambulatórios e comunitários, incluindo a desagregação de atendimentos virtuais/remotos
- Literatura revisada por pares sobre tendências de uso de telessaúde e resultados específicos por modalidade
