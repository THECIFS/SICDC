import express from 'express'
import cors from 'cors'

import { administradorRoute } from './route/administradorRoute'
import { areaRoute } from './route/areaRoute'
import { cuentaRoute } from './route/cuentaRoute'
import { donadorRoute } from './route/donadorRoute'

const app = express()
app.use(express.json({ limit: '100mb' }))
app.use(cors({ origin: '*' }))
const ROUTE_V1 = '/api/v1/'

// ROUTES
app.use(`${ROUTE_V1}/administradores`, administradorRoute)
app.use(`${ROUTE_V1}/areas`, areaRoute)
app.use(`${ROUTE_V1}/cuentas`, cuentaRoute)
app.use(`${ROUTE_V1}/donadores`, donadorRoute)

const PORT = '8080'

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT)
})