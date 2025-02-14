import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    // SIEMPRE USAR setState para cambiar un estado
    increment() {
        /*this.setState(
            {
                count: this.state.count + 1
            }, // Callback como Argumento
            () => {
                console.log('Callback value', this.state.count)
            }
        )
        console.log(this.state.count)*/

        // Se actualiza el estado anterior usando prevState, se añade props si se va a usar con Propiedades
        this.setState((prevState, props) => ({
            count: prevState.count + this.props.addValue
        }))
        console.log(this.state.count)

        // Cuando se necesite actualizar un State basado en el valor de un State anterior, se envia en una función como argumento en vez de un objeto regular
    }

    incrementFive() {
        this.increment()
        /*this.increment()
        this.increment()
        this.increment()
        this.increment()*/
    }

    render() {
        return (
            <div>
                <div>Count {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter