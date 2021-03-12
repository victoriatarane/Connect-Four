import { Game } from "./game.js"

let game;
const clickTargets = document.getElementById('click-targets');

function updateUI() {
    const boardHolder = document.getElementById("board-holder");
    const gameName = document.getElementById("game-name");
    if (game === undefined) {
        boardHolder.setAttribute("class", "is-invisible");
    } else {
        boardHolder.classList.remove("is-invisible");
        gameName.innerHTML = game.getName();
    }
    if (game.currentPlayer === 1) {
        clickTargets.classList.add('black');
        clickTargets.classList.remove('red');
    } else {
        clickTargets.classList.add('red');
        clickTargets.classList.remove('black');
    }
    for (let i = 0; i <= 6; i++) {
        for (let j = 0; j <= 5; j++) {
            let square = document.getElementById(`square-${j}-${i}`);
            square.innerHTML = '';
            if (game.getTokenAt(j, i) === 1) {
                let blackDiv = document.createElement('div');
                blackDiv.classList.add('token', 'black');
                square.appendChild(blackDiv);
                console.log(square)
            } else if (game.getTokenAt(j, i) === 2) {
                let redDiv = document.createElement('div');
                redDiv.classList.add('token', 'red');
                square.appendChild(redDiv);
                //let currenctSq = document.getElementById(`square-${i}-${j}`);
            }
        }
    }
    for (let i = 0; i <= 6; i++) {
        let newVar2 = document.getElementById(`column-${i}`);
        if (game.isColumnFull(i) === true) {
            newVar2.classList.add("full");
        } else if (game.isColumnFull(i) === false) {
            newVar2.classList.remove("full");
            // newVar2.setAttribute("class", "full");
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const playerOne = document.getElementById('player-1-name');
    const playerTwo = document.getElementById('player-2-name');
    const newGameButton = document.getElementById('new-game');
    const inputField = document.getElementById("form-holder");

    inputField.addEventListener("keyup", event => {
        if (playerOne.value.length !== 0 && playerTwo.value.length !== 0) {
            newGameButton.disabled = false;
        }
    })

    inputField.addEventListener("keyup", event => {
        if (playerOne.value.length === 0 || playerTwo.value.length === 0) {
            newGameButton.disabled = true;
        }
    })

    newGameButton.addEventListener("click", event => {
        let player1 = playerOne.value;
        let player2 = playerTwo.value;
        game = new Game(player1, player2);
        playerOne.value = "";
        playerTwo.value = "";
        newGameButton.disabled = true;
        updateUI();
    })

    clickTargets.addEventListener('click', event => {
        let var1 = event.target.id;
        game.playInColumn(Number(var1[var1.length - 1]));
        updateUI();
    })







})