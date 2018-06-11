const express = require('express')
const log = require('./libs/log')(module);
const port = process.env.PORT || 8001;
const bodyParser = require('body-parser');
const usersave = require('./controllers/form');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) // parse application/json
app.post('/api/user', usersave.createUser);
app.listen(port, () => log.info('Express contact form runing on port: ' + port));
