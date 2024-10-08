const buttonEl = document.querySelector('.button')
const imgOffEl = document.querySelector('.lampOff')

buttonEl.addEventListener('click', () => {
    imgOffEl.classList.add(imgOffEl.src = 'img/yellow_lamp.png')
    buttonEl.innerHTML = 'Spegni'
})