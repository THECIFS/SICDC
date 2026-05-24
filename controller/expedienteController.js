import * as expedienteRepository from '../repository/expedienteRepository'


export const create = async (req ,res)=>{
    try{
        const {id_paciente, fecha_apertura, estado} = req.body
        const expediente = expedienteRepository.create (id_paciente, fecha_apertura, estado)
        res.status(200).json((await expediente).toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }

}

export const findByIdUser = async (req, res)=>{
    try{
        const id_paciente = req.params.id_paciente
        const expdiente = await expedienteRepository.findByIdUser (id_paciente)
        res.status(200).json(expediente.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

export const UpdateStatusById = async (req, res)=>{
    try{
        const id_expediente = req.params.id_expediente
        const {estado} = req.body
        const expediente = await expedienteRepository.UpdateStatusById (id_expediente, estado)
        res.status(200).json(expediente.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}


export const deleteById = async (req, res)=>{
    try{
        const id_expediente = req.params.id_expediente
        const expediente = await expedienteRepository.deleteById (id_expediente)
        res.status(200).json(expediente.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }

}

export const updateDateById = async (req, res)=>{
    try{
        const id_expediente = req.params.id_expediente
        const {fecha_apertura} = req.body
        const expediente = await expedienteRepository.updateDateById(id_expediente, fecha_apertura)
        res.status(200).json(expediente.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }

}