const personajes = ["isai", "ange", "diana"];

const [ , pers2]=personajes;

// console.log(pers2);

const retirnaArreglo = ()=>{
    return ["abc",123];
}

const [letras, numeros]=retirnaArreglo();

// console.log(letras, numeros);

// 

const userState=(valor)=>{
    return [valor,()=>{console.log("hola mundo")}];
}

const [nombre, setNombre] = userState("isai");

console.log( nombre);
setNombre();




