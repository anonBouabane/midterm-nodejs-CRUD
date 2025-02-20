const db = require('../config/dbConfig');

const createVehicle = (vehicle, callback) => {
    const sql = 'INSERT INTO VehicleInfo (plate_number, model, owner_name, color) VALUES (?, ?, ?, ?)';
    db.query(sql, [vehicle.plate_number, vehicle.model, vehicle.owner_name, vehicle.color], callback);
};

const getVehicles = (callback) => {
    const sql = 'SELECT * FROM VehicleInfo';
    db.query(sql, callback);
};

const getVehicleById = (id, callback) => {
    const sql = 'SELECT * FROM VehicleInfo WHERE id = ?';
    db.query(sql, [id], callback);
};

const updateVehicle = (id, vehicle, callback) => {
    const sql = 'UPDATE VehicleInfo SET plate_number = ?, model = ?, owner_name = ?, color = ? WHERE id = ?';
    db.query(sql, [vehicle.plate_number, vehicle.model, vehicle.owner_name, vehicle.color, id], callback);
};

const deleteVehicle = (id, callback) => {
    const sql = 'DELETE FROM VehicleInfo WHERE id = ?';
    db.query(sql, [id], callback);
};

module.exports = { createVehicle, getVehicles, getVehicleById, updateVehicle, deleteVehicle };
