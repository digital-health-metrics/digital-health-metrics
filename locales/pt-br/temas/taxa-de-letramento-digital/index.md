# Taxa de Letramento Digital

A taxa de letramento digital mede a proporção de uma população de pacientes capaz de concluir, de forma independente e bem-sucedida, tarefas comuns em uma plataforma de saúde digital — fazer login, agendar uma consulta, acessar a uma consulta por vídeo, ou ler o resultado de um exame — sem necessitar da ajuda de outra pessoa. É distinta da taxa de acesso digital, e deve ser sempre medida separadamente: um paciente pode ter um smartphone e ligação de banda larga e, ainda assim, ser incapaz de navegar sozinho em uma plataforma de telessaúde, e confundir as duas métricas oculta precisamente a população que esta métrica existe para identificar.

## Por que isso importa

O acesso digital, por si só, não garante que um paciente consiga usar eficazmente um serviço de saúde digital: pacientes com menor letramento em saúde, pouca experiência geral com tecnologia, deficiência cognitiva ou visual, ou barreiras linguísticas em relação à interface da plataforma podem ter acesso técnico pleno e, ainda assim, não conseguir concluir uma tarefa de forma independente, sendo que esta lacuna se correlaciona sistematicamente com os mesmos grupos demográficos que já enfrentam outras disparidades de saúde. O Digital Health Equity Measurement Framework da HIMSS trata o letramento digital como um pilar distinto do acesso precisamente por esta razão: suprir uma lacuna de acesso sem abordar também uma lacuna de letramento pode deixar uma população tecnicamente ligada mas funcionalmente incapaz de beneficiar. As organizações que medem a conclusão de tarefas e o tempo até a conclusão para ações comuns da plataforma, segmentados por língua e indicadores socioeconômicos, conseguem identificar barreiras de letramento e direcionar o apoio (interfaces simplificadas, integração assistida, conteúdos em outras línguas) com muito mais precisão do que as organizações que se baseiam apenas em métricas de acesso ou em pontuações globais de satisfação.

## Como se calcula

```
Taxa de letramento digital = pacientes que concluem de forma independente
                            uma tarefa definida sem ajuda / pacientes que
                            tentam essa tarefa × 100

Tarefas comuns medidas: login na conta, agendamento de consultas,
acesso a uma consulta por vídeo, visualização de um resultado de exame,
preenchimento de um formulário de admissão.

Informar por tarefa, e não como uma única pontuação agregada, já que
o letramento para tarefas simples (login) e para tarefas
complexas (preencher um formulário de admissão com vários passos) difere
substancialmente, e agregá-las obscurece onde reside a barreira
específica.
```

## Exemplo resolvido

Um sistema de saúde acompanha o acesso a consultas por vídeo como uma tarefa definida em 5000 consultas de telessaúde agendadas em um mês. Destas, 4100 pacientes acessam com sucesso sem qualquer chamada de apoio ou assistência técnica durante a consulta (taxa de letramento digital para esta tarefa: 82%). A segmentação por língua principal mostra uma taxa de 89% para pacientes de língua inglesa contra 61% para pacientes cuja língua principal difere da língua predefinida da interface da plataforma — uma diferença de 28 pontos que seria invisível se apenas fosse informado o valor agregado de 82%, e que aponta diretamente para uma intervenção específica e exequível (interface e instruções traduzidas) em vez de um vago problema geral de letramento.

## Fontes de dados e ressalvas

Os dados de conclusão de tarefas são tipicamente obtidos dos registros de eventos da própria plataforma (o paciente chegou à consulta por vídeo, o fluxo de agendamento de consultas foi concluído sem abandono), complementados por dados de chamadas de apoio ou de contato com a assistência técnica, para identificar tarefas que apenas foram tecnicamente "concluídas" porque o paciente recebeu ajuda em direto a meio do processo. Uma tarefa contada como "concluída" apenas com base em registros do sistema pode ocultar que o paciente precisou de uma chamada de um familiar ou de um funcionário de apoio para a concluir — uma conclusão genuinamente independente do letramento deve ser definida e acompanhada separadamente de uma conclusão assistida, sempre que a plataforma consiga distinguir as duas. O letramento digital correlaciona-se com o letramento em saúde e o letramento geral, mas é analiticamente distinta delas; deve ser usado um instrumento validado (em vez de um pressuposto informal baseado apenas na idade ou na demografia) sempre que seja necessária uma avaliação formal.

## Erros comuns

- **Confundir letramento digital com acesso digital**: um paciente com acesso técnico pleno pode ainda não ter o letramento para o usar eficazmente; são métricas distintas que requerem intervenções distintas, e nunca devem ser informadas como um único valor combinado.
- **Contar conclusões assistidas como sucessos sem ajuda**: se um paciente só conclui uma tarefa com uma chamada de apoio ou a ajuda de um familiar, trata-se de uma lacuna de letramento que a plataforma encobriu, não resolveu; distinguir a conclusão assistida da conclusão sem ajuda sempre que os dados o permitam.
- **Informar uma única pontuação agregada de conclusão de tarefas**: o letramento para uma tarefa simples (fazer login) e para uma complexa (preencher um formulário de admissão detalhado) difere substancialmente; informar por tarefa para identificar exatamente onde reside a barreira.
- **Presumir que só a idade prevê o letramento digital**: embora a idade se correlacione com uma menor letramento digital em termos agregados, a proficiência na língua da interface da plataforma e a familiaridade geral com a tecnologia são frequentemente preditores individuais mais fortes e devem ser medidas diretamente em vez de inferidas a partir da idade.

## Fontes

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), investigação sobre a usabilidade das tecnologias da informação em saúde e o letramento em saúde digital
- Literatura revisada por pares sobre a medição do letramento em saúde digital e a respectiva intervenção, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR)

Ver também: [taxa de acesso digital](../taxa-de-acesso-digital/), a métrica de pré-condição com a qual esta é mais frequentemente, e mais frequentemente de forma errada, confundida.
