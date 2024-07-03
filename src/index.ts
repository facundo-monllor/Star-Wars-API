// Package Imports
import express, { json } from 'express'
import morgan from "morgan";

// Route Imports
import routes from './routes'

const app = express()
const PORT = 3001

app.use(morgan("dev"));
app.use(json())

app.use('/api', routes)

app.listen(PORT, () => {
    console.log('--------------------------------------');
    console.log(`Server listening on Port: ${PORT}`);
    console.log('--------------------------------------');
})