import Ember from 'ember';

export default Ember.Component.extend({

  shoppingCart: Ember.inject.service(),
  calculate: Ember.computed('shoppingCart.items.@each.count', function() {
    var total = 0;
    for (var i = 0; i < this.get('shoppingCart').items.length; i++) {
      total += this.get('shoppingCart').items[i].data.price;
    }
    return total.toFixed(2);
  }),

  // Why doesn't this work?
  // priceheader: Ember.computed('item.name', 'item.price', function() {
  //   return this.get('shoppingCart.item.name') + ': $' + this.get('item.price');
  // }),


  actions: {
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    }
  } // End Actions

});
