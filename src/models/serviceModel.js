const mongoose = require('mongoose');



const serviceDataSchema = mongoose.Schema({
    ServiceName : {
        type : String,
        required : true,
    },

    ServiceImage : {
        type : String,
        required : true,
    },

    ServiceDetails : {
        type : String,
        required : true,
    }
});

const serviceModel = mongoose.model('services', serviceDataSchema);


module.exports = serviceModel;


