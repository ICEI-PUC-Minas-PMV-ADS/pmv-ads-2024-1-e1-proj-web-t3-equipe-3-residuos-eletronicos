document.addEventListener('DOMContentLoaded', function() {
    const iconUser = document.querySelector('.icon-user');
    const navBar = document.querySelector('.nav-bar');

    iconUser.addEventListener('click', function() {
        navBar.style.display = (navBar.style.display === 'none' || navBar.style.display === '') ? 'block' : 'none';
    });
});

function Acessar() {

    var Acessar = document.getElementById('Acessar').value;
    var Senha = document.getElementById('senha').value;

    if (Acessar == "12345678n901" && senha == "1234") {
        location.href = "tela_inicial.html";
    } else {
        alert('Dados incorretos');
    }
}