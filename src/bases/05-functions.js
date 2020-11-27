


// funciones en javascript

// no recomedable 
// funtion saludar(){
//     return "hola"
// }

// forma recomendble 
const saludar = function (nombre){

    return `hola ${nombre}`;
}

const saludar2 =(nombre)=>{
    
    return `hola ${nombre}`;
}
const saludar3 =(nombre)=> `hola ${nombre}`;

console.log(saludar3("isai"));


const getUser= ()=> ({
    uid: "asd",
    username: "nombre_usbad"
});

console.log(getUser());

const getUsuarioActivo= (nombre)=> ({
    uid: "sasdasd",
    username: nombre
});

console.log(getUsuarioActivo("isai"));


