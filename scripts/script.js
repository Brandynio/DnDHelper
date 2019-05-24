let orderedArray = new Array();
let unorderedArray = new Array();

let displayInitiativeDiv = document.getElementById('displayInitiativeDiv');
let firstInitiative = document.getElementById('firstInitiative');
let secondInitiative = document.getElementById('secondInitiative');
let thirdInitiative = document.getElementById('thirdInitiative');

let cycle = document.getElementById('cycle');

let editHealthDiv = document.getElementById('editHealthDiv');
let editHealth = document.getElementById('editHealth');

let addPlayerMonsterDiv = document.getElementById('addPlayerMonsterDiv');
let addPlayerMonster = document.getElementById('addPlayerMonster');

let removePlayerMonsterDiv = document.getElementById('removePlayerMonsterDiv');
let removePlayerMonster = document.getElementById('removePlayerMonster');


const makePeople = () =>{
    let setInititive = (24 * (Math.floor(Math.random() * 13) + 5))%17;
    let setHealth = (491 * (Math.floor(Math.random() * 618) + 26))%549;
    unorderedArray.push(new Person(`Person ${unorderedArray.length + 1}`, setInititive, setHealth));
}

class Person {
    constructor(name, inititive, health){
        this.name = name;
        this.inititive = inititive;
        this.health = health;
    }
}

const startInitiative = () =>{
    cycle.addEventListener('click', cyclcIniatitive);
    editHealth.addEventListener('click', edit);
    addPlayerMonster.addEventListener('click', add);
    removePlayerMonster.addEventListener('click', remove);

    cycle.style.display = 'block';
    editHealth.style.display = 'block';
    addPlayerMonster.style.display = 'block';
    removePlayerMonster.style.display = 'block';

    displayInitiativeDiv.style.display = 'block';
    editHealthDiv.style.display = 'none';
    addPlayerMonsterDiv.style.display = 'none';
    removePlayerMonsterDiv.style.display = 'none';

}

const orderArray = () =>{
    orderedArray = new Array();
    orderedArray[0] = unorderedArray[0];
    for(let i = 1; i < unorderedArray.length; i++){
        for(let j = 0; j < i; j++){
            if(unorderedArray[i].inititive > orderedArray[j].inititive){
                orderedArray.splice(j, 0, unorderedArray[i]);
                break;
            }
            if(j == i-1){
                orderedArray.splice(j, 0, unorderedArray[i]);
            }
        }
    }

}

const cyclcIniatitive = () =>{
    shiftOrder();
    fillIniatitive();

}

const fillIniatitive = () =>{    
    if(orderedArray.length > 0){
        firstInitiative.innerHTML = `${orderedArray[0].name}'s turn ---------------- ${orderedArray[0].inititive}`;
    }else{
        firstInitiative.innerHTML = `None`;
    }
    
    if(orderedArray.length > 1){
        secondInitiative.innerHTML = `${orderedArray[1].name}'s turn --------------- ${orderedArray[1].inititive}`;
    }else{
        secondInitiative.innerHTML = `None`;
    }
    
    if(orderedArray.length > 2){
        thirdInitiative.innerHTML = `${orderedArray[2].name}'s turn ---------------- ${orderedArray[2].inititive}`;
    }else{
        thirdInitiative.innerHTML = `None`;
    }
}

const shiftOrder = () =>{
    orderedArray[orderedArray.length] = orderedArray[0];
    orderedArray.shift();
}

const edit = () =>{
    displayInitiativeDiv.style.display = 'none';
    cycle.style.display = 'none';
    editHealthDiv.style.display = 'block';
    addPlayerMonster.style.display = 'none';
    removePlayerMonster.style.display = 'none';
    editHealth.removeEventListener('click', edit)
    editHealth.addEventListener('click', startInitiative)
    if(orderedArray != 0){
        for(let i = 0; i < orderedArray.length; i++){
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'displayEditInfo');
            editHealthDiv.appendChild(newDiv);
            
            let new_p_tag = document.createElement('p');
            new_p_tag.setAttribute('class', 'update_p_tags');
            let text = document.createTextNode(`${orderedArray[i].name}'s health is ${orderedArray[i].health}`);
            new_p_tag.appendChild(text);
            newDiv.appendChild(new_p_tag);
            
            let newTextBox = document.createElement('input');
            newTextBox.setAttribute('type', 'text');
            newTextBox.setAttribute('size', '10');
            newTextBox.setAttribute('maxlength', '10');
            newTextBox.setAttribute('name', 'pin');
            newTextBox.setAttribute('class', 'updateTextBoxes');
            newDiv.appendChild(newTextBox);
            
            let newButton = document.createElement('div');
            newButton.setAttribute('id', `update${i}`);
            newButton.setAttribute('class', 'updateButtons');
            let buttonText = document.createTextNode('Update');
            newButton.appendChild(buttonText);
            newDiv.appendChild(newButton);
            newButton.addEventListener('click', updateHealth);
        }
    }
    fillIniatitive();
}

const updateHealth = evt =>{
    let target_name = evt.target.id;
    selected_num = parseInt(target_name.charAt(target_name.length-1));
    orderedArray[selected_num].health -= document.getElementsByClassName(`updateTextBoxes`)[selected_num].value;
    editHealthDiv.innerHTML = '';
    edit();
}

const add = () =>{
    displayInitiativeDiv.style.display = 'none';
    cycle.style.display = 'none';
    editHealth.style.display = 'none';
    addPlayerMonsterDiv.style.display = 'block';
    removePlayerMonster.style.display = 'none';

    addPlayerMonster.removeEventListener('click', add);
    addPlayerMonster.addEventListener('click', startInitiative);
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'displayEditInfo');
    editHealthDiv.appendChild(newDiv);
    
    // let new_p_tag = document.createElement('p');
    // new_p_tag.setAttribute('class', 'update_p_tags');
    // let text = document.createTextNode(`${orderedArray[i].name}'s health is ${orderedArray[i].health}`);
    // new_p_tag.appendChild(text);
    // newDiv.appendChild(new_p_tag);
    
    // let newTextBox = document.createElement('input');
    // newTextBox.setAttribute('type', 'text');
    // newTextBox.setAttribute('size', '10');
    // newTextBox.setAttribute('maxlength', '10');
    // newTextBox.setAttribute('name', 'pin');
    // newTextBox.setAttribute('class', 'updateTextBoxes');
    // newDiv.appendChild(newTextBox);
    
    // let newButton = document.createElement('div');
    // newButton.setAttribute('id', `update${i}`);
    // newButton.setAttribute('class', 'updateButtons');
    // let buttonText = document.createTextNode('Update');
    // newButton.appendChild(buttonText);
    // newDiv.appendChild(newButton);
    // newButton.addEventListener('click', updateHealth);
    
    fillIniatitive();
}

const addToArray = evt =>{
    
}

const remove = () =>{
    displayInitiativeDiv.style.display = 'none';
    cycle.style.display = 'none';
    editHealth.style.display = 'none';
    addPlayerMonster.style.display = 'none';
    removePlayerMonsterDiv.style.display = 'block';
    removePlayerMonster.removeEventListener('click', remove);
    removePlayerMonster.addEventListener('click', startInitiative);

    if(orderedArray != 0){
        for(let i = 0; i < orderedArray.length; i++){
            let newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'displayRemovePlayerMonster');
            removePlayerMonsterDiv.appendChild(newDiv);

            let new_p_tag = document.createElement('p');
            new_p_tag.setAttribute('class', 'delete_p_tags');
            let text = document.createTextNode(`${orderedArray[i].name}`);
            new_p_tag.appendChild(text);
            newDiv.appendChild(new_p_tag);
            
            let newButton = document.createElement('div');
            newButton.setAttribute('id', `delete${i}`);
            newButton.setAttribute('class', 'deleteButtons');
            let buttonText = document.createTextNode('Delete');
            newButton.appendChild(buttonText);
            newDiv.appendChild(newButton);
            newButton.addEventListener('click', removePlayer);
        }
    }
}

const removePlayer = evt =>{
    let target_name = evt.target.id;
    selected_num = parseInt(target_name.charAt(target_name.length-1));
    for(let i = 0; i < orderedArray.length; i++){
        if(unorderedArray[i].name == orderedArray[selected_num].name){
            unorderedArray.splice(i, 1);
            break;
        }
    }
    removePlayerMonsterDiv.innerHTML = '';
    orderArray();
    startInitiative();
}

const startdummy = () =>{
    for(let i = 0; i < 6; i++){
        makePeople();
    }
    orderArray();
    fillIniatitive();
    startInitiative();
}

startdummy();