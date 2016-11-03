import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var random = Math.floor(Math.random() * 12) + 1;
    return this.store.query('item', {
      orderBy: 'inventory',
      startAt: random,
      limitToFirst: 1
    });
  }


});
