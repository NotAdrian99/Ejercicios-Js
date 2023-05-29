// Ej 1 2 3 4 5 6 7
let miNombre = "Adrian";

let miApellido = "Ruggia";

let miEdad = 23;

let miMascota = "Manchas ";

let edadMascota = 3;

let nombreCompleto = miNombre + " " + miApellido;

// console.log(nombreCompleto);

// Ej 8

let textoPresentacion = {
  miNombre,
  miEdad,
  miApellido,
  miMascota,
  edadMascota,
};

// console.log(textoPresentacion);

// Ej 9

let sumaEdades = miEdad + edadMascota;

let restaEdades = miEdad - edadMascota;

let productoEdades = miEdad * edadMascota;

let divisionEdades = miEdad / edadMascota;

// console.log(sumaEdades);

// Ej. 10

textoPresentacion = {
  miNombre,
  miEdad,
  miApellido,
  miMascota,
  edadMascota,
  sumaEdades,
  restaEdades,
  productoEdades,
  divisionEdades,
};

// console.log(textoPresentacion);

// Ej.11

let alumno = {
  nombre: miNombre,
  apellido: miApellido,
  edad: miEdad,
  ocupacion: "estudiante",
  sabeCocinar: true,
};

// console.table(alumno);

// console.log(alumno.nombre);

// Ej 12

let mascota = {
  nombre: "manchas",
  edad: 3,
  color: "gris y blanco",
  sexo: "macho",
  esPanzon: true,
};

// Ej. 13

let frutas = ["manzanas", "bananas", "duraznos", "frutillas", "uvas"];

// console.log(frutas[0]);

// Ej 14

let numeros = [1, 2, 3, 4, 5];

// Ej 15

let familia = ["madre", "padre", "hermano", "abuelo", "tio"];

// Ej 16

let textoAleatorio = frutas[1] + " " + numeros[3] + " " + familia[4];

// console.log(`Ayer mi ${familia[4]} se comió las ${numeros[3]} ${frutas[1]} que habian en la casa`);

// Ej 17

let edad1 = prompt("Ingrese su edad");

let edad2 = prompt("Ingrese la edad de su compañero");

console.log(edad1, edad2);

if (edad1 == edad2) {
  console.log(`Mi edad es igual a la de mi compañero`);
} else {
  console.log(`Mi edad no es igual a la de mi compañero1`);
}
const edadesIguales = edad1 == edad2;

console.log(`Mi edad es igual a la de mi comañero: ${edadesIguales}`);

const soyMayor = edad1 > edad2;

console.log(`Mi edad es mayor a la de mi compañero:${soyMayor}`);

const soyMenor = edad1 < edad2;

console.log(`Mi edad es menor a la de mi compañero: ${soyMenor}`);

// Ej. 18

let edadIngresada = prompt("Ingrese su edad");

soyMayorDeEdad = edadIngresada;

console.log(soyMayorDeEdad);
if (soyMayorDeEdad >= 18) {
  console.log(`Soy mayor de edad ${soyMayorDeEdad}`);
} else {
  console.log(`Soy menor de edad ${soyMayorDeEdad}`);
}

//19

let edad = prompt("Ingrese su edad");
let altura = prompt("Ingrese su altura");

let puedeSubir = edad >= 6 && altura >= 120;

console.log("Puede subir a la atraccion " + puedeSubir);

//20

let pase = prompt("Ingrese su pase");
let saldo = prompt("Ingrese su saldo");

let puedePasar = pase === "VIP" || saldo > 1000;

if (puedePasar) {
  console.log(true);
} else console.log(false);

console.log("La persona puede pasar:" + puedePasar);
