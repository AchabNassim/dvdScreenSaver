const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const dvd = {
  x: canvas.width / 2 - 30,
  y: canvas.height / 2,  
  dx: 4,
  dy: -4,
  image: new Image()
};

function drawDvd(){
  ctx.beginPath();
  ctx.rect(dvd.x, dvd.y, dvd.w, dvd.h);
  ctx.fillStyle = 'rgba(0,0,0,0.8)';
  ctx.fill();
  ctx.closePath();
}

dvd.image.src = 'dvd-logo.png';