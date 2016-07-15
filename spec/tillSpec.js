describe('Till', function() {

  var newTill;

  beforeEach(function() {
    newTill = new Till();
  });

  describe('#addToList', function(){
    it('adds a name and price to order', function(){
      var order = {Tea: 3.65};
      newTill.addToList("Tea");
      expect(newTill.order).toEqual(order);
    });

    it('adds two items to the order', function(){
      var largerOrder = {Tea: 3.65, Affogato: 14.80};
      newTill.addToList('Tea');
      newTill.addToList('Affogato');
      expect(newTill.order).toEqual(largerOrder);
    });
  });

  describe('#printTotal', function(){
    it('prints total excluding tax', function(){
      newTill.addToList('Tea');
      newTill.addToList('Affogato');
      expect(newTill.printTotal()).toEqual(18.45);
    });
  });

  describe('#printTotalIncTax', function(){
    it('prints total including tax', function(){
      newTill.addToList('Tea');
      newTill.addToList('Affogato');
      expect(newTill.printTotalIncTax()).toEqual(20.30);
    });
  });
});
