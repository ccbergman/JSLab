var game = prompt("Do you want to play?");
var char1 = "user";
var char2 = "Almighty Grant";
var usrWins = 0;
var usrBaseHp = 40;
var grantBaseHp = 10;
var usrCurrentHp = usrBaseHp;
var grantCurrentHp = grantBaseHp;
var grantPlayLimit = 3;

if (game === "yes") {
    char1 = prompt("What's your name?");
    playLimit();
} else {
    console.log("Ok...maybe next time.")
}

function singleRound() {
    while (0 < grantCurrentHp) {
        grantCurrentHp -= randomNumberGenerator();
        usrCurrentHp -= randomNumberGenerator();
        console.log("Grant the Almighty Chicken has " + grantCurrentHp + " health left.");
        console.log(char1 + " has " + usrCurrentHp + " health left.");
    }
    usrWins++;
    console.log(char1 + " Wins: " + usrWins);
    grantCurrentHp = grantBaseHp;
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