// Package Imports
import { Request, Response } from 'express';
import axios from 'axios';

// Util Imports
import { URLAPI } from '../utils/endpoints';

export const getVehicles = async (req: Request, res: Response) => {
    try {
        const { page } = req.query
        const pageNumber = Number(page) || 1;

        const response = await axios.get(`${URLAPI}/vehicles/?page=${pageNumber}`)

        res.status(200).send(response.data.results)
    } catch (error) {
        res.status(404).send(error);
    }
}

export const getVehicleByID = async (req: Request, res: Response) => {
    try {
        const { vehicleID } = req.params

        const vehicle = await axios.get(`${URLAPI}vehicles/${vehicleID}`)

        res.status(200).send(vehicle.data)
    } catch (error) {
        res.status(404).send(error);
    }
}