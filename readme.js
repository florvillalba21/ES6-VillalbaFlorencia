const saludar = (nombre)=> {
    return `Hola ${nombre}`;
}
// Mostrar el resultado por consola
console.log(saludar('Alejandro'));



const multiplicar = (a, b)=>{
    return a*b;
}

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))

const crearAlumno = (nombre, apellido, edad, materias)=>{
    return {nombre,apellido,edad,materias};
}

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))


const devolverFecha=(dia, mes, año)=>{
    return `Hoy es ${dia}/${mes}/${año}`;
}
// Mostrar el resultado por consola.
console.log(devolverFecha('10','09','2022'));