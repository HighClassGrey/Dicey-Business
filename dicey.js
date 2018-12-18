
class Die {
    constructor() {
        this.value;
        this.roll();
        this.div = $('<div></div>')
        this.div.text(this.value);
        this.div.css({
            'display': 'inline-block',
            'background-color': 'red',
            'height': '5px',
            'width': '5px'
        });
        $('body').append(this.div);
        $('<div><button>' + 'MyName' + '</button></div>').appendTo('body');
    }

    roll() {
        this.value = Math.floor((Math.random() * 6) + 1);
    }
}
let newDice = new Die();

console.log(newDice.value);
newDice.roll()
console.log(newDice.value)