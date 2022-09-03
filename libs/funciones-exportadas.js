const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias = async () => {
    try {
        await retrasar(1800);
        const consulta = await fetch("https://apis.datos.gob.ar/georef/api/provincias")
        const result   = await consulta.json()

        return result.provincias.map(prov => prov.nombre);
    } catch (error) {
        console.log("Ha ocurrido un error al realizar la consulta")
    }

}



// Función que retorna los datos de departamentos
const obtenerDptos = async () => {
    try {
        await retrasar(1391);
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/municipios');
        const result   = await consulta.json()
        
        
        return result.municipios.map(dpto => dpto.nombre)        
    } catch (error) {
        console.log("Ha ocurrido un error al realizar la consulta")
    }

}

// // Función que retorna los datos de localidades
const obtenerLocalidades = async()=> {
    await retrasar(900);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades');
    const result   = await consulta.json()

    return result.localidades.map(result => result.nombre)
}

export {
    obtenerPcias,
    obtenerDptos,
    obtenerLocalidades
}