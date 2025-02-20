const vehicleModel = require('../models/vehicleModel');

const createVehicle = (req, res) => {
    const { plate_number, model, owner_name, color } = req.body;
    const newVehicle = { plate_number, model, owner_name, color };

    vehicleModel.createVehicle(newVehicle, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error inserting vehicle data' });
        res.status(201).json({ message: 'Vehicle created', vehicleId: result.insertId });
    });
};

const getVehicles = (req, res) => {
    vehicleModel.getVehicles((err, results) => {
        if (err) return res.status(500).json({ error: 'Error fetching vehicles' });
        res.status(200).json(results);
    });
};

const getVehicleById = (req, res) => {
    const { id } = req.params;
    vehicleModel.getVehicleById(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error fetching vehicle' });
        if (!result.length) return res.status(404).json({ message: 'Vehicle not found' });
        res.status(200).json(result[0]);
    });
};

const updateVehicle = (req, res) => {
    const { id } = req.params;
    const { plate_number, model, owner_name, color } = req.body;
    const updatedVehicle = { plate_number, model, owner_name, color };

    vehicleModel.updateVehicle(id, updatedVehicle, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error updating vehicle' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Vehicle not found' });
        res.status(200).json({ message: 'Vehicle updated' });
    });
};

const deleteVehicle = (req, res) => {
    const { id } = req.params;
    vehicleModel.deleteVehicle(id, (err, result) => {
        if (err) return res.status(500).json({ error: 'Error deleting vehicle' });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Vehicle not found' });
        res.status(200).json({ message: 'Vehicle deleted' });
    });
};

module.exports = { createVehicle, getVehicles, getVehicleById, updateVehicle, deleteVehicle };
