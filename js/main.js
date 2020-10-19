
let arrCharacter = [];
let mainScreenDiv = document.getElementById('mainScreen');
let fightScreenDiv = document.getElementById('fightScreen');
let winnerDiv = document.getElementById('winnerText');
let healthBar1 = document.getElementById('healthBarP1');
let healthBar2 = document.getElementById('healthBarP2');
let winnerText = document.getElementById('theWinnerIs');

class Character {
    constructor(name, attack, defense, life, speed, quote, picture) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.life = life;
        this.speed = speed;
        this.quote = quote;
        this.picture = picture;

    }
}

fightScreenDiv.style.visibility = 'hidden';
winnerDiv.style.visibility = 'hidden';


let f1 = new Character("Rick", 4, 2, 100, 8, "Wabba lubba dub dub!", "rick.png");
let f2 = new Character("Scary Terry", 4, 2, 100, 8, "You can run, but you can't hide, bitch", "terry.png");
let f3 = new Character("Cromulon", 4, 2, 100, 8, "Show me what you got", "showMe.png");
let f4 = new Character("Doofus Rick", 4, 2, 100, 8, "You guys are always so mean to me", "dumbRick.png");
let f5 = new Character("Prince Nebulon", 4, 2, 100, 8, "That was part of the simulation", "alienSimulation.png");
let f6 = new Character("Time Cop", 4, 2, 100, 8, "Hey man, remember me? I got some for your ass", "timeCop.png");


function characterSelect(character) {
    if (character == 'Character1') {
        printCharacter("rick.png")
        arrCharacter.push(f1);
    } else if (character == 'Character2') {
        printCharacter("terry.png")
        arrCharacter.push(f2);
    } else if (character == 'Character3') {
        printCharacter("showMe.png")
        arrCharacter.push(f3);
    } else if (character == 'Character4') {
        printCharacter("dumbRick.png")
        arrCharacter.push(f4);
    } else if (character == 'Character5') {
        printCharacter("alienSimulation.png")
        arrCharacter.push(f5);
    } else {
        printCharacter("timeCop.png")
        arrCharacter.push(f6);
    }
}

function printCharacter(character) {
    if (arrCharacter.length < 2) {
        if (arrCharacter.length == 1) {
            var img = document.createElement('img');
            img.src = './img/CharacterP2/' + character;
            document.getElementById('p2vs').appendChild(img)
        } else {
            var img = document.createElement('img');
            img.src = './img/CharacterP1/' + character;
            document.getElementById('p1vs').appendChild(img)

        }
    }
}

function startFight (){
    var img = document.createElement('img');
    img.src = './img/CharacterP1/' + arrCharacter[0].picture;
    document.getElementById('imageP1').appendChild(img)

    var img2 = document.createElement('img');
    img2.src = '. /img/CharacterP2/' + arrCharacter[1].picture;
    document.getElementById('imageP2').appendChild(img2)
}

function startGameClick() {
    if (arrCharacter.length == 2) {
        mainScreenDiv.style.visibility = 'hidden';
        fightScreenDiv.style.visibility = 'visible';
        startFight();
    }
}

function attack (fighter) {
    if (fighter == 0){
        if ((healthBar2.value + arrCharacter[0].defense) - arrCharacter[1].attack >= 0){
        healthBar2.value -=  arrCharacter[1].attack - arrCharacter[0].defense;
        } else{
            healthBar2.value = 0;
            finish (0);
        }
    }else{
        if ((healthBar1.value + arrCharacter[1].defense) - arrCharacter[0].attack >= 0){
            healthBar1.value -= arrCharacter[0].attack - arrCharacter[1].defense;
        } else{
            healthBar2.value = 0;
             finish (1);
        }
    }
}

function finish (winner){
    fightScreenDiv.style.visibility = 'hidden';
    winnerDiv.style.visibility = 'visible';
    winnerText.textContent += arrCharacter[winner].quote;
}


