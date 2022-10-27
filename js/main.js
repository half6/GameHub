const hamburgerMenu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    
})