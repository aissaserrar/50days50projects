const images = [
  {
    src: 'images/1.jpg',
    text: 'Sea Reflection',
  },
  {
    src: 'images/2.jpg',
    text: 'Huge Wave',
  },
  {
    src: 'images/3.jpg',
    text: 'Orange Desert',
  },
  {
    src: 'images/4.jpg',
    text: 'Amazing Sunset',
  },
  {
    src: 'images/5.jpg',
    text: 'Small Boat',
  },
  {
    src: 'images/6.jpg',
    text: 'High Mountains',
  },
  {
    src: 'images/7.jpg',
    text: 'Aurora',
  },
  {
    src: 'images/8.jpg',
    text: 'Stars and Sand',
  },
]

const container = document.querySelector('.container')

images.forEach((image) => {
  const img = document.createElement('div')
  const h3 = document.createElement('h3')
  const text = document.createTextNode(image.text)

  h3.appendChild(text)
  img.appendChild(h3)
  img.style.backgroundImage = `url('${image.src}')`

  img.setAttribute('class', 'panel')

  container.appendChild(img)
})

container.firstElementChild.classList.add('active')
