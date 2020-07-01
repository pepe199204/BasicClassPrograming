var jf = require("johnny-five");
var circuit = new jf.Board();

circuit.on("ready",on);

function on(){
  var led = new jf.Led(13);
  led.blink(500);
}
