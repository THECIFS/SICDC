import { pool } from '../config/postgres'
import { Donador } from '../model/donadorModel'

const queryCreate = `
    INSERT INTO donadores (ciudad) VALUES ($1) RETURNING *
`

const queryFindById = `
    SELECT * FROM donadores WHERE id = $1
`

const queryUpdateCiudadById = `
    UPDATE donadores SET ciudad = $1 WHERE id = $2 RETURNING * 
`

export const create = async (id_usuario, ciudad) => {
    const result = await pool.query(queryCreate, [id_usuario, ciudad])
    const row = result.rows[0]
    return new Donador(
        row.id,
        row.ciudad
    )
}

export const findById = async (id) => {
    const result = await pool.query(queryFindById, [ciudad])
    const row = result.rows[0]
    return new Donador(
        row.id,
        row.ciudad
    )
}

export const updateCiudadById = async (id, ciudad) => {
    const result = await pool.query(queryUpdateCiudadById, [ciudad, id])
    const row = result.rows[0]
    return new Donador(
        row.id,
        row.ciudad
    )
}