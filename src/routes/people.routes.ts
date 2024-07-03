// Package Imports
import { Router } from "express";

// Controller Imports
import { getPeople, getCharacterByID } from "../controllers/people";

const people = Router()

people.get('/', getPeople)
people.get('/:characterID', getCharacterByID)

export default people;