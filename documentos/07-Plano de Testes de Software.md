# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome ou Firefox.</li>
</ul>
Os testes funcionais a serem realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT- 01 -  Verificar o funcionamento dos links da página informações do(s) paciente(s) |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida na visualização de uma lista de pacientes, como de forma detalhada na visualização das informações individuais de um único paciente. Bem como admitir que o profissional possa criar, editar e deletar as informações, caso necessário. |
| Objetivo do Teste | Verificar se os links da página de informações do(s) paciente(s) estão encaminhando para as respectivas páginas corretamente. |
| Passos | 1. Logado como profissional de saúde, na opção 'informações paciente'. 2. Clicar no box de cor amarela com nome e cartão SUS do paciente que deseja obter informações mais detalhadas. |
| Critérios de êxito | Todos box amarelos com nome e cartão SUS do respectivo paciente devem encaminhar os usuários para a página de informações mais detalhadas do mesmo. |
| Responsável pela elaborar do caso de Teste | Nayana |

|Caso de Teste    | CT- 02 -  Verificar se o profissional visualiza a página da lista dos pacientes |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida na visualização de uma lista de pacientes, como de forma detalhada na visualização das informações individuais de um único paciente. Bem como admitir que o profissional possa criar, editar e deletar as informações, caso necessário. |
| Objetivo do Teste | Verificar se a página da lista de informações dos pacientes está visível com um box cinza de resumo das informações de cada paciente cadastrado no sistema. |
| Passos | 1. Logado como profissional de saúde, na opção 'informações paciente'. 2. Visualizar a lista de pacientes com as informações resumidas de cada paciente dentro de um box cinza com bordas azuis. |
| Critérios de êxito | Todos box cinzas devem conter informações simplificadas de cada paciente da lista. |
| Responsável pela elaborar do caso de Teste | Nayana |

|Caso de Teste    | CT- 03 -  Verificar se o profissional consegue cadastrar um paciente |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida na visualização de uma lista de pacientes, como de forma detalhada na visualização das informações individuais de um único paciente. Bem como admitir que o profissional possa criar, editar e deletar as informações, caso necessário. |
| Objetivo do Teste | Verificar se é possível cadastrar e salvar um novo paciente dentro do sistema. Visualizar a nova informação a lista atualizada na página. |
| Passos | 1. Logado como profissional de saúde, clicar no botão 'Cadastrar Paciente'. 2. Visualizar um modal para inserir as informações do novo paciente. 3. Clicar no botão 'salvar'. 4. Visualizar a mensagem de sucesso 'Paciente cadastrado com sucesso!'. 5. Clicar em 'ok'. 6. Visualizar na página as novas informações. |
| Critérios de êxito | Ao salvar o cadastro do novo paciente, esse deve ser visualizado ao final da lista de paciente.  |
| Responsável pela elaborar do caso de Teste | Nayana |

|Caso de Teste    | CT- 04 -  Verificar se o profissional consegue editar as informações de um paciente |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida na visualização de uma lista de pacientes, como de forma detalhada na visualização das informações individuais de um único paciente. Bem como admitir que o profissional possa criar, editar e deletar as informações, caso necessário. |
| Objetivo do Teste | Verificar se é possível editar e salvar as informações alteradas de um paciente dentro do sistema. Visualizar as informações atualizadas na página. |
| Passos | 1. Logado como profissional de saúde, clicar no botão 'editar' abaixo do box cinza de qualquer cliente. 2. Visualizar um modal com as informações já cadastradas do paciente. 3. Alterar as informações necessárias. 4. Clicar no botão 'salvar'. 4. Visualizar a mensagem de sucesso 'Paciente cadastrado com sucesso!'. 5. Clicar em 'ok'. 6. Visualizar na página as novas informações. |
| Critérios de êxito | Ao editar o cadastro de um paciente, esse deve ser visualizado na lista de paciente com as informações atualizadas. |
| Responsável pela elaborar do caso de Teste | Nayana |

|Caso de Teste    | CT- 05 -  Verificar se o profissional consegue deletar um paciente |
|:---|:---|
| Requisitos Associados | RF-03: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida na visualização de uma lista de pacientes, como de forma detalhada na visualização das informações individuais de um único paciente. Bem como admitir que o profissional possa criar, editar e deletar as informações, caso necessário. |
| Objetivo do Teste | Verificar se é possível deletar o paciente e todas as informações que corresponda a esse dentro do sistema. Visualizar as informações atualizadas na página. |
| Passos |  1. Logado como profissional de saúde, clicar no botão 'deletar' abaixo do box cinza de qualquer cliente. 2. Visualizar a página sem as respectivas informações removidas. |
| Critérios de êxito | Ao deletar as informações de um paciente, a lista de pacientes deve ser apresentadas sem as informações removidas. |
| Responsável pela elaborar do caso de Teste | Nayana |

|Caso de Teste    | CT- 06 -  Verificar o funcionamento do filtro de pesquisa dos pacientes |
|:---|:---|
| Requisitos Associados | RF-04: A aplicação deve permitir ao profissional filtrar/pesquisar os pacientes no sistema de acordo com as informações inseridas no box da busca de pacientes. |
| Objetivo do Teste | Verificar se o filtro de pesquisa está recuperando os dados inseridos pelo profissional. |
| Passos | 1. Logado como profissional de saúde ir a caixa de busca no lado superior direito da página ao lado da lupa ilustrativa. 2. A cada letra teclada, visualizar na página a mudança das informações em tempo real. |
| Critérios de êxito | Os dados inseridos no filtro de pesquisa deve mostrar a caixa cinza de informações resumidas do paciente que possui o dado informado. |
| Responsável pela elaborar do caso de Teste | Nayana |

|Caso de Teste    | CT- 07 - Verificar se o paciente consegue acessar o artigo |
|:---|:---|
| Requisitos Associados |Rf-08: A aplicação deve permitir que o paciente possa ler informações sobre resíduos tóxicos e sintomas causados ​​por essas substâncias por meio de artigos. |
| Objetivo do Teste | Verificar se o link está redirecionado o paciente a pagina de artigo |
| Passos |1. Verificar se o artigo desejado . 2. Acesso ao artigo com exito. |
| Critérios de êxito | Acesso do paciente com exito a artigo informativo de substancias Quimicas. |
| Responsável pela elaborar do caso de Teste | Handryws Junior |

 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
