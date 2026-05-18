export class Donador{
    #id_usuario
    #ciudad
    constructor(id_usuario, ciudad){
        this.#id_usuario = id_usuario
        this.#ciudad = ciudad
    }

    toJSON(){
        return{
            id_usuario : this.#id_usuario,
            ciudad : this.#ciudad
        }
    }
}