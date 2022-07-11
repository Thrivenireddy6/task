const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const userController = require('../controller/userController');
const userSchema = require('../apiSchema/userSchema');

module.exports = router;

router.post('/create', joiSchemaValidation.validateBody(userSchema.create),
userController.create
);

router.post('/search',joiSchemaValidation.validateBody(userSchema.search),
userController.search
);

router.post('/update',joiSchemaValidation.validateBody(userSchema.update),
userController.update
);
router.post('/delete',joiSchemaValidation.validateBody(userSchema.delete),
userController.delete
);

router.post('/moneycount',joiSchemaValidation.validateBody(userSchema.moneycount),
userController.moneycount
);