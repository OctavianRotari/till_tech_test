describe("HipsterTill", function() {
  var hipsterTill;
  var orderSpec = [{"item": "Choc Mousse", "price": 8.20, "quantity" : 1}];
  var orderDoubleSpec = [{"item": "Choc Mousse", "price": 8.20, "quantity" : 2}];
  var menuSpec = {
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
  };

  beforeEach(function() {
     hipsterTill = new HipsterTill(menu);
  });

  it("it prints the menu of the coffe shop", function() {
    expect(hipsterTill.myMenu).toEqual(menuSpec);
  });

  it("it prints out the items and the prices", function() {
    expect(hipsterTill.prices).toEqual(menuSpec.prices[0]);
  });

  describe("when an order is placed", function() {

    it("it ads the ordered item to the order", function() {
      hipsterTill.addToOrder("Choc Mousse");
      expect(hipsterTill.order).toEqual(orderSpec);
    });

    it("it overites the default value", function() {
      hipsterTill.addToOrder("Choc Mousse", 3);
      expect(hipsterTill.order[0].quantity).toEqual(3);
    });

    it("if is the same item it increases the quantity", function() {
      hipsterTill.addToOrder("Choc Mousse");
      hipsterTill.addToOrder("Choc Mousse");
      expect(hipsterTill.order).toEqual(orderDoubleSpec);
    });

  });

  describe("when the total is calculated", function(){

    it("calculates the total of the order", function(){
      hipsterTill.addToOrder("Choc Mousse");
      hipsterTill.addToOrder("Choc Mousse");
      expect(hipsterTill.calcTotal()).toEqual("16.40");
    });

    it("calculates the tax of the order", function(){
      hipsterTill.addToOrder("Choc Mousse");
      hipsterTill.addToOrder("Choc Mousse");
      expect(hipsterTill.calcTax()).toEqual("1.42");
    });

    it("calculates the total plus the tax", function(){
      hipsterTill.addToOrder("Choc Mousse");
      hipsterTill.addToOrder("Affogato");
      expect(hipsterTill.calcTotalPlusTax()).toEqual("24.99");
    });
  });
//
//  // demonstrates use of spies to intercept and test method calls
//  it("tells the current song if the user has made it a favorite", function() {
//    spyon(song, 'persistfavoritestatus');
//
//    player.play(song);
//    player.makefavorite();
//
//    expect(song.persistfavoritestatus).tohavebeencalledwith(true);
//  });
//
//  //demonstrates use of expected exceptions
//  describe("#resume", function() {
//    it("should throw an exception if song is already playing", function() {
//      player.play(song);
//
//      expect(function() {
//        player.resume();
//      }).tothrowerror("song is already playing");
//    });
//  });
});
