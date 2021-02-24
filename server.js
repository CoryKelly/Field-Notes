const express = require('express');
const app = express();
const port = process.env.PORT || 3000
// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
