const cvs = document.getElementById("game");
const cxt = cvs.getContext('2d');


function draw() {
    //region clean old
    cxt.fillStyle = "rgb(0,0,0)";
    cxt.fillRect(player1.x, player1.y, 10, 30); //TODO optimize
    cxt.fillRect(player2.x, player2.y, 10, 30);
    //endregion

    movePaddles();

    cxt.fillStyle = "rgb(255,255,255)";
    cxt.fillRect(player1.x, player1.y, 10, 30);
    cxt.fillRect(player2.x, player2.y, 10, 30);
}

function move(event) {
    switch (event.key) {
        case "z":
            player1.direction = "UP";
            break;
        case "s":
            player1.direction = "DOWN";
            break;

        case "ArrowUp":
            player2.direction = "UP";
            break;
        case "ArrowDown":
            player2.direction = "DOWN";
            break;
    }
}

function stop(event) {
    if (["z", "s"].includes(event.key)) {
        player1.direction = undefined;
    } else if (["ArrowUp", "ArrowDown"].includes(event.key)) {
        player2.direction = undefined;
    }
}

setInterval(draw, 100);

document.addEventListener("keydown", move);
document.addEventListener("keyup", stop);