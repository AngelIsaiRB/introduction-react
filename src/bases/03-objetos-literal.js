const persona={
    nombre : "james",
    apellido : "stark",
    edad : 45,
    dirrecion : {
        ciudad:"new york",
        zipcode: 2342,
        latitud: 1233123.123123,
        longitud : 234234.234,

    }
};



console.log(persona);
const persona2 = {...persona};

persona2.nombre="petter";
console.log(persona2);
console.log(persona);

