import { pool } from '../config/postgres'
import { Area } from '../model/areaModel'

const queryCreate = `
    INSERT INTO areas (nombre)
    VALUES($1) RETURNING * 
`

const queryFindById = `
    SELECT * FROM areas
    WHERE id = $1
`

const queryUpdateById = `
    UPDATE areas SET nombre = $1
    WHERE id = $2 RETURNING * 
`

const queryDeleteById = `
    DELETE FROM areas WHERE id = $1 RETURNING *
`

export const create = async (nombre) => {
    const result = await pool.query(queryCreate, [nombre])
    const row = result.rows[0]
    return new Area(
        row.id,
        row.nombre
    )
}

export const findById = async (id) => {
    const result = await pool.query(queryFindById, [id])
    const row = result.rows[0]
    return new Area(
        row.id,
        row.nombre
    )
}

export const updateById = async (id, nombre) => {
    const result = await pool.query(queryUpdateById, [nombre, id])
    const row = result.rows[0]
    return new Area(
        row.id,
        row.nombre
    )
}

export const deleteById = async (id) => {
    const result = await pool.query(queryDeleteById, [id])
    const row = result.rows[0]
    return new Area(
        row.id,
        row.nombre
    )
}