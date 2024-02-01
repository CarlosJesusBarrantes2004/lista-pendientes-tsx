import { useState } from "react";
import ListaTareas from "./ListaTareas";

const TodoApp = () => {
  const [tarea, setTarea] = useState<string>("");
  const [tareas, setTareas] = useState<string[]>([]);

  const agregarNuevaTarea = (): void => {
    if (tarea.trim() === "") return;
    setTareas((tareas) => [...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (index: number): void => {
    setTareas((tareas) => tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={tarea}
          placeholder="Nueva tarea..."
          onChange={(e) => setTarea(e.target.value)}
        />
        <button onClick={agregarNuevaTarea}>Save</button>
      </div>
      <ListaTareas listaTareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </div>
  );
};

export default TodoApp;
