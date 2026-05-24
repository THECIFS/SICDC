import * as registroController from '../controller/registroController'
import express from 'express'

export const registroRoute = express.Router()


registroRoute.post('/', registroController.create)
registroRoute.get('/expediente/:id_expediente', registroController.findByIdRecord)
registroRoute.put('/:id_registro', registroController.updateById)
registroRoute.delete('/:id_registro', registroController.deleteById)