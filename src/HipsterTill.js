function HipsterTill(menu) {
  this.myMenu = menu,
  this.prices = menu.prices[0],
  this.order = [],
  this.currentOrderedItem = {},
  this.total = 0,
  this.TAX = 8.64/100,
  this.taxOnTotal = 0,
  this.totalPlusTax = 0;
}

HipsterTill.prototype.checkIfItemExists = function (order, quantity) {
  if ( this.prices.hasOwnProperty(order) ){
    this.currentOrderedItem["item"] = order;
    this.currentOrderedItem["price"] = this.prices[order];
    this.currentOrderedItem["quantity"] = quantity;
  };
};

HipsterTill.prototype.newOrder = function (order, quantity) {
  this.checkIfItemExists(order, quantity);
  debugger;
  if( this.order.length === 0 ){
    this.order.push(this.currentOrderedItem);
    this.currentOrderedItem = {};
  } else {
    var exists = false;
    this.order.forEach(function(item){
      if(item.item === order ){
        item.quantity += quantity;
        exists = true;
      }
    })
    if(!exists) this.order.push(this.currentOrderedItem);
  }
};


HipsterTill.prototype.addToOrder = function(order, quantity){
  if ( typeof(quantity) === 'undefined') quantity = 1;
  this.newOrder(order, quantity);
};

HipsterTill.prototype.calcTotal = function(){
  this.total = 0;
  for(var i = 0; i < this.order.length; i++){
    var singleItemTot = this.order[i].price * this.order[i].quantity;
    this.total += singleItemTot;
  }
  return this.total.toFixed(2);
};

HipsterTill.prototype.calcTax = function(){
  this.taxOnTotal = 0;
  this.calcTotal();
  this.taxOnTotal = this.total * this.TAX; 
  return this.taxOnTotal.toFixed(2);
};

HipsterTill.prototype.calcTotalPlusTax = function(){
  this.totalPlusTax = 0;
  this.calcTax();
  this.totalPlusTax = this.total + this.taxOnTotal;
  return this.totalPlusTax.toFixed(2);
};

