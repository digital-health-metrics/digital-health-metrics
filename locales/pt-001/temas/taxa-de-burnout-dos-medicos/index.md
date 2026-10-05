# Taxa de Burnout dos Médicos

A taxa de burnout dos médicos mede a proporção de clínicos que reportam sintomas significativos de burnout — comummente avaliados como exaustão emocional, despersonalização ou um baixo sentimento de realização pessoal através de um instrumento de inquérito validado — e, no caso específico da saúde digital, é acompanhada juntamente com medidas da carga das ferramentas digitais sobre o clínico, como o tempo gasto em trabalho administrativo ou na documentação no registo de saúde eletrónico (RSE). Integra um quadro de métricas de saúde digital porque o software clínico mal concebido é um contribuinte para o burnout bem documentado e mensurável, e o sucesso de uma ferramenta de saúde digital nunca deve ser avaliado exclusivamente por métricas voltadas para o paciente, ignorando o seu efeito sobre os clínicos que têm de a operar.

## Porque é que isto importa

As ferramentas de saúde digital são frequentemente introduzidas com o objetivo explícito de reduzir a carga administrativa dos clínicos, mas um fluxo de trabalho deficiente do registo de saúde eletrónico, um volume excessivo de alertas clínicos de baixo valor (ver taxa de sobreposição de alertas clínicos) ou uma interface de telessaúde desajeitada podem aumentar o burnout tão facilmente quanto o reduzir — e uma ferramenta que melhora uma métrica de envolvimento voltada para o paciente, ao mesmo tempo que aumenta discretamente a carga de documentação do clínico, não produziu um resultado líquido positivo para o sistema de cuidados no seu conjunto. A literatura clínica associa fortemente o burnout a erros médicos, à rotatividade de clínicos e à redução da qualidade dos cuidados, pelo que funciona como indicador precoce de problemas a jusante de segurança e de sustentabilidade da força de trabalho, e não apenas como uma amabilidade de satisfação laboral. Qualquer programa de saúde digital que afirme reduzir a carga clínica deve ser capaz de demonstrar essa afirmação face a uma linha de base medida, em vez de a afirmar como mera intenção de conceção.

## Como se calcula

```
Taxa de burnout dos médicos = clínicos com pontuação acima do limiar de
                               burnout do instrumento validado
                               / total de clínicos inquiridos × 100

Instrumentos validados comuns: Maslach Burnout Inventory (MBI), o
Professional Fulfillment Index, ou uma pergunta única de rastreio de
burnout validada face a um instrumento mais completo.

Reportar em conjunto com um indicador indireto da carga digital, quando
disponível:
  tempo no RSE por consulta de paciente
  tempo de documentação fora do horário clínico programado
  ("pajama time", o tempo de trabalho em casa fora de horas)
```

## Exemplo resolvido

Um sistema hospitalar inquire 300 médicos através do Maslach Burnout Inventory antes de introduzir uma ferramenta de documentação clínica ambiente destinada a reduzir o tempo de redação de notas. Na linha de base, 135 médicos (45%) pontuam acima do limiar de burnout, e os dados do registo de auditoria do RSE mostram uma média de 58 minutos diários de tempo de documentação por médico fora do horário clínico programado. Seis meses após a implantação da ferramenta, um novo inquérito aos mesmos médicos revela 108 (36%) acima do limiar de burnout, a par de uma descida do tempo de documentação fora de horas para 34 minutos por dia. A evolução correlacionada tanto da taxa de burnout como do indicador indireto objetivo derivado do RSE reforça o argumento de que a ferramenta está a contribuir para a melhoria, embora uma comparação formal antes/depois deva ainda ter em conta outras alterações simultâneas da carga de trabalho no mesmo período.

## Fontes de dados e ressalvas

Os dados de burnout provêm de um instrumento validado administrado com periodicidade regular (anualmente ou com maior frequência), e a taxa de resposta é importante: uma taxa de resposta baixa arrisca um enviesamento de não resposta, em que os clínicos com mais burnout (e com menos capacidade para preencher mais um inquérito) ficam sistematicamente sub-representados, subestimando a taxa real. Os indicadores indiretos derivados do RSE para a carga digital — tempo no sistema, tempo de documentação fora de horas, número de cliques por consulta — são úteis como complementos objetivos e continuamente disponíveis dos dados periódicos de inquérito, mas devem ser validados face ao burnout reportado em inquérito, numa dada organização, antes de serem tratados como um indicador autónomo fiável de burnout, uma vez que a relação entre o tempo no sistema e o burnout efetivo pode variar consoante a especialidade e o estilo de trabalho individual.

## Erros comuns

- **Basear-se apenas em indicadores indiretos derivados do RSE**: o tempo no sistema e a contagem de cliques correlacionam-se com o burnout em termos agregados, mas não são o mesmo que o burnout em si, e podem induzir em erro quanto a clínicos individuais ou a especialidades com necessidades de documentação genuinamente diferentes.
- **Uma baixa taxa de resposta ao inquérito mascarar a taxa real**: os clínicos mais afetados pelo burnout são frequentemente os que têm menos capacidade para responder a um inquérito voluntário, enviesando um resultado de baixa taxa de resposta para um valor artificialmente mais saudável.
- **Atribuir uma alteração do burnout a uma única ferramenta sem ter em conta fatores de confusão**: o burnout é afetado por muitos fatores simultâneos (níveis de pessoal, volume de pacientes, mudança organizacional); uma comparação antes/depois em torno da implantação de uma ferramenta deve controlar estes fatores, sempre que possível, em vez de presumir uma causa única.
- **Tratar o burnout puramente como uma questão de resiliência individual**: a investigação sobre burnout conclui de forma consistente que a carga de trabalho, a conceção dos sistemas e os fatores organizacionais são os principais determinantes; enquadrá-lo como um problema exclusivamente do clínico individual desvia a intervenção das ferramentas digitais e dos fluxos de trabalho que são frequentemente a verdadeira causa de fundo.

## Fontes

- Maslach Burnout Inventory (MBI), instrumento de inquérito validado e orientações de pontuação
- American Medical Association (AMA), investigação sobre burnout dos médicos e o programa de melhoria da prática STEPS Forward
- Literatura revista por pares sobre a usabilidade do RSE, a carga de documentação e o burnout dos clínicos, por exemplo estudos publicados no JAMIA e nos Annals of Internal Medicine

Ver também: [taxa de sobreposição de alertas clínicos](../taxa-de-rejeicao-de-alertas-clinicos/), sendo a fadiga de alertas um dos contribuintes mais específicos e mensuráveis para o burnout dos clínicos que as ferramentas digitais podem abordar diretamente.
