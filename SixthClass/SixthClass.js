/*var z;

for (var i = 0; i < 10; i++) {
  z = randomF(1,5);
  document.write(z+", ");
}
*/
var vp = document.getElementById('PlatziVillage');
var paper = vp.getContext("2d");

    var count = randomF(5,25);

var background = {
  url: "Assets/tile.webp",
  loadOk: false
};

var cows = {
  url: "Assets/cow.webp",
  loadOk: false
};

background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load",loadBg);
function loadBg()
{
  background.loadOk = true;
  draw();
}
cows.image = new Image();
cows.image.src = cows.url;
cows.image.addEventListener("load",loadCows);
function loadCows()
{
  cows.loadOk = true;
  draw();
}

function draw()
{

  if(background.loadOk)
  {
    paper.drawImage(background.image,0,0);
  }
  if(cows.loadOk)
  {
    console.log(count);
    for(var i=0;i<count;i++)
    {
      var x = randomF(0,7);
      var y = randomF(0,7);
      var x = x * 60;
      var y = y * 60;
      paper.drawImage(cows.image,x,y);
    }

  }
}
/*
var mapSrc = "Assets/tile.webp";
var imageBackground = new Image();
imageBackground.src = mapSrc;
imageBackground.addEventListener("load",drawBackground);
function drawBackground()
{
  paper.drawImage(imageBackground,0,0);
}
var cowSrc = "Assets/cow.webp";
var imageCow = new Image();
imageCow.src = cowSrc;
imageCow.addEventListener("load",drawCow);
function drawCow()
{
  paper.drawImage(imageCow,20,10);
}

var chickenSrc = "Assets/chicken.webp";
var imageChicken = new Image();
imageChicken.src = chickenSrc;
imageChicken.addEventListener("load",drawChicken);
function drawChicken()
{
  paper.drawImage(imageChicken,10,300);
}

var pigSrc = "Assets/pig.webp";
var imagePig = new Image();
imagePig.src = pigSrc;
imagePig.addEventListener("load",drawPig);
function drawPig()
{
  paper.drawImage(imagePig,150,300);
}
*/

function randomF(min, max){
  var result;
  result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
}
