import React, { useState } from 'react';
import '../styles/ListaDeTareas.css';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';

function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) { // Si la cadena no esta vacia
            tarea.texto = tarea.texto.trim(); // Se quitan los espacios al principio o final
            
            const tareasActualizadas = [tarea, ...tareas]; // Se agrega la nueva tarea al inicio
            setTareas(tareasActualizadas);  // Se actualizan las tareas
        } else {
            alert('Escribe una tarea valida');
        }
    };

    const eliminarTarea = id => {
        // Se incluyen todas las tareas excepto la que tenga el id a eliminar
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {   //Se busca la tarea a completar
                tarea.completada = !tarea.completada; // Se invierte el estado
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className='tareas-lista-contenedor'>
                {
                    tareas.map((tarea) => (
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    ))
                }
            </div>
        </>
    );
}

export default ListaDeTareas;
