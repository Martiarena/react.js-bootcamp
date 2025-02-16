import React from 'react';

export default function Map() {

    /* EJEMPLO 1 TRANSFORMAR PRECIO */
/*
    const preciosSol = [10, 20, 30, 40];
    const preciosUSD = preciosSol.map(precio => precio * 3.70);

    console.log(preciosUSD);
*/
    /* EJEMPLO 2 AÑADIR PARÁMETRO */
/*
    const productos = [
        { nombre: "Smartphone", precio: 1500 },
        { nombre: "Smartwatch", precio: 3000 },
        { nombre: "Oso de Felpa", precio: 1000 },
        { nombre: "Encendedor", precio: 900 }
    ];
    
    const productosConImpuesto = productos.map(producto => ({
        ...producto,  // Copia todas las propiedades originales con (Spread)
        precioConIVA: producto.precio * 1.21 // Se agrega el nuevo campo
    }));
    
    console.log(productosConImpuesto);
    /* Nuevo array productosConImpuesto
    [
        { nombre: 'Smartphone', precio: 1500, precioConIVA: 1815 },
        { nombre: 'Smartwatch', precio: 3000, precioConIVA: 3630 },
        { nombre: 'Oso de Felpa', precio: 1000, precioConIVA: 1210 },
        { nombre: 'Encendedor', precio: 900, precioConIVA: 1089 }
    ]
    */

    /* EJEMPLO 3 AÑADIR INDICE */

    /*const nombres = ["Bryan", "Kevin", "Brandon"];

    const nombresEnumerados = nombres.map((nombre, indice) => `${indice + 1}. ${nombre}`);

    console.log(nombresEnumerados); */

    /* EJEMPLO 4 filtrando datos solo 1 campo */
/*
    const usuarios = [
        { nombre: "Melania", edad: 15 },
        { nombre: "Popeye", edad: 22 },
        { nombre: "Atlas", edad: 18 }
    ];
    
    const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18).map(usuario => usuario.nombre); 
    // Se usa filter con >= para filtrar los mayores de edad, luego se usa map() para extraer solo los nombres.
    
    console.log(mayoresDeEdad); 
*/
    /* EJEMPLO 5 seleccionar 1 parametro de 1 json */

    /* const jsonData = '[{"nombre":"Fran","edad":18},{"nombre":"Ethan","edad":25},{"nombre":"Sheeba","edad":25}]';

    const usuarios = JSON.parse(jsonData); // Convertimos de JSON a array de objetos

    const nombres = usuarios.map(usuario => usuario.nombre);

    console.log(nombres); */

    const numeros = [1, 2, 3];

    const resultado = numeros.forEach(num => num);

    console.log(resultado);

    return (
        <div><strong>map</strong> (Revisar Consola)</div>
    )
}