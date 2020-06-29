var express = require("express");
var app = express();
app.get("/", start);
app.get("/courses", courses);


function start(request,result)
{
  result.send("this is <strong>home</strong>");
}
function courses(request,result)
{
  result.send("this are <strong>courses</strong>");
}
app.listen(8989);
