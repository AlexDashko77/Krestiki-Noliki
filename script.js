const square = document.querySelectorAll(".square");
const win = document.querySelector(".winner");
const buttonStart = document.querySelector(".buttonStart");
const player = document.querySelector(".player__num");
let count = 1;
let x = 0;
let turn = 2;
function start() {
    let winner;
    let i = 0;
    let draw;
    for (let item of square) {
            item.addEventListener('click', function() {
                if(i % 2 == 0) {
                    if(x == 1) {
                        return;
                    }
                    if(this.textContent == 'O') {
                        return;
                    }
                    else {
                            player.textContent = "Turn: Player 2";
                            this.textContent = 'X';
                            draw = checkDraw();
                        if(draw == "DRAW") {
                            win.textContent = draw;
                            win.classList.add("visible");
                            player.textContent = "";
                            x = 1;
                            return;
                            }
                        
                        else {
                            winner = check();
                            if(winner == "WINNER 1") {
                                win.textContent = "Player 1: WIN";
                                win.classList.add("visible");
                                player.textContent = "";
                                x = 1; 
                                return;
                        }
                    }
                }
                i++;
                }
                else {
                    if(x == 1) {
                        return;
                    }
                    if(this.textContent == 'X') {
                        return;
                    }
                    else {
                        player.textContent = "Turn: Player 1";
                            this.textContent = 'O';
                            draw = checkDraw();
                            if(draw == "DRAW") {
                                win.textContent = draw;
                                win.classList.add("visible");
                                player.textContent = "";
                                x = 1;
                                return;
                            }
                        else {
                            winner = check();
                             if(winner == "WINNER 2") {
                                win.textContent = "Player 2: WIN";
                                win.classList.add("visible");
                                player.textContent = "";
                                x = 1; 
                                return; 
                            }
                        }
                    }
                    i++;
                }    
            });
    }
}
function checkDraw() {
    let fill = 0;
    let x = check();
    if(x == "WINNER 1" || x == "WINNER 2") return x;
    for(let i = 0; i < 9; i++) {
        if(square[i].textContent == 'O' || square[i].textContent == 'X') {
            fill++;
        }
        if(fill == 9) {
            return "DRAW";
        }
    }
}
function check() {
    if(square[0].textContent == 'X' && square[1].textContent == 'X' && square[2].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[3].textContent == 'X' && square[4].textContent == 'X' && square[5].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[6].textContent == 'X' && square[7].textContent == 'X' && square[8].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[0].textContent == 'X' && square[3].textContent == 'X' && square[6].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[1].textContent == 'X' && square[4].textContent == 'X' && square[7].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[2].textContent == 'X' && square[5].textContent == 'X' && square[8].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[0].textContent == 'X' && square[4].textContent == 'X' && square[8].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[6].textContent == 'X' && square[4].textContent == 'X' && square[7].textContent == 'X') {
        return "WINNER 1";
    }
    else if(square[6].textContent == 'X' && square[4].textContent == 'X' && square[2].textContent == 'X') {
        return "WINNER 1";
    }
    if(square[0].textContent == 'O' && square[1].textContent == 'O' && square[2].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[3].textContent == 'O' && square[4].textContent == 'O' && square[5].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[6].textContent == 'O' && square[7].textContent == 'O' && square[8].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[0].textContent == 'O' && square[3].textContent == 'O' && square[6].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[1].textContent == 'O' && square[4].textContent == 'O' && square[7].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[2].textContent == 'O' && square[5].textContent == 'O' && square[8].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[0].textContent == 'O' && square[4].textContent == 'O' && square[8].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[6].textContent == 'O' && square[4].textContent == 'O' && square[7].textContent == 'O') {
        return "WINNER 2";
    }
    else if(square[6].textContent == 'O' && square[4].textContent == 'O' && square[2].textContent == 'O') {
        return "WINNER 2";
    }
}
buttonStart.addEventListener("click", () => {
    win.classList.remove("visible");
    player.textContent = "Turn: Player 1";
    for(let i = 0; i < square.length; i++) {
        square[i].textContent = "";
    }
    win.textContent = "";
    count = 1;
    x = 0;
    start();
});


