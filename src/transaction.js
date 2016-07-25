function Transaction(unitName, unitPrice, quantity) {
  "use strict";
  this.unitName = unitName;
  this.unitPrice = unitPrice;
  this.quantity = quantity || 1;
}
