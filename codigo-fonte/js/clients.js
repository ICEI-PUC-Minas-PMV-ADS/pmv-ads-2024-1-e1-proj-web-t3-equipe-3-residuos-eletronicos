var db_client_start = {
    "clients": [
        {
            "id": 1,
            "name": "Leanne Graham",
            "numberSUS": "0245789450155",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "medicine": " Lorem Ipsum",
            "treatment": "dolor sit amet, consectetur adipiscing elit."
        },
        {
            "id": 1,
            "name": "Clementine Bauch",
            "numberSUS": "0245789450155",
            "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
                "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit " +
                "in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "medicine": " Lorem Ipsum",
            "treatment": "dolor sit amet, consectetur adipiscing elit."
        },
    ]
}

//CRUD - create read update delete
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? {clients:[]};
const setLocalStorage = (arrClient) => localStorage.setItem('db_client', JSON.stringify(arrClient));

//C rud - CREATE
const createClient = (client) => {
    /* Fazer a leitura das informações dos clientes que já estão no localStorage,
       do contrário, add um novo cliente resultaria em apagar o anterior. */
    /* Converter novamente a objeto JSON, pois, com o stringify, as informações foram convertidas em string. */
    const arrClient = getLocalStorage();
    if (!client.id) {
        if (arrClient.clients.length > 0) {
            client.id = arrClient.clients[arrClient.clients.length - 1].id + 1;
        } else {
            client.id = 1;
        }
    }
    arrClient.clients.push(client);
    /* Enviar os dados para o LocalStorage. Somente é possível enviar string ao localStorage, portanto,
    é necessário transformar o objeto recebido no parâmetro 'client' em uma string. */
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

//cru D - delete
const deleteClient = (index) => {
    const dbClient = getLocalStorage();
    dbClient.clients.splice(index, 1);
    setLocalStorage(dbClient);
}

//Funções padrões

//Interação com o layout
const saveClient = () => {
    let newClient = {
        "name": document.querySelector('#name').value,
        "numberSUS": document.querySelector('#numberSUS').value,
        "answer":document.querySelector('#answer').value,
        "medicine": document.querySelector('#medicine').value,
        "treatment": document.querySelector('#treatment').value
    }
    createClient(newClient);
    updateClients();
    console.log("Cliente salvo com sucesso: ", newClient);
}

const createClientInf = (client) => {
    const mainClientInf = document.createElement('div');
    mainClientInf.classList.add('container-client');
    mainClientInf.innerHTML = `
        <div class="principal-client-inf" onclick="redirectToAnotherPage('../codigo-fonte/client-inf.html')">
            <h3>${client.name}</h3>
            <h3>${client.numberSUS}</h3>
        </div>        
        <button type="submit" class="test-results">Exames</button>
    `
    document.querySelector('#client-inf').appendChild(mainClientInf);

    const newBox = document.createElement('div');
    newBox.classList.add('summarized-screening');
    newBox.innerHTML = `
        <dl class="client-data">
            <div><dt class="side-by-side">Nome:</dt>
            <dd class="side-by-side">${client.name}</dd></div>
            <div><dt class="side-by-side">Número SUS:</dt>
            <dd class="side-by-side">${client.numberSUS}</dd></div>
            <div><dt class="side-by-side">Resposta: </dt>
            <dd class="side-by-side">${client.answer}</dd></div>
            <div><dt class="side-by-side">Medicamento: </dt>
            <dd class="side-by-side">${client.medicine}</dd></div>
            <div><dt class="side-by-side">Tratamento: </dt>
            <dd class="side-by-side">${client.treatment}</dd></div>    
        </dl>    
    `
    document.querySelector('#client-inf').appendChild(newBox);
}

const updateClients = () => {
    const dbClient = readClient(); //lê os dados
    dbClient.clients.forEach((createClientInf)); //cria uma cx de informações do cliente
}
updateClients();

//Eventos
document.querySelector('#save')
    .addEventListener('click', saveClient);


