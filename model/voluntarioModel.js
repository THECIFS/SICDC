
import {Usuario} from './usuarioModel.js'

export class Voluntario extends Usuario{
    
    #id_cuenta
    #fecha_ingreso

    constructor(id_cuenta,fecha_ingreso,id_usuario,
                nombre,apellido_paterno,apellido_materno,telefono,correo,rol,rfc){           
        

        super(
            id_usuario,
            nombre,
            apellido_paterno,
            apellido_materno,
            telefono,
            correo,
            rol,
            rfc
        )

       
        this.#id_cuenta = id_cuenta
        this.#fecha_ingreso = fecha_ingreso
    }
        toJSON(){
            return{
                ...super.toJSON(),               
                id_cuenta : this.#id_cuenta,
                fecha_ingreso : this.#fecha_ingreso
            }
        }
        








}