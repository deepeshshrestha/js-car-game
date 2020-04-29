let road = document.getElementById("road");
for (var i = 0; i <= 4; i++) {
  createLanes(i);
}
for (var i = 0; i <= 3; i++) {
  createCars(i);
}
createUser();

function createUser() {
  let userCar = document.createElement("IMG");
  userCar.id = "userCar";
  userCar.classList.add("car");
  userCar.src = "./images/car.png";
  userCar.style.top = "75%";
  userCar.style.left = "22%";
  userCar.style.width = "70px";
  userCar.style.height = "150px";
  userCar.style.position = "absolute";
  road.appendChild(userCar);
}

function createCars(i) {
  let oppCar = document.createElement("IMG");
  oppCar.id = "oppCar" + i;
  oppCar.classList.add("car");
  oppCar.src = "./images/opponent.png";
  oppCar.style.top = "-30%";
  oppCar.style.width = "80px";
  oppCar.style.height = "150px";
  oppCar.style.position = "absolute";
  switch (i) {
    case 0:
      oppCar.style.left = "5%";
      break;
    case 1:
      oppCar.style.left = "40%";
      break;
    case 2:
      oppCar.style.left = "75%";
      break;
    case 3:
      oppCar.style.left = "25%";
      break;
  }
  road.appendChild(oppCar);
}

function createLanes(i) {
  var lane_l = document.createElement("div");
  lane_l.id = "lane_l" + i;
  lane_l.classList.add("lane");
  lane_l.style.left = "33%";
  lane_l.style.top = "-5%";
  lane_l.style.top = i * 18 + "%";

  var lane_r = document.createElement("div");
  lane_r.id = "lane_r" + i;
  lane_r.classList.add("lane");
  lane_r.style.left = "66%";
  lane_r.style.top = "-5%";
  lane_r.style.top = i * 18 + "%";

  road.appendChild(lane_l);
  road.appendChild(lane_r);
}
