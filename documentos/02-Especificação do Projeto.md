# Especificação do Projeto

## Perfis de Usuários

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
<td>
1. Identificar a causa dos sintomas do paciente;</br>
2. Aprimorar o processo de triagem para casos de suspeita por intoxicação pelas substâncias de resíduos eletrônicos;</br>
3. Melhorar a precisão dos diagnósticos para um tratamento mais assertivo.</br>
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
<td>
1. Descobrir a causa dos seus sintomas;</br>
2. Entender os sintomas associados à intoxicação;</br>
3. Aprender sobre os cuidados preventivos para evitar nova intoxicação.</br> 
</td>
</tr>
</tbody>
</table>


## Histórias de Usuários


|EU COMO...                  | QUERO/PRECISO ...             |PARA ...                           |
|----------------------------|-------------------------------|-----------------------------------|
| Como profissional da saúde | Preciso descobrir com maior assertividade a causa dos sintomas do paciente com suspeita de intoxicação por resíduos eletrônicos.|Para indicar o tratamento adequado e orientá-lo a prevenção.|
| Como profissional da saúde |Preciso entender o comportamento e a rotina do paciente.|Para auxiliar no processo de triagem e identificação da intoxicação.|
| Como profissional da saúde | Devo ter controle e organização no processo de triagem do paciente com suspeita de sintomas por intoxicação de substâncias de resíduos eletrônicos.|Para buscar a otimização do processo e estar mais próximo a um diagnóstico eficiente para os sintomas do meu paciente.|
| Como paciente| Quero descobrir a causa dos meus sintomas e o agente causador.|Para me conscientizar do meu problema e evitar que acontece novamente.|
| Como paciente | Quero acompanhar meu processo de atendimento no hospital.|Para monitorar meu atendimento e os procedimentos que serão realizados.|
| Como paciente | Quero aprender sobre cuidados preventivos.|Para evitar nova intoxicação.|

## Requisitos do Projeto

### Requisitos Funcionais

|ID      | Descrição                       | Prioridade |
|------- |---------------------------------|----|
| RF-01  |A aplicação deve permitir dois tipos de usuários para login: profissionais da saúde e pacientes.|ALTA  | 
| RF-02  |A aplicação deve permitir que responda sobre seus sintomas e seu histórico numa espécie de formulário e permitir o profissional classificar o nível de urgência no atendimento ao paciente.|  ALTA  |
| RF-03  |A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida quando dentro da visualização de uma lista de pacientes, como de forma mais detalhada quando da visualização das informações individuais de um paciente.|  ALTA  |
| RF-04  |A aplicação deve permitir ao profissional filtrar/pesquisar os pacientes no sistema de acordo com as informações inseridas no box da busca de pacientes. |  ALTA |
| RF-05  |Permitir o profissional disponibilizar na aplicação o diagnóstico e tratamento online para o paciente.|  MÉDIA  |
| RF-06  |Permitir ao profissional de saúde fornecer dicas de como evitar uma nova intoxicação|  MÉDIA  |
| RF-07  |A aplicação deve permitir mostrar os resultados dos exames realizados.|  MÉDIA  |
| RF-08  |A aplicação deve permitir que o paciente possa ler informações de resíduos tóxicos e sintomatologia causadas por essas substâncias por meio de artigos.|  MÉDIA  |

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos de forma adequada.| ALTA | 
| RNF-02  |A aplicação deve permitir funcionalidades para dois usuários: profissionais da saúde e pacientes.| ALTA | 
| RNF-03 | A aplicação deve ter bom nível de contraste entre os elementos da tela visando a usabilidade.| MÉDIA |
|RNF-04  |A aplicação deve ter cores acessíveis a usuários com daltonismo.| BAIXA |
|RNF-05  |A aplicação deve fácil de usar mesmo para usuários com pouca experiência em tecnologia.| MÉDIA |
|RNF-06  |A aplicação deve ter uma interface simples, intuitiva e amigável.| MÉDIA |
|RNF-07  |A aplicação deve solicitar dados da rotina dos pacientes por meio de perguntas que compõem a triagem para identificar o tipo de intoxicação.| ALTA |

**Prioridade: Alta / Média / Baixa. 

