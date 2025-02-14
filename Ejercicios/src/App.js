import './App.css';
import ComponentePadre2 from './components/ComponentePadre2';
/*
import ComponentePadre from './components/ComponentePadre';
import Contadorsumaresta from './components/Contadorsumaresta';
import Cambiodecolor from './components/Cambiodecolor'
import Cajadetexto from './components/Cajadetexto'
import Contador from './components/Contador'


import ListaTareas from './components/Listatareas';
*/

export default function App() {
  return (
    <div className="App">
      <ComponentePadre2 Saludo="Hola linda" Nombre="Kazumi" />
      {/* 
      // Class
      <Contadorsumaresta addValue={1} />

      // Funtional
      <Cambiodecolor />
      <Cajadetexto />
      <Contador /> 
      */}
    </div>
  );
}
