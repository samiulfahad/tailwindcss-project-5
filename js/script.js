// Mobile Menu
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const toggleMenu = (e) => {
    menuBtn.classList.toggle('open')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')

}
menuBtn.addEventListener('click', toggleMenu)