const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelectorAll('#main-play-area');

function flyShip(event) {
    if(event.key === 'ArrowUp') {
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown') {
        event.preventDefault();
        moveDown();
    } else if(event.key === " ") {
        event.preventDefault();
        fireLaser();
    }
}

function moveUp(event) {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "0 px") {
        return
    } else {
        let position = parseInt(topPosition);
        position -= 50;
        yourShip.style.top = `${position}px`;
    }
}

function moveDown(event) {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "530px") {
        return
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}

function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser();
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getPropertyValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}



window.addEventListener('keydown', flyShip)