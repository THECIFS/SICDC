import * as voluntarioController from '../controller/voluntarioController'
import express from 'express'

export const voluntarioRoute = express.Router()

voluntarioRoute.post('/', voluntarioController.create)
voluntarioRoute.get('/:id_usuario', voluntarioController.findByIdUser)
voluntarioRoute.put('/:id_usuario', voluntarioController.updateDateById)
voluntarioRoute.delete('/:id_usuario', voluntarioController.deleteByIdUser)