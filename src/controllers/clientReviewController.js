const clientReviewModel = require("../models/clientReviewModel")


// client review data create
const clientReviewDataCreate = (req, res) => {

    let postBody = {
        ClientName : req.body.ClientName,
        ClientImage : req.body.ClientImage,
        ClientReview : req.body.ClientReview
    }

    clientReviewModel.create(postBody, (err, data) => {

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

// client review data get
const clientReviewDataGet = (req, res) => {

    clientReviewModel.find((err, data) => {

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

// client review data update
const clientReviewDataUpdate = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};

    clientReviewModel.updateOne(query, req.body, (err, data) => {

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

// client review data delete
const clientReviewDataDelete = (req, res) => {

    let id = req.params.id;
    let query = {_id : id};

    clientReviewModel.remove(query, (err, data) => {

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
    clientReviewDataCreate,
    clientReviewDataGet,
    clientReviewDataUpdate,
    clientReviewDataDelete
}
