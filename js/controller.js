
document.onkeydown = starAnim;

function starAnim(e) {

    e = e || window.event;

    if (e.keyCode == '37' && left == false) {
        left = requestAnimationFrame(moveLeft)
    } else if (e.keyCode == '38' && up == false) {
        up = requestAnimationFrame(moveUp)
    } else if (e.keyCode == '39' && right == false) {
        right = requestAnimationFrame(moveRight)
    } else if (e.keyCode == '40' && down == false) {
        down = requestAnimationFrame(moveDown)
    } else if (e.keyCode == '71') {
        checkSpeed();
        if (gear_counter <= 4) {
            gear_counter++;
            gear.innerHTML = "GEAR : " + gear_counter;
            checkSpeed()
        }
    }
}

document.onkeyup = stopAnim;

function stopAnim(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
        cancelAnimationFrame(left);
        left = false
    } else if (e.keyCode == '38') {
        cancelAnimationFrame(up);
        up = false
    } else if (e.keyCode == '39') {
        cancelAnimationFrame(right);
        right = false
    } else if (e.keyCode == '40') {
        cancelAnimationFrame(down);
        down = false
        if (gear_counter >= 2) {
            gear_counter--;
            gear.innerHTML = "GEAR : " + gear_counter;
        }
        checkSpeed();
    }
}


function moveLeft() {
    if (0 < userPos[0]) {
        (userPos[0] -= 1);
        usrCar.style.left = userPos[0] + "%"
        left = requestAnimationFrame(moveLeft)
    }

}

function moveUp() {
    if (0 < userPos[1]) {
        (userPos[1] -= 1);
        usrCar.style.top = userPos[1] + "%"
        up = requestAnimationFrame(moveUp)
    }
}

function moveRight() {
    if (80 > userPos[0]) {
        (userPos[0] += 1);
        usrCar.style.left = userPos[0] + "%"
        right = requestAnimationFrame(moveRight)
    }
}

function moveDown() {
    if (70 > userPos[1]) {
        (userPos[1] += 1);
        usrCar.style.top = userPos[1] + "%"
        down = requestAnimationFrame(moveDown)
    }
}