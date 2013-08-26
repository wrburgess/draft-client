Rosters.Draft = DS.Model.extend({
  name: DS.attr('string'),
  userId: DS.attr('integer'),
  state: DS.attr('string')
});