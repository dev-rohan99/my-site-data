const mongoose = require('mongoose');


const aboutMeDataSchema = mongoose.Schema({
    PageName : {
        type : String,
        required : true,
    },

    MyImage : {
        type : String,
        required : true,
    },

    MainSkillTitle : {
        type : String,
        required : true,
    },

    SubSkillTitle : {
        type : String,
        required : true,
    },

    MyIdentityTitle : {
        type : String,
        required : true,
    },

    MyIdentityDesc : {
        type : String,
        required : true,
    },

    MyGoalHeading : {
        type : String,
        required : true,
    },

    MyGoalDesc : {
        type : String,
        required : true,
    },

    MyVisionHeading : {
        type : String,
        required : true,
    },

    MyVisionDesc : {
        type : String,
        required : true,
    },

    MySkills : {
        type : Object,
        required : true,
        unique : true
    }
});

const aboutMeModel = mongoose.model('aboutme', aboutMeDataSchema);


module.exports = aboutMeModel;