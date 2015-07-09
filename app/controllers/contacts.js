import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['isShowingPhoneNumber'],

  isShowingPhoneNumber: false,

  nameInController: '', // data binding - adding to above table as typing into name box

  contactsWithEmail: Ember.computed('model.@each', function() {
    var model = this.get('model');
    var filteredModel = model.filterBy('email');
    return filteredModel.get('length');
  }),

  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    }
  }

});