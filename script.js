let upPressed = false; //intializing the value of the variable upPressed to the boolean value false 
let downPressed = false; //intializing the value of the variable downPressed to the boolean value false 
let leftPressed = false; //intializing the value of the variable leftPressed to the boolean value false 
let rightPressed = false; //intializing the value of the variable rightPressed to the boolean value false 
let playerSpeed = 1.25; // starting with a speed level 3 to allow the player to not only speed up, but to also speed up

// Here we are selecting and assigning the main tag on our HTML file to the variable main on JAVASCRIPT file 
let main = document.querySelector('main');

//Player = 2, Wall = 1, Enemy = 3, Point = 0
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //the first row is filled with only walls 
    [1, 2, 0, 1, 0, 0, 0, 0, 0, 1], //the player is in the second column in this row, and there is an enemy in the ninth column in this row
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 0, 0, 0, 0, 1], // 0 represents the points that the player should collect 
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1], //there is an enemy in the sixth column in this row
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1], //there is an enemy in the second column in this row
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] //the last row is also filled with only walls 
];







let arrayofEnemies = []; //creating an array to contain the created enemies, and assigning the array to a variable, and calling the varibale arrayofEnemies. 

console.log(maze.length); //Output: 10
console.log(Math.floor(Math.random() * maze.length)) //Output betwenn 0 and 9

//creating an enemy randomly after I have removed the enemy from the maze
function createEnemy() {
    let row = Math.floor(Math.random() * maze.length); //muliplying by maze.length means that the maximum value for the variable row can not be more than 9, becasue we know that the value of maze.length is 10.
    let column = Math.floor(Math.random() * maze[row].length);
    //checking if the maze location is equal to 0, which represents the points.
    if (maze[row][column] == 0) {
        //if that's true, and it is the location 0, then add an enemy, which is represented by the location 3 in the maze. 
        maze[row][column] = 3;
    }
    else {
        //if the location is not location 0, and thus unsucessful to create an enemy, so call the function again. 
        createEnemy(); //calling the function to create an enemy
        //Because we are calling the function in the else statement, it will only call the function again if the if statement was unsuccessful to match the location to the location 0.
    }
    if (maze[row][column] == 3) {
        enemyPosition = { row, column } //assigning the randomly choosen location of the enemy that consists of an x-axis and a y-axis to a variable, and calling the variable enemyPosition
    }
    arrayofEnemies.push(enemyPosition); //adding the randomlyy chosen location of the enemy to the list called arrayofEnemies
}

//calling the function three times to create three enemies
createEnemy();
createEnemy();
createEnemy();

//showing in the console the exact location of each created enemy, which is determined randomly and changes every game
console.log(arrayofEnemies[0]);
console.log(arrayofEnemies[1]);
console.log(arrayofEnemies[2]);













//local storage used to save the name of the user, and their score of points after they have died after losing all of their 3 lives 





//Populates the maze in the HTML
for (let y of maze) {
    for (let x of y) {
        let block = document.createElement('div'); //a div has just been created in the structure of the HTML file, and the div is assigned to the variable block, and this is the parent block div
        block.classList.add('block'); //a class block is being connected to variable block that is going to be applied to all of the following cases 

        switch (x) {
            case 1: //walls are added by assigning walls to the locations of 1 in the maze 
                block.classList.add('wall'); //the class wall is applied and connectd to the case 1 block, which is the surroundings walls of the maze. Case 1 child block represents the wall.
                break;
            case 2: //player added by assigning the player to the location of 2 in the maze
                block.id = 'player'; //the id player is applied and connectd to the case 2 block, which is one of the child blocks, and the second child block created. Case 2 child block represnts the player. 
                let mouth = document.createElement('div'); //a div has just been created in the structure of the HTML file inisde the parent block div, and the div is assigned to the variable mouth 
                mouth.classList.add('mouth'); //the class mouth is connectd to the mouth of the player.
                block.appendChild(mouth); //mouth for the player added to the structure of the HTML file.
                break;
            case 3: //enemies are added by assigning the enemies to the locations of 3 in the maze
                block.classList.add('enemy'); //applying the class enemy to the blocks with locations of 3 in the maze. Case 3 child block represents the enemy 
                break;
            default:
                block.classList.add('point'); //the points to be collected by the player are added 
                block.style.height = '1vh'; //the height of the points is adjusted down, because it seems that the the height was larger than 1vh
                block.style.width = '1vh'; //the width of the points is adjusted, probably adjusted up
        }

        main.appendChild(block); //block is created and added to the structure of the HTML file inisde the main tag. Block is a variable that contains the newly created div tag. 
    }
}



// the keyUp function is for stopping the movement when you stop pressing a certain direction key on the keyboard, and the scenario for not having this function will be: a player moving in a certain direction without stopping, and the only option you will have is just to change its direction to another direction as continues to go in the previous direction, but you will not be able to stop it from moveming once you initiated the movement. However, you might be able to create a zigZag movement if needed maybe when creating harder levels. 
//Player movement.
function keyUp(event) { //event here is a parameter inside the function 
    // console.log(event.key) //Keyup event is being recorded only when the key is released. Most often, that happens only when you are stopping becuase you reached your final destiniation after you have collected all the points, or you are stopping because you are changing direction to the left, right, or doing a 180 and going in the opposite direction (backwards). 
    if (event.key === 'ArrowUp') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowUp.
        console.log('stp moving up')
        upPressed = false;
    } else if (event.key === 'ArrowDown') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowDown.
        console.log('stp moving down')
        downPressed = false;
    } else if (event.key === 'ArrowLeft') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowLeft.
        console.log('stp moving left')
        leftPressed = false;
        //event.key === 'ArrowRight' is not a representing the action; thus not checking the action. It is only checking which key is this, so in the following case it is checking if the key is the right arrow key or is it a different key like an arrow left, down, or up.
    } else if (event.key === 'ArrowRight') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowRight.
        console.log('stp moving right')
        rightPressed = false;
    }
}

function keyDown(event) { //event here is a parameter inside the function
    //event.key is a representation of the key that was pressed
    console.log(event.key) //keydown event is recorded a lot in the console as it is being recorded with every press on the keyboard even if it is on the same key.
    if (event.key === 'ArrowUp') {
        console.log('strt n keep moving up')
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        console.log('strt n keep moving down')
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        console.log('strt n keep moving left')
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        console.log('strt n keep moving right')
        rightPressed = true;
    }

    //Increasing or decreasing the speed of the playyer 
    switch (event.key) {
        case '1':
            playerSpeed = 1.05
            break;
        case '2':
            playerSpeed = 1.10
            break;
        case '3':
            playerSpeed = 1.15
            break;
        case '4':
            playerSpeed = 1.20
            break;
        case '5':
            playerSpeed = 1.25
            break;
        case '6':
            playerSpeed = 1.30
            break;
        case '7':
            playerSpeed = 1.35
            break;
        case '8':
            playerSpeed = 1.40
            break;
        case '9':
            playerSpeed = 1.45
            break;
    }
}






const collisionUnit = 1;
const player = document.querySelector('#player'); //selecting the player
const playerMouth = player.querySelector('.mouth'); //selecting the mouth of the player
let playerTop = 0; //initializing a variable
let playerLeft = 0; //initializing a variable

let timer = setInterval(function () {
    if (downPressed == true) {
        //the following 2 lines are just a way to see where the next movement for the player will be, but it is not responsible for moving the player. What you can do is You can use the console.log(newBottom), and you will get the predicted player next movement
        let currentPositon = player.getBoundingClientRect() //optimize 
        let newBottom = currentPositon.bottom + collisionUnit;
        let playerCollisionDetectionBottomLeft = document.elementFromPoint(currentPositon.left, newBottom)
        // console.log(currentPositon.left)
        let playerCollisionDetectionBottomRight = document.elementFromPoint(currentPositon.right, newBottom)
        // console.log(playerCollisionDetectionBottomLeft)
        if (playerCollisionDetectionBottomLeft.classList.contains('wall') == false && playerCollisionDetectionBottomRight.classList.contains('wall') == false) {
            playerTop = playerTop + playerSpeed;
            player.style.top = playerTop + 'px';
        }

        if (playerCollisionDetectionBottomLeft.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
        }

        if (playerCollisionDetectionBottomRight.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
        }

        playerMouth.classList = 'down';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
        // scoreCount()
    }

    else if (upPressed == true) {
        let currentPositon = player.getBoundingClientRect() //optimize
        let newUp = currentPositon.top - collisionUnit;
        // pcdul = playerCollisionDetectionUpLeft
        let pcdul = document.elementFromPoint(currentPositon.left, newUp)
        // pcdur = playerCollisionDetectionUpRight
        let pcdur = document.elementFromPoint(currentPositon.right, newUp)
        if (pcdul.classList.contains('wall') == false && pcdur.classList.contains('wall') == false) {
            playerTop = playerTop - playerSpeed;
            player.style.top = playerTop + 'px';
        }


        //checking if the player has came in contact with an enemy
        if (pcdul.classList.contains('enemy') == true) {
            //if that's true, and the player came in contact with an enemy then display an alert 
            alert('An enemy has been encountered!!! game over!!!');
            //if that's true, and the player came in contact with an enemy, then add the dead animation to the player 
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
        }

        if (pcdur.classList.contains('enemy') == true) {
            alert('An enemy has been encountered!!! game over!!!')
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
        }


        playerMouth.classList = 'up';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
        // one of the mistake I landed on when I was coding that I opted for copying and pasting the function for the point colllection, and a line of comment explaining it, but it seemed that I have also copied a closing bracket, and the result after pasting resulted in a disapearance of the whole maze. It took me time to figure it out, but I finally did figure it out 
        // scoreCount()
    }


    else if (leftPressed == true) {
        let currentPositon = player.getBoundingClientRect() //optimize
        let newLeft = currentPositon.left - collisionUnit;
        // pcdld = playerCollisionDetectionLeftDownward
        let pcdld = document.elementFromPoint(newLeft, currentPositon.bottom)
        // pcdlu = playerCollisionDetectionLeftUpward
        let pcdlu = document.elementFromPoint(newLeft, currentPositon.top)
        if (pcdld.classList.contains('wall') == false && pcdlu.classList.contains('wall') == false) {
            playerLeft = playerLeft - playerSpeed;
            player.style.left = playerLeft + 'px';
        }

        if (pcdld.classList.contains('enemy') == true) {
            // enemyCollision()
            // alert('An enemy has been encountered!!! game over!!!');
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
            // setTimeout(restart, 500)
        }

        if (pcdlu.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
            // setTimeout(restart, 500)
        }

        playerMouth.classList = 'left';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
        // scoreCount()
    }

    else if (rightPressed == true) {
        // currentPLPositon = currentPlayerPositon
        let currentPLPositon = player.getBoundingClientRect(); //optimize
        let newRight = currentPLPositon.right + collisionUnit; //we need to change the collision unit to 2, especially when moving to the right, instead of 1 
        // pcdrd = playerCollisionDetectionRightDownward
        let pcdrd = document.elementFromPoint(newRight, currentPLPositon.bottom)
        // pcdru = playerCollisionDetectionRightUpward
        let pcdru = document.elementFromPoint(newRight, currentPLPositon.top)

        // Another way of Wall collision detection, but this one failed 
        // let wallPosition = document.querySelectorAll('.wall'); 
        // if (
        //     playerLeft + currentPLPositon.width > wallPosition.left &&
        //     playerLeft < wallPosition.right &&
        //     playerTop + currentPLPositon.height > wallPosition.top && 
        //     playerTop < wallPosition.bottom
        // ) {
        //     playerLeft = playerLeft + playerSpeed;
        //     player.style.left = playerLeft + 'px';
        //     console.log(playerLeft)
        // }


        //wall collisio detection 
        if (pcdrd.classList.contains('wall') == false && pcdru.classList.contains('wall') == false) {
            playerLeft = playerLeft + playerSpeed;
            player.style.left = playerLeft + 'px';
            console.log(playerLeft)
        }

        if (pcdrd.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
        }

        if (pcdru.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            removelive();
            player.classList = 'hit';
            // player.classList = 'dead';
            // clearInterval(timer);
        }



        playerMouth.classList = 'right';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
        // scoreCount()
    }

}, 9);



let Pscore = document.querySelector('#Pscore'); //selecting the score paragraph that was set to 0, initially.
let totalPoints = 0;

//uncommenting that function out for a more optimized way of increamenting the score. Instead of creating another function for the counting the score, I am going add the code I need for increamenting the score inside the point collection function. 
// function to change the score number and assigning it to the value of the variable totalPoints
// function scoreCount() {
//     console.log('the total is ' + totalPoints) //checking the points collected in the console, too
//     Pscore.innerHTML = totalPoints;
// }


function pointCollection() {
    // let onePoint = document.querySelector('.point') //this line of code in assoiation with another line below creates a cool effect, removes one point only from the maze with every point that the player collects.

    //the idea I need to implement is that I need to figure out a way to select just one point, and then remove just one after the player occupies the space where the point existed. I also need to add all that inside a function that moves the player.
    let point = document.querySelectorAll('.point');
    console.log(point.length); //so now I know that we have 50 points in the maze. 
    // idea to add later: 50 points and chris has 100 points that means that chris enabled a functionality where all the 50 points will appear a second time after the last point of the first 50 points has been collected.
    let playerPosition = player.getBoundingClientRect();
    for (let i = 0; i < point.length; i++) {
        let positionOfPoint = point[i].getBoundingClientRect();
        if (
            playerPosition.right > positionOfPoint.left &&
            playerPosition.left < positionOfPoint.right &&
            playerPosition.bottom > positionOfPoint.top && //this third line means that is the player’s bottom position below the point’s top position on the maze, which means that as a result of the player movement downwards, the player is now moving overlapping and over the point when the player's bottom position is larger than the point's top poistion
            playerPosition.top < positionOfPoint.bottom
        ) {
            //onePoint.classList.remove('point'); //this line of code in assoiation with another line above creates a cool effect, removes one point only from the maze with every point that the player collects.
            point[i].classList.remove('point');
            totalPoints = totalPoints + 1; //increasing the value of the variable totalPoints by 1 for each point collected 
            Pscore.innerHTML = totalPoints; //changing the score number and assigning it to the value of the variable totalPoints

            //checking if all the fifty points have been collected, and if true then display
            if (totalPoints == 50) {
                clearInterval(timer) //if it is true, and all the 50 points have been collected, then stop the movement of the player.
                // alert('Game has ended! All points have been collected!');
                setTimeout(restart, 500) //I thouht if I used setTimeout() then I would be able to delay the alert message until after the last disappears from the screen, but that did not work.
                //However my setTimeout() is now fixed. I fixed it by learning that I can not use an alert() instead of the name of the function, so I created a function that contains the alert and then I added the name of the function. 
            }
        }
    }
}


//function for when all the points have been collected 
function gameOver() {
    alert('Game has ended! All points have been collected!')
}















let startBttn = document.querySelector('#start');

function startGame() {
    // you can also use the following code __startBttn.style.display = 'none'__ This code will do same thing as opacity=0, which results in displaying nothing.  
    startBttn.style.opacity = 0;

    // Having the following 2 lines inside the function start game allows us to disable the movement of the player before the game starts, and only allow the player to move after the start button has been pressed 
    document.addEventListener('keydown', keyDown); //the event keydown is the one responsible for the action of moving the player when the key is pressed 
    // How I understand the event keyUp is: keyup event is triggered when any key has been released after being pressed. And keydown event means that the keyboard key has been pressed 
    document.addEventListener('keyup', keyUp); //the event keyup is the one responsible for the action of stopping an action when the key is released, and in this case it is the stoppage of movement of the player 

    setTimeout(removeButton, 3000)
}

// #1 when you are expecting a function, and you get a blue colored instead of a yellow colored check if you have actually craeted a function, for example here with startGame.
// #2 if I added document instead of startBttn then if I clicked anywhere on the website page, the start button will disapear
startBttn.addEventListener("click", startGame);



//function to remove the start button 
function removeButton() {
    startBttn.style.display = 'none'
}


//Remaining Task 
//function to have a restart button to restart the game
function restart() {
    startBttn.style.opacity = 1;
    startBttn.style.display = 'block';
    startBttn.innerHTML = 'Restart the game?'
    //if start button (aka restart button, now) is clicked, make all the 50 points visible, and everything back as if you we just started the game, and place the player at the starting cell where the player first started previously
} //restart button now is visible and clickable, but I still need to bring back all the points when the start button is clicked 


//accidently I named the down button as the up button, and vice versa. I do not know how could I make such an error
let leftButton = document.querySelector('#lbttn');
let rightButton = document.querySelector('#rbttn');
let downButton = document.querySelector('#dbttn');
let upButton = document.querySelector('#ubttn');

leftButton.addEventListener('click', lbttnClicked);
rightButton.addEventListener('click', rbttnClicked);
upButton.addEventListener('click', ubttnClicked);
downButton.addEventListener('click', dbttnClicked);


function lbttnClicked() {
    upPressed = false;
    downPressed = false;
    leftPressed = true;
    rightPressed = false;
}

function rbttnClicked() {
    upPressed = false;
    downPressed = false;
    leftPressed = false;
    rightPressed = true;
}

function dbttnClicked() {
    upPressed = false;
    downPressed = true;
    leftPressed = false;
    rightPressed = false;
}

function ubttnClicked() {
    upPressed = true;
    downPressed = false;
    leftPressed = false;
    rightPressed = false;
}





//Remaining Task  
//still need to work on this enemy collison first and test it to make sure it is function then I call the function like I called the point collection function 
//function for enemy collision 
function enemyCollision() {
    let allEnemies = document.querySelectorAll('.enemy');
    let playerPosition = player.getBoundingClientRect();
    for (let i = 0; i < allEnemies.length; i++) {
        let positionOfEnemies = allEnemies[i].getBoundingClientRect();
        if (
            playerPosition.right > positionOfEnemies.left &&
            playerPosition.left < positionOfEnemies.right &&
            playerPosition.bottom > positionOfEnemies.top &&
            playerPosition.top < positionOfEnemies.bottom
        ) {
            setTimeout(restart, 500)
        }

    }
}










//creating lives 
function createlives() {
    let li = document.createElement('li');
    let ul = document.querySelector('.lives ul');
    ul.appendChild(li);
}

createlives();
createlives();
createlives();



//removing lives 
function removelive() {
    let li = document.querySelector('.lives li');
    let ul = document.querySelector('.lives ul');
    ul.removeChild(li);
}
//calling it when the player hits an enemy




// let colours = document.querySelectorAll('li');

// for(let i = 0; i<10; i++) {
//     colours[i].addEventListener('click', setColor);
// }

// function setColor() {
//     player.style.backgroundColor = this.id;
// }












//moving the enemy 
let alltheEnemies = document.querySelectorAll('.enemy'); //selecting all the enemies using the class enemy and assigning them to a variable, and calling that variable alltheEnemies.
console.log("no of enemies: " + alltheEnemies.length) //showing the number of enemies, exactly 3; OUtpuut: 3
for (let theenemyOfEnemies of alltheEnemies) {
    //looping through each enemy, and assigning each enemy to a variable, and calling that variable theenemyOfEnemies
    enemyMovement(theenemyOfEnemies); //calling the function for the random enemy movements, giving it the variable theenemyOfEnemies as a parameter
}

function enemyMovement(theenemyOfEnemies) {
    let direction = Math.ceil(Math.random() * 4);
    let enemytop = 0;
    let enemyleft = 0;
    setInterval(function () {
        if (direction == 1) {
            // let newTop = position.top - 1;
            // let topL = document.elementFromPoint(position.left, newTop);
            // let topR = document.elementFromPoint(position.right, newTop);
            // if(topL.classList.contains('wall') == false && topR.classList.contains('wa
            enemytop -= 5;
        };
        if (direction == 2) {
            enemytop += 5;
        };
        if (direction == 3) {
            enemyleft += 5;
        };
        if (direction == 4) {
            enemyleft -= 5;
        };
        theenemyOfEnemies.style.top = enemytop + 'px';
        theenemyOfEnemies.style.left = enemyleft + 'px';

        console.log(enemytop) //shhowing the enemy movement along the vertical line 
        console.log(enemyleft) //shhowing the enemy movement along the horizontal line 
    }, 50);
}
























// notes for enemy movement
// you will have to target each enemy seperately to allow different movement directions
// you will have add the the action of the function in the start game function, so that the enemy will start movement after the start button has been pressed


// code for the enemy movement

















// BrainStorming section (General)
// I think I could allow the start button to be activate also not only by clicking on it, but also by pressing the enter key on my keyboard
// idea to add later: 50 points and chris has 100 points that means that chris enabled a functionality where all the 50 points will appear a second time after the last point of the first 50 points has been collected.


// BrainStorming section for CSS
// I think I might need to use innerHTML when the pacman gets hit, so the lives get reduced by 1, or loses one heart






// Adavnced secion notes
// way to increase the level to be more harder is by changing the interval speed of the player movement from 10 to 9 like I did now, but and as we move lower in numbers the speed increases





