const filterElement = document.querySelector('.input-search');
const containerClient = document.querySelectorAll('.container-client');
const clientDatas = document.querySelectorAll('#client-data');
filterElement.addEventListener('input', filterClientDatas);

function filterClientDatas() {
    if(filterElement.value !== '') {
        for(let clientData of clientDatas) {
            let name = clientData.querySelector('#client-name');
            name = name.textContent.toLowerCase();
            let filterText = filterElement.value.toLowerCase();
            if(!name.includes(filterText)) {
                clientData.style.display = 'none';
            } else {
                clientData.style.display = 'block';
            }
        }

    } else {
        for (let clientData of clientDatas) {
            clientData.style.display = 'block';
        }
    }
}
console.log('test');