import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr('number'),
  designer: DS.attr(),
  publisher: DS.attr(),
  inventory: DS.attr('number'),
  img: DS.attr()
});
