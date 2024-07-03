// Package Imports
import { Request, Response } from 'express';
import axios from 'axios';

// Util Imports
import { URLAPI } from '../utils/endpoints';

// Interface Imports
import { IPeople } from '../interfaces';

export const getPeople = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page, search } = req.query
        const pageNumber = Number(page) || 1;

        const url = search
            ? `${URLAPI}/people/?search=${search}`
            : `${URLAPI}/people/?page=${pageNumber}`

        const response = await axios.get(url);

        const people: IPeople[] = response.data.results;
        res.status(200).send(people)
    } catch (error) {
        res.status(404).send(error);
    }
}

export const getCharacterByID = async (req: Request, res: Response): Promise<void> => {
    try {
        const { characterID } = req.params

        const character = await axios.get<IPeople>(`${URLAPI}people/${characterID}`)

        res.status(200).send(character.data)
    } catch (error) {
        res.status(404).send(error);
    }
}