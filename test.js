const JLeague = require('./JLeague');

const api = new JLeague();

api.getSummonerByName("Mintzy", function(summoner) {
  console.log("my id: " + summoner.id)
});
