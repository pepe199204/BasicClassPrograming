var D = document.getElementById('Drawing');
var stage = D.getContext("2d");
console.log(stage);
var widthC = D.width;

var yI;
var yF;
var colorD = "pink";

var textL = document.getElementById('textLines');
var getBtn = document.getElementById('btn');

getBtn.addEventListener("click",drawLineClick);
/*
var i = 0;
while(i < lines)
{
  yI = 10 * i;
  yF = 10 * i;
  i=i+2;
  console.log(i);
  drawLine("orange",0,yI,yF,300);
}*/

function drawLine(color,xInit,yInit,xFinal,yFinal)
{
  stage.beginPath();
  stage.strokeStyle = color;
  stage.moveTo(xInit,yInit);
  stage.lineTo(xFinal,yFinal);
  stage.stroke();
  stage.closePath();
}

function drawLineClick()
{
  var txtL = parseInt(textLines.value);
  var spaceL = widthC / txtL;
  console.log(spaceL,widthC,txtL);
  for (var i = 0; i < txtL; i++) {
    yI = spaceL * i;
    yF = spaceL * i;
    console.log(i);
    drawLine("orange",0,yI,yF,300);
  }
  drawLine(colorD,1,1,1,300);
  drawLine(colorD,1,299,299,299);
  drawLine(colorD,300,300,300,1);
  drawLine(colorD,299,1,1,1);


}
