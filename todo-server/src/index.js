const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(cors());
//Routes


app.listen(PORT, function (error) {
   if (error) {
      console.log('Something went wrong', error);
   } else {
      console.log('Server is listening on port' + PORT);
   }
});
