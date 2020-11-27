

//  Desestructuracion o asignacion desestructurante 


const persona = {

    nombre :"tony",
    edad   :  56,
    clave  : "gg",
    
};

// const  {  nombre, clave, edad } = persona;
// renombrar
// const  {  nombre: nuevonombre } = persona;

// console.log(persona.nombre);
// console.log(edad  );
// console.log(clave );


const useeContext =({nombre , edad, range="capitan VI"})=>{
    // console.log(nombre, edad, range);

    return {
        nombreclave: nombre,
        anios: edad,
        latlng:{
            lat:1231231,
            lang:2342342
        }
    }

}

const {nombreclave, anios, latlng:{ lat,lang}  }  = useeContext(persona);
console.log(nombreclave, anios);
console.log(lat,lang);

