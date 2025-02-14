import React, { Component } from 'react'

class Contadorsumaresta extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    sumar() {
        this.setState((prevState, props) => ({
            count: prevState.count + this.props.addValue
        }))
    }

    restar() {
        if(this.state.count <= 0){

        }else{
            this.setState((prevState, props) => ({
                count: prevState.count - this.props.addValue
            }))
        }
    }

    reiniciar() {
        this.setState((prevState, props) => ({
            count: 0
        }))
    }

    render() {
        return (
            <div>
                <div>Contador {this.state.count}</div>
                <button onClick={() => this.sumar()}>Sumar</button>
                <button onClick={() => this.reiniciar()}>Reiniciar</button>
                <button onClick={() => this.restar()}>Restar</button>
            </div>
        )
    }
}

export default Contadorsumaresta