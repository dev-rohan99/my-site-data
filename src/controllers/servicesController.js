const serviceModel = require("../models/serviceModel")

// service data create
const serviceDataCreate = (req, res) => {

    let postBody = {
        ServiceName : req.body.ServiceName,
        ServiceImage : req.body.ServiceImage,
        ServiceDetails : req.body.ServiceDetails
    }

    serviceModel.create(postBody, (err, data) => {
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

// service data get
const serviceDataGet = (req, res) => {

    serviceModel.find((err, data) => {
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

// service data update
const serviceDataUpdate = (req, res) => {

    let id = req.params.id;
    let query = {_id : id}

    serviceModel.updateOne(query, req.body, (err, data) => {
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

// service data delete
const serviceDataDelete = (req, res) => {

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
    serviceDataCreate,
    serviceDataGet,
    serviceDataUpdate,
    serviceDataDelete
}
