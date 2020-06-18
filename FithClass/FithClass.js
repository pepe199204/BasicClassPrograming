var keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var box = document.getElementById("stage");
var paper = box.getContext("2d");
var x = 150;
var y = 150;


function drawLine(color,xInit,yInit,xFinal,yFinal,stage)
{
  stage.beginPath();
  stage.strokeStyle = color;
  stage.lineWidth = 2;
  stage.moveTo(xInit,yInit);
  stage.lineTo(xFinal,yFinal);
  stage.stroke();
  stage.closePath();
}
drawLine("red",149,149,151,151,paper);
console.log(keys);
document.addEventListener("keyup",drawKeyboard);
function drawKeyboard(evt){

  var color = "blue";
  var movement = 10;
  switch (evt.keyCode) {
    case keys.DOWN:
      console.log("down");
      drawLine(color,x,y,x,y+movement,paper);
      y = y + movement;
      break;
    case keys.LEFT:
      console.log("left");
      drawLine(color,x,y,x-movement,y,paper);
      x = x - movement;
      break;
    case keys.UP:
      console.log("up");
      drawLine(color,x,y,x,y-movement,paper);
      y = y - movement;
      break;
    case keys.RIGHT:
      console.log("right");
      drawLine(color,x,y,x+movement,y,paper);
      x = x + movement;
      break;

  }
  /*
  if(evt.keyCode == keys.UP)
  {
    console.log("up");
  }
  if(evt.keyCode == keys.DOWN)
  {
    console.log("down");
  }
  if(evt.keyCode == keys.RIGHT)
  {
    console.log("right");
  }
  if(evt.keyCode == keys.LEFT)
  {
    console.log("left");
  }
*/
}
