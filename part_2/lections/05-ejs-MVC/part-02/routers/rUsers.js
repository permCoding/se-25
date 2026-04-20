const router = require('express').Router();
const ctrlUsers = require('../controllers/ctrlUsers'); 

router.post('/order', ctrlUsers.orderUsers);
router.get('/', ctrlUsers.mainUsers);

module.exports = router;
