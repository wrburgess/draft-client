Drafts.Draft = DS.Model.extend({
  name: DS.attr('string'),
  season: DS.attr('integer'),
  roundsCount: DS.attr('integer'),
  picksCount: DS.attr('integer'),
  state: DS.attr('string')
});

Drafts.Draft.FIXTURES = 
[
{
  name: "PPHS 2014 Draft",
  season: 2014,
  roundsCount: 14,
  picksCount: 168,
  state: "pending"
},
{
  name: "PPHN 2014 Draft",
  season: 2014,
  roundsCount: 14,
  picksCount: 168,
  state: "pending"
},
{
  name: "PPHA 2014 Draft",
  season: 2014,
  roundsCount: 14,
  picksCount: 168,
  state: "pending"
}
];