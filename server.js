const express = require('express');

const app = express();

app.use(express.static('./dist/wthompson-dev'));


app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/wthompson-dev/'}
  );
});

app.listen(process.env.PORT || 8080);
