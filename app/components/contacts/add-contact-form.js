import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['container-fluid'],

  isNameEmpty: Ember.computed('name', function() {return Ember.isBlank(this.get('name'));}),
  isPhoneEmpty: Ember.computed('phone', function() {return Ember.isBlank(this.get('phone'));}),

  nothingThere: Ember.computed.or('isNameEmpty', 'isPhoneEmpty'),

  capitalName: Ember.computed("name", function() {
     var name = this.get("name");

     return name.toUpperCase();
   }),

  nameChanged: Ember.observer("name", function() {
    this.set("name", this.get("capitalName"));
  }),

  actions: {
    buttonClicked() {
      if (this.get('nothingThere')) {return;}
      // console.log("I have clicked the button!!");

      const name = this.get('name');
      const phone = this.get('phone');
      const email = this.get('email');

      // don't have to write action but is useful for remmebring what is happening
      // then pass through the params
      this.sendAction('action', name, phone, email);

      this.set('name', '');
      this.set('phone', '');
      this.set('email', '');
    }
  }

});

