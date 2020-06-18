var numbers = 100;

for (var i = 0; i <= numbers; i++) {
  div = false;
  if(isDiv(i,3))
  {
    document.write("fizz");

  }
  if(isDiv(i,5))
    {
      document.write("Buzz");

    }
    if(!isDiv(i,3) && !isDiv(i,5))
    {
      document.write(i);
  }
  document.write("<br/>");
}

function isDiv(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else{
    return false;
  }
}
