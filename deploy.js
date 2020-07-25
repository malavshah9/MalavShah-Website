const ghpages = require("gh-pages");
ghpages.publish("dist", err => {
  console.log("Error while publishing ", err);
});
