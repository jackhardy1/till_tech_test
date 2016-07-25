// function Order(name, menu, date){
//   "use strict";
//   this.name = name || "default";
//   this.menu = menu || new Menu();
//   this.date = date || Date.now();
//   this.prices = this.menu.list[0].prices[0];
//   this.keys = Object.keys(this.prices);
//   this.order = {};
// }
//
// Order.prototype.addItem = function(itemName) {
//   if (this._hasItem(itemName) === true) {
//     this.order[itemName] = this.prices[itemName];
//   }
// };
//
// Order.prototype._hasItem = function(itemName) {
//   for (var i = 0; i < this.keys.length; i++) {
//     if (this.keys[i] === itemName){
//       return true;
//     }
//   }
// };
