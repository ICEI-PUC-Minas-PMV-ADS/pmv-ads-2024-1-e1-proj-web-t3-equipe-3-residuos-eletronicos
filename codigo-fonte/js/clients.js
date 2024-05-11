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

//Insert Client
const tempClient = {
    name: "Doris",
    numberSUS: "0789554557877",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    medicine: " Lorem Ipsum",
    treatment: "dolor sit amet, consectetur adipiscing elit"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? {clients:[]};
const setLocalStorage = (arrClient) => localStorage.setItem('db_client', JSON.stringify(arrClient));

//C rud - CREATE

const createClient = (client) => {
    /* Fazer a leitura das informações dos clientes que já estão no localStorage,
       do contrário, add um novo cliente resultaria em apagar o anterior. */
    /* Converter novamente a objeto JSON, pois, com o stringify, as informações foram convertidas em string. */
    const arrClient = getLocalStorage();
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
    console.log("salvo com sucesso: ", newClient);
    console.log(localStorage.getItem('db_client'));
}

//Eventos
document.querySelector('#save')
    .addEventListener('click', saveClient);





