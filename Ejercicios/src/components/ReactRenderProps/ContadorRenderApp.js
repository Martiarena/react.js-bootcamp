import React, { Component } from 'react'
import Contadorrender from './Contadorrender'

export default class ContadorRenderApp extends Component {
  render() {
    return (
            <Contadorrender render={(count, incrementar, restar) => (
                <div>
                    <h1>Contador: {count}</h1>
                    <button onClick={() => incrementar(5)}>+5</button>
                    <button onClick={() => restar(2)}>-2</button>
                </div>
            )} />
        )
    }
}