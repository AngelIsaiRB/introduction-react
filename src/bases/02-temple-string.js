

// Temple strings 


const nombre = "isai";
const apelliod = "ramirez";

// const nombreCompleto = nombre +" " + apelliod;
const nombreCompleto = `${nombre} ${apelliod}`;


console.log(nombreCompleto);

function getSaludo(){
    return "hola: " +nombre ;
}

console.log(`este es un texto: ${getSaludo(nombre)}`);
