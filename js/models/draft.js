Drafts.Draft = DS.Model.extend({
  name: DS.attr('string'),
  season: DS.attr('integer'),
  roundsCount: DS.attr('integer'),
  picksCount: DS.attr('integer'),
  state: DS.attr('string')
});