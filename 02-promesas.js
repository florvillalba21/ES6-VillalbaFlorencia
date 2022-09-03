import { obtenerPcias, obtenerDptos, obtenerLocalidades } from './libs/funciones-exportadas.js';


// // Funcion para obtener todos los datos
const consultarDatos  = async ()=> {
    const provincias  = await obtenerPcias();
    const dptos       = await obtenerDptos();
    const localidades = await obtenerLocalidades();

    console.log(`LAS PROVINCIAS SON:\n ${provincias}  `)
    console.log('=======================================================================')
    console.log(`LOS DEPARTAMENTOS SON:\n ${dptos}`)
    console.log('=======================================================================')
    console.log(`LAS LOCALIDADES SON:\n ${localidades}`)
}

consultarDatos();