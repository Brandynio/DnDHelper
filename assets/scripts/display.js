var cName = document.getElementById("cName");
var cClass = document.getElementById('class');
var hp = document.getElementById('hp');
var level = document.getElementById('level');
var race = document.getElementById('race');
var str = document.getElementById('str');
var dex = document.getElementById('dex');
var con = document.getElementById('con');
var int = document.getElementById('int');
var wis = document.getElementById('wis');
var char = document.getElementById('char');
var Character = [];

Character = JSON.parse(localStorage.getItem("currentCharacter"));

// character = localStorage.getItem("currentCharacter");
console.log(Character);


//C = localStorage.getItem("characters");

cName.innerText = Character.name;
cClass.innerText = Character.class;
hp.innerText = Character.hp;
level.innerText = Character.level;
race.innerText = Character.race;
str.innerText = Character.str;
dex.innerText = Character.dex;
con.innerText = Character.con;
int.innerText = Character.int;
wis.innerText = Character.wis;
char.innerText = Character.cha;



