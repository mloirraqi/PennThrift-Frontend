const express = require("express");
const app = express();

const port = 4000;

app.get('/', (req, res) => {
    res.send('Penn Thrift!')
  })

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});


