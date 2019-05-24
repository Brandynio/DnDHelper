var cName = document.getElementById("cName");
var cClass = document.getElementById('class');
var hp = document.getElementById('hp');
var level = document.getElementById('level');
var race = document.getElementById('race');
var str = document.getElementById('strength');
var dex = document.getElementById('dex');
var con = document.getElementById('con');
var int = document.getElementById('int');
var wis = document.getElementById('wis');
var char = document.getElementById('char');
var Character = [];

Character = JSON.parse(localStorage.getItem("characters"));

character = localStorage.getItem("currentCharacter");
console.log(character);


//C = localStorage.getItem("characters");

cName.innerText = Character[0];
cClass.innerText = Character[1];
hp.innerText = Character[2];
level.innerText = Character[3];
race.innerText = Character[4];
str.innerText = Character[5];
dex.innerText = Character[6];
con.innerText = Character[7];
int.innerText = Character[8];
wis.innerText = Character[9];
char.innerText = Character[10];



