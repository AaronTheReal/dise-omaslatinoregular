const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to dise-omaslatinoregular</h1><p>App is running</p>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
