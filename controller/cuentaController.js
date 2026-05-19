import * as cuentaRepository from '../repository/cuentaRepository'

export const create = async (req, res) => {
    try {
        const {password, estado} = req.body
        const cuenta = await cuentaRepository.create(password, estado)
        res.status(201).json(cuenta.toJSON())
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const findById = async (req, res) => {
    try {
        const id =  req.params.id
        const cuenta = await cuentaRepository.findById(id)
        res.status(200).json(cuenta.toJSON())
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const updateEstadoById = async (req, res) => {
    try {
        const id = req.params.id
        const {estado} = req.body
        const cuenta = await cuentaRepository.updateEstadoById(id, estado)
        res.status(200).json(cuenta.toJSON())
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}