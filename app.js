const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello, world!"));
app.get("/:username/messages/:messageid", (req, res) => {
  console.log(req.params);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
