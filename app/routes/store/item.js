import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },

  shoppingCart: Ember.inject.service(),

  actions: {

    addToCart(item) {
      this.get('shoppingCart').add(item);
    },


  } // End Actions
}); // End Ember.Route
