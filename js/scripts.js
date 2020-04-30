let left = false,
  up = false,
  right = false,
  down = false,
  score_counter = 0,
  speed_counter = 0,
  gear_counter = 1,
  endOfGame = false,
  highscore = document.getElementById("highscore"),
  score = document.getElementById("score"),
  speed = document.getElementById("speed"),
  gear = document.getElementById("gear"),
  game_over = 0;

last_score = localStorage.getItem("high");
highscore.innerHTML = "HIGHSCORE : " + last_score;
let animation;
usrCar = document.getElementById("userCar");

animation = requestAnimationFrame(repeat);
checkSpeed();

function repeat() {
  for (let i = 0; i <= 4; i++) {
    moveLanes(document.getElementById("lane_l" + i));
    moveLanes(document.getElementById("lane_r" + i));
  }

  for (let i = 0; i < 3; i++) {
    let car = document.getElementById("oppCar" + i);
    setTimeout(function () {
      moveOpp(car);
    }, 750 * (i + getRandomInt(2, 6)) + getRandomInt(500, 2000));
    // moveOpp(car)
    getMovement(car);
  }
  if (!endOfGame) {
    animation = requestAnimationFrame(repeat);
  } else {
    gameOver();
  }
}

function moveLanes(lane) {
  let line = parseInt(lane.style.top);

  line += 1 + speed_counter / 16;
  lane.style.top = line + "%";
  if (lane.style.top > "90%") {
    lane.style.top = "-3%";
  }
}

function moveOpp(oppCar) {
  detect_collision(oppCar, usrCar);
  let oppPos = parseInt(oppCar.style.top);
  oppPos += 1 + speed_counter / 16;

  oppCar.style.top = oppPos + "%";
  if (oppCar.style.top > "90%" && !game_over) {
    oppCar.style.top = 0;
    updateScore();
  }
}

userPos = [parseInt(usrCar.style.left), parseInt(usrCar.style.top)];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function returnPX(prcnt) {
  return parseInt(roadWidth) * (prcnt / 100);
}

function getMovement(car) {
  let x = returnPX(parseInt(car.style.left));
  let y = returnPX(parseInt(car.style.top));
  let w = parseInt(car.style.width);
  let h = parseInt(car.style.height);
  return [x, y, w, h];
}

function detect_collision(oppCar, userCar) {
  let vala = getMovement(oppCar);
  let x1 = vala[0];
  let y1 = vala[1];
  let w1 = vala[2];
  let h1 = vala[3];
  valb = getMovement(userCar);
  let x2 = valb[0];
  let y2 = valb[1];
  let w2 = valb[2];
  let h2 = valb[3];

  if (y1 + h1 < y2 || y1 > y2 + h2 || x1 + w1 < x2 || x1 > x2 + w2) {
    return false;
  } else {
    endOfGame = true;
    gameOver();
  }
}

function gameOver() {
  cancelAnimationFrame(animation);

  document.getElementById("metrics").style.visibility = "hidden";

  road.innerHTML = "";

  let btn_res = document.createElement("SPAN");
  btn_res.innerHTML = "PRESS F5 TO RESTART";
  btn_res.style.position = "absolute";
  btn_res.style.left = "40%";
  btn_res.style.top = "30%";
  let dsp_score = document.createElement("SPAN");
  dsp_score.style.position = "absolute";
  dsp_score.style.left = "40%";
  dsp_score.style.top = "35%";
  road.appendChild(btn_res);
  road.appendChild(dsp_score);
}

function checkSpeed() {
  switch (gear_counter) {
    case 1:
      speed_counter = 5;
      break;
    case 2:
      speed_counter = 10;
      break;
    case 3:
      speed_counter = 15;
      break;
    case 4:
      speed_counter = 20;
      break;
    case 5:
      speed_counter = 25;
      break;
  }
  speed.innerHTML = "SPEED : " + speed_counter;
}

function updateScore() {
  score_counter++;
  score.innerHTML = "SCORE : " + score_counter;
  setHighScore();
}

function setHighScore() {
  if (score_counter > last_score) localStorage.setItem("high", score_counter);
}
