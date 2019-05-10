function AssingData(){
    var crctName = document.forms['CharacterForm']['CharacterN'].value;
    var crctClass = document.forms['CharacterForm']['CharacterCl'].value;
    var crctLevel = document.forms['CharacterForm']['CharacterLvl'].value;
    var crctRace = document.forms['CharacterForm']['CharacterRc'].value;
    var StatStr = document.forms['CharacterForm']['StatStr'].value;
    var StatDex = document.forms['CharacterForm']['StatDex'].value;
    var StatCon = document.forms['CharacterForm']['StatCon'].value;
    var StatInt = document.forms['CharacterForm']['StatInt'].value;
    var StatWis = document.forms['CharacterForm']['StatWis'].value;
    var StatCar = document.forms['CharacterForm']['StatCar'].value;
    var Character = document.createElement('div');
    Character.setAttribute('Class','row CharElement');
    var CTextBlock = document.createElement('p');
    var CText = document.createTextNode(crctName+" The "+crctRace+", a level "+crctLevel+ " "+crctClass);
    CTextBlock.appendChild(CText);
    Character.appendChild(CTextBlock);
    document.getElementById("CharactersList").appendChild(Character);
    return false;
}