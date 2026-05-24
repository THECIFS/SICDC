import * as usuarioController from '../controller/usuarioController'
import express from 'express'

export const usuarioRoute = express.Router()

usuarioRoute.post('/',usuarioController.create)
usuarioRoute.get(`/:id`,usuarioController.findByIdUser)
usuarioRoute.put(`/:id`,usuarioController.updateById)
usuarioRoute.delete(`/:id`,usuarioController.deleteByIdUser)


