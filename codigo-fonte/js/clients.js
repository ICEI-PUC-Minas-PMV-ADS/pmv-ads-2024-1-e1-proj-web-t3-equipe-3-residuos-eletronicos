/*
CLIENTS[{
    id
    name
    numberSUS
    answer
    medicine
    treatment
}]
*/

//CRUD - create read update delete
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? {clients:[]};
const setLocalStorage = (arrClient) => localStorage.setItem('db_client', JSON.stringify(arrClient));

//FUNÇÕES LOCALSTORAGE

//C rud - CREATE
const createClient = (client) => {
    const arrClient = getLocalStorage();
    if (!client.id) {
        if (arrClient.clients.length > 0) {
            client.id = arrClient.clients[arrClient.clients.length - 1].id + 1;
        } else {
            client.id = 1;
        }
    }
    arrClient.clients.push(client);
    setLocalStorage(arrClient);
}

//c R ud - READ
const readClient = () => getLocalStorage();

// cr U d - UPDATE
const updateClient = (index, client) => {
    const dbClient = getLocalStorage();
    dbClient.clients[index] = client;
    setLocalStorage(dbClient);
}

//cru D - DELETE
const deleteClient = (index) => {
    const dbClient = getLocalStorage();
    dbClient.clients.splice(index, 1);
    setLocalStorage(dbClient);
}

//FUNÇÕES PADRÃO

//Interação com o layout
const saveClient = () => {
    let newClient = {
        "id": document.querySelector('#field-ID').value,
        "name": document.querySelector('#name').value,
        "numberSUS": document.querySelector('#numberSUS').value,
        "answer":document.querySelector('#answer').value,
        "medicine": document.querySelector('#medicine').value,
        "treatment": document.querySelector('#treatment').value
    }
    createClient(newClient);
    console.log("Cliente salvo com sucesso: ", newClient);
    clearForm();
    updateClients();
}

const createClientInf = (client) => {
    const newBox = document.createElement('div');
    newBox.innerHTML = `
        <form id="client-data">
            <div class="container-client">
                <div class="principal-client-inf" onclick="redirectToAnotherPage('../codigo-fonte/client-inf.html')">
                    <h3>${client.name}</h3>
                    <h3>${client.numberSUS}</h3>
                </div>        
                <button type="submit" class="test-results">Exames</button>
            </div>        
            <table class="summarized-screening">
                <tbody>
                    <tr>
                        <td class="side-by-side title">Nome:</td>
                        <td class="side-by-side" id="client-name">${client.name}</td>
                    </tr>
                    <tr>
                        <td class="side-by-side title">Número SUS:</td>
                        <td class="side-by-side">${client.numberSUS}</td>
                    </tr>
                    <tr>
                        <td class="side-by-side title">Resposta:</td>
                        <td class="side-by-side">${client.answer}</td>
                    </tr>
                    <tr>
                        <td class="side-by-side title">Medicamento:</td>
                        <td class="side-by-side">${client.medicine}</td>
                    </tr>
                    <tr>
                        <td class="side-by-side title">Tratamento:</td>
                        <td class="side-by-side">${client.treatment}</td>
                    </tr>
                </tbody>                
            </table>
            <button id="update" class="button-insert">Editar</button>
            <button id="delete" class="button-delete">Deletar</button> 
        </form>         
    `
    document.querySelector('#client-inf').appendChild(newBox);
}

//Limpa modal
function clearForm() {
    const form = document.querySelector('#modal-body');
    form.querySelector('#field-ID').value ='';
    form.querySelector('#name').value ='';
    form.querySelector('#numberSUS').value ='';
    form.querySelector('#answer').value ='';
    form.querySelector('#medicine').value ='';
    form.querySelector('#treatment').value ='';
}

const updateClients = () => {
    const dbClient = readClient(); // lê os dados
    // Limpa a área de exibição de clientes
    const clientContainer = document.querySelector('#client-inf');
    clientContainer.innerHTML = '';

    // Adiciona os clientes atualizados à view, verificando duplicação
    dbClient.clients.forEach(client => {
        if (!Array.from(clientContainer.children).some(el => el.dataset.id === client.id)) {
            createClientInf(client);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateClients();
});
//Eventos
document.querySelector('#save')
    .addEventListener('click', saveClient);


