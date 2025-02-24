import './App.css';



/*
import HeroList from './components/ErrorBoundary/HeroList.js';
import HeroWrapper from "./components/ErrorBoundary/HeroWrapper";
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
import React, { useState, useEffect } from "react";
import Modal from "./components/Portals/Modal";

export default function App() {
  const [modalAbierto, setModalAbierto] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        console.log("Enter key pressed");
        setModalAbierto(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>Ejercicio con React Portals</h1>
      <button onClick={() => setModalAbierto(true)}>Abrir Modal</button>

      <Modal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />

      <p>---------------------</p>
      <p>Ejericio React Higher components</p>
      { /* 
      // Error Boundary
      const heroes = ["Batman", "Superman", "Joker", "Flash"];

      {heroes.map((hero, index) => (
        <HeroWrapper key={index}>
          <HeroList heroes={hero} />
        </HeroWrapper>
      ))}

      // Portals

      
      
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
