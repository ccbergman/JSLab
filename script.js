var game = prompt("Do you want to play?");
var playerName = "user";
var computer = "Almighty Grant";
var usrWins = 0;
var usrBaseHp = 40;
var computerBaseHp = 10;
var usrCurrentHp = usrBaseHp;
var computerCurrentHp = computerBaseHp;
var computerPlayLimit = 3;
var stillPlaying;
var continueGame;

startGame();

function startGame() {
    if (game === "yes") {
        playerName = prompt("What's your name?");
        var initalizeGame = prompt("Would you like to attack?");
        startCombat();

        if (3 === usrWins) {
            console.log(playerName + " wins!");
        } else {
            console.log(computer + " wins!");
        }
    } else {
        console.log("Ok...maybe next time.")
    }
}

function startCombat() {
    do {
        underAttack();
        computerPlayLimit--;
        stillPlaying = (0 < usrCurrentHp && 0 < computerPlayLimit)

        continueGame = prompt("Would you like to attack or forfeit?");
        if (continueGame === "forfeit") {
            stillPlaying = false;
            console.log("Game Over!");
        }
    } while (stillPlaying);
}

function underAttack() {
    while (0 < computerCurrentHp) {
        computerCurrentHp -= getDamage();
        usrCurrentHp -= getDamage();
        if (0 >= usrCurrentHp) {
            break;
        }
        console.log("Grant the Almighty has " + computerCurrentHp + " health points left.");
        console.log(playerName + " has " + usrCurrentHp + " health points left.");
    }
    usrWins++;
    computerCurrentHp = computerBaseHp;
    console.log("DING! DING! DING!");
}

function getDamage() {
    return Math.floor(Math.random() * 5) + 1;
}

// function continueGame() {
//     if (continueGame === "yes") {
//         startCombat();
//     } else {
//         function quitGame() {
//             break;
//         }
//     }
// }