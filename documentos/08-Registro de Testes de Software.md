# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/blob/main/documentos/07-Plano%20de%20Testes%20de%20Software.md"> Plano de Testes de Software</a>

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT- 01 - Verificar o funcionamento dos links da página informações do(s) paciente(s) |
|:---|:---|
| Resultados obtidos | O link rediciona a página de informação individual de um único paciente, porém ainda não está vinculando o paciente ao qual foi clicado. |
| Responsável pela execução do caso de Teste | Nayana |

![2024-06-08-20-48-40](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/2d569d3d-b09e-4bd6-bd20-2c88519aa3be)


|Caso de Teste    | CT- 02 - Verificar se o profissional visualiza a página da lista dos pacientes |
|:---|:---|
| Resultados obtidos | É possível visualizar a página com a lista atualizada dos pacientes cadastrados no local storage. |
| Responsável pela execução do caso de Teste | Nayana |

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/d35763ba-54e1-41e7-a770-03c831d89b00)

|Caso de Teste    | CT- 03 - Verificar se o profissional consegue cadastrar um paciente |
|:---|:---|
| Resultados obtidos | É possível ao profissional cadastrar um novo paciente e visualizar a lista atualizada. |
| Responsável pela execução do caso de Teste | Nayana |

![2024-06-08-21-51-51](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/b5421b82-2d6c-4ebe-bf22-fe96b56c58e3)

|Caso de Teste    | CT- 04 - Verificar se o profissional consegue editar as informações de um paciente |
|:---|:---|
| Resultados obtidos | É possível ao profissional editar um paciente e visualizar a lista atualizada. |
| Responsável pela execução do caso de Teste | Nayana |

![2024-06-08-21-55-44](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/244cc268-f527-427f-ac5e-1dd880939603)

|Caso de Teste    | CT- 05 - Verificar se o profissional consegue deletar um paciente |
|:---|:---|
| Resultados obtidos | É possível ao profissional deletar um paciente e visualizar a lista atualizada. |
| Responsável pela execução do caso de Teste | Nayana |

![2024-06-08-21-59-49](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/68ffeca7-2de3-4d03-a275-1b9b86737578)

|Caso de Teste    | CT- 06 - Verificar o funcionamento do filtro de pesquisa dos pacientes |
|:---|:---|
| Resultados obtidos | É possível ao profissional realizar uma pesquisa dinâmica. A cada letra digitada o filtro de visualização da página se atualiza. |
| Responsável pela execução do caso de Teste | Nayana |

![2024-06-08-22-02-13](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t3-equipe-3-residuos-eletronicos/assets/92792650/feb97aff-ec67-4e3b-9ee3-64250f8e2c92)

### Pontos de observação:
+ Ao criar e editar as informações do paciente, o modal não fecha automaticamente após o evento de 'salvar', assim que essa é uma melhoria que pode ser implementada em versões futuras.
+ Ao deletar um paciente, não aparece nenhuma mensagem de aviso ou alertar para que o usuário possa realmente confirmar a ação.
+ O link redirecionamento a pagina individual do paciente, não está vinculando ao paciente clicado.

<hr>
