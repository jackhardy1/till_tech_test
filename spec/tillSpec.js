describe('Till', function() {

  var newTill;

  beforeEach(function() {
    newTill = new Till();
  });

  describe('default settings', function(){
    it('has a name, menu and date', function(){
      expect(newTill.server).toEqual('unidentified');
    });
  });

  describe('#addItem', function(){
    it('adds a name and price to order', function(){
      newTill.addItem("Tea",2);
      expect(newTill.showLastOrder().unitName).toEqual("Tea");
    });

    it('raises an error when item not found', function(){
      expect(newTill.addItem("Coffee banana").toThrow("No item by that name on the menu"));
    });
  });

  describe('#setTax', function(){
    it('default tax is 10 percent', function(){
      expect(newTill.showTax()).toEqual(0.1);
    });

    it('changes the tax of the restaurant', function(){
      newTill.setTax(0.4);
      expect(newTill.showTax()).toEqual(0.4);
    });
  });

  describe('#printTotal', function(){
    it('prints total excluding tax', function(){
      newTill.addItem('Tea');
      newTill.addItem('Affogato');
      expect(newTill.printTotal()).toEqual("Total: 18.45");
    });
  });

  describe('#printTotalIncTax', function(){
    it('prints total including tax', function(){
      newTill.addItem('Tea');
      newTill.addItem('Affogato');
      expect(newTill.printTotalIncTax()).toEqual("Total Including Tax: 20.30");
    });
  });

  describe('#printBill', function(){
    it('prints the bill with itemName, Price & Quantity', function(){
      newTill.addItem('Tea');
      newTill.addItem('Affogato');
      expect(newTill.printBill()).toEqual("Server: unidentified\nItem || Unit Price || Quantity\nTea || 3.65 || 1\nAffogato || 14.80 || 1\nTotal: 18.45\nTotal Including Tax: 20.30");
    });
  });

  describe('#pay', function(){
    it('raises an error if insufficient balance', function(){
      newTill.addItem('Tea');
      newTill.addItem('Affogato');
      expect(newTill.pay(20.00).toThrow("Insufficient balance paid!"));
    });
  });
});
