import * as administradorController from '../controller/administradorController'
import express from 'express'

export const administradorRoute = express.Router()

administradorRoute.post('/', administradorController.create)
administradorRoute.get(`/cuenta/:id_cuenta`, administradorController.findByIdCuenta)
administradorRoute.put(`/cuenta/:id_cuenta`, administradorController.updateOficinaByIdCuenta)