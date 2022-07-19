const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let speed = 15;

const dvd = {
  x: canvas.width / 2 - 30,
  y: canvas.height / 2,  
  dx: 4,
  dy: -4,
  image: new Image()
};

dvd.image.src = 'dvd-logo.png';

function draw(){
  setTimeout( () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // drawing the DVD
    ctx.fillStyle = 'white';
    ctx.fillRect(dvd.x, dvd.y, dvd.image.width * 0.14, dvd.image.height * 0.14);
    ctx.drawImage(dvd.image, dvd.x, dvd.y, dvd.image.width * 0.14, dvd.image.height * 0.14);
  }, speed)
}

function moveDvd (){
  dvd.x += dvd.dx;
  dvd.y += dvd.dy;
  if (dvd.x > canvas.width || dvd.x < 0){
    dvd.dx *= -1;
  }
  if (dvd.y > canvas.height || dvd.y < 0){
    dvd.dy *= -1;
  }
}

function update(){
  moveDvd();
  draw();
  requestAnimationFrame(update);
} 
