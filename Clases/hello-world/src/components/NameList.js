import React from 'react'
/*import Person from './Person'*/

function NameList() {
    /*const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map(name => <h2>{name}</h2>)
    return <div>{nameList}</div>*/

    

    /*const persons = [
        {
            id: 1, 
            name: 'Bruce', 
            age: 30, 
            skill: 'React'
        },
        {
            id: 2, 
            name: 'Clark', 
            age: 25, 
            skill: 'Angular'
        },
        {
            id: 3, 
            name: 'Diana', 
            age: 28, 
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>*/
    
    /* Ejemplo con Index como Key */

    /* Se puede usar index como Key cuando:
    1.- Los objetos en la lista no tienen un id unico.
    2.- La lista es estática y no cambiará.
    3.- La Lista no será reordenada o filtrada.

    Se usa como último recurso.
    */
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
    const nameList = names.map((name, index) => <h2 key={index}>{index}. {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList