import * as cuentaController from '../controller/cuentaController'
import express from 'express'

export const cuentaRoute = express.Router()

cuentaRoute.post('/', cuentaController.create)
cuentaRoute.get(`/:id`, cuentaController.findById)
cuentaRoute.put(`/:id`, cuentaController.updateEstadoById)
