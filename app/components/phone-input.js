import Ember from 'ember';

export default Ember.TextField.extend({

  becomeFocused: function() {
      this.$().focus();
  }.on('didInsertElement'),

  dasherizeDigits: Ember.observer('value', function() {
    var valueNumber = this.get('value').replace(/\D+/g, '');

    if (!Ember.isBlank(valueNumber)) {
      valueNumber = valueNumber.match(/\d{1,3}/g).join('-');
    }

    this.set('value', valueNumber);
  })

});
