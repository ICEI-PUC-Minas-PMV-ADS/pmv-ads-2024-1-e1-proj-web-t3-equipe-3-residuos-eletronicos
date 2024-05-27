# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/02-Especifica%C3%A7%C3%A3o%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/03-Metodologia.md"> Metodologia</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/05-Template%20padr%C3%A3o%20da%20Aplica%C3%A7%C3%A3o.md"> Arquitetura da Solução</a>

### Tela dos dados dos pacientes (RF-003)

### Responsável: Nayana Loivos

O acesso pelo profissional de saúde a tela dos dados dos pacientes poderá ser realizado quando inciada sua sessão
através da opção de menu "informações paciente".
Toda estrutura de dados foi baseada em dados mocados por meio da ferramenta do navegador chamada Local Storage.
Também foi usada a linguagem de marcação HTML para o reconhecimento da organização do site pelo navegador,
e a page foi estruturada com a folha de estilo CSS nativo.
Todas as funcionalidades da page foram escritas em JS nativo.

Exemplo da tela de listagem dos pacientes:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/14777f63-c0ab-42bb-a19a-7dde5ed91e86)

É possível ao profissional de saúde realizar o cadastro de um novo paciente, atendendo as funcionalidades de
Create, Read e Update das operações básicas do banco de dados que leva o acrônimo CRUD (create, read, update e delete).
Após clicar no botão "Cadastrar Paciente" no canto inferior direito, um modal é aberto para serem inseridos os novos dados.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/52dbff00-eb67-460c-8da6-e999965870c1)

O profissional poderá acessar individualmente as informações de cada paciente e selecionar um CID-10 para o mesmo.
Ainda não há funcionalidade implementada para essa janela.
Para acessar essa page basta clicar na caixa amarela com o nome do paciente e o número do SUS.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/82f8a5cb-698f-4618-9e30-b2d35d01b000)

O profissional de saúde poderá preencher sobre medicamento e tratamento indicado ao paciente.
Ainda não há funcionalidade implementada para essa janela.
Ao clicar no botão "salvar" no canto inferior direito, o profissional é direcionado a janela que torna possível a
inserção do(s) medicamento(s) e do tratamento indicado ao paciente.

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/bb69e11c-1ed4-4371-8713-2f83b368147c)

#### Requisito atendido

RF-003: A aplicação deve permitir a visualização dos dados respondidos pelo paciente ao profissional de saúde.

RF-Create, Read, Update: CRUD.

#### Artefatos da funcionalidade

●clients-inf.html

●clients-inf.css

●half-page-client-inf.css

●clients.js

●modal-clients-inf.js

●modal-create.css

●client-inf.html

●client-inf.css

●client-health-treatment.html

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