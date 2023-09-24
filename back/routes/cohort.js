const express = require('express');

const router = express.Router();
const { cohortController } = require('../controllers');

router.post('/', cohortController.createCohort);
router.get('/', cohortController.getAllCohorts);
router.get('/:id', cohortController.getCohortById);

module.exports = router;
