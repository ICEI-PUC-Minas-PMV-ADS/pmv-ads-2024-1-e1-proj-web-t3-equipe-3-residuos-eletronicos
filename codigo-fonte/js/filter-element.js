const filterElement = document.querySelector('.input-search');
const containerClient = document.querySelectorAll('.container-client');
const clientDatas = document.querySelectorAll('.summarized-screening');
filterElement.addEventListener('input', filterClientDatas);

function filterClientDatas() {
    if(filterElement.value !== '') {
        for(let clientData of clientDatas) {
            let name = clientData.querySelector('dl #client-data');
            name = name.textContent.toLowerCase();
            let filterText = filterElement.value.toLowerCase();
            if(!name.includes(filterText)) {
                clientData.style.display = 'none';
            } else {
                clientData.style.display = 'block';
            }
        }

    } else {
        
    }
}
console.log('test');