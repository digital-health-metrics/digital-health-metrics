# Taxa de Adoção do Portal do Paciente

A taxa de adoção do portal do paciente mede a proporção de pacientes elegíveis que se cadastraram e usam ativamente um portal do paciente online (por exemplo, NHS App, Patient Access ou um portal integrado a um prontuário eletrônico como o MyChart) para consultar seus registros, agendar consultas ou enviar mensagens à sua equipe de cuidados. É o indicador de nível de entrada do envolvimento digital: um paciente que nunca ativou uma conta não pode se beneficiar de nenhum serviço digital posterior construído sobre o portal.

## Por que isso importa

Um portal só cria valor quando o paciente o usa, de modo que as organizações devem acompanhar a adoção como um funil, e não como um único número: registro, ativação (primeira ação significativa) e uso ativo (uso dentro de uma janela de tempo definida) são três taxas diferentes que muitas vezes são confundidas como uma só. As equipes de serviços digitais costumam sofrer pressão para apresentar um único número global favorável, e é preciso disciplina para insistir em uma desagregação mais difícil e mais honesta. Uma adoção baixa ou distribuída de forma desigual também é um sinal de equidade: pacientes mais idosos, com menor letramento digital, que não falam o idioma majoritário ou que não têm banda larga confiável ou smartphone têm, sistematicamente, menos chance de entrar no numerador, de modo que uma taxa média de adoção em alta pode esconder uma disparidade crescente justamente entre os pacientes que mais precisam de contato com os serviços.

## Como se calcula

Informe as três etapas, e não apenas o registro, e indique sempre o denominador de forma explícita:

```
Taxa de registro    = pacientes com conta de portal criada / população de pacientes elegíveis × 100
Taxa de ativação   = pacientes que concluíram uma primeira ação significativa (ver um
                      resultado, agendar uma consulta, enviar uma mensagem) / pacientes com conta × 100
Taxa de uso ativo = pacientes que fizeram login pelo menos uma vez nos últimos 12 meses /
                      população de pacientes elegíveis × 100
```

A população de pacientes elegíveis é geralmente definida como os pacientes com pelo menos um contato com a organização em um período retrospectivo definido (comumente 24 meses), cuja idade e situação de consentimento lhes permitam ter a própria conta.

## Exemplo resolvido

Uma rede de atenção primária atende 50 000 pacientes que cumprem a definição de elegibilidade. Desses, 32 000 se cadastraram no portal (taxa de registro de 64%). Dos 32 000 cadastros, 27 000 concluíram pelo menos uma ação significativa, como ver um resultado de exame (taxa de ativação de 84% dos registrados). Nos últimos 12 meses, 21 000 dos 50 000 pacientes elegíveis fizeram login pelo menos uma vez (taxa de uso ativo de 42%). Informar apenas o número de registro de 64% superestimaria bastante o envolvimento real; o número de uso ativo de 42% é o que deve orientar as decisões sobre os recursos do programa do portal.

## Fontes de dados e ressalvas

Os dados analíticos do portal vêm geralmente da própria plataforma do fornecedor (eventos de login, uso de funcionalidades) ou do registro de auditoria do prontuário eletrônico subjacente, e as organizações devem ter ceticismo com painéis de fornecedores que apenas mostram números de registro. O acesso por procuração (um pai, uma mãe ou um cuidador gerenciando a conta em nome de um paciente) deve ser sinalizado e informado separadamente, já que muda quem é, de fato, o "usuário". A escolha do denominador é extremamente importante: calcular sobre a lista total de pacientes cadastrados, em vez de sobre uma população genuinamente elegível e possível de contatar, subestimará sempre a adoção, enquanto calcular apenas sobre os pacientes ativamente convidados a superestimará sempre; por isso a definição de elegibilidade deve ser fixada e publicada junto com cada taxa informada.

## Erros comuns

- **Confundir o registro com adoção**: uma conta criada mas nunca usada tem valor próximo de zero; informe a ativação e o uso ativo junto com o registro, e não no lugar dele.
- **Ignorar a exclusão digital**: os números agregados de adoção podem subir enquanto a disparidade entre os grupos mais e menos incluídos digitalmente aumenta; segmente sempre por idade, privação, idioma e deficiência, sempre que a governança de dados permitir.
- **Comparar organizações com definições de elegibilidade diferentes**: um programa de portal que só convida pacientes com um endereço de e-mail cadastrado informará uma taxa mais alta do que um que mede sobre toda a lista de cadastrados, sem nenhuma diferença real de desempenho.
- **Tratar um único login como envolvimento contínuo**: uma janela retrospectiva de 12 meses é comum, mas uma janela mais curta (por exemplo, 90 dias) dá um alerta mais precoce de queda no uso.

## Fontes

- NHS England, estatísticas de uso e registro do aplicativo NHS App (publicações nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, medidas do Programa de Promoção da Interoperabilidade, incluindo as medidas de acesso do paciente Ver, Baixar, Transmitir (VDT)
- Literatura revisada por pares sobre adoção de portais do paciente e disparidades em saúde digital, por exemplo estudos publicados no Journal of the American Medical Informatics Association (JAMIA)

Ver também: [taxa de não comparecimento a consultas](../taxa-de-nao-comparecimento-a-consultas/), diretamente influenciada pelo autoagendamento e pelos lembretes baseados no portal.
