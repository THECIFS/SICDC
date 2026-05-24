import * as registroRepository from '../repository/registroRepository'


export const create = async (req, res)=>{
    try{
        const {id_expediente, id_medico, id_area, fecha, diagnostico, tratamiento} = req.body
        const registro = await registroRepository.create (id_expediente, id_medico, id_area, fecha, diagnostico, tratamiento)
        res.status(200).json(registro.toJSON())
    }catch(error){
        res.status(400).json({message : error.messsage})
    }
    
}

export const findByIdRecord = async (req, res)=>{
    try{
        const id_expediente = req.params.id_expediente
        const expediente = await registroRepository.findByIdRecord (id_expediente)
        res.status(200).json(registro.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

export const updateById = async (req, res)=>{
    try{
        const id_registro = req.params.id_registro
        const {id_medico, id_area, fecha, diagnostico, tratamiento} = req.body
        const registro = await registroRepository.updateById(id_registro, id_medico, id_area, fecha, diagnostico, tratamiento)
        res.status(200).json(registro.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

export const deleteById = async (req, res)=>{
    try{
        const id_registro = req.params.id_registro
        const registro = await registroRepository.deleteById (id_registro)
        res.status(200).json(registro.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}
