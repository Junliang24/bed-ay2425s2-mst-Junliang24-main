// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');

// ##############################################################
// DEFINE INSERT OPERATION FOR TREE
// ##############################################################
module.exports.insertSingle = (data, callback) => {
    const SQLSTATMENT = `
    INSERT INTO guests (name, email, diploma, gradYear)
    VALUES (?, ?, ?, ?);
    `;
    const VALUES = [data.name, data.email,data.diploma,data.gradYear];

    pool.query(SQLSTATMENT, VALUES, callback);
}
// ##############################################################
// DEFINE UPDATE OPERATIONS FOR TREE
// ##############################################################
module.exports.updateById = (data, callback) => {
    const SQLSTATMENT = `
    UPDATE guests
    SET name = ?, email = ?, diploma = ?, gradYear = ?
    WHERE id = ?;
    `;
    const VALUES = [data.name, data.email, data.diploma, data.gradYear,data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}
// ##############################################################
// DEFINE DELETE OPERATIONS FOR TREE
// ##############################################################
module.exports.deleteById = (data, callback) => {
    const SQLSTATMENT = `
    DELETE FROM guests 
    WHERE id = ?;
    `;
    const VALUES = [data.id];

    pool.query(SQLSTATMENT, VALUES, callback);
}