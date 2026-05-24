import {pool} from '../config/postgres'
import {Voluntario} from '../model/voluntarioModel'

const queryCreate = `
    INSER INTO voluntarios 
    (id_usuario, id_cuenta, fecha_ingreso)
    VALUES
    ($1,$2,$3)
    RETURNING *
`


const queryUpdateDateById = `
    UPDATE voluntarios 
    SET fecha_ingreso = $1
    WHERE id_usuario = $2
    RETURNING *
`


const queryFindByIdUser = `
    SELECT u.nombre, u.apellido_paterno, u.apellido_materno, u.telefono, u.correo, u.rfc, v.id_cuenta, v.fecha_ingreso
    FROM voluntarios v 
    INNER JOIN usuarios u 
    ON v.id_usuario = u.id 
    WHERE v.id_usuario = $1
    `

const queryDeleteByIdUser = `
    DELETE FROM voluntarios 
    WHERE id_usuario = $1 

`


export const create = async (id_usuario, id_cuenta, fecha_ingreso) =>{
    const result = await pool.query(queryCreate, [id_usuario, id_cuenta, fecha_ingreso])
    const row = result.rows [0]
    return new Voluntario(
        row.id_usuario,
        row.id_cuenta,
        row.fecha_ingreso
    )
}

export const updateDateByIdUser = async (id_usuario, fecha_ingreso) => {
    const result = await pool.query (queryFindByIdUser, [id_usuario, fecha_ingreso])
    const row = result.rows [0]
    return new Voluntario (
        row.id_usuario,
        row.id_cuenta,
        row.fecha_ingreso
    )
}


export const findByIdUser = async (id_usuario) => {
    const result = await pool.query (queryFindByIdUser, [id_usuario])
    return result.rows [0]
    
}

export const deleteByIdUser = async (id_usuario) => {
    const result = await pool.query (queryDeleteByIdUser , [id_usuario])
    
    return result.rows[0]
}

