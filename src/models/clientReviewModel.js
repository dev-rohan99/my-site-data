const mongoose = require('mongoose');


const clientReviewDataSchema = mongoose.Schema({
    ClientName : {
        type : String,
        required : true,
    },

    ClientImage : {
        type : String,
        required : true,
    },

    ClientReview : {
        type : String,
        required : true,
    }
});

const clientReviewModel = mongoose.model('clientReview', clientReviewDataSchema);


module.exports = clientReviewModel;