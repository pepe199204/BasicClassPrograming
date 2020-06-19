class Bill {
  constructor(valueP, quantityP) {
    this.value = valueP;
    this.quantity = quantityP;
  }
}
var boxATM = [];
var delivered = [];

boxATM.push(new Bill(50,3));
boxATM.push(new Bill(20,2));
boxATM.push(new Bill(10,2));
var money = 210;
var div = 0;
var papers = 0;

var getBtn = document.getElementById("get");
getBtn.addEventListener("click", deliveryMoney);
