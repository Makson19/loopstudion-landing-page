let navbar = document.querySelector("#header .navbar");
let btnMenu = document.querySelector("#header .btn-menu");
let header = document.getElementById("header");

function showMenu() {
    btnMenu.classList.toggle("btn-active");
    navbar.classList.toggle('navbar-active');
    header.classList.toggle('header-active');
}


window.onscroll = () => {
    navbar.classList.remove('navbar-active');
    btnMenu.classList.remove('btn-active');
    header.classList.remove('header-active');
}
