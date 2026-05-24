import * as expedienteController from '../controller/expedienteController'
import express from 'express'



export const expedienteRoute = express.Router()

expedienteRoute.post('/', expedienteController.create)
expedienteRoute.get('/paciente/:id_paciente', expedienteController.findByIdUser)
expedienteRoute.put('/estado/:id_expediente', expedienteController.UpdateStatusById)
expedienteRoute.put('/fecha/:id_expediente', expedienteController.updateDateById)
expedienteRoute.delete('/:id_expediente', expedienteController.delete)