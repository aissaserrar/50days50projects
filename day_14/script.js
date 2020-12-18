const toggle = document.getElementById('toggle')
const nav = document.querySelector('nav')
const ul = document.querySelector('ul')

toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
    // ul.style.display = 'none'

})