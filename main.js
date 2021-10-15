let menu = document.querySelector('#menuicon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    console.log("Hello world");
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text',{delay: 200,origin:'left'});
sr.reveal('.heading',{delay: 200,origin:'left'})