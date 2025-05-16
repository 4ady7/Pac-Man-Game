









// BrainStorming section (General)
// I think I could allow the start button to be activate also not only by clicking on it, but also by pressing the enter key on my keyboard
// idea to add later: 50 points and chris has 100 points that means that chris enabled a functionality where all the 50 points will appear a second time after the last point of the first 50 points has been collected.


// BrainStorming section for CSS
// I think I might need to use innerHTML when the pacman gets hit, so the lives get reduced by 1, or loses one heart






// Adavnced secion notes
// way to increase the level to be more harder is by changing the interval speed of the gamer movement from 10 to 9 like I did now, but and as we move lower in numbers the speed increases







// let colours = document.querySelectorAll('li');

// for(let i = 0; i<10; i++) {
//     colours[i].addEventListener('click', setColor);
// }

// function setColor() {
//     gamer.style.backgroundColor = this.id;
// }

// let side = document.getElementById("side");
// let closeside = document.getElementById("closeside");

// // Show customizer when gamer is clicked
// gamer.addEventListener("click", function() {
//     side.style.transform = "translateX(0)";
// });

// // Hide customizer when "X" is clicked
// closeside.addEventListener("click", function() {
//     side.style.transform = "translateX(100%)";
// });




let upPressed = false; //intializing the value of the variable upPressed to the boolean value false 
let downPressed = false; //intializing the value of the variable downPressed to the boolean value false 
let leftPressed = false; //intializing the value of the variable leftPressed to the boolean value false 
let rightPressed = false; //intializing the value of the variable rightPressed to the boolean value false 
let gamerSpeed = 1.25; // starting with a speed level 5 to allow the gamer to not only speed up, but to also speed down



// Here we are selecting and assigning the main tag on our HTML file to the variable main on JAVASCRIPT file 
let main = document.querySelector('main');


//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
let maze = [
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], //the first row is filled with only walls 
    [4, 2, 0, 0, 0, 0, 0, 0, 0, 4], //the gamer is in the second column in this row, and there is an enemy in the ninth column in this row
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], // 0 represents the points that the gamer should collect 
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], //there was an enemy here in the sixth column in this row, but now after removing the manually added enemy, I am adding the enemy using a function, and I am adding it enemy in a any place where is a point 
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], //there is an enemy in the second column in this row, but now after removing the manually added enemy, I am adding the enemy using a function, and I am adding it enemy in a any place where is a point 
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 4] //the last row is also filled with only walls 
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
    //if the maze location is equal to 3, which represents the enemy.
    if (maze[row][column] == 3) {
        enemyPosition = { row, column } //then I am going to be assigning the randomly choosen location of the enemy that consists of an x-axis and a y-axis to a variable, and calling the variable enemyPosition
    }
    arrayofEnemies.push(enemyPosition); //adding the randomlyy chosen location of the enemy to the list called arrayofEnemies
    //using the push() method to add the eleent to the end of the array
}

//calling the function three times to create three enemies
createEnemy();
createEnemy();
createEnemy();

//showing in the console the exact location of each created enemy, which is determined randomly and changes every game
console.log(arrayofEnemies[0]);
console.log(arrayofEnemies[1]);
console.log(arrayofEnemies[2]);









let arrayofWalls = []; //creating an array to contain the created walls, and assigning the array to a variable, and calling the varibale arrayofWalls. 

//creating an enemy randomly after I have removed the enemy from the maze
function createWall() {
    let row = Math.floor(Math.random() * maze.length); //muliplying by maze.length means that the maximum value for the variable row can not be more than 9, becasue we know that the value of maze.length is 10.
    let column = Math.floor(Math.random() * maze[row].length);
    //checking if the maze location is equal to 0, which represents the points.
    if (maze[row][column] == 0) {
        //if that's true, and it is the location 0, then add a wall, which is represented by the location 1 in the maze. 
        maze[row][column] = 1;
    }
    else {
        //if the location is not location 0, and thus unsucessful to create a wall, so call the function again. 
        createWall(); //calling the function to create a wall
        //Because we are calling the function in the else statement, it will only call the function again if the if statement was unsuccessful to match the location to the location 0.
    }
    //if the maze location is equal to 1, which represents the wall.
    if (maze[row][column] == 1) {
        wallPosition = { row, column } //then I am going to be assigning the randomly choosen location of the wall that consists of an x-axis and a y-axis to a variable, and calling the variable wallPosition
    }
    arrayofWalls.push(wallPosition); //adding the randomlyy chosen location of the wall to the list called arrayofWalls
    //using the push() method to add the eleent to the end of the array
}

//calling the function three times to create ten walls. I could also use a for loop instead.
// createWall();
// createWall();
// createWall();
// createWall();
// createWall();
// createWall();
// createWall();
// createWall();
// createWall();
// createWall();

// optimizing how I am creating the walls into the maze
for (let index = 0; index < 10; index++) {
    createWall();
}










//creating a function for creating and populating the maze
function mazeCreation() {
    for (let y of maze) {
        for (let x of y) {
            let block = document.createElement('div'); //a div has just been created in the structure of the HTML file, and the div is assigned to the variable block, and this is the parent block div
            block.classList.add('block'); //a class block is being added to variable block that is going to be applied to all of the following cases 

            switch (x) {
                case 1: //walls are added by assigning walls to the locations of 1 in the maze 
                    block.classList.add('wall'); //the class wall is applied and connectd to the case 1 block, which is the surroundings walls of the maze. Case 1 child block represents the wall.
                    break;
                case 2: //gamer added by assigning the gamer to the location of 2 in the maze
                    block.id = 'gamer'; //the id gamer is connectd and added to the case 2 block, which is one of the child blocks, and the second child block is created. Case 2 child block represnts and reflects visullay and logically the gamer in the maze. 
                    let mouth = document.createElement('div'); //a div has just been created in the structure of the HTML file inisde the parent block div, and the div is assigned to the variable mouth 
                    mouth.classList.add('mouth'); //the class mouth is applied to the case 2 block, and the Case 2 child block represnts and reflects visullay and logically the gamer in the maze, and now we are adding a mouth to the gamer, so that the location of 2 in the maze, which is the gamer, now have a mouth.
                    block.appendChild(mouth); //mouth for the gamer added to the structure of the HTML file
                    break;
                case 3: //enemies are added by assigning the enemies to the locations of 3 in the maze
                    block.classList.add('enemy'); //applying the class enemy to the blocks with locations of 3 in the maze. Case 3 child block represents the enemy
                    break;
                case 4:
                    block.classList.add('mazeBorders'); //creating borders for the maze 
                    break;
                default:
                    block.classList.add('point'); //the points to be collected by the gamer are added 
                    block.style.height = '1vh'; //the height of the points is adjusted down, because it seems that the the height was larger than 1vh
                    block.style.width = '1vh'; //the width of the points is adjusted, probably adjusted up
            }

            main.appendChild(block); //block is created and added to the structure of the HTML file inisde the main tag. Block is a variable that contains the newly created div tag. 
        }
    }
}
mazeCreation(); //calling the function to create and populate the maze 










// the keyUp function is for stopping the movement when you stop pressing a certain direction key on the keyboard, and the scenario for not having this function will be: a gamer moving in a certain direction without stopping, and the only option you will have is just to change its direction to another direction as continues to go in the previous direction, but you will not be able to stop it from moveming once you initiated the movement. However, you might be able to create a zigZag movement if needed maybe when creating harder levels. 
//gamer movement.
function keyUp(event) { //event here is a parameter inside the function 
    // console.log(event.key) //Keyup event is being recorded only when the key is released. Most often, that happens only when you are stopping becuase you reached your final destiniation after you have collected all the points, or you are stopping because you are changing direction to the left, right, or doing a 180 and going in the opposite direction (backwards). 
    if (event.key === 'ArrowUp') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowUp.
        // console.log('stp moving up')
        upPressed = false;
    } else if (event.key === 'ArrowDown') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowDown.
        // console.log('stp moving down')
        downPressed = false;
    } else if (event.key === 'ArrowLeft') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowLeft.
        // console.log('stp moving left')
        leftPressed = false;
        //event.key === 'ArrowRight' is not a representing the action; thus not checking the action. It is only checking which key is this, so in the following case it is checking if the key is the right arrow key or is it a different key like an arrow left, down, or up.
    } else if (event.key === 'ArrowRight') { //event.key is a representation of the key that was pressed, and here you are checking if that key is equal to the following key name, which in this case is ArrowRight.
        // console.log('stp moving right')
        rightPressed = false;
    }
}




function keyDown(event) { //event here is a parameter inside the function
    //event.key is a representation of the key that was pressed
    // console.log(event.key); //keydown event is recorded a lot in the console as it is being recorded with every press on the keyboard even if it is on the same key.

    //stopping and clearing any movement that has been initiated before initiating the gamer movement through the arrow key inputs. In my case, stopping the movement of the GUI buttons that has been initiated.
    upPressed = false;
    downPressed = false;
    leftPressed = false;
    rightPressed = false;

    if (event.key === 'ArrowUp') {
        // console.log('strt n keep moving up')
        upPressed = true;
    } else if (event.key === 'ArrowDown') {
        // console.log('strt n keep moving down')
        downPressed = true;
    } else if (event.key === 'ArrowLeft') {
        // console.log('strt n keep moving left')
        leftPressed = true;
    } else if (event.key === 'ArrowRight') {
        // console.log('strt n keep moving right')
        rightPressed = true;
    }

    //Increasing or decreasing the speed of the playyer using the keyboard numbers on the keyboard keys 
    switch (event.key) {
        case '1':
            gamerSpeed = 1.05 //level 1 spped 
            break;
        case '2':
            gamerSpeed = 1.10 //level 2 speed 
            break;
        case '3':
            gamerSpeed = 1.15 //level 3 speed 
            break;
        case '4':
            gamerSpeed = 1.20 //level 4 speed 
            break;
        case '5':
            gamerSpeed = 1.25 //level 5 speed 
            break;
        case '6':
            gamerSpeed = 1.30 //level 6 speed 
            break;
        case '7':
            gamerSpeed = 1.35 //level 7 speed 
            break;
        case '8':
            gamerSpeed = 1.40 //level 8 speed 
            break;
        case '9':
            gamerSpeed = 2.45 //speed-up boost feature 
            break;
    }
}








//creating a function that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer
let encounteredEnemy = false; //initializing the variable encounteredEnemy with the boolean value false, which refers to a gamer that has not encountered an enemy
function enemyEncounter() {
    //checking if the gamer has encounter an enemy, and if the gamer has not encountered an enemy, then the variable encounteredEnemy is false which refers to a gamer that has not encountered an enemy, and if the gamer has indeed encountered an enemy, then the variable encounteredEnemy is true
    if (encounteredEnemy == false) {
        enemyPLCol(); //so after encountering an enemy, the enemyPLCol function is called to activate the animation and remove a live from the gamer 
        encounteredEnemy = true; //then the variable encounteredEnemy is changed to true, meaning that the gamer has encounter an enemy

        //using the settimeout method to change the variable encounteredEnemy back to boolean value false, meaning that the gamer is in a state that not encountered the enemy recently, and can be encountered by the enemey again. 
        //So settimeout method keeps the previous state of a gamer has encountered an enemy for 3 seconds, and then changes the variable encounteredEnemy back to boolean value false, meaning that the gamer is in a state that not encountered the enemy after the 3 second period.
        //why I am doing this? to give the gamer a grace period to get away from the enemy after encountering an enemy. 
        setTimeout(() => {
            encounteredEnemy = false;
            gamer.classList = ''; //removing any class linked to the gamer varible, which represents the gamer that we selected by the gamer ID.
        }, 3500); //3500 here equals 3.5 seconds, because intervals are measured in 1000ths of a second 
    }
}










const contactPortion = 2; //setting the collision Unit to 2 while testing prevents the gamer from getting stuck into the wall
let gamer = document.querySelector('#gamer'); //selecting the gamer //const gamer to let gamer, why ? to be able to reassign the variable gamer again to the gamer by selecting through the gamer id 
let gamerMouth = gamer.querySelector('.mouth'); //selecting the mouth of the gamer //const gamerMouth to let gamerMouth, why ? to be able to reassign the variable gamerMouth again to the gamerMouth by selecting through the mouth of the gamer 
let gamerTop = 0; //initializing a variable
let gamerLeft = 0; //initializing a variable




function gamerMovement() {
    if (downPressed == true) {
        //the following 2 lines are just a way to see where the next movement for the gamer will be, but it is not responsible for moving the gamer. What you can do is You can use the console.log(newBottom), and you will get the predicted gamer next movement
        let currentPositon = gamer.getBoundingClientRect();
        let newBottom = currentPositon.bottom + contactPortion;
        let gamerCollisionDetectionBottomLeft = document.elementFromPoint(currentPositon.left, newBottom);
        // console.log(currentPositon.left)
        let gamerCollisionDetectionBottomRight = document.elementFromPoint(currentPositon.right, newBottom);
        // console.log(gamerCollisionDetectionBottomLeft)
        if (gamerCollisionDetectionBottomLeft.classList.contains('wall') == false && gamerCollisionDetectionBottomRight.classList.contains('wall') == false && gamerCollisionDetectionBottomLeft.classList.contains('mazeBorders') == false && gamerCollisionDetectionBottomRight.classList.contains('mazeBorders') == false) {
            gamerTop = gamerTop + gamerSpeed;
            gamer.style.top = gamerTop + 'px';
        }

        if (gamerCollisionDetectionBottomLeft.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter(); //calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }

        if (gamerCollisionDetectionBottomRight.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }

        gamerMouth.classList = 'down';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
    }

    else if (upPressed == true) {
        let currentPositon = gamer.getBoundingClientRect();
        let newUp = currentPositon.top - contactPortion;
        // pcdul = gamerCollisionDetectionUpLeft
        let pcdul = document.elementFromPoint(currentPositon.left, newUp);
        // pcdur = gamerCollisionDetectionUpRight
        let pcdur = document.elementFromPoint(currentPositon.right, newUp);
        if (pcdul.classList.contains('wall') == false && pcdur.classList.contains('wall') == false && pcdul.classList.contains('mazeBorders') == false && pcdur.classList.contains('mazeBorders') == false) {
            gamerTop = gamerTop - gamerSpeed;
            gamer.style.top = gamerTop + 'px';
        }


        //checking if the gamer has came in contact with an enemy
        if (pcdul.classList.contains('enemy') == true) {
            //if that's true, and the gamer came in contact with an enemy then display an alert 
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }

        if (pcdur.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!')
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }


        gamerMouth.classList = 'up';
        pointCollection(); //calling the function to collect the points when pressing the down arrow key on the key board 
        // one of the mistake I landed on when I was coding when I opted for copying, from where I coded this function before, the function for the point colllection, and a line of comment explaining it, but it seemed that I have also copied a closing bracket, and the result after pasting resulted in a disapearance of the whole maze. It took me time to figure it out, but I finally did figure it out 
    }


    else if (leftPressed == true) {
        let currentPositon = gamer.getBoundingClientRect();
        let newLeft = currentPositon.left - contactPortion;
        // pcdld = gamerCollisionDetectionLeftDownward
        let pcdld = document.elementFromPoint(newLeft, currentPositon.bottom);
        // pcdlu = gamerCollisionDetectionLeftUpward
        let pcdlu = document.elementFromPoint(newLeft, currentPositon.top);
        if (pcdld.classList.contains('wall') == false && pcdlu.classList.contains('wall') == false && pcdld.classList.contains('mazeBorders') == false && pcdlu.classList.contains('mazeBorders') == false) {
            gamerLeft = gamerLeft - gamerSpeed;
            gamer.style.left = gamerLeft + 'px';
        }

        if (pcdld.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }

        if (pcdlu.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }

        gamerMouth.classList = 'left';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
    }

    else if (rightPressed == true) {
        // currentPLPositon = currentgamerPositon
        let currentPLPositon = gamer.getBoundingClientRect(); //optimize
        let newRight = currentPLPositon.right + contactPortion; //we need to change the collision unit to 2, especially when moving to the right, instead of 1 
        // pcdrd = gamerCollisionDetectionRightDownward
        let pcdrd = document.elementFromPoint(newRight, currentPLPositon.bottom);
        // pcdru = gamerCollisionDetectionRightUpward
        let pcdru = document.elementFromPoint(newRight, currentPLPositon.top);


        //wall collisio detection 
        if (pcdrd.classList.contains('wall') == false && pcdru.classList.contains('wall') == false && pcdrd.classList.contains('mazeBorders') == false && pcdru.classList.contains('mazeBorders') == false) {
            gamerLeft = gamerLeft + gamerSpeed;
            gamer.style.left = gamerLeft + 'px';
            // console.log(gamerLeft);
        }

        if (pcdrd.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }

        if (pcdru.classList.contains('enemy') == true) {
            // alert('An enemy has been encountered!!! game over!!!');
            enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
        }



        gamerMouth.classList = 'right';
        pointCollection() //calling the function to collect the points when pressing the down arrow key on the key board 
    }

}



//optimized my code by creating one function and then calling it several times instead of having this code be repeated over and over again 
function nextStage() {
    clearInterval(gamerMovement); //if it is true, and all the 50 points have been collected, then stop the movement of the gamer.
    // alert('Game has ended! All points have been collected!'); //The next comment is an old insight during my work, and is not currently implemented //I thouht if I used setTimeout() then I would be able to delay the alert message until after the last point disappears from the screen, but that did not work. //However my setTimeout() is now fixed. I fixed it by learning that I can not use an alert() instead of the name of the function, so I created a function that contains the alert and then I added the name of the function. And Now I have done something different.
    setTimeout(restart, 500) 
    
    gameEnded();
    lostlives = 3 - lives;
    for (let index = 0; index < lostlives; index++) {
        createlives();
    }
    currentLevel = currentLevel + 1; //increasing the value of the variable currentLevel by 1 for each time all the points have been collected 
    stages.innerHTML = currentLevel; //changing the level number and assigning it to the value of the variable currentLevel
    
    //calling the createEnemy function one time to create one extra enemy
    createEnemy(); //I opted for increasing the difficulty by only creating one wall and not more every time the restart button is clicked 
    // createEnemy();
    // createEnemy();

    //calling the createWall function one time to create one extra wall
    createWall(); //I opted for increasing the difficulty by only creating one wall and not more every time the restart button is clicked 
    // createWall();
    // createWall();
}




//function for calling the the gamer to move 
function callgamertoMove() {
    gamerMoving = setInterval(gamerMovement, 9); //assigning the setInterval to a variable gamerMoving. This setInterval is calling the function for moving the gamer every 9th of a second
}
callgamertoMove(); //calling the function for the gamer to start moving 




let stages = document.querySelector('#CurrentStage'); //selecting the paragraph inisde the div with class levels, and that levels paragraph was initially set to 0, initially.
let currentLevel = 1; //initializing the variable currentLevel to 1

let Pscore = document.querySelector('#Pscore'); //selecting the paragraph inisde the div with class score, and that score paragraph was initially set to 0, initially.
let totalPoints = 0; //initializing the variable totalPoints to 0


function pointCollection() {
    // let onePoint = document.querySelector('.point') //this line of code in assoiation with another line below creates a cool effect, removes one point only from the maze with every point that the gamer collects.

    let point = document.querySelectorAll('.point');
    // console.log(point.length); //so now I know that we have 50 points in the maze. 

    let gamerPosition = gamer.getBoundingClientRect();
    for (let i = 0; i < point.length; i++) {
        let positionOfPoint = point[i].getBoundingClientRect();
        if (
            gamerPosition.right > positionOfPoint.left &&
            gamerPosition.left < positionOfPoint.right &&
            gamerPosition.bottom > positionOfPoint.top && //this third line means that is the gamer’s bottom position below the point’s top position on the maze, which means that as a result of the gamer movement downwards, the gamer is now moving overlapping and over the point when the gamer's bottom position is larger than the point's top poistion
            gamerPosition.top < positionOfPoint.bottom
        ) {
            // onePoint.classList.remove('point'); //this line of code in assoiation with another line above creates a cool effect, removes one point only from the maze with every point that the gamer collects, so in total I am removing two points, one point that comes in contact with the gamer, and another does not. something like this could be added as power-up later on
            point[i].classList.remove('point');
            totalPoints = totalPoints + 1; //increasing the value of the variable totalPoints by 1 for each point collected 
            Pscore.innerHTML = totalPoints; //changing the score number and assigning it to the value of the variable totalPoints

            //checking if all the fifty points have been collected, and if true then display
            if (totalPoints == 50) {
                nextStage();
            }

            //enabling the user to be able to go to the next level, and by level 2 the player will be facing 4 enemies and there will be 11 walls 
            if (currentLevel == 2) {
                if (totalPoints == 48) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 3 the player will be facing 5 enemies and there will be 12 walls 
            if (currentLevel == 3) {
                if (totalPoints == 46) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 4 the player will be facing 6 enemies and there will be 13 walls 
            if (currentLevel == 4) {
                if (totalPoints == 44) {
                    nextStage()
                }
            }

            //enabling the user to be able to go to the next level, and by level 5 the player will be facing 7 enemies and there will be 14 walls 
            if (currentLevel == 5) {
                if (totalPoints == 42) {
                    nextStage();
                }
            }
            

            //enabling the user to be able to go to the next level, and by level 6 the player will be facing 8 enemies and there will be 15 walls 
            if (currentLevel == 6) {
                if (totalPoints == 40) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 7 the player will be facing 9 enemies and there will be 16 walls 
            if (currentLevel == 7) {
                if (totalPoints == 38) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 8 the player will be facing 10 enemies and there will be 17 walls 
            if (currentLevel == 8) {
                if (totalPoints == 36) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 9 the player will be facing 11 enemies and there will be 18 walls 
            if (currentLevel == 9) {
                if (totalPoints == 34) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 10 the player will be facing 12 enemies and there will be 19 walls
            if (currentLevel == 10) {
                if (totalPoints == 32) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 11 the player will be facing 13 enemies and there will be 20 walls 
            if (currentLevel == 11) {
                if (totalPoints == 32) {
                    nextStage();
                }
            }

            //I decided to created another group of if statements for the next 85 levls. I know it is not the best from an optimization point of view, but I was also thinking about the bugs and who what bugs might occur, so I went with the safer option, priortizing the functionality of the game in the first 11 levels.
            //enabling the user to be able to go to the next level, and by level 12 the player will be facing 14 enemies and there will be 21 walls
            if (currentLevel == 12 && currentLevel == 25 && currentLevel == 38 && currentLevel == 51 && currentLevel == 64 && currentLevel == 77 && currentLevel == 90) {
                if (totalPoints == 30) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 2 the player will be facing 4 enemies and there will be 11 walls 
            if (currentLevel == 13 && currentLevel == 26 && currentLevel == 39 && currentLevel == 52 && currentLevel == 65 && currentLevel == 78 && currentLevel == 91) {
                if (totalPoints == 50) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 2 the player will be facing 4 enemies and there will be 11 walls 
            if (currentLevel == 14 && currentLevel == 27 && currentLevel == 40 && currentLevel == 53 && currentLevel == 66 && currentLevel == 79 && currentLevel == 92) {
                if (totalPoints == 48) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 3 the player will be facing 5 enemies and there will be 12 walls 
            if (currentLevel == 15 && currentLevel == 28 && currentLevel == 41 && currentLevel == 54 && currentLevel == 67 && currentLevel == 80 && currentLevel == 93) {
                if (totalPoints == 46) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 4 the player will be facing 6 enemies and there will be 13 walls 
            if (currentLevel == 16 && currentLevel == 29 && currentLevel == 42 && currentLevel == 55 && currentLevel == 68 && currentLevel == 81 && currentLevel == 94) {
                if (totalPoints == 44) {
                    nextStage()
                }
            }

            //enabling the user to be able to go to the next level, and by level 5 the player will be facing 7 enemies and there will be 14 walls 
            if (currentLevel == 17 && currentLevel == 30 && currentLevel == 43 && currentLevel == 56 && currentLevel == 69 && currentLevel == 82 && currentLevel == 95) {
                if (totalPoints == 42) {
                    nextStage();
                }
            }
            

            //enabling the user to be able to go to the next level, and by level 6 the player will be facing 8 enemies and there will be 15 walls 
            if (currentLevel == 18 && currentLevel == 31 && currentLevel == 44 && currentLevel == 57 && currentLevel == 70 && currentLevel == 83 && currentLevel == 96) {
                if (totalPoints == 40) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 7 the player will be facing 9 enemies and there will be 16 walls 
            if (currentLevel == 19 && currentLevel == 32 && currentLevel == 45 && currentLevel == 58 && currentLevel == 71 && currentLevel == 84 && currentLevel == 97) {
                if (totalPoints == 38) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 8 the player will be facing 10 enemies and there will be 17 walls 
            if (currentLevel == 20 && currentLevel == 33 && currentLevel == 46 && currentLevel == 59 && currentLevel == 72 && currentLevel == 85 && currentLevel == 98) {
                if (totalPoints == 36) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 9 the player will be facing 11 enemies and there will be 18 walls 
            if (currentLevel == 21 && currentLevel == 34 && currentLevel == 47 && currentLevel == 60 && currentLevel == 73 && currentLevel == 86 && currentLevel == 99) {
                if (totalPoints == 34) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 10 the player will be facing 12 enemies and there will be 19 walls
            if (currentLevel == 22 && currentLevel == 35 && currentLevel == 48 && currentLevel == 61 && currentLevel == 74 && currentLevel == 87 && currentLevel == 100) {
                if (totalPoints == 32) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 11 the player will be facing 13 enemies and there will be 20 walls 
            if (currentLevel == 23 && currentLevel == 36 && currentLevel == 49 && currentLevel == 62 && currentLevel == 75 && currentLevel == 88 && currentLevel == 101) {
                if (totalPoints == 32) {
                    nextStage();
                }
            }

            //enabling the user to be able to go to the next level, and by level 12 the player will be facing 14 enemies and there will be 21 walls
            if (currentLevel == 24 && currentLevel == 37 && currentLevel == 50 && currentLevel == 63 && currentLevel == 76 && currentLevel == 89 && currentLevel == 102) {
                if (totalPoints == 30) {
                    nextStage();
                }
            }
        }
    }
}











let startBttn = document.querySelector('#start');

function startGame() {
    // you can also use the following code display none, adnThis code will do same thing as setting opacity to 0, which results in displaying nothing.  
    startBttn.style.opacity = 0; //hiding the visibility of the start button

    // Having the following 2 lines inside the function start game allows us to disable the movement of the gamer before the game starts, and only allow the gamer to move after the start button has been pressed 
    document.addEventListener('keydown', keyDown); //the event keydown is the one responsible for the action of moving the gamer when the key is pressed 
    // How I understand the event keyUp is: keyup event is triggered when any key has been released after being pressed. And keydown event means that the keyboard key has been pressed 
    document.addEventListener('keyup', keyUp); //the event keyup is the one responsible for the action of stopping an action when the key is released, and in this case it is the stoppage of movement of the gamer 

    leftButton.addEventListener('click', lbttnClicked);
    rightButton.addEventListener('click', rbttnClicked);
    upButton.addEventListener('click', ubttnClicked);
    downButton.addEventListener('click', dbttnClicked);

    setTimeout(removeStartButton, 3400)
}

//Reminder of old lessons 
// #1 when you are expecting a function, and you get a blue colored instead of a yellow colored check if you have actually craeted a function, for example here with startGame.
// #2 if I added document instead of startBttn then if I clicked anywhere on the website page, the start button will disapear
startBttn.addEventListener("click", startGame);



//function to remove the start button 
function removeStartButton() {
    startBttn.style.display = 'none'; //hiding the visibility of the start button

    //adding the loop inside the removeStartButton function, so that to only allow the gamer to move, when the removeStartButton function is called; in other word, to only allow the gamer to move after the start button have been pressed and the start button have disappeared, because I am calling the removeStartButton function inside the startGame function. For reference: setTimeout(removeStartButton, 3000).
    for (let theenemyOfEnemies of alltheEnemies) {
        //looping through each enemy, and assigning each enemy to a variable, and calling that variable theenemyOfEnemies
        enemyMovement(theenemyOfEnemies); //calling the function for the random enemy movements, giving it the variable theenemyOfEnemies as a parameter
    }
}





//function to have a restart button to restart the game
function restart() {
    startBttn.style.opacity = 1; //allowing the visibility of the start button
    startBttn.style.display = 'block';
    startBttn.innerHTML = 'Restart the game?';
    document.removeEventListener('keydown', keyDown);
    document.removeEventListener('keyup', keyUp);
}



//optimized my code by creating one function and then calling it several times instead of having this code be repeated over and over again 
function mazeRefereshed() {
    maze = [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], //the first row is filled with only walls 
        [4, 2, 0, 0, 0, 0, 0, 0, 0, 4], //the gamer is in the second column in this row, and there is an enemy in the ninth column in this row
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], // 0 represents the points that the gamer should collect 
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], //there was an enemy here in the sixth column in this row, but now after removing the manually added enemy, I am adding the enemy using a function, and I am adding it enemy in a any place where is a point 
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 4], //there is an enemy in the second column in this row, but now after removing the manually added enemy, I am adding the enemy using a function, and I am adding it enemy in a any place where is a point 
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4] //the last row is also filled with only walls 
    ];
    createEnemy();
    createEnemy();
    createEnemy();
    for (let index = 0; index < 10; index++) {
        createWall();
    }
}


function restartFunction() {
    document.addEventListener('keydown', keyDown); //the event keydown is the one responsible for the action of moving the gamer when the key is pressed 
    // How I understand the event keyUp is: keyup event is triggered when any key has been released after being pressed. And keydown event means that the keyboard key has been pressed 
    document.addEventListener('keyup', keyUp); //the event keyup is the one responsible for the action of stopping an action when the key is released, and in this case it is the stoppage of movement of the gamer 
    
    
    if (currentLevel == 12) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 25) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 38) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 51) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 64) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 77) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 90) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    if (currentLevel == 103) {//gamer = 2, Wall = 1, Enemy was 3, Point = 0, mazeBorders = 4
        mazeRefereshed()
    }
    
    main.innerHTML = ""; //clearing the previous maze that was used in the last 

    mazeCreation(); // now when start button (aka restart button, now) is clicked, make all the 50 points visible, and everything back as if you we just started the game, and place the gamer at the starting cell where the gamer first started previously, and restart button now is visible and clickable, but I am bringing back all the points when the restart button is clicked, because I am calling the function for creating the maze again. In other words, creating a new maze when the restart button is clicked.

    gamer = document.querySelector('#gamer'); //reassign the variable gamer again to the the gamer by selecting through the gamer id 
    alltheEnemies = document.querySelectorAll('.enemy'); //selecting the enemies after creating a new maze, and reassigning the enemies to the variable alltheEnemies is the solution that I was missing to get the enemy movement finally working
    gamerMouth = gamer.querySelector('.mouth'); //selecting the mouth of the gamer after creating a new maze, and reassigning the mouth of the gamer to the variable gamerMouth is the solution that I was missing to get the gamer mouth displayed after the restart button is clicked
    gamerTop = 0;
    gamerLeft = 0;
    lives = 3; //reesting the variable lives back to 3 

    Pscore.innerHTML = 0; //reseting the displaed and visible score counter back to 0 when the restart function is called
    totalPoints = 0; //reseting the score counter variable totalpoints back to 0 when the restart function is called
}





//accidently I named the down button as the up button, and vice versa. I do not know how could I make such an error.
let leftButton = document.querySelector('#lbttn');
let rightButton = document.querySelector('#rbttn');
let downButton = document.querySelector('#dbttn');
let upButton = document.querySelector('#ubttn');




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






let ulSeclect = document.querySelectorAll('.lives ul li'); //selecting the lists that I have inside the unordered list inisde the div with the class lives, and assigning it to the variable ulSeclect 
lives = ulSeclect.length; //the variable lives was assigned to the length/number of the the lists that I have inside the unordered list inisde the div with the class lives
console.log(lives); //Output is 3 






//creating a function to stop the gamer from moving 
function stopgamerMovement() {
    clearInterval(gamerMoving); //clearing to stop the gamer from moving.
}

//creating a function for the gamer to go back and move again during a gamer's state of being in the same place
function gamerReturntoMove() {
    clearInterval(gamerMoving); //clearing to prevent the gamer from get faster with each key press. I am clearing the variable assigned to the setinterval(). This setInterval was calling the function for moving the gamer every 9th of a second.
    callgamertoMove(); //calling the function for the gamer to move 
}









//creating lives 
function createlives() {
    //creating a list in HTML, and assigning to the variable li 
    let li = document.createElement('li');
    //selecting the unordered list inside the div with the class lives
    let ul = document.querySelector('.lives ul');
    //appending/adding the created list assigned to variable li to the unordered list iniside the div with the class lives
    ul.appendChild(li);
}

//calling the function three times to create three lives, refering to the gamer's health 
createlives();
createlives();
createlives();









//removing lives 
function removelive() {
    //selecting a list inside the div with the class lives
    let li = document.querySelector('.lives li');
    //selecting the unordered list inside the div with the class lives
    let ul = document.querySelector('.lives ul');
    //removing the created list assigned to variable li from the unordered list iniside the div with the class lives
    ul.removeChild(li);
}























function gameEnded() {
    clearInterval(gamerMovement); //clearing gamer movement 
    saveData();
    clearInterval(callgamertoMove);
    restart();
    clearInterval(gamerMovement);
    startBttn.addEventListener("click", restartFunction);

    upPressed = false; //reseting the gamer key presses and movements  
    downPressed = false; //reseting the gamer key presses and movements 
    leftPressed = false; //reseting the gamer key presses and movements 
    rightPressed = false; //reseting the gamer key presses and movements 
}











lives = 3
//moving the enemy 
let alltheEnemies = document.querySelectorAll('.enemy'); //selecting all the enemies using the class enemy and assigning them to a variable, and calling that variable alltheEnemies.
// console.log("no of enemies: " + alltheEnemies.length) //showing the number of enemies, exactly 3; OUtpuut: 3

function enemyMovement(theenemyOfEnemies) {
    let trajectory = Math.ceil(Math.random() * 8);
    let enemytop = 0;
    let enemyleft = 0;
    MovementofEnemy = setInterval(function () {
        if (lives == 0) { trajectory = 0 }; //stopping the enemy movement 
        if (totalPoints == 50) { trajectory = 0 }; //stopping the enemy movement 
        
        //first option is for moving upwards
        if (trajectory == 1) {
            enemyEncounter(); //calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            const enemyPositionForNewUp = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForNewUp
            let newUp = enemyPositionForNewUp.top - 1; //selectiing the next top position, and assigning it to the variable newUp
            // ecdul = enemyCollisionDetectionUpLeft
            let eecdul = document.elementFromPoint(enemyPositionForNewUp.left, newUp); //I was getting null for the value of the variable eecdul, so after I tried checking if it is true before moving the enemy, the problem was fixed, so I conclude that the enemy may have been trying to get off the screen or access an element that is not visible and is outside the borders of the maze.
            // ecdur = enemyCollisionDetectionUpRight
            let ecdur = document.elementFromPoint(enemyPositionForNewUp.right, newUp);
            // console.log("where are the 3 enemies: " + enemyPositionForNewUp.left + "And" + enemyPositionForNewUp.right);


            // The next comment is an old insight during my work, and is not currently implemented // This if else statement after being uncommented stopped the enemies from going upwards, so if an enemy was assigned upwards randomly at the begining of the game, then the enemy won't move at all, and if the enemy was assigned upwards after the enemy have hit a wall then the enemy will stop moving; that was because of the problem that the value of the variable eecdul was showing in the console as null.
            if (eecdul && ecdur && eecdul.classList.contains('wall') == false && ecdur.classList.contains('wall') == false && eecdul.classList.contains('mazeBorders') == false && ecdur.classList.contains('mazeBorders') == false) {
                enemytop -= 1;
                theenemyOfEnemies.style.top = enemytop + 'px';
                // console.log("enemies movement upward: " + enemyPositionForNewUp.left + "And" + enemyPositionForNewUp.right);
            }
            else {
                //if it contains a wall, then randomly change the trajectory
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (eecdul && eecdul.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
    
            if (ecdur && ecdur.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        }


        if (trajectory == 2) {
            let enemyPositionForNewDown = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForNewDown

            //why newBottom have to have +, and not - here ? is it because we are moving in a different trajectory. Because we are moving downwar, and addition pushes the enemy downwards. 
            let newBottom = enemyPositionForNewDown.bottom + 1; //selecting the next new bottom postion of the enemy to be moved to, and assigning the value of that position to the variable enemyPosition
            // ecdbl = enemyCollisionDetectionBottomLeft
            let ecdbl = document.elementFromPoint(enemyPositionForNewDown.left, newBottom); //selecting the x and y positions of the enemy, and assigning it to the variable ecdbl. Here, The x represents the left position of the enemy, and here the y represents the bottom position of the enemy. 
            // ecdbr = enemyCollisionDetectionBottomRight
            let ecdbr = document.elementFromPoint(enemyPositionForNewDown.right, newBottom); //selecting the x and y positions of the enemy, and assigning it to the variable ecdbr. Here, The x represents the right position of the enemy, and here the y represents the bottom position of the enemy. 
            if (ecdbl && ecdbr && ecdbl.classList.contains('wall') == false && ecdbr.classList.contains('wall') == false && ecdbl.classList.contains('mazeBorders') == false && ecdbr.classList.contains('mazeBorders') == false) {
                enemytop += 1; //incrementing the enemy position by 1, and assigning it to the variable enemytop
                theenemyOfEnemies.style.top = enemytop + 'px'; //applying the changes and moving the enemy to the bottom 
            }
            else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (ecdbl && ecdbl.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
    
            if (ecdbr && ecdbr.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        };



        if (trajectory == 3) {
            let enemyPositionForNewLeft = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForNewLeft
            let newLeft = enemyPositionForNewLeft.left - 1; //selectiing the next left position, and assigning it to the variable newLeft
            // ecdlB = enemyCollisionDetectionLeftBottom
            let ecdlB = document.elementFromPoint(newLeft, enemyPositionForNewLeft.bottom);
            // ecdlT = enemyCollisionDetectionLeftTop
            let ecdlT = document.elementFromPoint(newLeft, enemyPositionForNewLeft.top);
            if (ecdlB && ecdlT && ecdlB.classList.contains('wall') == false && ecdlT.classList.contains('wall') == false && ecdlB.classList.contains('mazeBorders') == false && ecdlT.classList.contains('mazeBorders') == false) {
                //one of the type mistakes I made is when typing the code for enemy wall collision detection is that I typed enemytop variable also for the right and left movement trajectory, however moments later I realized my mistake and changed the variable enemytop to the variable enemyleft, and now my enemy moves to the left and to the right.
                enemyleft -= 1;
                theenemyOfEnemies.style.left = enemyleft + 'px';
            } else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (ecdlB && ecdlB.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
    
            if (ecdlT && ecdlT.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        };



        if (trajectory == 4) {
            let enemyPositionForNewRight = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForNewRight
            //why newRight have to have +, and not - here ? is it because we are moving in a different trajectory. because we are moving toward the right and addition pushes the enemy toward the right, and away from the left trajectory. 
            let newRight = enemyPositionForNewRight.right + 1; //selectiing the next right position, and assigning it to the variable newRight

            // ecdrB = enemyCollisionDetectionRightBottom
            let ecdrB = document.elementFromPoint(newRight, enemyPositionForNewRight.bottom);
            // ecdrT = enemyCollisionDetectionRightTop
            let ecdrT = document.elementFromPoint(newRight, enemyPositionForNewRight.top);
            if (ecdrB && ecdrT && ecdrB.classList.contains('wall') == false && ecdrT.classList.contains('wall') == false && ecdrB.classList.contains('mazeBorders') == false && ecdrT.classList.contains('mazeBorders') == false) {
                enemyleft += 1;
                theenemyOfEnemies.style.left = enemyleft + 'px';
            } else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (ecdrB && ecdrB.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
    
            if (ecdrT && ecdrT.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        };





        //more enemy collision diagonally
        //trajectory == 5 is for right-bottom collision detction
        if (trajectory == 5) {
            let enemyPositionForDiagonalRightBottom = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForDiagonalRightBottom
            let newRight = enemyPositionForDiagonalRightBottom.right + 1;
            let newBottom = enemyPositionForDiagonalRightBottom.bottom + 1;


            // ecdbr = enemyCollisionDetectionBottomRight
            let ecdbr = document.elementFromPoint(enemyPositionForDiagonalRightBottom.right, newBottom); //selecting the x and y positions of the enemy, and assigning it to the variable ecdbr. Here, The x represents the right position of the enemy, and here the y represents the next (+1) new bottom position that the enemy may move to. 
            
            // DRB = DiagonallyRightBottom
            let DRB = document.elementFromPoint(newRight, newBottom); //selecting the x and y positions of the enemy, and assigning it to the variable ecdrB. Here, The x represents the next (+1) new right position of the enemy, and here the y represents the next (+1) new bottom position of the enemy. That's means here that I have created a collision for the diagonally. A diagonal moves equals two new positions being updated at the same time to allow the movement of the enemy diagonally.

            // ecdrB = enemyCollisionDetectionRightBottom
            let ecdrB = document.elementFromPoint(newRight, enemyPositionForDiagonalRightBottom.bottom); //selecting the x and y positions of the enemy, and assigning it to the variable ecdrB. Here, The x represents the next (+1) new right position of the enemy, and here the y represents the bottom position of the enemy. 

            if (DRB && DRB.classList.contains('wall') == false && DRB.classList.contains('mazeBorders') == false && ecdbr.classList.contains('wall') == false && ecdbr.classList.contains('mazeBorders') == false && ecdrB.classList.contains('wall') == false && ecdrB.classList.contains('mazeBorders') == false) {
                enemyleft += 1;
                enemytop += 1;
                theenemyOfEnemies.style.left = enemyleft + 'px';
                theenemyOfEnemies.style.top = enemytop + 'px';
            }
            else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (ecdbr && ecdbr.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (DRB && DRB.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (ecdrB && ecdrB.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        };



        // trajectory == 6 is for right-upward collision detction
        if (trajectory == 6) {
            let enemyPositionForDiagonalRightUpwards = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForDiagonalRightUpwards
            let newRight = enemyPositionForDiagonalRightUpwards.right + 1;
            let newUp = enemyPositionForDiagonalRightUpwards.top - 1;

            // ecdur = enemyCollisionDetectionUpRight
            let ecdur = document.elementFromPoint(enemyPositionForDiagonalRightUpwards.right, newUp);

            // DRT = DiagonallyRightUp
            let DRT = document.elementFromPoint(newRight, newUp);

            // ecdrT = enemyCollisionDetectionRightTop
            let ecdrT = document.elementFromPoint(newRight, enemyPositionForDiagonalRightUpwards.top);

            if (DRT && DRT.classList.contains('wall') == false && DRT.classList.contains('mazeBorders') == false && ecdur.classList.contains('wall') == false && ecdur.classList.contains('mazeBorders') == false && ecdrT.classList.contains('wall') == false && ecdrT.classList.contains('mazeBorders') == false) {
                enemyleft += 1;
                enemytop -= 1;
                theenemyOfEnemies.style.left = enemyleft + 'px';
                theenemyOfEnemies.style.top = enemytop + 'px';
            }
            else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (ecdur && ecdur.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (DRT && DRT.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (ecdrT && ecdrT.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        };



        // trajectory == 7 is for left-bottom collision detction
        if (trajectory == 7) {
            let enemyPositionForDiagonalLeftBottom = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForDiagonalLeftBottom
            let newLeft = enemyPositionForDiagonalLeftBottom.left - 1;
            let newBottom = enemyPositionForDiagonalLeftBottom.bottom + 1;

            // ecdbl = enemyCollisionDetectionBottomLeft
            let ecdbl = document.elementFromPoint(enemyPositionForDiagonalLeftBottom.left, newBottom); 
            
            // DLB = DiagonallyLeftBottom
            let DLB = document.elementFromPoint(newLeft, newBottom);

            // ecdlB = enemyCollisionDetectionLeftBottom
            let ecdlB = document.elementFromPoint(newLeft, enemyPositionForDiagonalLeftBottom.bottom);

            if (DLB && DLB.classList.contains('wall') == false && DLB.classList.contains('mazeBorders') == false && ecdbl.classList.contains('wall') == false && ecdbl.classList.contains('mazeBorders') == false && ecdlB.classList.contains('wall') == false && ecdlB.classList.contains('mazeBorders') == false) {
                enemyleft -= 1;
                enemytop += 1;
                theenemyOfEnemies.style.left = enemyleft + 'px';
                theenemyOfEnemies.style.top = enemytop + 'px';
            }
            else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (ecdbl && ecdbl.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (DLB && DLB.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (ecdlB && ecdlB.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        };



        // trajectory == 8 is for left-upward collision detction
        if (trajectory == 8) {
            let enemyPositionForDiagonalLeftUpwards = theenemyOfEnemies.getBoundingClientRect(); //selecting the current positiion of the enemy and assigning the value of that psoition to the varibale enemyPositionForDiagonalLeftUpwards
            let newLeft = enemyPositionForDiagonalLeftUpwards.left - 1;
            let newUp = enemyPositionForDiagonalLeftUpwards.top - 1;

            // ecdul = enemyCollisionDetectionUpLeft
            let eecdul = document.elementFromPoint(enemyPositionForDiagonalLeftUpwards.left, newUp);

            let DLU = document.elementFromPoint(newLeft, newUp);

            // ecdlT = enemyCollisionDetectionLeftTop
            let ecdlT = document.elementFromPoint(newLeft, enemyPositionForDiagonalLeftUpwards.top);
            
            if (DLU && DLU.classList.contains('wall') == false && DLU.classList.contains('mazeBorders') == false && eecdul.classList.contains('wall') == false && eecdul.classList.contains('mazeBorders') == false && ecdlT.classList.contains('wall') == false && ecdlT.classList.contains('mazeBorders') == false) {
                enemyleft -= 1;
                enemytop -= 1;
                theenemyOfEnemies.style.left = enemyleft + 'px';
                theenemyOfEnemies.style.top = enemytop + 'px';
            }
            else {
                trajectory = Math.ceil(Math.random() * 8);
            }

            if (eecdul && eecdul.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (DLU && DLU.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }

            if (ecdlT && ecdlT.classList.contains('gamer') == true) {
                enemyEncounter();//calling the function enemyEncounter that calls the function for the enemy collision but allows the gamer a grace period of 2.5 seconds after the gamer encounters the enemy or the enemy encounters the gamer //By grace period, I mean a time where the gamer and enemy, both will be unable to encounter each other
            }
        }




        // console.log(enemytop); //shhowing the enemy movement along the vertical line 
        // console.log(enemyleft); //shhowing the enemy movement along the horizontal line 
    }, 10);
}





















































//function for the collision between the gamer and the enemy 
function enemyPLCol() {
    let allEnemies = document.querySelectorAll('.enemy'); //selcecting the enemies and assigning them to the variable allEnemies
    let gamerPosition = gamer.getBoundingClientRect(); //selecting the position of the gamer 
    //looping through every enemy 
    for (let enemeyONE of allEnemies) {
        let positionOfEnemies = enemeyONE.getBoundingClientRect(); //selecting the position of an enemy 
        //chcecking if the psoition of the gamer overlaps with the position of the enemy 
        if (
            gamerPosition.right > positionOfEnemies.left &&
            gamerPosition.left < positionOfEnemies.right &&
            gamerPosition.bottom > positionOfEnemies.top &&
            gamerPosition.top < positionOfEnemies.bottom
        ) {
            removelive(); //the removelive function is called to remove a live from the gamer's lives.
            lives = lives - 1; //removing 1 from the variable, and the variable lives was assigned to the length/number of the the lists that I have inside the unordered list inisde the div with the class live s
            gamer.classList.add('hit'); //adding the class hit to the gamer to display the hit animation
            stopgamerMovement(); //calling the function to stop the movement of the gamer
            setTimeout(() => {
                gamerReturntoMove(); //calling the function that clears the interval for the movements of the gamer to stop the gamer from moving 
                gamer.classList.remove('hit'); //removing the class hit from the gamer to hide the hit animation
            }, 1500); //stopping the gamer from moving for 1.5 seconds //1500 here equals 1.5 seconds, because intervals are measured in 1000ths of a second 

            if (lives == 0) {
                gamer.classList.remove('hit'); //removing the hit class from the gamer in case the gamer was down to only 1 and then the gamer has been hit by 2 enemies at the same exact time, so preventing errors in the console
                gamer.classList.add('dead'); //if that's true, and the gamer came in contact with an enemy, then add the dead animation to the gamer 
                gameEnded();
                createlives();
                createlives();
                createlives();
            }
        }

    }
}














//could not name this function player, the game crashes, I think because it is conflicting with the player gamer 
function gamerInfo(nameOfgamer, scorePoints) {
    localStorage.setItem(nameOfgamer, scorePoints);//storing the parameter nameOfgamer as the key, and the parameter Pscore as the value
    //local storage to save the name of the user, and their score of points after they have died after losing all of their 3 lives 
}

function leaderboardCreation() {
    let allResults = [];//initializing a list, and assigning it to the variable allResults 

    //looping through each item in the local storage
        for (let i = 0; i < localStorage.length; i++) {
            let gamerName = localStorage.key(i);//assigning the key of each item in local storage to the variable gamerName
            let points = parseInt(localStorage.getItem(gamerName));//assigning the value of each item in local storage to the variable points, and using parseInt() to convert the string to the closest whole number 
            allResults.push([gamerName, points]);// Storing the array of 2 variables into the arry allResults
        }
    
        //sortting the scores descndingly from greatest to smallest number of points collected  
        allResults.sort((a, b) => b[1] - a[1]); //comparing the second item of each array inside the array allResults, which represents the variable points. [1] represents the second item of each array inside the array allResults, and it represents the variable points.
    
        //I needed to add this line of code after sorting the array allresults to slice from an array that has already been sorted desendingly
        let highestOnes = allResults.slice(0, 5); //now that the array is sorted desendingly, I can slice the first five array, which will the highest five arrays, and assign the fist five highest arrays to the variable highestOnes



        //While I was testing, I proved that here in the forEach loop, the index, which is most represented by the charachter i, is the value of the length of my localStorage
        highestOnes.forEach(function(_, element) {
            console.log("Here is my index:" + element); });


        //looping through each array inside the variable highestOnes, and assigning the value of the smaller array to the vatiable element. While element[0] and element[1] represent the values inisde the smallerr array.
        highestOnes.forEach(function(element) {
            addgamerInfoToLeaderboard(element[0], element[1]); //calling the function addgamerInfoToLeaderboard to create a list inisde the order list inisde the div with the class leaderboard //element[0] represents the first item of each array inside the array highestOnes, and it represents the variable gamerName becuase gamerName is the first parameter/argument of the function addgamerInfoToLeaderboard, while element[1] represents the second item of each array inside the array highestOnes, and it represents the variable points because points is the second parameter/argument of the function addgamerInfoToLeaderboard. 
        });
    }
    
    function addgamerInfoToLeaderboard(gamerName, points) {
        let addlitoLeaderboard = document.createElement('li'); //creating a list and assigning it to the variable addlitoLeaderboard
        addlitoLeaderboard.innerHTML = `${gamerName} ..... ${points}`; //adding the list format to the created list. That list was assigned to the variable addlitoLeaderboard
    
        let listofLeaderboard = document.querySelector('.leaderboard ol'); //selecting the ordered list inside the div tag with class leaderboard
        listofLeaderboard.appendChild(addlitoLeaderboard); //adding the created list assigned to the variable addlitoLeaderboard to the ordered list iniside the div tag with class leaderboard
    }
    




    
    function saveData() {
        let gamerName = prompt("Game Over!!! Please Enter your name:"); //asking the gamer for the username, and assigning that username to the variable gamerName 
        let pointsCollected = document.querySelector('.score p').innerHTML; //selecting the text added to the HTML and is stored in the paragraph inside the div tag with class score, and assigning its value to the variable pointsCollected
    
        gamerInfo(gamerName, pointsCollected); //calling the function to save to local storage the name and pointsCollected. The name and pointsCollected are the arguments that I have passed to the function. name is parellel to the parameter/placeholder nameOfgamer, and pointsCollected is parellel to the parameter/placeholder scorePoints. Also, name is variable that gets and stores the inputted username by the user. While, pointsCollected is varibale that stores the number of points that is stores in the p tag, paragraph tag, iniside the div tag with class score. This number represents the current number of points that gamer has collected during that game
    
        //the leader board were displaying duplicates after the saving the gamer info after the second, third, fourth, and fifth games, until I figured out that, and that was becauase I was creating a new li tags for each array I have inisde the array highestOnes.
        let listofLeaderboard = document.querySelector('.leaderboard ol'); //selecting the ordered list inside the div tag with class leaderboard
        listofLeaderboard.innerHTML = ''; //reseting and clearing the all the previously created lists inside the ordered list 
        leaderboardCreation(); //calling the function to create the leaderboard, because without it the leaderboard would not be visible 
    }














