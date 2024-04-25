const mario = document.querySelector('.mario');

const jump = () => {
mario.classList.add('jump');
}

document.addEventListener('click', jump);