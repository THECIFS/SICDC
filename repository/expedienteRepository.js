import {pool} from '../config/postgres'
import { Expediente } from '../model/expedienteModel'


const queryCreate = `
    INSERT INTO expedientes (id_paciente, fecha_apertura, estado)
    VALUES ($1, $2, $3)
    RETURNING *
    `

const queryFindByIdUser = `
    SELECT * FROM expedientes
    WHERE id_paciente = $1
    `

const queryUpdateStatusById = `
    UPDATE expedientes 
    SET
    estado = $1
    WHERE id_expediente = $2
    RETURNING *
`

const queryDeleteById = `
    DELETE FROM expedientes
    WHERE id_expediente = $1
    RETURNING *
`

const queryUpdateDateById = `
    UPDATE expedientes 
    SET fecha_apertura = $1
    RETURNING *
`

export const create = async (id_paciente, fecha_apertura, estado) =>{
    const result = pool.query (queryCreate, [id_paciente, fecha_apertura, estado])
    const row = result.rows [0]
    return new Expediente(
        row.id_expediente,
        row.id_paciente,
        row.fecha_apertura,
        row.estado
    )
} 


export const findByIdUser = async (id_paciente) => {
    const result = pool.query (queryFindByIdUser, [id_paciente])
    const row = result .rows [0]
    return new Expediente(
        row.id_expediente,
        row.id_paciente,
        row.fecha_apertura,
        row.estado
    )
}

export const UpdateStatusById = async (id_expediente, estado) => {
    const result = pool.query (queryUpdateStatusById, [id_expediente,estado])
    const row = result.rows [0]
    return new Expediente (
        row.id_expediente,
        row.id_paciente,
        row.fecha_apertura,
        row.estado
    )
}

export const deleteById = async (id_expediente) => {
    const result = pool.query(queryDeleteById , [id_expediente])
    const row = result.rows [0]
    return new Expediente (
        row.id_expediente,
        row.id_paciente,
        row.fecha_apertura,
        row.estado
    )
}

export const updateDateById = async (id_expediente, fecha_apertura) =>
{
    const result = pool.query (queryUpdateDateById, [id_expediente, fecha_apertura]) 
    const row = result.rows [0]
    return new Expediente(
        row.id_expediente,
        row.id_paciente,
        row.fecha_apertura,
        row.estado
    )
}

