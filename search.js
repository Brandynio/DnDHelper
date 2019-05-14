let request = new XMLHttpRequest();
let myData;
let test = document.getElementById("name");
let display = document.getElementById("displayData");
let error = document.getElementById("error");

function search() {
    
    let type = document.getElementById("searchType");
    let input = document.getElementById("searchBar").value;
    let splitInput = input.split(" ");
    let capitalizedArr = [];
    for (let i = 0; i < splitInput.length; i++) {
        capitalizedArr[i] = splitInput[i].charAt(0).toUpperCase() + splitInput[i].slice(1);
    }
    let searchTerm = "";
    for (let i = 0; i < capitalizedArr.length; i++) {
        searchTerm += capitalizedArr[i];
        if (i < capitalizedArr.length-1) {
            searchTerm += " ";
        }
    }
    
    console.log(searchTerm);

    let selectedType = type.options[type.selectedIndex].value;
    let url = "http://www.dnd5eapi.co/api/"
    console.log(selectedType);
    if (selectedType == "classes") {
        url += "classes/";
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                myData = data;
                classSearch(searchTerm);
            })
            .catch(e => console.log(e));
        
        // loadData(url);
        // showData();
    }
    else if (selectedType == "features") {
        url += "features/"
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                myData = data;
                featSearch(searchTerm);
            })
            .catch(e => console.log(e))
    }
    else if (selectedType == "monsters") {
        url += "monsters/";
        fetch(url)
            .then(response => response.json())
            .then(data =>{
                myData = data;
                monsterSearch(searchTerm);
            })
            .catch(e => console.log(e))
    }
    else if (selectedType == "spells") {
        url += "spells/";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                myData = data;
                spellSearch(searchTerm);
            })
            .catch(e => console.log(e))
    }
}

function classSearch(search) {
    // let classData;
    display.innerHTML = "";
    test.innerHTML = "";
    error.innerHTML = "";
    let classIndex = 0;
    let classFound = false;
    for (let i = 0; i < myData.results.length; i++) {
        if (search == myData.results[i].name) {
            classIndex = i;
            classFound = true;
        }
    }
    if (classFound) {
        console.log(myData.results[classIndex].url);
        fetch(myData.results[classIndex].url)
            .then(response => response.json())
            .then(hm => {
                test.innerHTML = hm.name;
                let htmlData = "<p><strong>Hit Die: </strong>d" + hm.hit_die + "</p><h3>Proficiency Choices<h3>"
                for (let i = 0; i < hm.proficiency_choices.length; i++) {
                    htmlData += "<h4>Choose " + hm.proficiency_choices[i].choose + "</h4><ul>"
                    for (let j = 0; j < hm.proficiency_choices[i].from.length; j++) {
                        htmlData += "<li>" + hm.proficiency_choices[i].from[j].name.replace(/Skill: /, "") + "</li>";
                    }
                    htmlData += "</ul>";
                }
                htmlData += "<h3>Proficiencies</h3><ul>";
                for (let i = 0; i < hm.proficiencies.length; i++) {
                    htmlData += "<li>" + hm.proficiencies[i].name + "</li>";
                }
                htmlData += "</ul><h3>Saving Throws</h3><p>" + hm.saving_throws[0].name + ", " + hm.saving_throws[1].name + "</p>";
                
                display.innerHTML = htmlData;
            })
            .catch(e => console.log(e));
    }
    else {
        error.innerHTML = "We couldn't find that search term. Please verify that your selection is correct and you've spelled the term correctly."
    }
}

function featSearch(search) {
    display.innerHTML = "";
    test.innerHTML = "";
    let htmlData = "";
    error.innerHTML = "";
    let matches = [];
    for (let i = 0; i < myData.results.length; i++) {
        if (myData.results[i].name.includes(search)) {
            matches.push(myData.results[i]);
        }
    }
    console.log(matches);
    if (matches.length == 0) {
        error.innerHTML = "We couldn't find that search term. Please verify that your selection is correct and you've spelled the term correctly."
    }
    else {
        htmlData += "<h3>Matches</h3><h4>Pick one!</h4>";
        for (let i = 0; i < matches.length; i++) {
            htmlData += "<p id='match"+ i + "'>" + matches[i].name + "</p>"
            
        }
        display.innerHTML = htmlData;
        for (let i = 0; i < matches.length; i++) {
            document.getElementById("match" + i).addEventListener("click", function(){ featChoose(matches[i].url)})
        }
    }
}

function featChoose(url) {
    display.innerHTML = "";
    test.innerHTML = "";
    let htmlData = "";
    error.innerHTML = "";
    fetch(url)
        .then(response => response.json())
        .then(feat =>{
            test.innerHTML = feat.name;
            if (feat.level != undefined) {
                htmlData += "<p><strong>Level:</strong> " + feat.level + "</p>";
            }
            htmlData += "<p><strong>Class:</strong> " + feat.class.name + "</p>" +
            "<h4>Description</h4>";
            for (let i = 0; i < feat.desc.length; i++) {
                htmlData += "<p>" + feat.desc[i] + "</p>"
            }
            display.innerHTML = htmlData;
            //name
            //level (optional)
            //desc (loop)
            //class
        })
        .catch(e => console.log(e));
}

function monsterSearch(search) {
    display.innerHTML = "";
    test.innerHTML = "";
    let htmlData = "";
    error.innerHTML = "";
    let matches = [];
    for (let i = 0; i < myData.results.length; i++) {
        if (myData.results[i].name.includes(search)) {
            matches.push(myData.results[i]);
        }
    }
    console.log(matches);
    if (matches.length == 0) {
        error.innerHTML = "We couldn't find that search term. Please verify that your selection is correct and you've spelled the term correctly."
    }
    else {
        htmlData += "<h3>Matches</h3><h4>Pick one!</h4>";
        for (let i = 0; i < matches.length; i++) {
            htmlData += "<p id='match"+ i + "'>" + matches[i].name + "</p>"
            
        }
        display.innerHTML = htmlData;
        for (let i = 0; i < matches.length; i++) {
            document.getElementById("match" + i).addEventListener("click", function(){ monsterChoose(matches[i].url)})
        }
    }
}

function monsterChoose(url) {
    display.innerHTML = "";
    test.innerHTML = "";
    let htmlData = "";
    error.innerHTML = "";
    fetch(url)
        .then(response => response.json())
        .then(monster =>{
            let dataFields
            test.innerHTML = monster.name;
            htmlData += "<p><em>" + monster.size + " " + monster.type;
            if (monster.subtype != "") {
                htmlData += " (" + monster.subtype + ")";
            }
            htmlData += ", " + monster.alignment + "</em></p>" +
            "<p><b>Armor Class</b> " + monster.armor_class + "</p>" + 
            "<p><b>Hit Points</b> " + monster.hit_points + " (" + monster.hit_dice + ")</p>" +
            "<p><b>Speed</b> " + monster.speed + "</p>" + 
            "<table><thead><tr><th>STR</th><th>DEX</th><th>CON</th><th>INT</th><th>WIS</th><th>CHA</th></tr></thead><tbody><tr>" +
"<td>"+monster.strength+"</td><td>"+monster.dexterity+"</td><td>"+monster.constitution+"</td><td>"+monster.intelligence+"</td><td>"+monster.wisdom+"</td><td>"+monster.charisma+"</td></tr></tbody></table>" +
            "<h3>Saves<h3><p><b>Constitution: </b>" + monster.constitution_save + "</p>" +
            "<p><b>Intelligence: </b>" + monster.intelligence_save + "</p>" +
            "<p><b>Wisdom: </b>" + monster.wisdom_save + "</p>" +
            "<p><b>Charisma: </b>" + monster.charisma_save + "</p>";
            
            display.innerHTML = htmlData;

            //constitution_save (optional)
            //intelligence_save (optional)
            //wisdom_save (optional)
            //charisma_save (optional)
            //perception
            //stealth
            //damage_vulnerabilities
            //damage_resistances
            //damage_immunities
            //condition_immunities
            //senses
            //languages
            //challenge_rating
            //special_abilities (loop)
                //attack_bonus
                //desc
                //name
            //actions (loop)
                //attack_bonus
                //desc
                //name
            //legendary_actions(loop)
                //attack_bonus
                //desc
                //name
        })
        .catch(e => console.log(e));
}

function spellSearch(search) {
    let htmlData = "";
    let matches = [];
    for (let i = 0; i < myData.results.length; i++) {
        if (myData.results[i].name.includes(search)) {
            matches.push(myData.results[i]);
        }
    }
    if (matches.length == 0) {
        error.innerHTML = "We couldn't find that search term. Please verify that your selection is correct and you've spelled the term correctly."
    }
    else {
        htmlData += "<h3>Matches</h3><h4>Pick one!</h4>";
        for (let i = 0; i < matches.length; i++) {
            htmlData += "<p id='match"+ i + "'>" + matches[i].name + "</p>"
            
        }
        display.innerHTML = htmlData;
        for (let i = 0; i < matches.length; i++) {
            document.getElementById("match" + i).addEventListener("click", function(){ chooseSpell(matches[i].url)})
        }
    }
}

function chooseSpell(url) {
    display.innerHTML = "";
    test.innerHTML = "";
    let htmlData = "";
    error.innerHTML = "";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            test.innerHTML = data.name;
            //level
            //school
            htmlData += "<p>Level " + data.level + " <em>" + data.school.name + "</em></p>" +
            //range
            "<p><strong>Range:</strong> " + data.range + "</p>" +
            //duration
            "<p><strong>Duration:</strong> " + data.duration + "</p>" +
            "<p><strong>Components:</strong> ";
            //components (loop)
            for (let i = 0; i < data.components.length; i++) {
                htmlData += data.components[i];
                if (i < data.components.length - 1) {
                    htmlData += ", ";
                }
            }
            //material (optional)
            if (data.material != undefined) {
                htmlData += "</p><strong>Material: </strong>" + data.material + "</p>";
            }
            //concentration
            htmlData += "<p><b>Concentration: </b>" + data.concentration + "</p>" +
            //ritual
            "<p><b>Ritual: </b>" + data.ritual + "</p>" +
            "<h4>Class</h4>";
            //classes (loop)
            for (let i = 0; i < data.classes.length; i++) {
                htmlData += "<p>" + data.classes[i].name + "</p>"; 
            }
            htmlData += "<h4>Description</h4>"
            //desc (loop)
            for (let i = 0; i < data.desc.length; i++) {
                htmlData += "<p>" + data.desc[i] + "</p>";
            }
            if (data.higher_level != undefined) {
                for (let i = 0; i < data.higher_level.length; i++) {
                    htmlData += "<p>" + data.higher_level[i] + "</p>";
                }

            }
                //higher_level (optional)
            display.innerHTML = htmlData;
        })
        .catch(e => console.log(e));
}