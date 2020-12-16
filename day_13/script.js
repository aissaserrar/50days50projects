const textarea = document.getElementById('textarea')
const choices = document.querySelector('.choices')

textarea.focus()

textarea.addEventListener('keyup', (event) => {
    createChoice(event.target.value)
    if (event.key === 'Enter' && event.target.value.trim() !== '') {

        textarea.blur()

        setTimeout(() => {
            event.target.value = ''
        }, 100)

        randomSelect()
    }
})

function createChoice(input) {
    const values = input.split(',')
        .filter(choice => choice.trim() !== '')
        .map(choice => choice.trim())

    choices.innerHTML = ''
    values.forEach(value => {
        const choiceEl = document.createElement('p')
        choiceEl.innerText = value
        choices.appendChild(choiceEl)
    });
}
function randomSelect() {
    const times = 30
    const interval = setInterval(() => {
        const randomChoice = pickRandomChoice()
        highlight(randomChoice)
        setTimeout(() => {
            unhighlight(randomChoice)
        }, 100);
    }, 100);
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const pickedChoice = pickRandomChoice()
            highlight(pickedChoice)
        }, 100);
    }, 100 * times);
}

function pickRandomChoice() {
    return choices.children[Math.floor(Math.random() * choices.children.length)]
}
function highlight(choice) {
    choice.classList.add('highlighted')
}
function unhighlight(choice) {
    choice.classList.remove('highlighted')
}