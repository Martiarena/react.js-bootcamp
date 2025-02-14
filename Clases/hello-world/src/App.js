import React, { Component } from "react";
import './App.css';
/* Usando const se importa: "import { Greet } from './components/Greet';" */
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <Counter addValue={2} /> */}
        { /* <Message /> */ }
        { /*<Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>*/ }
        {/* <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />*/ }
        { /* <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */ }
        {/* <Hello />*/}
      </div>
    );
  }
}

export default App;
