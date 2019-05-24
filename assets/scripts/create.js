var crctName;
var crctClass;
var crctLevel;
var crctRace;
var StatStr;
var StatDex;
var StatCon;
var StatInt;
var StatWis;
var StatCar;
var Characters = [];
var characterIndex = 0;

function character(CName, CClass, CLevel, CRace, SStr, SDex, SCon, SInt, SWis, SChar) {
    this.Name = CName;
    this.CharacterClass = CClass;
    this.Level = CLevel;
    this.Race = CRace;
    this.Strength = SStr;
    this.Dexterity = SDex;
    this.Constitution = SCon;
    this.Intelligence = SInt;
    this.Wisdom = SWis;
    this.Charisma = SChar;
}

function AssingData() {
    crctName = document.forms['CharacterForm']['CharacterN'].value;
    crctClass = document.forms['CharacterForm']['CharacterCl'].value;
    crctLevel = document.forms['CharacterForm']['CharacterLvl'].value;
    crctRace = document.forms['CharacterForm']['CharacterRc'].value;
    StatStr = document.forms['CharacterForm']['StatStr'].value;
    StatDex = document.forms['CharacterForm']['StatDex'].value;
    StatCon = document.forms['CharacterForm']['StatCon'].value;
    StatInt = document.forms['CharacterForm']['StatInt'].value;
    StatWis = document.forms['CharacterForm']['StatWis'].value;
    StatCar = document.forms['CharacterForm']['StatCar'].value;
    validate();
    characterIndex += 1;
    return false;
}

function validate() {
    var CharName_patt = /[a-z]{2,}/i;
    if (CharName_patt.test(crctName)) {
        AddCharacter();
    } else {
        crctName
        document.getElementById('ErrorMessdssage').innerHTML = "User name must have at least 2 letters"
    }
}

function AddCharacter() {
    //Create character and add to character array
    
    console.log(crctName);
    var newCha = new character(crctName, crctClass, crctLevel,
        crctRace, StatStr, StatDex, StatCon, StatInt, StatWis, StatCar);
    
    tempCharacter = {
        name: newCha.crctName,
        class: newCha.crctClass,
        level: newCha.crctLevel,
        race: newCha.crctRace,
        str: newCha.StatStr,
        dex: newCha.StatDex,
        con: newCha.StatCon,
        int: newCha.StatInt,
        wis: newCha.StatWis,
        cha: newCha.StatCar
    }
    Characters.push(tempCharacter);
    localStorage.setItem('characters', JSON.stringify(Characters));
    //Create html elements 
    loadCharacters();
}

const loadCharacters = () => {
    Characters = JSON.parse(localStorage.getItem("characters"))
    localStorage.setItem("currentCharacter", "hello?")
    let str = "<a href='display.html'>click me to display</a>"
    document.getElementById("test").innerHTML = str;
    // CharacterDiv = document.createElement('div');
    // CharacterDiv.setAttribute('Class', 'CharElement');
    // var CTextBlock = document.createElement('div');
    // CTextBlock.className = "CharacterDisp";
    // localStorage.setItem(crctName, )
    // console.log(newCha);
    // //Adding character charactersitics 
    // var CText = document.createTextNode(newCha.Name + " The " + newCha.Race + ", a level " + newCha.Level + " " + newCha.CharacterClass);
    // CTextBlock.appendChild(CText);
    // CharacterDiv.appendChild(CTextBlock);
    // document.getElementById("CharactersList").appendChild(CTextBlock);
}