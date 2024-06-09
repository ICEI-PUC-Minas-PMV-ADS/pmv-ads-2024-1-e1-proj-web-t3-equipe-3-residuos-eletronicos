# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/03-Metodologia.md"> Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/05-Template%20padr%C3%A3o%20da%20Aplica%C3%A7%C3%A3o.md"> Arquitetura da Solução</a>

### Tela dos dados dos pacientes (RF-003)

### Responsável: Nayana Loivos

O acesso pelo profissional de saúde a tela dos dados dos pacientes poderá ser realizado quando inciada sua sessão através da opção de menu "informações paciente".
Toda estrutura de dados foi baseada em dados mocados por meio da ferramenta do navegador chamada Local Storage.
Também foi usada a linguagem de marcação HTML para o reconhecimento da organização do site pelo navegador, e a page foi estruturada com a folha de estilo CSS nativo.
Todas as funcionalidades da page foram escritas em JS nativo.

Exemplo da tela de listagem dos pacientes:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/9e792d7c-65cc-4a2b-8ab7-59218284d62f)

É possível ao profissional de saúde realizar o cadastro, edição e exclusão de pacientes, atendendo as funcionalidades de Create, Read, Update e Delete das operações básicas do banco de dados que leva o acrônimo CRUD.
Após clicar no botão "Cadastrar Paciente" no canto inferior direito, um modal é aberto para serem inseridos os novos dados. Ao clicar no botão "salvar", os dados serão salvos no Local Storage e a visualização da página atualizada.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/5b70e23e-6103-4a59-bc86-f663d9a99c75)

Após clicar no botão "editar" no canto inferior direito de cada caixa individual de informações do paciente, um modal é aberto, já preenchido com as informações do paciente que foi clicado, permitindo que as mudanças sejam realizadas. Ao clicar no botão "salvar", os dados serão atualizados no Local Storage e a visualização da página atualizada.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/9207ebd7-6f3c-42b3-822d-5f85b959a71d)

Após clicar no botão "deletar" no canto inferior direito de cada caixa individual de informações do paciente, as informações do paciente que foi clicado serão imediatamente removidas e a visualização da página atualizada.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/e0bba9cc-fcc7-49f7-9b11-e925b881e558)

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/7b51bdfb-42c0-4f87-a7ee-20e0b083dad8)

O profissional poderá acessar individualmente as informações de cada paciente e selecionar um CID-10 para o mesmo, como também poderá preencher sobre medicações e tratamento indicado.
Ao clicar no botão "salvar" no canto inferior direito, o profissional poderá salvar todas as informações que preencheu. 
Ainda não há funcionalidade implementada para essa janela.
Para acessar essa page basta clicar na caixa amarela com o nome do paciente e o número do SUS.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/e372834e-f049-4024-89b3-9a90579704dd)

#### Requisito atendido

RF-003: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde tanto de forma resumida na visualização de uma lista de pacientes, como de forma detalhada na visualização das informações individuais de um único paciente. Bem como admitir que o profissional possa criar, editar e deletar as informações, caso necessário.

#### Artefatos da funcionalidade

●clients-inf.html

●clients-inf.css

●half-page-client-inf.css

●clients.js

●modal-clients-inf.js

●modal-create.css

●client-inf.html

●client-inf.css

●client-health-treatment.css

#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]

### Instruções de acesso
[Adicione as orientações de acesso à funcionalidade]
<hr>

### Pesquisa dinâmica sobre a lista de pacientes (RF-004)

### Responsável: Nayana Loivos

O acesso pelo profissional de saúde a tela dos dados dos pacientes poderá ser realizado quando inciada sua sessão através da opção de menu "informações paciente".
Toda estrutura de dados foi baseada em dados mocados por meio da ferramenta do navegador chamada Local Storage.
Também foi usada a linguagem de marcação HTML para o reconhecimento da organização do site pelo navegador, e a page foi estruturada com a folha de estilo CSS nativo.
Todas as funcionalidades da page foram escritas em JS nativo.

Exemplo da tela de listagem dos pacientes:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/86353d2a-5ef0-4366-b7f0-b225884c8713)

É possível ao profissional realizar uma busca dinâmica por qualquer palavra dentro dessa página.
Após clicar na espaço da caixa de busca no canto superior direito que possui uma lupa ilustrativa e digitar a palavra procurada, a visualização da página é atualizada conforme a palavra digitada conscide com informações disponíveis na página.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/0a5de4fd-b69d-49bd-90bd-915047a3963f)

### Requisito atendido

RF-004: A aplicação deve permitir ao profissional filtrar/pesquisar os pacientes no sistema de acordo com as informações inseridas no box da busca de pacientes.

### Artefatos da funcionalidade

●clients-inf.html

●clients-inf.css

●half-page-client-inf.css

●clients.js

●client-health-treatment.css

#### Estrutura de Dados
[Caso exista estrutura de dados, adicione aqui]

### Instruções de acesso
[Adicione as orientações de acesso à funcionalidade]
<hr>

### Título da funcionalidade
[Adicione imagem da funcionalidade/tela]

### Responsável
[Adicione nome do responsável pelo desenvolvimento da funcionalidade]

### Requisito atendido
[RF-X: adicione a descrição do requisito atendido]

### Artefatos da funcionalidade
[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados
[Caso exista estrutura de dados, adicione aqui]

### Instruções de acesso
[Adicione as orientações de acesso à funcionalidade]
<hr>

### Título da funcionalidade
[Adicione imagem da funcionalidade/tela]

### Responsável
[Adicione nome do responsável pelo desenvolvimento da funcionalidade]

### Requisito atendido
[RF-X: adicione a descrição do requisito atendido]

### Artefatos da funcionalidade
[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]

#### Estrutura de Dados
[Caso exista estrutura de dados, adicione aqui]

### Instruções de acesso
[Adicione as orientações de acesso à funcionalidade]
<hr>

### Dois tipos de usuários para login (RF-001)

### Isabella Cunha 

O acesso a partir da página inicial poderá ser feito por dois tipos de usuários para login: Profissionais da saúde e Pacientes. 
Toda estrutura de dados foi baseada em dados mocados por meio da ferramenta do navegador chamada Local Storage.
Também foi usada a linguagem de marcação HTML para o reconhecimento da organização do site pelo navegador,
e a page foi estruturada com a folha de estilo CSS nativo. Ainda não há funcionalidade implementada para essa janela.

Exemplo de tela inicial com as opções de login:

<img width="1438" alt="tela_inicial" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/165732989/8eeb002c-13e7-4aa1-9d0b-0bf2653599c1">

Para o login quando selecionada a opção "Paciente" é possível acessar com o CPF e senha ou entrar com o GOV.BR, integrando os dados do paciente com o portal do GOV. Ainda não há funcionalidade implementada para essa janela.

Exemplo de tela de login para Pacientes:

<img width="1436" alt="tela_login_paciente" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/165732989/9262eb3d-699e-4cd5-b05c-fe5153026b42">

Para o login quando selecionada a opção "Profissional da Saúde" é possível acessar com o CRM/Coren e senha.Ainda não há funcionalidade implementada para essa janela.

Exemplo de tela de login para Profissionais da Saúde:

<img width="1438" alt="tela_login_profsaude" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/165732989/2ddddfba-faad-480c-904b-df253fc7446d">

### Requisito Atendido

RF-01: A aplicação deve permitir dois tipos de usuários para login: profissionais da saúde e pacientes. 

RF-Create e Read.

### Artefatos da funcionalidade

●reset.min.css

●template-header-footer.html

●template-header-footer.css

●tela_inicial.html

●tela_inicial.css

●template.js

●tela_login_profsaude.html

●tela_login_profsaude.css

●tela_login_paciente.html

●tela_login_paciente.css

#### Estrutura de Dados
[Caso exista estrutura de dados, adicione aqui]

### Instruções de acesso
[Adicione as orientações de acesso à funcionalidade]
<hr>