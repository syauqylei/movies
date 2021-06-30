const express = require("express");
const path = require("path");
const MoviesControllers = require("./controllers.js");
const cors = require("cors");
const app = express();

app.use(cors());
// PWAs want HTTPS!
//function checkHttps(request, response, next) {
//// Check the protocol — if http, redirect to https.
//if (request.get("X-Forwarded-Proto").indexOf("https") != -1) {
//return next();
//} else {
//response.redirect("https://" + request.hostname + request.url);
//}
//}

//app.all("*", checkHttps);

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

// A mock route to return some data.
app.get("/api/movies", (request, response) => {
  console.log("❇️ Received GET request to /api/movies");
  response.json({
    data: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
    ],
  });
});

app.get("/restapi/movies", MoviesControllers.findAll);
app.get("/restapi/movies/:id", MoviesControllers.findById);

// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
