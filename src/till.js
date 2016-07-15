function Till() {
  this.restaurant = [
    {
      "shopName": "The Coffee Connection",
      "address": "123 Lakeside Way",
      "phone": "16503600708",
      "prices": [
        {
          "Cafe Latte": 4.75,
          "Flat White": 4.75,
          "Cappucino": 3.85,
          "Single Espresso": 2.05,
          "Double Espresso": 3.75,
          "Americano": 3.75,
          "Cortado": 4.55,
          "Tea": 3.65,
          "Choc Mudcake": 6.40,
          "Choc Mousse": 8.20,
          "Affogato": 14.80,
          "Tiramisu": 11.40,
          "Blueberry Muffin": 4.05,
          "Chocolate Chip Muffin": 4.05,
          "Muffin Of The Day": 4.55
        }
      ]
    }
  ];
  this.prices = this.restaurant[0].prices[0];
  this.keys = Object.keys(this.prices);
  this.header = 'Total || Tax amount | Total including tax';
  this.order = {};
  this.tax = 0.1;
}

Till.prototype.addToList = function(itemName) {
  if (this._hasItem(itemName) === true) {
    this.order[itemName] = this.prices[itemName];
  }
};

Till.prototype._hasItem = function(itemName) {
  for (var i = 0; i < this.keys.length; i++) {
    if (this.keys[i] === itemName){
      return true;
    }
  }
};

Till.prototype.printTotal = function(){
  var total = null;
  for (var key in this.order) {
      total += (this.order[key]);
  }
  return Math.round(total * 100)/100;
};

Till.prototype.printTotalIncTax = function(){
  var num = (this.printTotal()) * (this.tax + 1);
  return Math.round(num * 100)/100;
};
