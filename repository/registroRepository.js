import { pool } from "../config/postgres"
import { Registro } from "../model/registroModel"

const queryCreate = `
    INSERT INTO registros 
    (id_expediente, id_medico, id_area, fecha, diagnostico, tratamiento)
    VALUES
    ($1, $2, $3, $4, $5, $6)
    RETURNING *
`

//Record = expediente
const queryFindByIdRecord = `
    SELECT * FROM registros 
    WHERE id_expediente = $1
`


const queryUpdateById = `
    UPDATE SET
    id_medico = $1,
    id_area = $2,
    fecha = $3,
    diagnostico = $4,
    tratamiento = $5
    WHERE id_registro = $6
`

const queryDeleteById = `
    DELETE FROM registros 
    WHERE id_registro =$1
    RETURNING *
`


export const create = async (id_expediente, id_medico, id_area, fecha, diagnostico, tratamiento) => {
    const result = pool.query (queryCreate , [id_expediente, id_medico, id_area, fecha, diagnostico, tratamiento])
    const row = result.rows [0]
    return new Registo (
        row.id_registro,
        row.id_expediente,
        row.id_medico,
        row.id_area,
        row.fecha,
        row.diagnostico,
        row.tratamiento
    )
}

export const findByIdRecord = async (id_expediente) => {
    const result = pool.query (queryFindByIdRecord, [id_expediente])
    return result.rows.map (row => new Registro(
        row.id_registro,
        row.id_expediente,
        row.id_medico,
        row.id_area,
        row.fecha,
        row.diagnostico,
        row.tratamiento
    ))
}

export const updateById = async (id_registro,id_medico, id_area, fecha, diagnostico, tratamiento) => {
    const result = pool.query (queryUpdateById , [id_registro])
    const row = rows[0]
    return new Registro (
        row.id_registro,
        row.id_expediente,
        row.id_medico,
        row.id_area,
        row.fecha,
        row.diagnostico,
        row.tratamiento
    )
}

export const deleteById = async (id_registro) => {
    const result = pool.query (queryDeleteById, [id_registro])
    const row = result.rows[0]
    return new Registro (
        row.id_registro,
        row.id_expediente,
        row.id_medico,
        row.id_area,
        row.fecha,
        row.diagnostico,
        row.tratamiento
    )
}

