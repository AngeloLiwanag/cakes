const cakes = require('../controllers/cakes.js')
module.exports = function(app){
    app.get('/cake', function(req, res){
        cakes.showAll(req, res);
    })
    app.post('/cake/create', function(req, res){
        console.log('Inside routes.js')
        cakes.create(req, res)
    })
}