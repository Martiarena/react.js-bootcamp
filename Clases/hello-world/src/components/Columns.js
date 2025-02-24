import React from 'react'

function Columns() {
    const items = []

    // otro modo de usar React.Fragments "<> </>" pero no se le pueden colocar atributos

    return (
        <React.Fragment> 
            {
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Crimsondeath</td>
        </React.Fragment>
    )
}

export default Columns