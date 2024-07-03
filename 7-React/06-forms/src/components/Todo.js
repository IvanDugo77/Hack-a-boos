import { useState } from "react";

const Todo = () => {
  /* Estado donde guardo el listado de tareas. 
  Inicializo con array vacio para que el map en el JSX siempre funcione
  Mirar el error en la consola de browser si no le pongo nada como valor inicial */
  const [todos, setTodos] = useState([]);
  // Estado donde guardo la tarea que estoy añadiendo
  const [todo, setTodo] = useState("");

  // Funcion manejadora del submit en el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Nuevo listado de todos = todos anteriores + nuevo todo
    setTodos([...todos, todo]);

    /* IMPORTANTE
    no utilizar push o unshift, no creando un nuevo array React no se enteraría del
    cambio de estado y no se actualizaria el componente Todo
    setTodos(todos.push(todo)) */

    // Una vez que añado la tarea limpio el input (input controlado)
    setTodo("");
  };

  // JSX componente.
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New entry"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
        ></input>
      </form>
      <ul>
        {todos.map((item, index) => {
          // Cuando el usuario hace click en la tarea esta se elimina o sea se hace setTodo
          // de todas las tareas filtrando la donde hice click
          return (
            <li
              onClick={() => {
                setTodos(
                  todos.filter((_, contador) => {
                    return index !== contador;
                  })
                );
              }}
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
