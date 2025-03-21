let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

// Here we are selecting and assigning the main tag on our HTML file to the variable main on JAVASCRIPT file 
const main = document.querySelector('main');

//Player = 2, Wall = 1, Enemy = 3, Point = 0
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 1, 0, 0, 0, 0, 3, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 3, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 3, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//Populates the maze in the HTML
for (let y of maze) {
    for (let x of y) {
        let block = document.createElement('div'); //a div has just been created in the structure of the HTML file, and the div is assigned to the variable block 
        block.classList.add('block');

        switch (x) {
            case 1: //walls are added by assigning walls to the locations of 1 in the maze 
                block.classList.add('wall'); //the class wall is connectd to the case 1 block, which is the surroundings walls of the maze 
                break;
            case 2: //player added by assigning the player to the location of 2 in the maze
                block.id = 'player'; //the id player is connectd to the case 2 block, which represnts the player. 
                let mouth = document.createElement('div'); //a div has just been created in the structure of the HTML file, and the div is assigned to the variable mouth 
                mouth.classList.add('mouth'); //the class mouth is connectd to the mouth of the player.
                block.appendChild(mouth); //mouth for the player added to the structure of the HTML file.
                break;
            case 3:
                block.classList.add('enemy'); //enemies are added by assigning the enemies to the locations of 3 in the maze
                break;
            default:
                block.classList.add('point'); //the points to be collected by the player are added 
                block.style.height = '1vh'; //the height of the points is adjusted down, because it seems that the the height was larger than 1vh
                block.style.width = '1vh'; //the width of the points is adjusted, probably adjusted up
        }

        main.appendChild(block); //block is created and added to the structure of the HTML file
    }
}

//Player movement
function keyUp(event) {
    if (event.key === 'ArrowUp') {
        upPressed = false;
    } else if (event.key === 'ArrowDown') {
        downPressed = false;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (event.key === 'ArrowRight') {
        rightPressed = false;
    }
}

function keyDown(event) {
    if (event.key === 'ArrowUp') {
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        rightPressed = true;
    }
}

const player = document.querySelector('#player');
const playerMouth = player.querySelector('.mouth');
let playerTop = 0;
let playerLeft = 0;

setInterval(function() {
    if(downPressed) {
        playerTop++;
        player.style.top = playerTop + 'px';
        playerMouth.classList = 'down';
    }
    else if(upPressed) {
        playerTop--;
        player.style.top = playerTop + 'px';
        playerMouth.classList = 'up';
    }
    else if(leftPressed) {
        playerLeft--;
        player.style.left = playerLeft + 'px';
        playerMouth.classList = 'left';
    }
    else if(rightPressed) {
        playerLeft++;
        player.style.left = playerLeft + 'px';
        playerMouth.classList = 'right';
    }
}, 10);


























let startBttn = document.querySelector('#start');

function startGame() {
    // you can also use the following code __startBttn.style.display = 'none'__ This code will do same thing as opacity=0, which results in displaying nothing.  
    startBttn.style.opacity = 0;
    
    // Having the following 2 lines inside the function start game allows us to disable the movement of the player before the game starts, and only allow the player to move after the start button has been pressed 
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
}

// #1 when you are expecting a function, and you get a blue colored instead of a yellow colored check if you have actually craeted a function, for example here with startGame.
// #2 if I added document instead of startBttn then if I clicked anywhere on the website page, the start button will disapear
startBttn.addEventListener("click", startGame);













































// BrainStorming section for CSS
// I think I might need to use innerHTML when the pacman gets hit, so the lives get reduced by 1, or loses one heart

