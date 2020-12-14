const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com/', config)
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                jokeEl.innerText = data.joke
            } else {
                jokeEl.innerText = 'ERROR 404, Joke not found'
            }
        })
}