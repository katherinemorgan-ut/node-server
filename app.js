const express = require('express');
const logger = require('./logger.js');
const authorize = require('./authorize.js');
const app = express();

// req => middleware => res
// app.use([logger, authorize]);

app.use('/api', logger)
// will match any path with /api, e.g. api/home/about/product will still apply

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/product', (req, res) => {
    res.send('Products')
})

app.get('/items', [logger, authorize], (req, res) => {
    console.log(req.user);
    res.send('Items')
})

app.listen(5000, (req,res) => {
    console.log('Server is listening on port 5000....')
})