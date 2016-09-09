var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'public'), function(err) {
  if(err) {
    console.error(err)
  } else {
    console.log("Success")
  }
});
