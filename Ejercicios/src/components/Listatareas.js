import React, { useState } from 'react';

function ListaTareas() {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    // Función para agregar una tarea
    const agregarTarea = () => {
        // Agregar la tarea a la lista si no está vacía
    };

    // Función para eliminar una tarea
    const eliminarTarea = (index) => {
        // Eliminar la tarea de la lista
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <input 
                type="text" 
                value={tarea} 
                onChange={(e) => setTarea(e.target.value)} 
                placeholder="Escribe una tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>
            <ul>
                {tareas.map((t, index) => (
                    <li key={index}>
                        {t} 
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaTareas;
