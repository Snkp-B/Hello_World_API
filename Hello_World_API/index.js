const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname)); // This serves static files from the current directory.

app.get('/hello', (req, res) => {
  const language = req.query.language || 'English';
  let message = '';
  switch (language.toLowerCase()) {
    case 'english':
      message = 'Hello world';
      break;
    case 'french':
      message = 'Bonjour le monde';
      break;
    case 'hindi':
      message = 'Namastey sansar';
      break;
    default:
      message = 'error';
  }

  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
