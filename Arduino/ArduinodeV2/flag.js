var j = require("johnny-five");
var circuit = new j.Board();
 circuit.on("ready", onB);
 var light;
 var motor;
 var cell;
 var turno = 0;
 function onB()
{
  var confS = {pin:"A0",freq:50};

  cell = new j.Sensor(confS);

  light = new j.Led(13);


  motor = new j.Servo({
    pin:9,
    range:[1,45]
  });




  moveM();
}

function moveM(){

 console.log("light "+cell.value);
 console.log("turno"+turno);
 var lightIntensity = cell.value;

 if(lightIntensity < 10){

if(turno == 1){
  turno=0;
  motor.to(90,10);
  light.on();
  console.log("on");
}
else {

  turno=0;

}


 }else{
   light.off();
   console.log("off");
   motor.stop();
 }

  setTimeout(moveM,1000);
}
