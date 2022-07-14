const mongoose = require('mongoose');

const projectsDataSchema = mongoose.Schema({
    ProjectName : {
        type : String,
        required : true,
    },

    ProjectImage : {
        type : String,
        required : true,
    },

    ProjectDetails : {
        type : String,
        required : true,
    }
});


const projectsModel = mongoose.model('projects', projectsDataSchema);

module.exports = projectsModel;
