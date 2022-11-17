//programacion orientada a objetos o POO 

/*
 
clases:Modelo a seguir 
Objetos- es una instancia de una clase 
Atributos--Es una caracteristica o propiedades del objeto
(son variables dentro de un objeto)
Metodos- son acciones dentro de el objeto.



*/

/*
var usuario = {
    nombre: "juan",
    apellidp: "lescano"

}
function sayhello(){
    console.log("hola");

}

usuario.sayhello = sayhello;
usuario.sayhello();
*/

//funcion constructora
/*
function Usuario (nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
    this.sonar = function(){
        console.log(`hola ${this.nombre}`)
    }
    this.sonar();
}
const  usuario = new Usuario("lucas","macho");
console.log(usuario);
*/
// herencia prototipica

//funcion Factory o constructora
/*
const persona = (nombre,genero,isDeveloper)=>{
     return {
        nombre,
        genero,
        isDeveloper,
        saludo : function(){
            console.log("Hello");
         }
      }
}   

const peter = persona("juan","macho",true)

console.log(peter)*/

//clases;
class persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    static saludo(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
}
const nuevaPersona = new persona("juan",19,true); //instancia 
console.log(nuevaPersona);


const  elias = new persona("juan",19,1.60);


//los getter setter nos permiten obtener un valor de nuestra clase 
//un metodo estatico se puede ejecutar sin nesesidad de instanciar la clase

