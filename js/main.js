let products = document.querySelector('#products')
let card = document.querySelector('.products')
let nav = document.querySelector('nav')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let navLogin = document.querySelector('.nav-login')
let navLinks = document.querySelector('.nav-links')
let burger = document.querySelector('.burger');
let mainImg = document.querySelector('.main-img');

if (window.screen.width <= 700) {
    burger = document.createElement('div');
    burger.className = 'burger'
    burger.innerHTML = '<img src="img/Menu.svg" alt="burger"/>'
    nav.append(burger)
    // mainImg.remove()
    burger.onclick = () => {
        navLogin.classList.add('nav-login-active')
        navLinks.classList.add('nav-links-active')
    }
    main.onclick = () => fade();
    footer.onclick = () => fade();
}
if (window.screen.width <= 580) {
    mainImg.remove()
    burger.onclick = () => {
        navLogin.classList.add('nav-login-active')
        navLinks.classList.add('nav-links-active')
    }
}

function fade() {
    navLogin.classList.add('fade')
    navLinks.firstElementChild.classList.add('fade')
    setTimeout(() => {
            navLogin.classList.remove('nav-login-active')
            navLogin.classList.remove('fade')
            navLinks.firstElementChild.classList.remove('fade')
            navLinks.classList.remove('nav-links-active')
        },
        500)
}



products.onmouseover = function () {
    card.style.display = 'block'
    products.firstElementChild.style.color = '#142e47'
};
products.onmouseout = function () {
    card.style.display = 'none'
    products.firstElementChild.style.color = ''
};
