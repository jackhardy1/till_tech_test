var Till = (function(){
  var privateStore = {};
  var uid = 0;

function Till(name, menu, date) {
  "use strict";
  this.server = name || 'unidentified';
  this.menu = menu || new Menu();
  this.date = date || Date.now();

  privateStore[this.id = uid++] = {};
  privateStore[this.id].order = [];
  privateStore[this.id].tax = 0.1;

  this.header = 'Item || Unit Price || Quantity';

  this.prices = this.menu.list[0].prices[0];
  this.keys = Object.keys(this.prices);
}

Till.prototype.addItem = function(itemName,quantity) {
  if (this._hasItem(itemName) === true) {
    var unitPrice = this.prices[itemName];
    var newItem = new Transaction(itemName,unitPrice,quantity);
    privateStore[this.id].order.push(newItem);
  } else {
    throw new Error("No item by that name on the menu");
  }
};

Till.prototype.showLastOrder = function() {
  return privateStore[this.id].order[privateStore[this.id].order.length-1];
};

Till.prototype.printBill = function(){
  var bill = [];
  bill.push("Server: " + this.server);
  bill.push(this.header);
  for (var i=0; i< privateStore[this.id].order.length; i++){
    var array = this._addItemsToArray(i);
    bill.push(array.join(" || "));
  }
  bill.push(this.printTotal());
  bill.push(this.printTotalIncTax());
  return bill.join('\n');
};

Till.prototype.printTotal = function(){
  var total = null;
  for (var i = 0; i < privateStore[this.id].order.length; i++) {
      total += (privateStore[this.id].order[i].unitPrice * privateStore[this.id].order[i].quantity);
  }
  return "Total: " + (total.toFixed(2));
};

Till.prototype.printTotalIncTax = function(){
  return "Total Including Tax: " + this.showTotalIncTax();
};

Till.prototype.setTax = function(number){
  privateStore[this.id].tax = number;
};

Till.prototype.showTax = function(){
  return privateStore[this.id].tax;
};

Till.prototype.pay = function(amount){
  if(this._insufficientBalance(amount)){
    throw new Error("Insufficient balance paid!");
  }
};

Till.prototype.showTotalIncTax = function(){
  var total = null;
    for (var i = 0; i < privateStore[this.id].order.length; i++) {
        total += (privateStore[this.id].order[i].unitPrice * privateStore[this.id].order[i].quantity);
    }
    var totalWithTax = (total * (privateStore[this.id].tax + 1)).toFixed(2);
    return totalWithTax;
};

Till.prototype._insufficientBalance = function(amount){
  return(amount < this.showTotalIncTax());
};

Till.prototype._hasItem = function(itemName) {
  for (var i = 0; i < this.keys.length; i++) {
    if (this.keys[i] === itemName){
      return true;
    }
  }
};

Till.prototype._addItemsToArray = function(i){
  var array = [];
  var unitName = privateStore[this.id].order[i].unitName;
  var unitPrice = privateStore[this.id].order[i].unitPrice;
  var quantity = privateStore[this.id].order[i].quantity;

  array.push(unitName);
  array.push(unitPrice.toFixed(2));
  array.push(quantity);

  return array;
};

return Till;
}());
