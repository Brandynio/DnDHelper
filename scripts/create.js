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
    }else{
        document.getElementById('ErrorMessage').innerHTML = "User name must have at least 2 letters"   }
}

function AddCharacter() {
    //Create character and add to character array
    console.log(crctName);
    var newCha = new character(crctName, crctClass, crctLevel,
        crctRace, StatStr, StatDex, StatCon, StatInt, StatWis, StatCar);
    Characters.push(newCha);
    //Create html elements 
    CharacterDiv = document.createElement('div');
    CharacterDiv.setAttribute('Class', 'CharElement');
    var CTextBlock = document.createElement('p');
    console.log(newCha);
    //Adding character charactersitics 
    var CText = document.createTextNode(newCha.Name + " The" + newCha.Race + ", a level " + newCha.Level + " " + newCha.CharacterClass);
    CTextBlock.appendChild(CText);
    CharacterDiv.appendChild(CTextBlock);
    document.getElementById("CharactersList").appendChild(CTextBlock);
}