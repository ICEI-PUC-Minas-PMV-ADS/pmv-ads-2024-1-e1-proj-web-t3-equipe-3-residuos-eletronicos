document.addEventListener('DOMContentLoaded', function() {
    const iconUser = document.querySelector('.icon-user');
    const navBar = document.querySelector('.nav-bar');

    iconUser.addEventListener('click', function() {
        navBar.style.display = (navBar.style.display === 'none' || navBar.style.display === '') ? 'block' : 'none';
    });
});