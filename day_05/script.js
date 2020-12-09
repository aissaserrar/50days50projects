const bg = document.querySelector('.bg')
const loadText = document.querySelector('.loading-text')

let load = 0
let interval = setInterval(blurry, 30)

function blurry() {
  load++

  if (load > 99) {
    clearInterval(interval)
  }
  loadText.textContent = `${load}%`
  loadText.style.opacity = `${scale(load, 0, 100, 1, 0)}`
  bg.style.filter = `blur(${scale(load, 100, 0, 0, 100)}px)`
  bg.style.transform = `scale(${scale(load, 0, 100, 1.3, 1)})`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
