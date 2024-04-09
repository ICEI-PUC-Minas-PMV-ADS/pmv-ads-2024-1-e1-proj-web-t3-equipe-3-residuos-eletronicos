# Especificação do Projeto

## Perfis de Usuários

[Enumere e faça o detalhamento dos perfis de usuários. Utilize o modelo de tabela abaixo para sintetizá-los.]

<table>
<tbody>
<tr align=center>
<th colspan="2">Profissionais da saúde</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Profissionais da saúde (médicos, enfermeiros etc.)</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1.  Identificar a causa dos sintomas do paciente 

2. Aprimorar o processo de triagem para casos de suspeita por intoxicação pelas substâncias de resíduos eletrônicos. 

3. Melhorar a precisão dos diagnósticos para um tratamento mais assertivo.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Pacientes</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pacientes em geral no atendimento do posto de saúde e pacientes com sintomas de intoxicação.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1.   Descobrir a causa dos seus sintomas. 

2.   Entender os sintomas associados à intoxicação. 

3. Aprender sobre os cuidados preventivos para evitar nova intoxicação. 
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO...                  | QUERO/PRECISO ...             |PARA ...                |
|----------------------------|-------------------------------|-----------------------------------|
| Como profissional da saúde |Preciso descobrir com maior    |Para indicar o tratamento adequado |
|                            |assertividade a causa dos      |e orientá-lo a prevenção.          |
|                            |sintomas do paciente com       |                                   |
|                            |suspeita de intoxicação por    |                                   |
|                            |resíduos eletrônicos.          |                                   |
| Como profissional da saúde |Preciso entender o             |Para auxiliar no processo de       |
|                            |comportamento e a rotina do    |triagem e identificação da         |
|                            |paciente.                      |da intoxicação.                    |
| Como profissional da saúde |Devo ter controle e organizaçã |Para buscar a otimização do        |
|                            |no processo de triagem do      |processo e estar mais próximo a um |                                    
|                            |paciente com suspeita de       |diagnóstico eficiente para os      |                                  
|                            |sintomas por intoxicação de    |sintomas do meu paciente.          |                                       
|                            |substâncias de resíduos        |                                   |
|                            |eletrônicos.                   |                                   |
| Como paciente              |Quero descobrir a causa dos    |Para me conscientizar do meu       |
|                            |meus sintomas e o agente       |problema e evitar que acontece     |
|                            |causador.                      |novamente.                         |
| Como paciente              |Quero acompanhar meu processo  |Para monitorar meu atendimento e os|                                  
|                            |de atendimento no hospital.    |procedimentos que serão realizados.|
| Como paciente              |Quero aprender sobre cuidados  |Para evitar nova intoxicação.      |
|                            |preventivos.                   |                                   |

## Requisitos do Projeto

[Com base nas Histórias de Usuários, enumere os requisitos da solução. Lembre-se que cada requisito deve corresponder a uma, e somente uma, característica alvo da solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.]

### Requisitos Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos funcionais]

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 |A aplicação deve permitir dois tipos de usuários para login: profissionais da saúde e pacientes.                     |ALTA  | 
| RF-02  | A aplicação deve permitir que responda sobre seus sintomas e seu histórico numa espécie de formulário e permitir o profissional classificar o nível de urgência no atendimento ao paciente.  |  ALTA  |
| RF-03  | A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde e classificar o nível de urgência no atendimento ao paciente.  |  ALTA  |
| RF-04  |A aplicação deve permitir ao profissional inserir e pesquisar a classificação da intoxicação em questão no CID-10. |  ALTA  |
| RF-05  |Permitir o profissional disponibilizar na aplicação o diagnóstico e tratamento online para o paciente. |  MÉDIA  |
| RF-06  |Permitir ao profissional de saúde fornecer dicas de como evitar uma nova intoxicação|  MÉDIA  |
| RF-07  |A aplicação deve permitir mostrar os resultados dos exames realizados. |  MÉDIA  |
| RF-08  |A aplicação deve permitir que o paciente possa ler informações de resíduos tóxicos e sintomatologia causadas por essas substâncias por meio de artigos |  MÉDIA  |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.                  | ALTA | 
| RNF-02  |A aplicação deve permitir funcionalidades para dois usuários: profissionais da saúde e pacientes.                  | ALTA | 
| RNF-03 | A aplicação deve ter bom nível de contraste entre os elementos da tela visando a usabilidade.| MÉDIA|
|RNF-04|A aplicação deve ter bom nível de contraste entre os elementos da tela visando a usabilidade.| BAIXA|

**Prioridade: Alta / Média / Baixa. 

