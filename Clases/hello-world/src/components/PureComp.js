import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure Component Render')
    // Solo re-renderiza si su valor cambia, si no hay diferencia no re-rendediza.
    // En PureComponents no es recomendable cambiar los estados, siempre retornar un nuevo objeto que refleje el nuevo estado.
    // Se recomienda usar Componenetes Regulares, salvo que hayan sobrecalentamiento en la ejecución de la aplicación.
    // Pure Components solo funciona en Class Components
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp