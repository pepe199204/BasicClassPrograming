class Bill {
  constructor(valueP, quantityP) {
    this.value = valueP;
    this.quantity = quantityP;
  }
}
var boxATM = [];
var delivered = [];

boxATM.push(new Bill(100,10));
boxATM.push(new Bill(50,10));
boxATM.push(new Bill(20,30));
boxATM.push(new Bill(10,10));
boxATM.push(new Bill(5,10));
var money = 0;
var div = 0;
var papers = 0;

var result = document.getElementById("result");
var getBtn = document.getElementById("get");
getBtn.addEventListener("click", deliveryMoney);


function deliveryMoney(){
  var getMoney = document.getElementById("Money");
  money = parseInt(getMoney.value);
  for(var bi of boxATM)
  {
    if(money > 0)
    {
      div = Math.floor(money / bi.value);
      if(div > bi.quantity){
          papers = bi.quantity;

      }else{
        papers = div;
      }
      delivered.push(new Bill(bi.value,papers));
      money -= (bi.value * papers);
    }
  }
  if(money > 0)
  {
      console.log("no cash");
      result.innerHTML = "This ATM it`s poor" + "<br />";
  }else {
      for (var de of delivered) {
        if(de.quantity > 0){
          	result.innerHTML += de.quantity + " pappers of $ " + de.value + "<br />";
          }
      }
  }
}
