const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const countries = [
  { name: 'United States', capital: 'Washington, D.C.' },
  { name: 'Germany', capital: 'Berlin' },
  { name: 'Canada', capital: 'Ottawa' },
  { name: 'Australia', capital: 'Canberra' }
];

app.get('/countries', (req, res) => {
  res.json(countries);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
