import { pool } from "../config/postgres"
import { Usuario } from "../model/usuarioModel"

const queryCreate = `
    INSERT INTO usuarios (
    nombre, apellido_paterno,apellido_materno, telefono, correo, rol, rfc)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
`

const queryUpdateById = `
    UPDATE usuarios SET 
        nombre=$1, 
        apellido_paterno = $2,
        apellido_materno = $3,
        telefono = $4,
        correo = $5,
        rol =$6,
        rfc = $7        
        WHERE id = $8
        RETURNING *
`

const queryDeleteByIdUser = `
    DELETE FROM usuarios
    WHERE id = $1
    RETURNING *
`

const queryFindById = `
    SELECT * FROM usuarios 
    WHERE id = $1
`


export const create = async (nombre, apellido_paterno, apellido_materno, telefono, correo, rol, rfc) =>{
    const result = await pool.query(queryCreate, [nombre,apellido_paterno, apellido_materno, telefono, correo, rol, rfc])
    const row = result.rows [0]
        return new Usuario(
            row.id,
            row.nombre,
            row.apellido_paterno,
            row.apellido_materno,
            row.telefono,
            row.correo,
            row.rol,
            row.rfc
        )
}

export const updateById = async (id, nombre, apellido_paterno, apellido_materno, telefono, correo, rol, rfc)=>{
    const result = await pool.query (id, queryUpdateById, [nombre, apellido_paterno, apellido_materno, telefono, correo, rol, rfc])
    const row = result.rows[0]
        return new Usuario(
            row.id,
            row.nombre,
            row.apellido_paterno,
            row.apellido_materno,
            row.telefono,
            row.correo,
            row.rol,
            row.rfc
        )
}

export const deleteByIdUser = async (id) => {
    const result = await pool.query(
        queryDeleteByIdUser,[id]
    )
    const row = result.rows [0]
    return new Usuario(
        row.id,
        row.nombre,
        row.apellido_paterno,
        row.apellido_materno,
        row.telefono,
        row.correo,
        row.rol,
        row.rfc
    )
}

export const findById  = async (id) => {
    const result = await pool.query(
        queryFindById,[id]
    )

    const row = result.rows [0]
    return new Usuario(
        row.id,
        row.nombre,
        row.apellido_paterno,
        row.apellido_materno,
        row.telefono,
        row.correo,
        row.rol,
        row.rfc

    )
}

