# Taxa de Melhoria Biométrica

A taxa de melhoria biométrica é a proporção de pacientes inscritos num programa de saúde digital que alcançam uma melhoria clinicamente significativa numa medida biométrica acompanhada — mais comummente a hemoglobina glicada (HbA1c) em programas de diabetes e cardiometabólicos, ou o índice de massa corporal (IMC) em programas de controlo de peso — ao longo de um período de inscrição definido. É a métrica de resultado que, em última análise, justifica as alegações clínicas de um produto de saúde digital: os números de envolvimento e de adoção descrevem como um produto é utilizado, mas a melhoria biométrica está mais próxima de uma prova de que funciona.

## Porque é que isto importa

Os programas de saúde digital são frequentemente vendidos e contratados com base na promessa de melhores resultados de saúde, e a taxa de melhoria biométrica é a forma mais direta e quantificável de testar essa promessa face a um limiar específico e clinicamente reconhecido, em vez de uma alegação vaga de "melhor saúde". Pagadores, empregadores e sistemas de saúde ligam cada vez mais o reembolso ou a renovação de contratos a uma alteração biométrica demonstrada, pelo que um programa que não consiga reportar esta taxa de forma credível está em desvantagem tanto comercial como clínica. A métrica é também uma verificação de disciplina sobre a conceção do programa: é muito mais fácil reportar o envolvimento (inícios de sessão, mensagens enviadas) do que os resultados, e uma equipa deve desconfiar de qualquer programa que reporte com entusiasmo o primeiro enquanto é vago quanto aos segundos.

## Como se calcula

```
Taxa de melhoria biométrica = pacientes que alcançam uma melhoria
                               clinicamente significativa definida /
                               pacientes com uma medição de base e de
                               seguimento válidas × 100

Limiares clinicamente significativos comuns:
  HbA1c — uma redução de ≥ 0,5 pontos percentuais, ou atingir um
          objetivo definido (por exemplo, < 7,0%) a partir de um valor
          de base fora do intervalo
  IMC   — uma redução de ≥ 5% do peso corporal de base, mantida até ao
          momento da medição de seguimento

Reportar separadamente cada medida biométrica acompanhada; nunca
combinar a melhoria da HbA1c e do IMC numa única percentagem
combinada de "melhoria".
```

## Exemplo resolvido

Um programa de saúde digital cardiometabólico inscreve 800 pacientes com HbA1c de base fora do intervalo. Destes, 620 têm tanto uma medição de base válida como uma medição de seguimento aos 6 meses (180 perdem-se no seguimento e são excluídos do denominador, não contados como fracassos). Dos 620 com medições emparelhadas, 340 alcançam uma redução de pelo menos 0,5 pontos percentuais. A taxa de melhoria biométrica é 340 / 620 × 100 = 55%. Reportar este valor face aos 800 inscritos no total (340 / 800 = 42,5%) confundiria a perda no seguimento com o fracasso do tratamento, subestimando a taxa para os pacientes que efetivamente completaram a medição.

## Fontes de dados e ressalvas

Os valores biométricos de base e de seguimento provêm tipicamente de um dispositivo conectado (um glicosímetro Bluetooth ou uma balança inteligente), de um resultado laboratorial importado do registo de saúde eletrónico, ou de um valor autorreportado introduzido pelo paciente — e estas três fontes têm fiabilidades muito diferentes, pelo que a fonte deve ser reportada juntamente com a taxa. A perda no seguimento raramente é aleatória: os pacientes que se desligam de um programa são frequentemente também aqueles com menor probabilidade de terem melhorado, pelo que uma taxa de melhoria elevada calculada apenas sobre os pacientes que completaram o seguimento pode sobrestimar o verdadeiro efeito do programa ao nível da população. Os efeitos sazonais e de regressão à média são reais tanto para a HbA1c como para o peso, pelo que um programa deve comparar com um grupo de controlo concorrente ou histórico sempre que possível, em vez de tratar qualquer melhoria como prova do efeito do programa.

## Erros comuns

- **Excluir, em vez de reportar, a perda no seguimento**: retirar discretamente do denominador os pacientes sem medição de seguimento pode inflacionar substancialmente a taxa de melhoria aparente; reporte sempre a taxa de conclusão da medição de seguimento juntamente com a própria taxa de melhoria.
- **Misturar medições autorreportadas e provenientes de dispositivos sem as identificar**: um peso autorreportado é sistematicamente menos fiável do que uma leitura de uma balança inteligente conectada, e a mistura das duas fontes oculta quanto de uma melhoria aparente é ruído de medição.
- **Ausência de controlo ou de contrafactual**: muitas medidas biométricas crónicas flutuam ou regridem para a média por si próprias; uma taxa de melhoria de braço único, sem qualquer grupo de comparação, é uma evidência sugestiva, não conclusiva, do efeito do programa.
- **Tratar uma modesta alteração média como prova de melhoria generalizada**: uma pequena melhoria média ao nível da população pode ser impulsionada por alguns grandes respondedores enquanto a maioria dos pacientes não vê qualquer alteração; reporte a distribuição (por exemplo, a proporção que ultrapassa o limiar clinicamente significativo), e não apenas a alteração média.

## Fontes

- American Diabetes Association (ADA), Standards of Care in Diabetes, orientações sobre o objetivo de HbA1c e sobre a alteração clinicamente significativa
- Centers for Disease Control and Prevention (CDC), Division of Diabetes Translation, orientações para a avaliação de programas
- Literatura revista por pares sobre os resultados de programas digitais de diabetes e de controlo de peso, por exemplo estudos publicados na npj Digital Medicine e na Diabetes Care

Ver também: [taxa de adesão à medicação](../taxa-de-adesao-a-medicacao/), um fator a montante frequente da melhoria biométrica em programas de condições crónicas.
