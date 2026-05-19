import * as areaController from '../controller/areaController'
import express from 'express'

export const areaRoute = express.Router()

areaRoute.post('/', areaController.create)
areaRoute.get(`/:id`, areaController.findById)
areaRoute.put(`/:id`, areaController.updateById)
areaRoute.delete(`/:id`, areaController.deleteById)