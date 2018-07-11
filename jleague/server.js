const RiotRequest = require('../api/RiotRequest');
const fs = require('fs');
const http = require('http');
const PORT = 43594;

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

console.log("Starting JLeague server..")
http.createServer(onRequest).listen(PORT);
console.log("Server is now running on port: " + PORT)

function test() {
  let summonerName = document.getElementById("summoner_name").value;
  api.getSummonerByName(summonerName, function(summoner) {
    fs.writeFile('summoners/' + summoner.name + '.json', JSON.stringify(summoner), 'utf8', function() {
      let text = "Summoner id: " + summoner.id;
      document.getElementById("test").innerHTML = text;
      console.log("saved summoner object: " + summoner.name + ".");
    });
  });
}
