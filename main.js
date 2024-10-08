const buttonEl = document.querySelector('.button')
const imgOffEl = document.querySelector('.lampOff')

buttonEl.addEventListener('click', () => {
    if (buttonEl.innerHTML = 'Accendi') {
        imgOffEl.classList.add(imgOffEl.src = 'img/yellow_lamp.png')
        buttonEl.innerHTML = 'Spegni'
    } else if (buttonEl.innerHTML = 'Spegni') {
        imgOffEl.classList.add(imgOffEl.src = 'img/white_lamp.png')
        buttonEl.innerHTML = 'Accendi'
    }
})



