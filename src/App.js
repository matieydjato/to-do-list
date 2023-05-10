import { useState } from "react";
import Form from "./components/form/Form";
import TodoList from "./components/todo-list/TodoList";

function App() {
  const [todos, setTodo] = useState([]);

  const removeTodoHandler = (id) => {
    const newTodos = todos.filter(
      (d, index) => {
        if(index !== id) {
          return true;
        }
        else {
          return false;
        }
      }
    );

    setTodo(newTodos);
  }

  const addTodoHandler = (item) => {
    setTodo([
      ...todos,
      {
        value:item,
        time: new Date().toLocaleTimeString("en-US"),
        done: false
      }
    ]);
  }
  
  return (
    <>
      <div className="bg-slate-100 h-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white mt-10">
          <Form addHandler={addTodoHandler} />
          <div className="overflow-y-auto h-96">
            <TodoList todos={todos} removeHandler={removeTodoHandler}/>
          </div>
          <div className="text-center pt-8">
            <p>You have {todos.length} todos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
