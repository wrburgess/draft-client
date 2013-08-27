Draft.Router.map(function () {
  this.resource('sessions', { path: '/' });
});

Draft.SessionsRoute = Ember.Route.extend({
  model: function () {
    return Draft.Session.find();
  }
});

Draft.RostersRoute = Ember.Route.extend({
  model: function () {
    return Draft.Roster.find();
  }
});

Draft.SlotsRoute = Ember.Route.extend({
  model: function () {
    return Draft.Slot.find();
  }
});

Draft.PicksRoute = Ember.Route.extend({
  model: function () {
    return Draft.Pick.find();
  }
});

Draft.PiecesRoute = Ember.Route.extend({
  model: function () {
    return Draft.Piece.find();
  }
});

Draft.UsersRoute = Ember.Route.extend({
  model: function () {
    return Draft.User.find();
  }
});

