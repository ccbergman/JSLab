// var game = prompt("Do you want to play?");
var char1 = "user";
var char2 = "Almighty Grant";
var usrWins = 0;
var usrBaseHp = 40;
var grantBaseHp = 10;
var usrCurrentHp = 0;
var grantCurrentHp = 0;

// var random = math.floor(math.random() * 2) + 1;
// var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

// var random = function math.random(math.floor() * 2) + 1;


// if (game === "yes") {
//     char1 = prompt("What's your name?");
// } else {
//     console.log("ok...maybe next time.")
// }

while (grantBaseHp >= 0) {
    grantBaseHp--;
    console.log("Grant the Almighty Chicken has " + grantBaseHp + " health left.");
}

usrWins++;
console.log(char1 + " Wins: " + usrWins);

// test if username was overwritten
// console.log(char1)
//still ply game when say no