var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

let rect = canvas.getBoundingClientRect();

document.getElementById("canvas").addEventListener("mousemove", draw);
document.getElementById("canvas").addEventListener("mousedown", setPosition);
document.getElementById("canvas").addEventListener("mouseenter", setPosition);

document.querySelector(".Red").addEventListener('click', chooseColorRed);
document.querySelector(".Green").addEventListener('click', chooseColorGreen);
document.querySelector(".Blue").addEventListener('click', chooseColorBlue);


function chooseColorRed(){
        context.strokeStyle='red';
}
function chooseColorGreen(){
        context.strokeStyle='green';
}
function chooseColorBlue(){
        context.strokeStyle='blue';
}
var pos = {x:0, y:0};

function setPosition(e){
    pos.x = e.pageX - rect.left;
    pos.y = e.pageY - rect.top;
}
function draw(e){

  

    if(e.buttons !== 1) return;

    context.beginPath();
    context.lineWidth=5;
    context.lineCap='round';
    context.moveTo(pos.x, pos.y); //from
    setPosition(e);
    context.lineTo(pos.x, pos.y);
    context.stroke();
}



