const sounds = [
    {
        'sound': 'appaulse',
        'src': 'sounds/applause.mp3'
    },
    {
        'sound': 'boo',
        'src': 'sounds/boo.mp3'
    },
    {
        'sound': 'gasp',
        'src': 'sounds/gasp.mp3'
    },
    {
        'sound': 'tada',
        'src': 'sounds/tada.mp3'
    },
    {
        'sound': 'victory',
        'src': 'sounds/victory.mp3'
    },
    {
        'sound': 'wrong',
        'src': 'sounds/wrong.mp3'
    },
]


sounds.forEach(sound => {
    const audio = document.createElement('audio')
    audio.setAttribute('id', sound.sound)
    audio.setAttribute('src', sound.src)
    document.body.appendChild(audio)

    const btn = document.createElement('button')
    btn.innerText = sound.sound

    btn.addEventListener('click', () => {
        stop()
        document.getElementById(sound.sound).play()
    })

    document.body.appendChild(btn)
})

function stop() {
    sounds.forEach(sound => {
        song = document.getElementById(sound.sound)
        song.pause()
        song.currentTime = 0
    })
}