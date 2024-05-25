const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');
const verifyToken = require('../middlewares/auth.middleware');

router.get('/', verifyToken, dataController.getAllData);
router.post('/', verifyToken, dataController.createData);
router.put('/:id', verifyToken, dataController.updateData);
router.delete('/:id', verifyToken, dataController.deleteData);

module.exports = router;
