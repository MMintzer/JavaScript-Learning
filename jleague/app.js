const express = require('express');
const path = require('path');
const app = express();
const riotRequest = require('../api/RiotRequest');
const api = new riotRequest();
const PORT = 43594;

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res){
   res.render('index');
});

app.get('/getSummonerByName/:name', function(req, res){
  let name = req.params.name;
  api.getSummonerByName(name, function(summoner) {
    var summonerId = summoner.id;
  });
  console.log(summonerId);
  res.send(summonerId);
});


console.log("Starting JLeague..");
app.listen(PORT);
console.log("Running JLeague on port " + PORT);
