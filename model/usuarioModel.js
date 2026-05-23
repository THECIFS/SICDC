export class Usuario{
    #id_usuario
    #nombre
    #apellido_paterno
    #apellido_materno
    #telefono
    #correo
    #rol
    #rfc

    constructor(id_usuario,nombre,apellido_paterno,apellido_materno,telefono,correo,rol,rfc){
        this.#id_usuario = id_usuario
        this.#nombre = nombre
        this.#apellido_paterno = apellido_paterno
        this.#apellido_materno = apellido_materno
        this.#telefono = telefono
        this.#correo = correo
        this.#rol = rol
        this.#rfc = rfc      
    }

    toJSON(){
        return {
            id_usuario : this.#id_usuario,
            nombre : this.#nombre,
            apellido_paterno : this.#apellido_paterno,
            apellido_materno : this.#apellido_materno,
            telefono : this.#telefono,
            correo : this.#correo,
            rol : this.#rol,
            rfc : this.#rfc
        }
    }



}