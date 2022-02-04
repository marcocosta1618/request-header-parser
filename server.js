const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const favicon = require('serve-favicon');


// enable cors, for fCC remote testing
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

// static assets
app.use(favicon(__dirname + '/public/icons8-code-64.png'))
app.use(express.static(__dirname + '/public'));

// initial page
app.get('/', (req, res) => {
   res.sendFile(__dirname + '/views/index.html')
});

//
app.get('/api/whoami', (req, res) => {
   res.json({
      ipaddress: req.ip,
      language: req.headers['accept-language'],
      software: req.headers['user-agent']
   })
})

// port listener
app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
})