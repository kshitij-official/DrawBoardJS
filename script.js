var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');


document.getElementById("canvas").addEventListener("mousedown", drawRectangle);

function drawRectangle(e){
    let rect = canvas.getBoundingClientRect();

    var X = e.pageX - rect.left;
    var Y = e.pageY - rect.top;
    console.log(X, Y);


    context.fillStyle ='rgba(0, 0, 54, 0.8)';
    context.fillRect(X, Y, 5, 5);

}



