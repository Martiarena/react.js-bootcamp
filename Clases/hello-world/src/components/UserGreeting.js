import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    /* 4ta Aproximación (Recomendada 1) */

    render() {
        return this.state.isLoggedIn && <div>Welcome Crimsondeath</div>
    }

    /*3ra Aproximación (Recomendada 2) */
    /*
    render() {
        return this.state.isLoggedIn ? (
            <div>Welcome Crimsondeath</div>
        ) : (
            <div>Welcome Guest</div>
        )
    }
    */

    /* 2da aproximacion */

    /*render() {
        let message
        if(this.state.isLoggedIn){
            message = <div>Welcome Crimsondeath</div>
        } else {
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
    }*/

    /* 1era proximación */

    /* 
    render() {
        if (this.state.isLoggedIn) {
            return <div>Welcome Crimsondeath</div>
        } else {
            return <div>Welcome Guest</div>
        }
    }
    */

    /*
    render(){
        return (
            <div>
                <div>Welcome Crimsondeath</div>
                <div>Welcome Guest</div>
            </div>
        )
    }
    */
}

export default UserGreeting
