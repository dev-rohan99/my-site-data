const express = require('express');
const { aboutMeDataCreate, aboutMeDataget, aboutMeDataUpdate, aboutMeDataDelete } = require('../controllers/aboutMeController');
const { clientReviewDataCreate, clientReviewDataGet, clientReviewDataUpdate } = require('../controllers/clientReviewController');
const { projectsDataCreate, projectsDataGet, projectsDataDelete, projectsDataUpdate } = require('../controllers/projectsControllers');
const { serviceDataCreate, serviceDataGet, serviceDataUpdate, serviceDataDelete } = require('../controllers/servicesController');
const router = express.Router();

// ========================================================

// create service data
router.post('/new-service', serviceDataCreate);
// get service data
router.get('/services', serviceDataGet);
// update service data
router.patch('/update-services/:id', serviceDataUpdate);
// get service data
router.delete('/delete-services/:id', serviceDataDelete);

// ========================================================

// create project data
router.post('/new-projects', projectsDataCreate);
// get project data
router.get('/projects', projectsDataGet);
// update project data
router.patch('/projects/:id', projectsDataUpdate);
// delete project data
router.delete('/projects/:id', projectsDataDelete);

// ========================================================

// create client review data
router.post('/new-client-review', clientReviewDataCreate);
// get client review data
router.get('/client-reviews', clientReviewDataGet);
// update client review data
router.patch('/client-reviews/:id', clientReviewDataUpdate);
// delete client review data
router.delete('/client-reviews/:id', projectsDataDelete);

// ========================================================

// create client review data
router.post('/new-about-me', aboutMeDataCreate);
// get client review data
router.get('/about-me', aboutMeDataget);
// update client review data
router.patch('/about-me/:id', aboutMeDataUpdate);
// delete client review data
router.delete('/about-me/:id', aboutMeDataDelete);





module.exports = router;
