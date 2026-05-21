export class Usuario{
    #id_usuario
    #nombre
    #ap_paterno
    #ap_materno
    #telefono
    #email
    #rol
    #rfc

    constructor(id_usuario,nombre,ap_paterno,ap_materno,telefono,email,rol,rfc){
        this.#id_usuario = id_usuario
        this.#nombre = nombre
        this.#ap_paterno = ap_paterno
        this.#ap_materno = ap_materno
        this.#telefono = telefono
        this.#email = email
        this.#rol = rol
        this.#rfc = rfc      
    }



}