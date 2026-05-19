import { pool } from '../config/postgres'
import {Administrador} from '../model/administradorModel'

const queryCreate = `
    INSERT INTO administradores (
        id_usuario, id_cuenta, oficina
    ) VALUES (
        $1,$2,$3
    ) RETURNING
`

const queryFindByIdCuenta = `
    SELECT * FROM administradores
    WHERE id_cuenta = $1
`

const queryUpdateOficinaByIdCuenta = `
    UPDATE administradores SET oficina = $1
    WHERE id_cuenta = $2 RETURNING *
`

export const create = async (id_usuario, id_cuenta, oficina) => {
    const result = await pool.query(queryCreate, [id_usuario, id_cuenta, oficina])
    const row = result.rows[0]
    return new Administrador(
        row.id_usuario,
        row.id_cuenta,
        row.oficina
    )
}

export const findByIdCuenta = async (id_cuenta) => {
    const result = await pool.query(queryFindByIdCuenta, [id_cuenta])
    const row = result.rows[0]
    return new Administrador(
        row.id_usuario,
        row.id_cuenta,
        row.oficina
    )
}

export const updateOficinaByIdCuenta = async (oficina, id_cuenta) => {
    const result = await pool.query(queryUpdateOficinaByIdCuenta, [oficina, id_cuenta])
    const row = result.rows[0]
    return new Administrador(
        row.id_usuario,
        row.id_cuenta,
        row.oficina
    )
}