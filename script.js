var game = prompt("Do you want to play?");
var playerName = "user";
var grant = "Almighty Grant";
var usrWins = 0;
var usrBaseHp = 40;
var grantBaseHp = 10;
var usrCurrentHp = usrBaseHp;
var grantCurrentHp = grantBaseHp;
var grantPlayLimit = 3;

if (game === "yes") {
    playerName = prompt("What's your name?");
    playLimit();
    if (3 === usrWins) {
        console.log(playerName + " wins!");
    } else {
        console.log(grant + " wins!");
    }
} else {
    console.log("Ok...maybe next time.")
}

function singleRound() {
    while (0 < grantCurrentHp) {
        grantCurrentHp -= randomNumberGenerator();
        usrCurrentHp -= randomNumberGenerator();
        if (0 >= usrCurrentHp) {
            break;
        }
        console.log("Grant the Almighty Chicken has " + grantCurrentHp + " health left.");
        console.log(playerName + " has " + usrCurrentHp + " health left.");
    }
    usrWins++;
    grantCurrentHp = grantBaseHp;
    console.log("DING! Next Round");
}

function playLimit() {
    while (0 < usrCurrentHp && 0 < grantPlayLimit) {
        singleRound();
        grantPlayLimit--;
    }
}

function randomNumberGenerator() {
    return Math.floor(Math.random() * 2) + 1;
}