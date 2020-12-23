const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navs = document.querySelectorAll('.nav')

const links = document.querySelectorAll('li a')
const text = document.querySelector('.text')

text.innerText = ''

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        text.innerText = link.innerText
    })
})






openBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.add('visible'))
})
closeBtn.addEventListener('click', () => {
    navs.forEach(nav => nav.classList.remove('visible'))
    text.innerText = ''
})