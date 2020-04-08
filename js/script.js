let turn = false;
const players = [];
let end = false;
let cont = 1;

//Função para capturar o nome dos jogadores
function getName() {
    let name1 = prompt("Inform the name of the first player!");
    if (name1 != "") {
        let name2 = prompt("Inform the name of the second player!");
        if (name2 != "") {
            players.push(name1, name2);
        } else {
            alert("Your name cannot be empty");
            getName();
        }
    } else {
        alert("Your name cannot be empty");
        getName();
    }
}

//Função para mostrar de quem é a vez
function whoseTurnIsIt() {
    if (turn == false) {
        document.getElementById('whoseTurnIsIt').innerHTML = `Player of the Turn: ${players[0]}`;
        console.log(cont);
    } else {
        document.getElementById('whoseTurnIsIt').innerHTML = `Player of the Turn: ${players[1]}`;
        console.log(cont);
    }
}

//Função que controla a vez
function controlTurn(identifier) {
    if (end != true) {
        if (checksField(identifier)) {
            if (turn == false) {
                document.getElementById(identifier).innerHTML = "X";
                turn = true;
                whoseTurnIsIt();
                checksEndGame();
                cont++;
            } else {
                document.getElementById(identifier).innerHTML = "O";
                turn = false;
                whoseTurnIsIt();
                checksEndGame();
                cont++;
            }
        }
    }
}


//Função verificadora
function checksField(identifier) {
    if ((document.getElementById(identifier).innerHTML != 'X') && (document.getElementById(identifier).innerHTML != 'O')) {
        return true;
    } else {
        return false;
    }
}

//Função verifica se algúem ganhou
function checksEquality(id1, id2, id3) {
    var field1 = 'div' + id1;
    var field2 = 'div' + id2;
    var field3 = 'div' + id3;
    var contentField1 = document.getElementById(field1).innerHTML;
    var contentField2 = document.getElementById(field2).innerHTML;
    var contentField3 = document.getElementById(field3).innerHTML;
    if (contentField1 != "") {
        if ((contentField1 == contentField2) && (contentField2 == contentField3)) {
            if (document.getElementById(field1).innerHTML == "X") {
                document.getElementById('whoseTurnIsIt').innerHTML = `${players[0]} won!`;
                return true;
            } else {
                document.getElementById('whoseTurnIsIt').innerHTML = `${players[1]} won!`;
                return true;
            }
        }
    }
}

//Função que verifica fim de jogo
function checksEndGame() {
    if (checksEquality(1, 2, 3) ||
        checksEquality(4, 5, 6) ||
        checksEquality(7, 8, 9) ||
        checksEquality(1, 4, 7) ||
        checksEquality(2, 5, 8) ||
        checksEquality(3, 6, 9) ||
        checksEquality(3, 5, 7) ||
        checksEquality(1, 5, 9)
    ) {
        end = true;
    }else if(cont > 8){
        document.getElementById('whoseTurnIsIt').innerHTML = 'Nobody won!!';
    }
}
