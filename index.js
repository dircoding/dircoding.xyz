// (C) Dircoding On Github
// MIT LICENSE
// READ MORE AT https://github.com/dircoding/dircoding.xyz/blob/main/LICENSE

var express = require("express");
var app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

//  Response 404 Page
app.use(function(req, res, next){
  if (req.accepts('html')) {
    res.sendFile(__dirname + '/views/404.html');
    return;
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

function getIPFromAmazon() {
  fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => console.log(data))
}

getIPFromAmazon()
