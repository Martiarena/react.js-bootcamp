/* import React, { PureComponent } from 'react'*/
import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Crimsondeath'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Crimsondeath'
            })
        }, 2000)
    }
    
  render() {
    console.log('*************** Parent Component Render ***************')
    // Si el componente padre es PureComponent, no se re-renderizan los componentes hijos
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        { /* <RegComp name={this.state.name} /> */ }
        {/* <PureComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default ParentComp