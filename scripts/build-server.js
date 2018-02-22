const express = require("express");
const path = require("path");
const app = express();
let homepage = path.join(__dirname, "../build/index.html");
let serverPort = process.env.PORT || 3000;
app.set("port", serverPort);

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(homepage);
});

const server = app.listen(app.get("port"), function () {
  let port = server.address().port;
  console.log(`Contact list served on port ${port}`);
});
