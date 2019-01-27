const MOVEMENT_SPEED = 5;

const player1 = {
    x: 0,
    y: 60,
    direction: undefined
};

const player2 = {
    x: 290,
    y: 60,
    direction: undefined
};

function movePaddles() {
    switch (player1.direction) {
        case "UP":
            player1.y -= MOVEMENT_SPEED;
            if (player1.y < 0) player1.y = 0;
            break;
        case "DOWN":
            player1.y += MOVEMENT_SPEED;
            if (player1.y > cvs.height-30) player1.y = cvs.height-30;
            break;
    }

    switch (player2.direction) {
        case "UP":
            player2.y -= MOVEMENT_SPEED;
            if (player2.y < 0) player2.y = 0;
            break;
        case "DOWN":
            player2.y += MOVEMENT_SPEED;
            if (player2.y > cvs.height-30) player2.y = cvs.height-30;
            break;
    }

}