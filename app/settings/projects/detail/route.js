import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    editing: {
      refreshModel: true
    }
  },

  model: function(params /* , transition*/) {
    return this.get('store').findAllUnremoved('project').then((all) => {
      return this.get('store').find('project', params.project_id).then((project) => {
        return project.importLink('projectMembers').then(() => {
          if ( params.editing )
          {
            return Ember.Object.create({
              originalProject: project,
              project: project.clone(),
              all: all,
            });
          }
          else
          {
            return Ember.Object.create({
              originalProject: null,
              project: project,
              all: all,
            });
          }
        });
      });
    });
  },
});
