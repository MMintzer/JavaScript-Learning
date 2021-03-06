const request = require('request');

function RiotRequest() {
  this.API_KEY = 'RGAPI-9231be37-e066-446e-895c-57a443152905';
  this.BASE_PATH = 'https://na1.api.riotgames.com/lol/';
};

RiotRequest.prototype.getSummonerByName = function(summonerName, callback) {
  request(this.BASE_PATH + 'summoner/v3/summoners/by-name/' + summonerName + '?api_key=' + this.API_KEY, {
    json: true
  }, (err, response, json) => {
    if (err) {
      return console.log(err);
    }
    return callback(json);
  })
};

RiotRequest.prototype.getLeagueBySummonerId = function(summonerId, callback) {
  request(this.BASE_PATH + 'league/v3/positions/by-summoner/' + summonerId + '?api_key=' + this.API_KEY, {
    json: true
  }, (err, response, json) => {
    if (err) {
      return console.log(err);
    }
    callback(json);
  })
};

module.exports = RiotRequest;
