// backend logic
var express = require('express');
var mongoose = require('mongoose');
var Cake = mongoose.model('Cake')
var bodyparser = require('body-parser');
var Rate = mongoose.model('Comment')

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
    },
    addRate: function(req, res){
        console.log('Inside Cakes.js', req.body, req.params.id);
        var Rating = new Rate({rate: req.body.rate, comment: req.body.comment});
        Rating.save(function(err, rate){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                // var rating = {rate: req.body.rate, comment: req.body.comment};
                Cake.findOneAndUpdate({_id:req.params.id}, {$push: {comments: Rating}}), function(err){
                    if(err){
                        console.log('Returned error', err);
                    }else{
                        console.log('Successfully Created Rate');
                        res.json(rating)
                    }
                }
            }
        })
    }
}