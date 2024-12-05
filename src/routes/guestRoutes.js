// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express'); 
const router = express.Router();


// ##############################################################
// CREATE ROUTER
// ##############################################################
const controller = require('../controllers/guestController')

// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.post('/', controller.createNewGuest);
router.put('/:id', controller.updateGuestById);
router.delete('/:id', controller.deleteGuestsById);
// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;