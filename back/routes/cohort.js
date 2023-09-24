const express = require('express');

const router = express.Router();
const { cohortController } = require('../controllers');

router.post('/', cohortController.createCohort);
router.get('/', cohortController.getAllCohorts);
router.get('/:id', cohortController.getCohortById);
router.put('/:id', cohortController.updateCohort);
router.delete('/:id', cohortController.deleteCohort);

module.exports = router;
