var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);
function prender()
{
  var led = new jf.Led(13);
  var led2 = new jf.Led(8);
  led.blink(100);
  led2.blink(500);
}
