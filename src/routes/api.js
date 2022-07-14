const express = require('express');
const { projectsDataCreate, projectsDataGet, projectsDataDelete, projectsDataUpdate } = require('../controllers/projectsControllers');
const router = express.Router();


// create project data
router.post('/new-projects', projectsDataCreate);
// get project data
router.get('/projects', projectsDataGet);
// update data
router.patch('/projects/:id', projectsDataUpdate);
// delete project data
router.delete('/projects/:id', projectsDataDelete);



module.exports = router;
