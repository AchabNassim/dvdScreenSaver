let counter = 0;
const imagesNumber = 5;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const images = [];
const imagesSrc = [
    "imgs/dvd1.png",
    "imgs/dvd2.png",
    "imgs/dvd3.png",
    "imgs/dvd4.png",
    "imgs/dvd5.png",
];

const dvd = {
    sizeX : 98,
    sizeY : 75,
    x : (canvas.width / 2) - 40,
    y : (canvas.height / 2) - 40,
    dx : 1.5,
    dy : 1.5,
    index : 0
};

for (let i = 0; i < imagesNumber; i++) {
    images[i] = new Image();
    images[i].src = imagesSrc[i];
}


function moveDvd() {
    dvd.x += dvd.dx;
    dvd.y += dvd.dy;    
    if (dvd.x + dvd.sizeX >= canvas.width || dvd.x < 0)
    {
        counter++;
        dvd.dx *= -1;        
    }
    if (dvd.y + dvd.sizeY >= canvas.height || dvd.y + 20 < 0)
    {
        counter++;
        dvd.dy *= -1;
    }
    if (counter == 1)
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

