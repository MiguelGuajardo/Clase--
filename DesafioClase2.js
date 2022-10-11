class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombreMascota){
        mascotas.push(nombreMascota)
    }
    countMascotas(){
        return mascotas.length
    }
    addBook(nombre){
        libros.push(nombre)
    }
    getBookNames(){
        const respuesta = libros.filter((libro) => libro.name)
        return respuesta
}
}
const mascotas = [];
const libros = [];

let persona1 = new Usuario("Carlos","Paz",libros,mascotas)
persona1.addMascota("Oseias")
persona1.addMascota("Leon")
persona1.addMascota("Boby")
persona1.addBook("El señor de las moscas","William Golding")
persona1.addBook("Fundacion","Isaac Asimov")

console.log(persona1.getFullName());
console.log(mascotas);
console.log(persona1.countMascotas());
console.log(persona1.getBookNames());

console.log("Persona 1", persona1)