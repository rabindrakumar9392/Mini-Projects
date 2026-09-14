let mario = document.querySelector(".mario");
let obstacle = document.querySelector(".obstacle");
let scoreText = document.querySelector(".score");
let gameoverBox = document.querySelector(".game-over");
let restartBtn = document.querySelector(".restart");


let marioX = 50;
let marioY = 0;


let obstacleX = 800;


let score = 0;
let isJumping = false;
let gameOver = false;



document.addEventListener("keydown", (event) => {

    if (gameOver) {
        return;
    }

    
    if (event.key === "ArrowRight" || event.key === "d") {

        marioX += 10;

        if (marioX >= 550) {
            marioX = 550;
        }

        mario.style.left = marioX + "px";
    }


    
    if (event.key === "ArrowLeft" || event.key === "a") {

        marioX -= 10;

        if (marioX <= 0) {
            marioX = 0;
        }

        mario.style.left = marioX + "px";
    }


    
    if (
        event.key === "ArrowUp" ||
        event.key === "w" ||
        event.key === " "
    ) {

        event.preventDefault();

        jump();
    }

});




function jump() {

    
    if (isJumping) {
        return;
    }

    isJumping = true;

    let jumpHeight = 150;
    let jumpSpeed = 10;


    
    let jumpUp = setInterval(() => {

        marioY += jumpSpeed;

        mario.style.bottom = marioY + "px";


        
        if (marioY >= jumpHeight) {

            clearInterval(jumpUp);


            
            let jumpDown = setInterval(() => {

                marioY -= jumpSpeed;


                
                if (marioY <= 0) {

                    marioY = 0;

                    mario.style.bottom = "0px";

                    clearInterval(jumpDown);

                    isJumping = false;

                    return;
                }


                mario.style.bottom = marioY + "px";

            }, 40);

        }

    }, 40);
}




let gameLoop = setInterval(() => {

    if (gameOver) {
        return;
    }


    
    obstacleX -= 8;

    obstacle.style.left = obstacleX + "px";


    
    if (obstacleX <= -50) {

        obstacleX = 800;

        score++;

        scoreText.innerText = "Score: " + score;
    }


    

    let marioRect = mario.getBoundingClientRect();

    let obstacleRect = obstacle.getBoundingClientRect();


    if (
        marioRect.left < obstacleRect.right &&
        marioRect.right > obstacleRect.left &&
        marioRect.top < obstacleRect.bottom &&
        marioRect.bottom > obstacleRect.top
    ) {

        endGame();
    }

}, 30);




function endGame() {

    gameOver = true;

    clearInterval(gameLoop);

    gameoverBox.style.display = "block";
}



restartBtn.addEventListener("click", () => {

    location.reload();

});