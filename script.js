var game = prompt("Do you want to play?");
var playerName = "user";
var computer = "Almighty Grant";
var usrWins = 0;
var usrBaseHp = 40;
var computerBaseHp = 10;
var usrCurrentHp = usrBaseHp;
var computerCurrentHp = computerBaseHp;
var computerPlayLimit = 3;

startGame();

function startGame() {
    if (game === "yes") {
        playerName = prompt("What's your name?");
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
    while (0 < usrCurrentHp && 0 < computerPlayLimit) {
        playLimit();
        computerPlayLimit--;
    }
}

function playLimit() {
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