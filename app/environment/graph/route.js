import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('environment');
  },

  resetController: function (controller, isExiting/*, transition*/) {
    if (isExiting)
    {
      controller.setProperties({
        showServiceInfo: false,
        selectedService: null,
      });
    }
  }
});
