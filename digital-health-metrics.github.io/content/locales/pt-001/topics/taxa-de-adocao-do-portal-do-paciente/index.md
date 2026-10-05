# Taxa de Adoção do Portal do Paciente

A taxa de adoção do portal do paciente mede a proporção de pacientes elegíveis que se registaram e utilizam ativamente um portal do paciente em linha (por exemplo, NHS App, Patient Access, ou um portal ligado a um registo de saúde eletrónico como o MyChart) para consultar os seus registos, marcar consultas, ou enviar mensagens à sua equipa de cuidados. É o indicador de nível de entrada do envolvimento digital: um paciente que nunca ativou uma conta não pode beneficiar de nenhum serviço digital subsequente construído sobre o portal.

## Porque é que isto importa

Um portal só cria valor quando o paciente o utiliza, pelo que as organizações devem acompanhar a adoção como um funil, e não como um único número: registo, ativação (primeira ação significativa) e utilização ativa (utilização dentro de uma janela temporal definida) são três taxas diferentes demasiadas vezes confundidas como uma só. As equipas de serviços digitais estão frequentemente sob pressão para reportar um único número global favorável, e é preciso disciplina para insistir na desagregação mais difícil e mais honesta. Uma adoção baixa ou distribuída de forma desigual é também um sinal de equidade: pacientes mais idosos, com menor literacia digital, que não falam a língua maioritária, ou que carecem de banda larga fiável ou de um smartphone, têm sistematicamente menos probabilidade de ser contabilizados no numerador, pelo que uma taxa de adoção média crescente pode ocultar uma disparidade crescente para os pacientes que frequentemente mais precisam de contacto com os serviços.

## Como se calcula

```
Taxa de registo    = pacientes com conta de portal criada / população de pacientes elegíveis × 100
Taxa de ativação   = pacientes que concluíram uma primeira ação significativa (ver um
                      resultado, marcar uma consulta, enviar uma mensagem) / pacientes com conta × 100
Taxa de utilização ativa = pacientes que iniciaram sessão pelo menos uma vez nos últimos 12 meses /
                      população de pacientes elegíveis × 100
```

A população de pacientes elegíveis é geralmente definida como os pacientes com pelo menos um contacto com a organização num período retrospetivo definido (comummente 24 meses), cuja idade e estado de consentimento lhes permita deter a sua própria conta.

## Exemplo resolvido

Uma rede de cuidados primários serve 50 000 pacientes que cumprem a definição de elegibilidade. Destes, 32 000 registaram-se no portal (taxa de registo de 64%). Dos 32 000 registos, 27 000 concluíram pelo menos uma ação significativa, como ver um resultado de exame (taxa de ativação de 84% dos registados). Nos últimos 12 meses, 21 000 dos 50 000 pacientes elegíveis iniciais iniciaram sessão pelo menos uma vez (taxa de utilização ativa de 42%). Reportar apenas o número de registo de 64% sobrestimaria consideravelmente o envolvimento real; o número de utilização ativa de 42% é o que deve orientar as decisões de recursos do programa do portal.

## Fontes de dados e ressalvas

Os dados analíticos do portal provêm geralmente da própria plataforma do fornecedor (eventos de início de sessão, utilização de funcionalidades) ou do registo de auditoria do registo de saúde eletrónico subjacente, e as organizações devem ser céticas quanto a painéis de fornecedores que apenas mostram números de registo. O acesso por procuração (um progenitor ou cuidador a gerir uma conta em nome de um paciente) deve ser assinalado e reportado separadamente, uma vez que altera quem é realmente o "utilizador". A escolha do denominador é extremamente importante: contabilizar face à lista total de pacientes registados em vez de uma população genuinamente elegível e contactável subestimará sempre a adoção, enquanto contabilizar apenas face aos pacientes ativamente convidados a sobrestimará sempre, pelo que a definição de elegibilidade deve ser fixada e publicada juntamente com cada taxa reportada.

## Erros comuns

- **Confundir o registo com adoção**: uma conta criada mas nunca utilizada tem um valor próximo de zero; reporte a ativação e a utilização ativa juntamente com o registo, não em sua substituição.
- **Ignorar a exclusão digital**: os números de adoção agregados podem subir enquanto a disparidade entre os grupos mais e menos incluídos digitalmente aumenta; segmente sempre por idade, privação, língua e deficiência sempre que a governação de dados o permita.
- **Comparar organizações com definições de elegibilidade diferentes**: um programa de portal que apenas convida pacientes com um endereço de correio eletrónico registado reportará uma taxa mais alta do que um que mede face a toda a lista registada, sem qualquer diferença real de desempenho.
- **Tratar um único início de sessão como envolvimento contínuo**: uma janela retrospetiva de 12 meses é comum, mas uma janela mais curta (por exemplo, 90 dias) dá um alerta mais precoce de utilização em declínio.

## Fontes

- NHS England, estatísticas de utilização e registo da aplicação NHS App (publicações nhs.uk / digital.nhs.uk)
- ONC / HealthIT.gov, medidas do Programa de Promoção da Interoperabilidade, incluindo as medidas de acesso do paciente Ver, Descarregar, Transmitir (VDT)
- Literatura revista por pares sobre adoção de portais do paciente e disparidades em saúde digital, por exemplo estudos publicados no Journal of the American Medical Informatics Association (JAMIA)

Ver também: [taxa de faltas a consultas](../taxa-de-faltas-a-consultas/), diretamente influenciada pela auto-marcação e pelos lembretes baseados no portal.
