// collections
var mongoose = require('mongoose');
module.exports = function(app){
    var commentSchema = new mongoose.Schema({
    
        rate : {
            type: Number,
            required: true
        },
        comment : {
            type: String,
            required: true
        }
    
    }, {timestamps: true});
    
    var cakeSchema = new mongoose.Schema({
    
        // avg_rate : {
        //     type: Number,
        // },
        baker_name : {
            type: String,
            required: true
        },
        img_url : {
            type: String,
            required: true,
        },
        comments : [commentSchema]
    
    }, {timestamps:true});
    
    mongoose.model('Comment', commentSchema);
    mongoose.model('Cake', cakeSchema);
    var Comment = mongoose.model('Comment');
    var Cake = mongoose.model('Cake');

}
