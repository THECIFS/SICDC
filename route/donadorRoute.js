import * as donadorController from '../controller/donadorController'
import express from 'express'

export const donadorRoute = express.Router()

donadorRoute.post('/', donadorController.create)
donadorRoute.get(`/:id`, donadorController.findById)
donadorRoute.put(`/:id`, donadorController.updateCiudadById)