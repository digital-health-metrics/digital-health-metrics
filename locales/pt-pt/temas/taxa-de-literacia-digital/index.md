# Taxa de Literacia Digital

A taxa de literacia digital mede a proporção de uma população de pacientes capaz de concluir, de forma independente e bem-sucedida, tarefas comuns numa plataforma de saúde digital — iniciar sessão, marcar uma consulta, aceder a uma consulta por vídeo, ou ler o resultado de um exame — sem necessitar da ajuda de outra pessoa. É distinta da taxa de acesso digital, e deve ser sempre medida separadamente: um paciente pode ter um smartphone e ligação de banda larga e, ainda assim, ser incapaz de navegar sozinho numa plataforma de telessaúde, e confundir as duas métricas oculta precisamente a população que esta métrica existe para identificar.

## Porque é que isto importa

O acesso digital, por si só, não garante que um paciente consiga utilizar eficazmente um serviço de saúde digital: pacientes com menor literacia em saúde, pouca experiência geral com tecnologia, deficiência cognitiva ou visual, ou barreiras linguísticas face à interface da plataforma podem ter acesso técnico pleno e, ainda assim, não conseguir concluir uma tarefa de forma independente, sendo que esta lacuna se correlaciona sistematicamente com os mesmos grupos demográficos que já enfrentam outras disparidades de saúde. O Digital Health Equity Measurement Framework da HIMSS trata a literacia digital como um pilar distinto do acesso precisamente por esta razão: colmatar uma lacuna de acesso sem abordar também uma lacuna de literacia pode deixar uma população tecnicamente ligada mas funcionalmente incapaz de beneficiar. As organizações que medem a conclusão de tarefas e o tempo até à conclusão para ações comuns da plataforma, segmentados por língua e indicadores socioeconómicos, conseguem identificar barreiras de literacia e direcionar o apoio (interfaces simplificadas, integração assistida, conteúdos noutras línguas) com muito mais precisão do que as organizações que se baseiam apenas em métricas de acesso ou em pontuações globais de satisfação.

## Como se calcula

```
Taxa de literacia digital = pacientes que concluem de forma independente
                            uma tarefa definida sem ajuda / pacientes que
                            tentam essa tarefa × 100

Tarefas comuns medidas: início de sessão na conta, marcação de consultas,
acesso a uma consulta por vídeo, visualização de um resultado de exame,
preenchimento de um formulário de admissão.

Reportar por tarefa, e não como uma única pontuação agregada, uma vez que
a literacia para tarefas simples (início de sessão) e para tarefas
complexas (preencher um formulário de admissão com vários passos) difere
substancialmente, e agregá-las obscurece onde reside a barreira
específica.
```

## Exemplo resolvido

Um sistema de saúde acompanha o acesso a consultas por vídeo como uma tarefa definida em 5000 consultas de telessaúde marcadas num mês. Destas, 4100 pacientes acedem com sucesso sem qualquer chamada de apoio ou assistência técnica durante a consulta (taxa de literacia digital para esta tarefa: 82%). A segmentação por língua principal mostra uma taxa de 89% para pacientes de língua inglesa contra 61% para pacientes cuja língua principal difere da língua predefinida da interface da plataforma — uma diferença de 28 pontos que seria invisível se apenas fosse reportado o valor agregado de 82%, e que aponta diretamente para uma intervenção específica e exequível (interface e instruções traduzidas) em vez de um vago problema geral de literacia.

## Fontes de dados e ressalvas

Os dados de conclusão de tarefas são tipicamente obtidos dos registos de eventos da própria plataforma (o paciente chegou à consulta por vídeo, o fluxo de marcação de consultas foi concluído sem abandono), complementados por dados de chamadas de apoio ou de contacto com a assistência técnica, para identificar tarefas que apenas foram tecnicamente "concluídas" porque o paciente recebeu ajuda em direto a meio do processo. Uma tarefa contada como "concluída" apenas com base em registos do sistema pode ocultar que o paciente precisou de uma chamada de um familiar ou de um funcionário de apoio para a concluir — uma conclusão genuinamente independente da literacia deve ser definida e acompanhada separadamente de uma conclusão assistida, sempre que a plataforma consiga distinguir as duas. A literacia digital correlaciona-se com a literacia em saúde e a literacia geral, mas é analiticamente distinta delas; deve ser utilizado um instrumento validado (em vez de um pressuposto informal baseado apenas na idade ou na demografia) sempre que seja necessária uma avaliação formal.

## Erros comuns

- **Confundir literacia digital com acesso digital**: um paciente com acesso técnico pleno pode ainda não ter a literacia para o utilizar eficazmente; são métricas distintas que requerem intervenções distintas, e nunca devem ser reportadas como um único valor combinado.
- **Contar conclusões assistidas como sucessos sem ajuda**: se um paciente só conclui uma tarefa com uma chamada de apoio ou a ajuda de um familiar, trata-se de uma lacuna de literacia que a plataforma encobriu, não resolveu; distinguir a conclusão assistida da conclusão sem ajuda sempre que os dados o permitam.
- **Reportar uma única pontuação agregada de conclusão de tarefas**: a literacia para uma tarefa simples (iniciar sessão) e para uma complexa (preencher um formulário de admissão detalhado) difere substancialmente; reportar por tarefa para identificar exatamente onde reside a barreira.
- **Presumir que só a idade prevê a literacia digital**: embora a idade se correlacione com uma menor literacia digital em termos agregados, a proficiência na língua da interface da plataforma e a familiaridade geral com a tecnologia são frequentemente preditores individuais mais fortes e devem ser medidas diretamente em vez de inferidas a partir da idade.

## Fontes

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Office of the National Coordinator for Health Information Technology (ONC), investigação sobre a usabilidade das tecnologias da informação em saúde e a literacia em saúde digital
- Literatura revista por pares sobre a medição da literacia em saúde digital e a respetiva intervenção, por exemplo estudos publicados no Journal of Medical Internet Research (JMIR)

Ver também: [taxa de acesso digital](../taxa-de-acesso-digital/), a métrica de pré-condição com a qual esta é mais frequentemente, e mais frequentemente de forma errada, confundida.
