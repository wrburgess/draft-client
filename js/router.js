Draft.Router.map(function () {
  this.resource('draft', { path: '/' });
});

Drafts.DraftsRoute = Ember.Route.extend({
  model: function () {
    return Drafts.Draft.find();
  }
});

Rosters.RostersRoute = Ember.Route.extend({
  model: function () {
    return Rosters.Draft.find();
  }
});

Slots.SlotsRoute = Ember.Route.extend({
  model: function () {
    return Slots.Draft.find();
  }
});

Picks.PicksRoute = Ember.Route.extend({
  model: function () {
    return Picks.Draft.find();
  }
});

Pieces.PiecesRoute = Ember.Route.extend({
  model: function () {
    return Pieces.Draft.find();
  }
});

Users.UsersRoute = Ember.Route.extend({
  model: function () {
    return Users.Draft.find();
  }
});

