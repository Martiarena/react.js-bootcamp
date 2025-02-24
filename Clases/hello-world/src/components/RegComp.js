import React, { PureComponent } from 'react'

class RegComp extends PureComponent {
  render() {
    console.log('Regular Component Render')
    // Solo re-renderiza siempre, así su valor sea el mismo.
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp