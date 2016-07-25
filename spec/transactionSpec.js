describe('Transaction', function() {

  var newTransaction;

  beforeEach(function() {
    newTransaction = new Transaction("Tea", 3.65, 5);
  });

  describe('property values', function(){
    it('can have a name', function(){
      expect(newTransaction.unitName).toEqual("Tea");
    });

    it('can have a unitPrice', function(){
      expect(newTransaction.unitPrice).toEqual(3.65);
    });

    it('can have a quantity', function(){
      expect(newTransaction.quantity).toEqual(5);
    });
  });
});
