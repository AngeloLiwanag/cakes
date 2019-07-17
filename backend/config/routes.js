const cakes = require('../controllers/cakes.js')
module.exports = function(app){
    app.get('/cake', function(req, res){
        cakes.showAll(req, res);
    })
    app.post('/cake/create', function(req, res){
        console.log('Inside creat routes.js')
        cakes.create(req, res)
    })
    app.post('/cakes/addRate/:id', function(req, res){
        console.log('Inside add rate routes.js', req.params.id)

        cakes.addRate(req, res);
    })

}