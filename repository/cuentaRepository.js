import { pool } from '../config/postgres'
import { Cuenta } from '../model/cuentaModel'

const queryCreate = `
    INSERT INTO cuentas (password, estado)
    VALUES ($1,$2) RETURNING *
`

const queryFindById = `
    SELECT * FROM cuentas WHERE id = $1
`

const queryUpdateEstadoById = `
    UPDATE cuentas SET estado = $1 WHERE id = $2 RETURNING
`

export const create = async (password, estado) => {
    const result = await pool.query(queryCreate, [password, estado])
    const row = result.rows[0]
    return new Cuenta(
        row.id,
        row.password,
        row.estado
    )
}

export const findById = async (id) => {
    const result = await pool.query(queryFindById, [id])
    const row = result.rows[0]
    return new Cuenta(
        row.id,
        row.password,
        row.estado
    )
}


export const updateEstadoById = async (id, estado) => {
    const result = await pool.query(queryUpdateEstadoById, [estado, id])
    const row = result.rows[0]
    return new Cuenta(
        row.id,
        row.password,
        row.estado
    )
}

