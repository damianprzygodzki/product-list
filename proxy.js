const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config.json');
const axios = require('axios');
const qs = require('qs');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// ENDPOINTS DEFINITION

app.post('/jwt', (req, res) => {
    const {username, password} = req.body;
    axios.post(config.apiUri + '/jwt', qs.stringify({username, password}))
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            res.status(err.response.status).send();
        })
});

app.get('/products', (req, res) => {
    var a = axios.get(config.apiUri + '/products', {
        headers: {'Authorization': 'Bearer ' + req.headers.authorization}
    })
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            res.status(err.response.status).send();
        })
        
});


// INIT
app.listen(3300);