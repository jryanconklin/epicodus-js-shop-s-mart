import Ember from 'ember';

export function inventoryIcon(params) {
  var item = params[0];
  if (item.get('inventory') === 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span class="glyphicon glyphicon-fire"></span><span class="glyphicon glyphicon-fire"></span>');
  } else if (item.get('inventory') <= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span><span class="glyphicon glyphicon-fire"></span>');
  } else if (item.get('inventory') < 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(inventoryIcon);
