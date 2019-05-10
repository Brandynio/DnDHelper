var diceNum = document.getElementById("dNumber");
var diceSides = document.getElementById("dSides");
var cbox1 = document.getElementById("1");
var cbox2 = document.getElementById("2");
var error = document.getElementById("error");

diceNum.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

function rollDice() {
  var dieSide = diceSides.value;

  error.innerHTML = "";

  var randNum;
  var total = 0;
  var rollArray = new Array();

  var i = 0;

  if (cbox1.checked == true && cbox2.checked == false) {
    while (i < diceNum.value) {

      randNum = Math.floor(Math.random() * dieSide) + 1;

      total = total + randNum;

      i++;
    }
    if (dieSide > 1 && dieSide < 101) {
      alert("You have rolled a total of " + total + "!");
    }
  }
  else if(cbox2.checked == true && cbox1.checked == false){
    while (i < diceNum.value) {

      randNum = Math.floor(Math.random() * dieSide) + 1;

      rollArray[i] = randNum;

      i++;
    }
    if (dieSide > 1 && dieSide < 101) {
      alert("Here are your rolls: " + rollArray + ".");
    }
  }
  else{
    while (i < diceNum.value) {

      randNum = Math.floor(Math.random() * dieSide) + 1;

      rollArray[i] = randNum;

      total = total + randNum;

      i++;
    }
    if (dieSide > 1 && dieSide < 101) {
      alert("Here are your rolls: " + rollArray + ". You have rolled a total of " + total + "!");
    }
  }

}
