const express = require('express');

const app = express();

const port = <in te vullen>;

const firstName = <in te vullen>;
const lastName = <in te vullen>;
const studentNbr = <in te vullen>;

app.get('/', (req, res) => {
  res.json({
    message: `Hello world! From ${firstName} ${lastName}`, 
    firstName, 
    lastName,
    studentNbr
  });
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}`);
});
