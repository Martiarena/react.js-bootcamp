
/* 
import HookCounterOne from './components/HookCounterOne'
import ClassCounterOne from './components/ClassCounterOne'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterFour from './components/HookCounterFour'
import HookCounterThree from './components/HookCounterThree'
import HookCounterTwo from './components/HookCounterTwo'
import ClassMouse from "./components/ClassMouse"
import HookMouse from "./components/HookMouse"
import IntervalClassCounter from "./components/IntervalClassCounter"
import IntervalHookCounter from "./components/IntervalHookCounter"
import MouseContainer from "./components/MouseContainer"
import DataFetching from "./components/DataFetching"*/
import React from 'react'
import ComponentC from "./components/UseContext/ComponentC"

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {

  return (
    <>
      <div className='App'>
        { /*
        ejercicios react
        - use state
        - useState with previous state
        - usestate with object
        - use state with array
        - use effect
        - use effect after redner
        - conditionally run effect
        - run effect only once
        - use effect with clean up
        - Fetching data with useEffect
        - Use effect context

        <ClassCounter />
        <HookCounter />
        <HookCounterTwo />
        <HookCounterThree />
        <HookCounterFour />
        <ClassCounterOne />
        <HookCounterOne />
        <ClassMouse />
        <MouseContainer />
        <IntervalClassCounter />
        <IntervalHookCounter />
        <DataFetching />
        */ }
        <UserContext.Provider value={'Crimsondeath'}>
          <ChannelContext.Provider value={'TrueRoleDreams'}>
            <ComponentC />
          </ChannelContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
