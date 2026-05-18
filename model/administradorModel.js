export class Administrador{
    #id_usuario
    #id_cuenta
    #oficina

    constructor(id_usuario, id_cuenta, oficina){
        this.#id_usuario = id_usuario
        this.#id_cuenta = id_cuenta
        this.#oficina = oficina
    }
    
    toJSON(){
        return{
            id_usuario : this.#id_usuario,
            id_cuenta : this.#id_cuenta,
            oficina : this.#oficina
        }
    }
}
