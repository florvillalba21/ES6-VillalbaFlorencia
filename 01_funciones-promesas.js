// // Promesa almacenada en una constante
const promesa = new Promise((resolve, reject) => {
  (11 === 11)
    ? resolve("Los valores son iguales")
    : reject("Los valores son distintos");
});


// // Promesa dentro en una función.
const promesaDos = (provincia) => {
  return new Promise((resolve, reject) => {
    ("Formosa" === provincia)
      ? resolve("Usted está ubicado en Formosa")
      : reject("Error al realizar la consulta");
  });
};

//promesa tres
const promesaTres = (valorBooleano) => {
  return new Promise((resolve, reject) => {
    (true === valorBooleano)
      ? resolve("Los valores son iguales")
      : reject("Los valores son distintos");
  });
};

//promesa cuatro
const promesaCuatro = async (arguments) => {
  return (true === arguments)
      ? ("prom4: Los valores son iguales")
      : ("prom4:Los valores son distintos");
  
};


//llamando a la constante promesa
promesa
  .then(mensaje => console.log(mensaje))
  .catch(err => console.log(err));

// //llamando a la funcion2
promesaDos("Formosa")
  .then(mensaje => console.log(mensaje))
  .catch(err  => console.log(err));

//llamando a la funcion 3
promesaTres(true)
  .then(mensaje => console.log(mensaje))
  .catch(err  => console.log(err));


//llamando a la funcion 4
promesaCuatro(true)
  .then(mensaje => console.log(mensaje))
  .catch(err  => console.log(err));
