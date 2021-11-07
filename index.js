const express = require("express");
const path = require("path");
const chalk = require("chalk");
const route = require("./routes/route.js");
const config = require("./config/config.json");

const app = express();
const PORT = process.env.PORT || config.app.port;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "static")));
app.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "static", "images", "favicon.ico"))
);

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use("/", route);

app.listen(PORT, () => {
  console.log(
    chalk.green.inverse(` Started server localhost on port ${PORT} `)
  );
  console.log(
    chalk.green(`http://localhost:${PORT}`)
  );
});
