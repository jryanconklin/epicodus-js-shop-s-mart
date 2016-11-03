import Ember from 'ember';

export default Ember.Component.extend({

  header: Ember.computed('item.name', 'item.price', function() {
    return this.get('item.name') + ': $' + this.get('item.price');
  }),

});
