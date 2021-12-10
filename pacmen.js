//let pos = 0;
const pacArray = ['PacMan1.png', 'PacMan3.png']
//let direction = 0;

const pacMen = []; // This array holds all the pacmen

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Add image to div id = game
  let newimg = document.createElement('img');
  let game = document.getElementById('game');

  newimg.style.position = 'absolute';
  newimg.src = pacArray[0];
  newimg.width = 100;
  
  //set position here
  newimg.style.left = position;

  //add new Child image to game
  game.appendChild(newimg);

  // return details in an object
  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    changeDirection(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
  });
  setTimeout(update, 20);
}

let width = window.innerWidth;
let height = window.innerHeight;

function checkCollisions(item) {
  //detect collision with all walls and make pacman bounce
  if(item.position.x < 0 || item.position.x + 100 >= width){
        item.velocity.x = -item.velocity.x;

      }if (item.position.y < 0 || item.position.y + 100 >= height){
      item.velocity.y = -item.velocity.y;
    }
}


function changeDirection(item){
//change image source to indicate changing direction
  if(item.position.x < 0){
    item.newimg.src = pacArray[0];
  }
  if(item.position.x + 100 >= width){
    item.newimg.src = pacArray[1];
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}