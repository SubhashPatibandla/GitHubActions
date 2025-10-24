const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from DevOps CI/CD Demo!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

module.exports = app;
