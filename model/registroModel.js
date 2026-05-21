export class Registro{
    #id_registro
    #id_expediente
    #id_medico
    #id_area
    #fecha
    #diagnostico
    #tratamiento

    constructor(id_registro, id_expediente, id_medico,
         id_area, fecha, diagnostico,tratamiento){
            this.#id_registro
            this.#id_expediente = id_expediente
            this.#id_medico
            this.#id_area
            this.#fecha = fecha
            this.#diagnostico = diagnostico
            this.#tratamiento = tratamiento
         }

    
    toJSON(){
        return{
            id_registro : this.#id_registro,
            id_expediente : this.#id_expediente,
            id_medico : this.#id_medico,
            id_area : this.#id_area,
            fecha : this.#fecha,
            diagnostico : this.#diagnostico,
            tratamiento : this.#tratamiento
        }
    }
}