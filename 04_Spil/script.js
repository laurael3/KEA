window.addEventListener("load", clickStart);

// Audio//
const SoundTurtle = new Audio('sounds/SoundTurtle.mp3');
const SoundSpider = new Audio('sounds/SoundSpider.mp3');
const SoundSnake = new Audio('sounds/SoundSnake.mp3');
const SoundCrab = new Audio('sounds/SoundCrab.mp3');
const SoundPoints = new Audio('sounds/SoundPoints.mp3');
const SoundDead = new Audio('sounds/SoundDead.mp3');
const GameMusic = document.querySelector("#GameMusic");
 
//Figurer//
const turtle = document.querySelector("#turtle_container");
const snake = document.querySelector("#snake_container");
const spider = document.querySelector("#spider_container");
const croc = document.querySelector("#croc_container");
const crab= document.querySelector("#crab_container");
//Figurer//

//Andet//
const time = document.querySelector("#time_container");
const heart1 = document.querySelector("#heart_container1");
const heart2 = document.querySelector("#heart_container2");
const heart3 = document.querySelector("#heart_container3");
//Andet//


function generateRandomNumber(){
    let number = Math.floor(Math.random() * 5) + 1;
    console.log(number);
    return number;
}

function clickStart() {
    console.log("clickStart");
    document.querySelector("#info_btn").addEventListener("click", infoScreen);
    document.querySelector("#start_btn").addEventListener("click", startGame);
}

function infoScreen() {
    console.log("infoScreen");
    document.querySelector("#info_btn").removeEventListener("click", infoScreen);
    document.querySelector("#info").classList.remove("hidden");
    document.querySelector("#exit1").addEventListener("click", backToStart);
}

function backToStart() {
    console.log("backToStart");
    document.querySelector("#info").classList.add("hidden");
    document.querySelector("#exit1").removeEventListener("click", clickStart);
    clickStart();
}

function startGame(){
    console.log(startGame);

    //Start og nulstil musik//
    GameMusic.play();
    GameMusic.currentTime = 0;
    GameMusic.volume = 0.2;
    GameMusic.muted = false;
    GameMusic.loop = true;

    //Reset point//
    score = 0;
    document.querySelector("#score").textContent = score;

    //Reset liv//
    heart = 3;
    heart1.classList.remove("gray");
    heart2.classList.remove("gray");
    heart3.classList.remove("gray");


    //Fjern skærme//
    document.querySelector("#start_btn").removeEventListener("click", startGame);
    document.querySelector("#start").classList.add("hidden");
    document.querySelector("#gameover").classList.add("hidden");
    document.querySelector("#level_complete").classList.add("hidden");
    
    //Start timer//
    document.querySelector("#score_container").classList.remove("hidden");
    time.classList.remove("hidden");
    time.firstElementChild.classList.remove("hidden");
    time.firstElementChild.classList.add("time");
    time.firstElementChild.addEventListener("animationend", endGame);

    //Generate random positioner//
    let rnd = generateRandomNumber();
    turtle.classList.add("delay" + rnd);
    turtle.classList.add("pos" + rnd);
    rnd = generateRandomNumber();
    spider.classList.add("delay" + rnd);
    spider.classList.add("pos" + rnd);
    rnd = generateRandomNumber();
    snake.classList.add("delay" + rnd);
    snake.classList.add("pos" + rnd);
    
    //Unhide elements//
    turtle.firstElementChild.classList.remove("hidden");
    spider.firstElementChild.classList.remove("hidden");
    snake.firstElementChild.classList.remove("hidden");
    croc.classList.remove("hidden");
    crab.classList.remove("hidden");

    //Start animationer//
    turtle.classList.add("move");
    spider.classList.add("jump");
    snake.classList.add("scale");

    //Nye elementer//
    croc.classList.add("slow");
    crab.classList.add("pattern");

    //AddEventListener click//
    turtle.addEventListener("click", clickTurtle);
    spider.addEventListener("click", clickSpider);
    snake.addEventListener("click", clickSnake);
    crab.addEventListener("click", clickCrab);

    //AddEventListener animationEnd//
    turtle.addEventListener("animationend", resetTurtle);
    spider.addEventListener("animationend", resetSpider);
    snake.addEventListener("animationend", resetSnake);
}

function clickSpider(){
    console.log("clickSpider");

    //Fjern eventlistener//
    spider.removeEventListener("click", clickSpider);
  
    //Lyd//
    SoundSpider.play();
  
    //Stop animation på container//
    spider.classList.add("freeze");
  
    //Start forsvind-animation på sprite//
    spider.firstElementChild.classList.add("rotate");

    //Få 1 point//
    score ++;
    document.querySelector("#score").textContent = score;

    //Reset//
    spider.firstElementChild.addEventListener("animationend", resetSpider);
}

function clickSnake(){
    console.log("clickSnake");
  
    //Fjern eventlistener//
    snake.removeEventListener("click", clickSnake);
  
    //Lyd//
    SoundSnake.play();
  
    //Stop animation på container//
    snake.classList.add("freeze");
  
    //Start forsvind-animation på sprite//
    snake.firstElementChild.classList.add("rotate");
  
    //Få 2 point//
    score += 2;
    document.querySelector("#score").textContent = score;

    //Reset//
    snake.firstElementChild.addEventListener("animationend", resetSnake);
}

function clickTurtle() {
    console.log("clickTurtle");
  
    //Fjern eventlistener//
    turtle.removeEventListener("click", clickTurtle);
  
    //Lyd//
    SoundTurtle.play();
  
    //Mist liv//
    heart--;

    if (heart <= 0){
        endGame();
        console.log("No hearts left");
        } 

    if (heart < 3){
        heart3.classList.add("gray");
        } 

    if (heart < 2){
        heart2.classList.add("gray");
        } 
    
    if (heart < 1){
        heart1.classList.add("gray");
        } 

    //Stop animation på container//
    turtle.classList.add("freeze");
  
    //Start forsvind-animation på sprite//
    turtle.firstElementChild.classList.add("rotate");

    //Reset//
    turtle.firstElementChild.addEventListener("animationend", resetTurtle); 
}

function clickCrab() {
    console.log("clickCrab");
  
    //Fjern eventlistener//
    crab.removeEventListener("click", clickCrab);
  
    //Lyd//
    SoundCrab.play();
  
    //Mist liv//
    heart--;

    if (heart <= 0){
        endGame();
        console.log("No hearts left");
        } 

    if (heart < 3){
        heart3.classList.add("gray");
        } 

    if (heart < 2){
        heart2.classList.add("gray");
        } 
    
    if (heart < 1){
        heart1.classList.add("gray");
        } 

     //Stop animation på container//
     crab.classList.add("freeze");
  
     //Start forsvind-animation på sprite//
     crab.firstElementChild.classList.add("rotate");
}

function resetTurtle() {
    console.log("resetTurtle");
  
    //fjern alle klasser //
    turtle.classList = "";
    turtle.firstElementChild.classList = "";
  
    //Ny random posistion//
    let rnd = generateRandomNumber();
    turtle.classList.add("pos" + rnd);
  
    //Genstart animation//
    turtle.offsetHeight;
    turtle.classList.add("move");
  
    //Lyt efter klik//
    turtle.addEventListener("click", clickTurtle);
}
  
function resetSpider(){
    console.log("resetSpider");
  
    //fjern alle klasser //
    spider.classList = "";
    spider.firstElementChild.classList = "";
  
    //Ny random posistion//
    let rnd = generateRandomNumber();
    spider.classList.add("pos" + rnd);
  
    //Genstart animation//
    spider.offsetHeight;
    spider.classList.add("jump");
  
    //Lyt efter klik//
    spider.addEventListener("click", clickSpider);
}

function resetSnake(){
    console.log("resetSnake");
  
    //fjern alle klasser //
    snake.classList = "";
    snake.firstElementChild.classList = "";
  
    //Ny random posistion//
    let rnd = generateRandomNumber();
    snake.classList.add("pos" + rnd);
  
    //Genstart animation//
    snake.offsetHeight;
    snake.classList.add("scale");
  
    //Lyt efter klik//
    snake.addEventListener("click", clickSnake);
}

function endGame(){
    console.log("endGame");
    time.firstElementChild.removeEventListener("animationend", endGame);

    //Stop musik//
    GameMusic.pause();
    GameMusic.currentTime = 0;
    
    //fjern alle klasser //
    turtle.classList = "";
    turtle.firstElementChild.classList = "";
    spider.classList = "";
    spider.firstElementChild.classList = "";
    snake.classList = "";
    snake.firstElementChild.classList = "";
    croc.classList = "";
    crab.classList = "";
  

    time.firstElementChild.classList.remove("time");

    //fjern alle Eventlistener //
    turtle.removeEventListener("click", clickTurtle);
    spider.removeEventListener("click", clickSpider);
    snake.removeEventListener("click", clickSnake);
    turtle.firstElementChild.removeEventListener("animationend", resetTurtle);
    spider.firstElementChild.removeEventListener("animationend", resetSpider);
    snake.firstElementChild.removeEventListener("animationend", resetSnake);
  
    //Start forsvind-animation på alle elementer//
    turtle.firstElementChild.classList.add("hidden");
    spider.firstElementChild.classList.add("hidden");
    snake.firstElementChild.classList.add("hidden");
    croc.classList.add("hidden");
    crab.classList.add("hidden");

    if (heart <= 0) {
        gameOver();
    }  else if (score >= 20) {
        levelComplete();
    } else {
        gameOver();
        }
}           

function gameOver(){
    console.log("gameOver");
    document.querySelector("#gameover").classList.remove("hidden");
    document.querySelector("#tryagain_btn").addEventListener("click", startGame);
    document.querySelector("#score_container").classList.add("hidden");
    time.classList.add("hidden");
    SoundPoints.play();
}
  
function levelComplete(){
    console.log("levelComplete");
    SoundPoints.play();
    time.classList.add("hidden");
    time.firstElementChild.classList.add("hidden");
    document.querySelector("#level_complete").classList.remove("hidden");
    document.querySelector("#tryagain_btn2").addEventListener("click", startGame);
}