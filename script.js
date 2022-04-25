const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav__links');
const navSub = document.querySelector('.nav__sub-ul');

menu.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav__active');
})

navLinks.addEventListener('click', ()=>{
    navSub.classList.toggle('active');
})