let articles = [
    {id: 1, title: 'Chumbo (Pb)', description: 'O Perigo do Chumbo em Resíduos Eletrônicos', link: 'artigo1.html'},
    {
        id: 2,
        title: 'Mercúrio (Hg)',
        description: 'Mercúrio em Dispositivos Eletrônicos: Impactos e Manejo.',
        link: 'artigo2.html'
    },
    {
        id: 3,
        title: 'Cádmio (Cd)',
        description: 'Cádmio em Resíduos Eletrônicos: Um Metal Tóxico e Persistente.',
        link: 'artigo3.html'
    },
    {
        id: 4,
        title: 'Bifenilos Policlorados (PCBs) em Equipamentos Eletrônicos Antigos',
        description: 'Bifenilos Policlorados (PCBs) em Equipamentos Eletrônicos Antigos',
        link: 'artigo4.html'
    },
    {
        id: 5,
        title: 'Retardantes de Chama Bromados (BFRs)',
        description: 'Retardantes de Chama Bromados em Plásticos de Dispositivos Eletrônicos',
        link: 'artigo5.html'
    },
    {id: 6, title: 'Ftalatos', description: 'Ftalatos em Cabos e Componentes Eletrônicos', link: 'artigo6.html'},
    {
        id: 7,
        title: 'Arsênio (As)',
        description: 'Arsênio em Componentes Eletrônicos: Riscos e Reciclagem',
        link: 'artigo7.html'
    },
    {id: 8, title: 'Níquel (Ni)', description: 'Content for Artigo 8', link: 'artigo8.html'}
];

const pacienteLink = document.getElementById('informacao-pacientes');

pacienteLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = "clients-inf.html";
});

function addArticlesToGrid() {
    const gridContainer = document.getElementById('article-grid');
    let articlesHTML = '';

    articles.forEach(article => {
        articlesHTML += `
            <div class="grid-item" data-id="${article.id}">
                <div class="thumbnail"></div>
                <div class="description">
                    <h2><a href="${article.link}">${article.title}</a></h2>
                    <p>${article.description}</p>
                    <button onclick="editArticle(${article.id})">Editar</button>
                    <button onclick="deleteArticle(${article.id})">Excluir</button>
                </div>
            </div>
        `;
    });

    gridContainer.innerHTML = articlesHTML;
}

function addArticle(title, description, link) {
    const newId = articles.length + 1;
    const newArticle = {id: newId, title, description, link};
    articles.push(newArticle);
    addArticlesToGrid();
}

function editArticle(id) {
    const article = articles.find(article => article.id === id);
    if (!article) return;
    const newTitle = prompt('Novo título:', article.title);
    const newDescription = prompt('Nova descrição:', article.description);
    const newLink = prompt('Novo link:', article.link);
    if (newTitle && newDescription && newLink) {
        article.title = newTitle;
        article.description = newDescription;
        article.link = newLink;
        addArticlesToGrid();
    }
}

function deleteArticle(id) {
    articles = articles.filter(article => article.id !== id);
    addArticlesToGrid();
}

window.addEventListener('load', addArticlesToGrid);
