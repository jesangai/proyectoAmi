export class Ciudadano {

    constructor(_id = '', nombre = '', apellido = '', cedula = '', contrasena = '') {
        this._id = _id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.contrasena = contrasena;
    }

    _id: string;
    nombre: string;
    apellido: string;
    cedula: string;
    contrasena: string;
  
}
