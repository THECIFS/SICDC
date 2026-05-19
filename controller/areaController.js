import * as areaRepository from '../repository/areaRepository'

export const create = async (req, res) => {
    try {
        const {nombre} = req.body
        const area = await areaRepository.create(nombre)
        res.status(201).json(area.toJSON())
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const findById = async (req, res) => {
    try {
        const id = req.params.id
        const area = await areaRepository.findById(id)
        res.status(200).json(area.toJSON())
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateById = async (req, res) => {
    try {
        const id = req.params.id
        const {nombre} = req.body
        const area = await areaRepository.updateById(id, nombre)
        res.status(200).json(area.toJSON())
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deleteById = async (req, res) => {
    try {
        const id = req.params.id
        const area = await areaRepository.deleteById(id)
        res.status(204).json({mensaje : 'ELIMINADO'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}