const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('AI E-commerce Platform Backend');
});

// ...existing code...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
