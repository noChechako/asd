let elem = document.getElementById("game");
let steps = document.getElementsByClassName("cell");
let result = document.getElementById("result");
let button = document.getElementById("button");
let currentStep = 0;
let paused=false;

button.addEventListener("click", clear);
for (let i = 0; i < steps.length; i++) {
    steps[i].addEventListener("click", step);
}
let player = "X";

let game = [1, 2, 3];
let win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let bar = {
    "first player": 0,
    "second player": 0,
    "draw": 0
};
function step(element) {
console.log('2')
    if (player == "X" && !paused) {
        this.textContent = 'X';
        player = "O";
        result.innerHTML = "Ходит " + player;
        this.removeEventListener("click", step);
        game[this.dataset.id] = 'X';
        currentStep++;
        winCondition(this.dataset.id, this.textContent);

    }
    else if (player == "O" && !paused) {

        event.target.textContent = 'O';
        game[event.target.dataset.id] = 'O';
        player = "X";
        result.innerHTML = "Ходит " + player;
        this.removeEventListener("click", step);
        currentStep++;

        winCondition(event.target.dataset.id, event.target.textContent);
    }
}

function winCondition(id, player) {
    for (let i = 0; i < win.length; i++) {
        let id = win[i];
        let winner = game[id[0]] && game[id[0]] == game[id[1]] && game[id[1]] == game[id[2]];
        if (winner) {
            result.innerHTML = 'победил ' + player;
            paused=true;
            return true;
        }


    }
    if (currentStep == 9) {
        result.innerHTML = "Ничья";
        bar.draw++;
    }
    return false;
}
function clear() {
    for (let i = 0; i < elem.children.length; i++) {
        elem.children[i].innerHTML = '';
        steps[i].addEventListener("click", step);
        paused=false;
        game = [];
        currentStep=0;
    }
}