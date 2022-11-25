const express = require('express');
const router = express.Router();
const smCtr = require('../controllers/smController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const smSchema = require('../moduls/joi/smSchemas');

router.get('/', smCtr.getAll);
router.post('/', 
    joiMiddleware.getMiddlewareValidate(smSchema.add, 'body'),
    smCtr.add
);
router.put('/:modelo', joiMiddleware.getMiddlewareValidate(smSchema.update, 'body'), smCtr.update);
//modelo como id
router.delete('/:modelo', smCtr.remove);

module.exports = router;