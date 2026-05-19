import * as administradorRepository from '../repository/administradorRepository'

export const create = async (req, res) => {
    try {
        const {id_usuario, id_cuenta, oficina} = req.body
        const administrador = await administradorRepository.create(id_usuario, id_cuenta, oficina)
        res.status(201).json(administrador.toJSON())
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const findByIdCuenta = async (req, res) => {
    try {
        const id_cuenta = req.params.id_cuenta
        const administrador = await administradorRepository.findByIdCuenta(id_cuenta)
        res.status(200).json(administrador.toJSON())
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}

export const updateOficinaByIdCuenta = async (req, res) => {
    try {
        const id_cuenta = req.params.id_cuenta
        const {oficina} = req.body
        const administrador = await administradorRepository.updateOficinaByIdCuenta(id_cuenta, oficina)
        res.status(200).json(administrador.toJSON())
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}