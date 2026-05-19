import * as donadorRepository from '../repository/donadorRepository'

export const create = async (req, res) => {
    try {
        const {ciudad} = req.body
        const donador = await donadorRepository.create(ciudad)
        res.status(201).json(donador.toJSON())
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const findById = async (req, res) => {d
    try {
        const id = req.params.id
        const donador = await donadorRepository.findById(id)
        res.status(200).json(donador.toJSON())
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const updateCiudadById = async (req, res) => {
    try {
        const id = req.params.id
        const {ciudad} = req.body
        const doandor = await donadorRepository.updateCiudadById(id, ciudad)
        res.status(200).json(donador.toJSON())
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
