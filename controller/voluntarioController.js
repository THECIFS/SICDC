import * as voluntarioRepository from '../repository/voluntarioRepository'

export const create = async (req, res)=>{

    try {
        const {id_usuario,id_cuenta, fecha_ingreso} = req.body
        const voluntario = await voluntarioRepository.create (id_usuario, id_cuenta, fecha_ingreso)
        res.status(200).json(voluntario.toJSON())
    }catch (error){
        res.status(400).json({message : error.message})
    }
}

export const updateDateById = async (req, res)=>{
    try{
        const id_usuario = req.params.id_usuario
        const {fecha_ingreso} = req.body
        const voluntario = await voluntarioRepository.updateDateByIdUser(id_usuario)
        res.status(200).json(voluntario.toJSON())
        
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

export const findByIdUser = async (req, res)=> {
    try{
        const id_usuario = req.params.id_usuario
        const voluntario = await voluntarioRepository.findByIdUser (id_usuario)
        res.status(200).json(voluntario.toJSON())
    }catch(error){
        res.status(400).json({message : error}) 
    }
}

export const deleteByIdUser = async (req, res) => {
    try{
        const id_usuario = req.params.id_usuario
        const voluntario = await voluntarioRepository.deleteByIdUser (id_usuario)
        res.status(200).json(voluntario.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}