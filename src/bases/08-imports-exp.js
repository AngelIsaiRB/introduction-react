// import {heroes} from "./data/heroes";
// import {heroes} from './data/heroes'
import heroes, { owners} from "../data/heroes";




 export const getHeroeById = (id) => heroes.find((element) => element.id===id);




export const getHeroesBYOwner = (owner) => heroes.filter((element)=>element.owner===owner);

