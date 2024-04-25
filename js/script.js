const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const audioPrincipal = new Audio("../media/mario-music.mp3")
const  marioMorre = new Audio ("../media/dead-mario.mp3")
const marioJump = new Audio("../media/mario-pulo.mp3")
 

const jump = () => {
    mario.classList.add('jump');
    marioJump.play()

    setTimeout(() =>{

    mario.classList.remove('jump');

    }, 500);

}

const loop = setInterval(() => {

    audioPrincipal.play()
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/images/game-over.png';
        mario.style.width = '80px'
        mario.style.marginLeft = '40px'
        audioPrincipal.pause()
        marioMorre.play();

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);