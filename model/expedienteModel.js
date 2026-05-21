export class Expediente{
    #id_expediente
    #id_paciente
    #fecha_apertura
    #estado

    constructor(id_expediente,id_paciente,fecha_apertura,estado){
        this.#id_expediente = id_expediente
        this.#id_paciente = id_paciente
        this.#fecha_apertura = fecha_apertura
        this.#estado = estado
    }

    toJSON(){
        return{
            id_expediente : this.#id_expediente,
            id_paciente : this.#id_paciente,
            fecha_apertura : this.#fecha_apertura,
            estado : this.#estado
        }
    }
    


}