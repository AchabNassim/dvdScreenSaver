const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const images = [];
let counter = 0;
images[0] = new Image();
images[0].src = "imgs/dvd1.png";
images[1] = new Image();
images[1].src = "imgs/dvd2.png";
images[2] = new Image();
images[2].src = "imgs/dvd3.png";
images[3] = new Image();
images[3].src = "imgs/dvd4.png";
images[4] = new Image();
images[4].src = "imgs/dvd5.png";

const dvd = {
    sizeX : 100,
    sizeY : 70,
    x : (canvas.width / 2) - 100,
    y : (canvas.height / 2) - 100,
    dx : 1.5,
    dy : 1.5,
    index : 0
};

function moveDvd() {
    dvd.x += dvd.dx;
    dvd.y += dvd.dy;    
    if (dvd.x + dvd.sizeX > canvas.width || dvd.x < 0)
    {
        counter++;
        dvd.dx *= -1;        
    }
    if (dvd.y + dvd.sizeY > canvas.height || dvd.y + 20 < 0)
    {
        counter++;
        dvd.dy *= -1;
    }
    if (counter == 2)
    {
        dvd.index++;
        counter = 0;
        if (dvd.index > 4)
            dvd.index = 0;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(images[dvd.index], dvd.x, dvd.y);
    window.requestAnimationFrame(moveDvd);
}

moveDvd();

