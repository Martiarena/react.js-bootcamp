import React, { Component } from "react";

class Contadorrender extends Component {
  state = { count: 0 };

  incrementar = (valor = 1) => {
    this.setState((prevState) => ({ count: prevState.count + valor }));
  };

  decrementar = (valor = 1) => {
    // Evitar Números negativos : Math.max(prevState.count - valor, 0)

    this.setState((prevState) => ({ count: Math.max(prevState.count - valor, 0) }));
  };

  render() {
    return this.props.render(this.state.count, this.incrementar, this.decrementar);
  }
}

export default Contadorrender