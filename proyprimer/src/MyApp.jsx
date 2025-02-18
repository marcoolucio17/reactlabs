import React from 'react'
import { heroes } from './data/heroes';

export const MyApp = () => {


    const arreglo = [1,2,3,4,5];

    const doubles = arreglo.map((x) => {
        return x * 2;
    })

    // console.log(doubles);

    const getHeroeById = (id) => heroes.find( (heroe)=> heroe.id===id);
    console.log(getHeroeById(2));
    const getHeroeByEmpresa = (empresa) => heroes.filter( (heroe) => heroe.owner===empresa);
    console.log(getHeroeByEmpresa('Marvel'));

    
  return (
    <div>
        <p>"hola"</p>
    </div>
  )
}

function getSaludo(nombre) {
    return 'hola ' + nombre;
}