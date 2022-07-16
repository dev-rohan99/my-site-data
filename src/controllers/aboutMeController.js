const aboutMeModel = require("../models/aboutMeModel")


// about me data create
const aboutMeDataCreate = (req, res) => {

    let postBody = {
        PageName : req.body.PageName,
        MyImage : req.body.MyImage,
        MainSkillTitle : req.body.MainSkillTitle,
        SubSkillTitle : req.body.SubSkillTitle,
        MyIdentityTitle : req.body.MyIdentityTitle,
        MyIdentityDesc : req.body.MyIdentityDesc,
        MyGoalHeading : req.body.MyGoalHeading,
        MyGoalDesc : req.body.MyGoalDesc,
        MyVisionHeading : req.body.MyVisionHeading,
        MyVisionDesc : req.body.MyVisionDesc,
        MySkills : req.body.MySkills
    }

    aboutMeModel.create(postBody, (err, data) => {

        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }

    });

}


// about me data get
const aboutMeDataget = (req, res) => {

    aboutMeModel.find((err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    })

}

// about me data update
const aboutMeDataUpdate = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};

    aboutMeModel.updateOne(query, req.body, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    })

}

// about me data update
const aboutMeDataDelete = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};

    aboutMeModel.remove(query, (err, data) => {
        if(err){
            res.status(400).json({
                status : 'Failed!',
                data : err
            });
        }else{
            res.status(200).json({
                status : 'Success!',
                data : data
            });
        }
    })

}


module.exports = {
    aboutMeDataCreate,
    aboutMeDataget,
    aboutMeDataUpdate,
    aboutMeDataDelete
}
