Picks.Draft = DS.Model.extend({
  draftId: DS.attr('integer'),
  rosterId: DS.attr('integer'),
  pieceId: DS.attr('integer'),
  roundNumber: DS.attr('integer'),
  pickNumber: DS.attr('integer'),
  state: DS.attr('string')
});