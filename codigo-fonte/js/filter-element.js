const filterElement = document.querySelector('.input-search');
const clientDatas = document.querySelectorAll('.summarized-screening dl #client-data');
for(let i=0; i < clientDatas.length; i++) {
    console.log(clientDatas.item(i).textContent)
}

filterElement.addEventListener('input', filterClientDatas);

function filterClientDatas() {
    if(filterElement.value !== '') {
        for(let clientData of clientDatas) {
            let name = clientData;
            name = name.textContent.toLowerCase();
            console.log(name);
        }

    } else {

    }
}
console.log('test');