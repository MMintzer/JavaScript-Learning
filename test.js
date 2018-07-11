const JLeague = require('./JLeague');

const api = new JLeague();

let mintzy = api.getSummonerByName("Mintzy", function(summoner) {
  console.log("my id: " + summoner.id)
});
