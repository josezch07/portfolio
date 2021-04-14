const mainMenu = document.querySelector('.navbar ul');
const closeMenu = document.querySelector('.closeMenu')
const clickMenu = document.querySelector('.menu img')


//events

clickMenu.addEventListener('click',show)
closeMenu.addEventListener('click',close)


function show(){
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0'
}

function close(){
    mainMenu.style.top = '-100%'
}