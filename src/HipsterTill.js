function HipsterTill() {
  this.myMenu = {},
  this.prices = {},
  this.order = []
  this.newItem = true,
  this.total = 0,
  this.TAX = 8.64/100,
  this.taxOnTotal = 0,
  this.totalPlusTax = 0
}

HipsterTill.prototype.printMenu = function(menu){
  this.myMenu = menu;
  return this.myMenu;
}

HipsterTill.prototype.printPrices = function(){
  this.printMenu(menu);
  this.prices = this.myMenu.prices[0];
  return this.prices;
}

HipsterTill.prototype.addToOrder = function(order, quantity){
  if ( typeof(quantity) === 'undefined') quantity = 1;
  this.printPrices();
  this.similarOrder(order, quantity);
  if ( this.newItem ) {
    this.newOrder(order, quantity);
  };
}

HipsterTill.prototype.similarOrder = function(order, quantity){
  for(var i = 0; i < this.order.length; i++ ){
    if(this.order[i].item === order ){
      this.order[0].quantity += quantity;
      this.newItem = false;
    }
  }
}

HipsterTill.prototype.newOrder = function(order, quantity){
  for(i in this.prices){
    if(i === order){
      var obj = {};
      obj["item"] = order;
      obj["price"] = this.prices[order];
      obj["quantity"] = quantity;
      this.order.push(obj);
    }
  }
}

HipsterTill.prototype.calcTotal = function(){
  for(var i=0; i < this.order.length; i++){
    var singleItemTot = this.order[i].price * this.order[i].quantity;
    this.total += singleItemTot;
  } 
  return this.total.toFixed(2);
}

HipsterTill.prototype.calcTax = function(){
  this.calcTotal();
  this.taxOnTotal = this.total * this.TAX; 
  return this.taxOnTotal.toFixed(2);
}

HipsterTill.prototype.calcTotalPlusTax = function(){
  this.calcTax();
  this.totalPlusTax = this.total + this.taxOnTotal;
  return this.totalPlusTax.toFixed(2);
}
