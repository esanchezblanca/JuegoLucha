
let arrChatacter = [];
let mainScreenDiv = document.getElementById('mainScreen');
let fightScreenDiv = document.getElementById('fightScreen');
let winnerDiv = document.getElementById('winnerText');

class Character {
    constructor(name, attack, defense, life, speed, quote, id) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.life = life;
        this.speed = speed;
        this.quote = quote;
        this.id = id;

    }
}

fightScreenDiv.style.visibility = 'hidden';
winnerDiv.style.visibility = 'hidden';


let f1 = new Character("Rick", 4, 2, 100, 8, "Wabba lubba dub dub!", 1);
let f2 = new Character("Scary Terry", 4, 2, 100, 8, "You can run, but you can't hide, bitch", 2);
let f3 = new Character("Cromulon", 4, 2, 100, 8, "Show me what you got", 3);
let f4 = new Character("Doofus Rick", 4, 2, 100, 8, "You guys are always so mean to me", 4);
let f5 = new Character("Prince Nebulon", 4, 2, 100, 8, "That was part of the simulation", 5);
let f6 = new Character("Time Cop", 4, 2, 100, 8, "Hey man, remember me? I got some for your ass", 6);


function characterSelect(character) {
    if (character == 'Character1') {
        printCharacter("rick.png")
        arrChatacter.push(f1);
    } else if (character == 'Character2') {
        printCharacter("terry.png")
        arrChatacter.push(f2);
    } else if (character == 'Character3') {
        printCharacter("showMe.png")
        arrChatacter.push(f3);
    } else if (character == 'Character4') {
        printCharacter("dumbRick.png")
        arrChatacter.push(f4);
    } else if (character == 'Character5') {
        printCharacter("alienSimulation.png")
        arrChatacter.push(f5);
    } else {
        printCharacter("timeCop.png")
        arrChatacter.push(f6);
    }
}

function printCharacter(character) {
    if (arrChatacter.length < 2) {
        if (arrChatacter.length == 1) {
            var img = document.createElement('img');
            img.src = '/img/CharacterP2/' + character;
            document.getElementById('p2vs').appendChild(img)
        } else {
            var img = document.createElement('img');
            img.src = '/img/CharacterP1/' + character;
            document.getElementById('p1vs').appendChild(img)

        }
    }
}

function startGameClick() {
    if (arrChatacter.length == 2) {
        mainScreenDiv.style.visibility = 'hidden';
        fightScreenDiv.style.visibility = 'visible';

    }
}