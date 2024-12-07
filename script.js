// header toggle

const menuIcon = document.querySelector('#menuIcon');
const menu = document.querySelector('#ul');

 menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x');
    menu.classList.toggle('active');

 }

// header toggle

function web(){

   window.location = "web.html";

}

function graphic(){

   window.location = "graphic.html";

}