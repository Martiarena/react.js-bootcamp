import React, { Component } from 'react'
import ComponentF from './ComponentF'
import userContext from './userContext'

class ComponentE extends Component {
    // ComponentE.contextType = userContext
    static contextType = userContext
    // Dos limitaciones: 1-solo funciona en componentes clase,
                    //   2-solo permite 1 solo contexto con context type.

    render() {
        return (
            <div>
                Component E Context {this.context}
                <ComponentF />
            </div>
        )
    } 
}

export default ComponentE