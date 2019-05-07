var diceNum = document.getElementById("dNumber");

diceNum.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

function rollDice() {
  var dieSide = diceNum.value;

  var randNum = Math.floor(Math.random() * dieSide) + 1;

  if (dieSide > 1 && dieSide < 101) {
    alert("You have rolled a " + randNum + " out of " + dieSide + "!");
  }
}