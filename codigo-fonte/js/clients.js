var db_client_start = {
    "clients": [
        {
            "id": 1,
            "name": "Leanne Graham",
            "numeroSUS": "0245789450155",
            "answers": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
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
            "numeroSUS": "0245789450155",
            "answers": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
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
    name: "Naya",
    numeroSUS: "0789554557774",
    answers: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    medicine: " Lorem Ipsum",
    treatment: "dolor sit amet, consectetur adipiscing elit"
}

//Read
const createClient = (client) => {
    /* Fazer a leitura das informações dos clientes que já estão no localStorage,
       do contrário, add um novo cliente resultaria em apagar o anterior. */
    /* Converter novamente a objeto JSON, pois, com o stringify, as informações foram convertidas em string. */
    let arrClient = JSON.parse(localStorage.getItem('db_client')) || [];
    arrClient.push(client);
    /* Enviar os dados para o LocalStorage
       Somente é possível enviar string ao localStorage, portanto, é necessário transformar
       o objeto recebido no parâmetro 'client' em uma string. */
    localStorage.setItem('db_client', JSON.stringify(arrClient));
}


// localStorage.setItem('db_client', JSON.stringify(db_client_start) ?? []);
//
// let dbClients = JSON.parse(localStorage.getItem('db_client'));
// console.log(dbClients)
//
// for (let i = 0; i < dbClients.clients.length; i++) {
//     let summarizedScreening = document.querySelector('.answers');
//     summarizedScreening.innerHTML = dbClients.clients[i].numeroSUS;
//     console.log(dbClients.clients[i].numeroSUS);
// }






