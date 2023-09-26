const express = require('express');

const router = express.Router();

const { adminController } = require('../controllers');

router.get('/', adminController.getAllAdmin);
router.get('/:id', adminController.getAdminById);
router.post('/', adminController.createAdmin);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;
