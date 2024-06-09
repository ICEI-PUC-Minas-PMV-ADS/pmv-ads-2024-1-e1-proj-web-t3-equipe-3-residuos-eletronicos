# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT- 04 -  Verificar se o site localiza os pacientes cadastrados e não cadastrados |
|:---|:---|
| Requisitos Associados | RF-01: A aplicação deve permitir dois tipos de usuários para login: profissionais da saúde e pacientes. |
| Objetivo do Teste | A aplicação deve permitir duas opções de login para determinado tipo de usuário, retornando para cada um sua particularidade de login. Sendo para pacientes a possibilidade de login com CPF e senha e para profissionais da saúde com o CRM e senha. |
| Passos | 1. Na página inicial, ao selecionar a opção de login deve visualizar as opções de login retornadas. |
| Critérios de êxito | 1. Ao selecionar a opção 'Paciente', devem retornar os campos de preenchimento, CPF  e Senha. 2. Ao selecionar a opção 'Profissional da Saúde', devem retornar os campos de preenchimento, CRM e senha. |
| Responsável pela elaborar do caso de Teste | Isabella Cunha |

|Caso de Teste    | CT- 05 -  Verificar se os caracteres especiais nos nomes de usuário ou senhas são tratados corretamente. |
|:---|:---|
| Requisitos Associados | RF-01: A aplicação deve permitir dois tipos de usuários para login: profissionais da saúde e pacientes. |
| Objetivo do Teste | A aplicação deve saber lidar com caracteres especiais, como '-' e '.', quando digitados no campo de login dos usuários sem que afete o resultado de busca/criação do usuário. |
| Passos | 1. No campo de preenchimento do CPF, digitar o CPF usando '-' e '.'. 2. No campo de preenchimento do CRM, digitar o CRM com '-'.|
| Critérios de êxito | 1. O login deve ser executado com sucesso sem mensagens de erro ou de informação incorreta de usuário.|
| Responsável pela elaborar do caso de Teste | Isabella Cunha|
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
