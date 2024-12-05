// ##############################################################
// REQUIRE MODULES
// ##############################################################
const model = require("../models/guestModel");

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE TREE
// ##############################################################
module.exports.createNewGuest = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.diploma || !req.body.gradYear) {
        res.status(400).json({ message: "message: Missing required data." });
        return;
    }

    const data = { name: req.body.name, email: req.body.email, diploma: req.body.diploma, gradYear: req.body.gradYear };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error in createNewTree:", error);
            res.status(500).json({ message: "Internal server error." });
        } else {
            res.status(201).json({ message: "Guest added successfully.", guestId: results.insertId });
        }
    };

    model.insertSingle(data, callback);
};
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR UPDATE TREE BY ID
// ##############################################################
module.exports.updateGuestById = (req, res, next) => {
    if (!req.body.name || !req.body.email || !req.body.diploma || !req.body.gradYear || !req.params.id) {
        res.status(400).json({ message: "Missing required data." });
        return;
    }

    const data = {
        'species': req.body.name,
        'age': req.body.email,
        'height': req.body.diploma,
        'user_id': req.body.gradYear,
        'id': req.params.id
    };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error in updateTreeById:", error);
            res.status(500).json({ message: "Internal server error." });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: "Guest not found." });
            } else {
                res.status(200).send({ message: "Guest updated successfully."});
            }
        }
    };

    model.updateById(data, callback);
};
// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR DELETE TREE BY ID
// ##############################################################
module.exports.deleteGuestsById = (req, res, next) => {
    const data = { id: req.params.id };

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error in deleteGuestById:", error);
            res.status(500).json({ message: "Error deleting Guest." });
        } else {
            if (results.affectedRows === 0) {
                res.status(404).json({ message: "Guest not found." });
            } else {
                res.status(200).send({ message: "Guest delete successfully."});
            }
        }
    };
 
    model.deleteById(data, callback);
};