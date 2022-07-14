const projectsModel = require("../models/projectsModel")

const projectsDataCreate = (req, res) => {

    let postBody = {
        ProjectName : req.body.ProjectName,
        ProjectImage : req.body.ProjectImage,
        ProjectDetails : req.body.ProjectDetails
    }

    projectsModel.create(postBody, (err, data) => {
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

// get data function
const projectsDataGet = (req, res) => {

    projectsModel.find((err, data) => {
        if(err){
            res.status(400).json({
                status : false,
                data : err
            });
        }else{
            res.status(200).json({
                status : true,
                data : data
            });
        }
    });

}


// update data function
const projectsDataUpdate = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};

    projectsModel.updateOne(query, req.body, (err, data) => {
        if(err){
            res.status(400).json({
                status : false,
                data : err
            });
        }else{
            res.status(200).json({
                status : true,
                data : data
            });
        }
    });

}


// delete data function
const projectsDataDelete = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};

    projectsModel.remove(query, (err, data) => {
        if(err){
            res.status(400).json({
                status : false,
                data : err
            });
        }else{
            res.status(200).json({
                status : true,
                data : data
            });
        }
    });

}


module.exports = {
    projectsDataCreate,
    projectsDataGet,
    projectsDataUpdate,
    projectsDataDelete
}

