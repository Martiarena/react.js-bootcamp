/*
import PortalApp from './components/Portals/PortalApp';
import ErrorBoundaryApp from './components/ErrorBoundary/ErrorBoundaryApp';
import Temporizador4 from './components/UseRef/Temporizador4.js';
import ComponentePadre3 from './components/UseRef/ComponentePadre3';
import AutoFocusInput from './components/AutoFocusInput';
import Contador from './components/ComponenteMemoizado/Contador';
import ContadorHistorial from './components/ContadorHistorial';
import TemporizadorBoton from './components/Temporizador/TemporizadorBoton';
import Encuesta from './components/FormularioEncuesta/Encuesta';
import FormularioRegistro from './components/FormularioRegistro';
import Tarjeta from './components/Tarjeta/Tarjeta';
import TarjetaUsuario from './components/TarjetaUsuario/TarjetaUsuario';
import Nombres from './components/Nombres';
import Edad from './components/Edad';
import CondicionalYY from './components/CondicionalYY';
import ComponentePadre2 from './components/ComponentePadre2';
import ComponentePadre from './components/ComponentePadre';
import Contadorsumaresta from './components/Contadorsumaresta';
import Cambiodecolor from './components/Cambiodecolor';
import Cajadetexto from './components/Cajadetexto';
import Contador from './components/Contador';

import UsuarioAleatorio from "./components/UsuarioAleatorio"; // CONSUME API
import ListaTareas from './components/Listatareas';
*/
/*
import ClickCounter from './components/HigherOrderComponent/ClickCounter';
import HoverCounter from './components/HigherOrderComponent/HoverCounter';
import TextComponent from './components/HigherOrderComponent/TextComponent';
import Button from "./components/HigherOrderComponent/Button";
import Link from "./components/HigherOrderComponent/Link";
import Profile from "./components/HigherOrderComponent/Profile";
import ContadorRenderApp from "./components/ReactRenderProps/ContadorRenderApp"
import MouseTrackerApp from "./components/ReactRenderProps/MouseTrackerApp"
import UsersList from "./components/HTTP/UsersList"
import './components/ReactContext/ThemeCss.css';
import ThemeProvider from "./components/ReactContext/ThemeProvider";
import ThemeSwitcher from "./components/ReactContext/ThemeSwitcher";
*/
import './App.css';
import React from "react";
import CounterProvider from './components/ReactContext/CounterProvider';
import CounterDisplay from './components/ReactContext/CounterDisplay';


export default function App() {

  return (
    <div>
      {/**/}
      
        <CounterProvider>
          <CounterDisplay />
        </CounterProvider>
      


      { /* 
      // HTTP Request & Post
      <h1>Lista de Usuarios</h1>
      <UsersList />
      // Render React Props
      <ContadorRenderApp />
      <MouseTrackerApp />
      // React Context
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      // React Higher components
      <h1>Eventos con HOC</h1>
      <Button text="Haz clic aquí" />
      <Link text="Pasa el mouse aquí" />

      <TextComponent text="Hola, este es un mensaje dinámico!" />
      <Profile isAuthenticated={false} />
      <ClickCounter />
      <HoverCounter />

      // Portals
      <PortalApp />

      // Error Boundary App
      <ErrorBoundaryApp />

      // Ref y ForwardRef
      <Temporizador4 />
      <ComponentePadre3 />
      <AutoFocusInput />
      <ContadorHistorial />
      <Contador />
      <TemporizadorBoton /> */ }
      { /* <Encuesta/> */ }
      { /* <FormularioRegistro />*/ }
      {/*<TarjetaUsuario nombre="CrimsonDeath" edad="35" colorFondo="blue" />
      <TarjetaUsuario nombre="CrimsonNeko" edad="32" colorFondo="crimson" />
      <TarjetaUsuario nombre="GreyMcKnight" edad="34" colorFondo="red" />
      <TarjetaUsuario nombre="Maximiliano" edad="38" colorFondo="gray" />*/}
      {/*<Tarjeta titulo="Tarjeta Azul" descripcion="Esta es una tarjeta con borde azul." colorBorde="blue" colorBackground="RoyalBlue" />
      <Tarjeta titulo="Tarjeta Roja" descripcion="Esta es una tarjeta con borde rojo." colorBorde="red" colorBackground="IndianRed" />
      <Tarjeta titulo="Tarjeta Verde" descripcion="Esta es una tarjeta con borde verde." colorBorde="green" colorBackground="MediumSeaGreen" />
      <Tarjeta titulo="Tarjeta Sin Color" descripcion="Esta es una tarjeta con borde sin color." colorBorde="" colorBackground="" />*/ }
      
      {/* 
        // Class
        <Contadorsumaresta addValue={1} />

        // Funtional
        <Nombres />
        <CondicionalYY />
        <Edad />
        <ComponentePadre2 Saludo="Hola linda" Nombre="Kazumi" />
        <Cambiodecolor />
        <Cajadetexto />
        <Contador /> 
      */}
    </div>
  );
}
