// Package Imports
import { Router } from "express";

// Controller Imports
import { getVehicles, getVehicleByID } from "../controllers/vehicle";

const vehicle = Router()

vehicle.get('/', getVehicles)
vehicle.get('/:vehicleID', getVehicleByID)

export default vehicle;