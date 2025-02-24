import React, { Component } from "react";
import './App.css';
import ClickCounterTwo from "./components/RenderProps/ClickCounterTwo";
import HoverCounterTwo from "./components/RenderProps/HoverCounterTwo";
/* Usando const se importa: "import { Greet } from './components/Greet';" */
/*
import ClickCounter from "./components/HigherOrderComponents/ClickCounter";
import HoverCounter from "./components/HigherOrderComponents/HoverCounter";
import UpdatedComponent from "./components/HigherOrderComponents/withCounter";
import Hero from "./components/ErrorBoundary/Hero";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import PortalDemo from "./components/PortalDemo";
import FRParentInput from "./components/FRParentInput";
import RefDemo from "./components/RefDemo";
import FocusInput from "./components/FocusInput";
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from "./components/FunctionClick"
import EventBind from "./components/EventBind"
import ParentComponent from "./components/ParentComponent"
import UserGreeting from "./components/UserGreeting"
import NameList from "./components/NameList"
import Stylesheet from "./components/Stylesheet"
import Inline from "./components/Inline"
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
*/

/* Javascript */
/*import Nodoble from "./components/javascript/Nodoble";
import Map from "./components/javascript/Map";*/

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Map /> */}
        <ClickCounterTwo />
        <HoverCounterTwo />
        { /* <ClickCounter />
        <HoverCounter /> */ }
        {/* // Higher Order Components
        <ClickCounter />
        <HoverCounter />*/ }
        { /* // Error Boundary
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>*/ }
        { /* // Portals
        <PortalDemo /> */ }
        { /* <FRParentInput />
        <FocusInput />
        <RefDemo />
        <ParentComp />
        <FragmentDemo /> */}
        { /*<LifecycleA />*/ }
        {/* <Form /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>*/ }
        {/*<Inline />*/}
        {/*<Stylesheet primary={true} />*/}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */ }
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
