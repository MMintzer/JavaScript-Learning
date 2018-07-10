const request = require('request');

function JLeague() {
  this.API_KEY = '<API_KEY>';
  this.BASE_PATH = 'https://na1.api.riotgames.com/lol/';
};

JLeague.prototype.getSummonerByName = function(summonerName) {
  request(this.BASE_PATH + 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + summonerName + '?api_key=' + this.API_KEY, {
    json: true
  }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body);
  })
};
