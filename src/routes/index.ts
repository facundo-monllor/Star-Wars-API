// Package Imports
import { Router } from "express";

// Route Imports
import people from "./people.routes";
import vehicle from "./vehicle.routes";

const routes = Router()

routes.use('/people', people)
routes.use('/vehicle', vehicle)


export default routes