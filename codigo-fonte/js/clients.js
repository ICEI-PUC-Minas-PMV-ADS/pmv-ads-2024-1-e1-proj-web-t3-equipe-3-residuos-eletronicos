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
//FUNÇÕES LOCALSTORAGE
//CRUD - create read update delete
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? {clients:[]};
const setLocalStorage = (arrClient) => localStorage.setItem('db_client', JSON.stringify(arrClient));

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
const updateClient = (id, client) => {
    const dbClient = getLocalStorage();
    const clientIndex = dbClient.clients.findIndex(item => item.id === id);
    dbClient.clients[clientIndex] = client;
    setLocalStorage(dbClient);
}

//cru D - DELETE
const deleteClient = (id) => {
    const dbClient = getLocalStorage();
    const clientIndex = dbClient.clients.findIndex(item => item.id === id);
    dbClient.clients.splice(clientIndex, 1);
    setLocalStorage(dbClient);
    updateClients();
}

//FUNÇÕES DE INTERAÇÃO COM O LAYOUT
const saveClient = () => {
    let newClient = {
        "id": parseInt(document.querySelector('#field-ID').value),
        "name": document.querySelector('#name').value,
        "numberSUS": document.querySelector('#numberSUS').value,
        "answer":document.querySelector('#answer').value,
        "medicine": document.querySelector('#medicine').value,
        "treatment": document.querySelector('#treatment').value
    }
    if(newClient.id) {
        updateClient(newClient.id, newClient);
        console.log(newClient);
    } else {
        createClient(newClient);
    }

    alert('Paciente salvo com sucesso!');
    clearForm();
    updateClients();
}

const editClient = (id) => {
    const dbClient = getLocalStorage();
    const client = dbClient.clients.find(client => client.id == id);

    if(client) {
        document.querySelector('#field-ID').value = client.id;
        document.querySelector('#name').value = client.name;
        document.querySelector('#numberSUS').value = client.numberSUS;
        document.querySelector('#answer').value = client.answer;
        document.querySelector('#medicine').value = client.medicine;
        document.querySelector('#treatment').value = client.treatment;
        toggleModal();
    }
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
            <button id="update" class="button-insert" type="button" onclick="editClient(${client.id})">Editar</button>
            <button id="delete" class="button-delete" type="button" onclick="deleteClient(${client.id})">Deletar</button> 
        </form>         
    `
    document.querySelector('#client-inf').appendChild(newBox);
}

//Limpa modal
const clearForm = () => {
    const form = document.querySelector('#modal-body');
    form.querySelector('#field-ID').value ='';
    form.querySelector('#name').value ='';
    form.querySelector('#numberSUS').value ='';
    form.querySelector('#answer').value ='';
    form.querySelector('#medicine').value ='';
    form.querySelector('#treatment').value ='';
}

const updateClients = () => {
    const dbClient = readClient();
    const clientContainer = document.querySelector('#client-inf');
    clientContainer.innerHTML = '';

    dbClient.clients.forEach(client => {
        if (!Array.from(clientContainer.children).some(el => el.dataset.id === client.id)) {
            createClientInf(client);
        }
    });
}
updateClients();

//Eventos
document.querySelector('#save')
    .addEventListener('click', saveClient);


