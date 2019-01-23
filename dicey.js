let dice = [];
let btnGenerate = $('#getDie');
let btnRoll = $("#rollDie");
let btnSum = $("#sumDie");

// Creates class named 'Die'
class Die {
    constructor() {
        this.value
        this.roll();
        this.div = $('<div></div>');
        this.div.text(this.value);
        this.div.css({
            width: '60px',
            height: '60px',
            margin: '20px',
            border: '2px solid black',
            textalign: 'center',
            paddingtop: '20px',
            font: '24px',
            color: 'black',
            display: 'float'
        });

        $(this.div).appendTo('#dice-container');
        dice.push(this);
        this.div.click(() => {
            this.roll();
            console.log(this.value)
        });

        $(this.div).click(() => {
            $(this.div).remove();
            dice.splice($.inArray(this, dice), 1);
        });
    }

    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }
};

$(btnGenerate).click(() => {
    let die = new Die();
});


$(btnRoll).click(() => {
    for (let i = 0; i < dice.length; i++) {
        dice.value = dice[i].roll();
    }
});


$(btnSum).click(() => {
    let sum = 0;
    for (let i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    alert(`The sum of the values of all dice on the screen is ${sum}.`);
});
