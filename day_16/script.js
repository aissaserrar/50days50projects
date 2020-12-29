const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')

updateBigCup()


smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
    if (smallCups[index].classList.contains('fill')
        && !smallCups[index].nextElementSibling.classList.contains('fill')) {
        index--
    }
    smallCups.forEach((cup, index2) => {
        if (index2 <= index) {
            cup.classList.add('fill')
        } else {
            cup.classList.remove('fill')
        }
    })
    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.fill').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`

        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }




}


