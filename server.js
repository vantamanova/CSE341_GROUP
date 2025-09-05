const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const professionalRoutes = require('./routes/professional');

const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;

// route to get all data
app.use(cors());
app.use('/professional', professionalRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
