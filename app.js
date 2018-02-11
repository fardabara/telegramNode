const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);

app.get('/', (req, res) => {
  console.log("1111");
  res.send('222222');
});

app.listen(port, () => {
  console.log(`listen to port ${port}`);
});