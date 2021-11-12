const rect = document.querySelector('#rect');
const circle = document.querySelector('#circle');
const line = document.querySelector('#line');

const brush = document.querySelector('#brush');
const mycolor = document.querySelector('#mycolor');

const inc = document.querySelector('#inc');
const num = document.querySelector('#num');
const dec = document.querySelector('#dec');

const eraser = document.querySelector('#eraser');
const surycanvas = document.querySelector('#surycanvas');
const syc = surycanvas.getContext("2d");
surycanvas.width = innerWidth/1.5;
surycanvas.height = innerHeight/1.5;

// let color = mycolor.value;

let size = 6;
let eventDown = false;
let initial;
let final;
let snap;
let drawcmd = drawLine;

surycanvas.addEventListener("mousedown",function(e){
    eventDown = true;
    initial = new Coordinates(e.offsetX,e.offsetY);
    snap = syc.getImageData(0,0, surycanvas.width, surycanvas.height);
});


surycanvas.addEventListener("mousemove",function(e){
    if(eventDown){
        final = new Coordinates(e.offsetX,e.offsetY);
        drawcmd();
        syc.restore();
    }
});

surycanvas.addEventListener("mouseup",function(e){
    syc.putImageData(snap, 0, 0);
    drawcmd();
    eventDown = false;
    initial = null;
    final = null;
    snap = null;
});

function drawLine() {
    console.log('hi');
    syc.putImageData(snap, 0, 0);
    syc.strokeStyle = mycolor.value;
    syc.lineWidth = size;
    syc.beginPath();
    syc.moveTo(initial.x, initial.y);
    syc.lineTo(final.x, final.y);
    syc.stroke();
    syc.closePath();
}

rect.addEventListener('click',()=>{
    drawcmd = drawRect;
})
circle.addEventListener('click',()=>{
    drawcmd = drawCircle;
})
line.addEventListener('click',()=>{
    drawcmd = drawLine;
})
eraser.addEventListener('click',()=>{
    drawcmd = erase;
})


function drawRect(){
    syc.putImageData(snap, 0, 0);
    syc.strokeStyle = mycolor.value;
    syc.lineWidth = size;
    syc.beginPath();
    syc.rect(
        initial.x,
        initial.y,
        final.distance(initial).x,
        final.distance(initial).y
    );
    syc.stroke();
    syc.closePath();
}

function drawCircle() {
    syc.putImageData(snap, 0, 0);
    syc.strokeStyle = mycolor.value;
    syc.lineWidth = size;
    syc.beginPath();
    syc.arc(
      initial.x,
      initial.y,
      final.hypotenuse(initial),
      0,
      Math.PI * 2
    );
    syc.stroke();
    syc.closePath();
  }

function erase() {
    syc.putImageData(snap, 0, 0);
    // syc.strokeStyle = 'black';
    syc.lineWidth = 2;
    syc.beginPath();
    syc.arc(
      initial.x,
      initial.y,
      final.hypotenuse(initial),
      0,
      Math.PI * 2
    );
    // syc.stroke();
    syc.fillStyle = 'white';
    syc.fill();
    // syc.closePath();
  }


class Coordinates {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    hypotenuse(point) {
      return Math.sqrt(
        Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2)
      );
    }
    distance(point) {
      return new Coordinates(
        Math.abs(this.x - point.x),
        Math.abs(this.y - point.y)
      );
    }
  }

function updateSizeOnScreen() {
    num.innerText = size;
}

inc.addEventListener('click', () => {
    size += 1;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

dec.addEventListener('click', () => {
    size -= 1;

    if (size < 2) {
        size = 2;
    }

    updateSizeOnScreen();
})

reset.addEventListener('click', () => syc.clearRect(0, 0, surycanvas.width, surycanvas.height));
