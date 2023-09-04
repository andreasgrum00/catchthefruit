const player = document.querySelector(".player");
const game = document.querySelector(".game");
const fruit = document.querySelector(".fruit");
const score = document.querySelector(".score");
const gameWidth = game.clientWidth;
const gameHeight = game.clientHeight;

var pontos = 0;
let playerX = 0;
let playerY = 0;
let fruitX = getRandom(0, gameWidth);
let fruitY = getRandom(0, gameHeight);

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keypress", event => {
        const tecla = event.key;
        switch (tecla) {
            case "w":
                if (playerY > 0) {
                    playerY -= 1;
                }
                break;
            case "a":
                if (playerX > 0) {
                    playerX -= 1;
                }
                break;
            case "s":
                if (playerY < gameHeight - player.clientHeight) {
                    playerY += 1;
                }
                break;
            case "d":
                if (playerX < gameWidth - player.clientWidth) {
                    playerX += 1;
                }
                break;
        }

        let playerCord = [playerX, playerY];
        let fruitCord = [fruitX, fruitY + 1];

        player.style.left = playerX + "px";
        player.style.top = playerY + "px";

        fruit.style.left = fruitX + "px";
        fruit.style.top = fruitY + "px";

        if (checkCollision(player, fruit)) {
            pontos += 1;
            setScore(pontos);
            fruitX = getRandom(0, 20 - 4);
            fruitY = getRandom(0, 20 - 4);
            fruit.style.left = fruitX + "px";
            fruit.style.top = fruitY + "px";
            console.log("Colisão detectada! Pontos: " + pontos);
        }

        console.log(`Player Cord: ${playerCord}\nFruit Cord: ${fruitCord}`);
    });
});

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkCollision(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();
    
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

function setScore(qnt) {
    score.textContent = qnt;
}