
import {Usuario} from './usuarioModel.js'

export class Voluntario extends Usuario{
    #id_voluntario
    #id_cuenta
    #fecha_ingreso

    constructor(id_voluntario,id_cuenta,fecha_ingreso,id_usuario,
                nombre,ap_paterno,ap_materno,telefono,email,rol,rfc){           
        

        super(
            id_usuario,
            nombre,
            ap_paterno,
            ap_materno,
            telefono,
            email,
            rol,
            rfc
        )

        this.#id_voluntario = id_voluntario
        this.#id_cuenta = id_cuenta
        this.#fecha_ingreso = fecha_ingreso
    }
        toJSON(){
            return{
                ...super.toJSON(),
                id_voluntario : this.#id_voluntario,
                id_cuenta : this.#id_cuenta,
                fecha_ingreso : this.#fecha_ingreso
            }
        }
        








}