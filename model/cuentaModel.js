export class Cuenta{
    #id
    #password
    #estado

    constructor(id, password, estado){
        this.#id = id
        this.#password = password
        this.#estado = estado
    }

    toJSON(){
        return{
            id : this.#id,
            estado : this.#estado
        }
    }
}