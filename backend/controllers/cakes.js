// backend logic
var express = require('express');
var mongoose = require('mongoose');
var Cake = mongoose.model('Cake')
var bodyparser = require('body-parser');

module.exports = {
    showAll: function(req, res){
        Cake.find({}, function(err, cake){
            if(err){
                console.log('Returned error', err);
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Successfully Showing All Cakes", cakes: cake})
            }
        })
    },
    create: function(req, res){
        console.log('Inside Cakes.js');
        var cake = new Cake({avg_rate: req.body.avg_rate, baker_name: req.body.baker_name, img_url: req.body.img_url});
        cake.save(function(err, cake){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                console.log('Successfully Created Cake');
                res.json({cake: cake})
            }
        });
    }
}