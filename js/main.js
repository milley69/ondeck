let products = document.querySelector('#products')
let card = document.querySelector('.products')
let nav = document.querySelector('nav')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let navLogin = document.querySelector('.nav-login')
let burger = document.querySelector('.burger');

if (window.screen.width <= 700) {
    burger = document.createElement('div');
    burger.className = 'burger'
    burger.innerHTML = '<img src="img/Menu.svg" alt="burger"/>'
    nav.append(burger)
}
burger.onclick = () => {
    navLogin.classList.add('nav-login-active')
}
main.onclick = () => {
    navLogin.classList.add('fade')
    setTimeout(()=>{
        navLogin.classList.remove('nav-login-active')
        navLogin.classList.remove('fade')
    },500)
}
footer.onclick = () => {
    navLogin.classList.remove('nav-login-active')
}
products.onmouseover = function () {
    card.style.display = 'block'
    products.firstElementChild.style.color = '#142e47'
};
products.onmouseout = function () {
    card.style.display = 'none'
    products.firstElementChild.style.color = ''
};
