import * as usuarioRepository from '../repository/usuarioRepository'

export const create = async (req, res) =>{
    try{
        const {nombre, apellido_paterno, 
                apellido_materno, telefono, correo, rol , rfc } = req.body
        const usuario = await usuarioRepository.create(
                nombre, apellido_paterno, apellido_materno, telefono, correo, rol, rfc)
        
        res.status(201).json(usuario.toJSON())        

    }catch(error){
        res.status(400).json({message : error.message})
    }
    
}

export const updateById = async (req, res) => {
    try{
        const id = req.params.id
        const {nombre, apellido_paterno, apellido_materno, telefono, correo, rol, rfc} = req.body
        const usuario = await usuarioRepository.updateById (id, nombre, apellido_paterno, apellido_materno, telefono, correo, rol, rfc)
        res.status (200).json(usuario.toJSON())
    }catch (error){
        res.status (400).json({message : error.message})

    }
}

export const deleteByIdUser = async (req, res ) =>{
    try{
        const id = req.params.id
        const usuario = await usuarioRepository.deleteByIdUser (id)
        res.status(200).json(usuario.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}


export const findByIdUser = async (req, res) => {
    try{
        const id= req.params.id
        const usuario = await usuarioRepository.findByIdUser (id)
        res.status(200).json(usuario.toJSON())
    }catch(error){
        res.status(400).json({message : error.message})
    }
}

