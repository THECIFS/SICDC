import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json({limit:'100mb'}))
app.use(cors({origin:'*'}))

const PORT = '8080'

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto: ', PORT)
})