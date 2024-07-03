// Package Imports
import { Request, Response } from 'express';
import axios from 'axios';

// Util Imports
import { URLAPI } from '../utils/endpoints';

// Interface Imports
import { IVehicle } from '../interfaces';

export const getVehicles = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page } = req.query
        const pageNumber = Number(page) || 1;

        const response = await axios.get<{ results: IVehicle[] }>(`${URLAPI}/vehicles/?page=${pageNumber}`)

        res.status(200).send(response.data.results)
    } catch (error) {
        res.status(404).send(error);
    }
}

export const getVehicleByID = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vehicleID } = req.params

        const vehicle = await axios.get<IVehicle>(`${URLAPI}vehicles/${vehicleID}/`)

        res.status(200).send(vehicle.data)
    } catch (error) {
        res.status(404).send(error);
    }
}