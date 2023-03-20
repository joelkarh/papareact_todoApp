
import Form from './components/form'
import './App.css';
import TodoItem from './components/todoItem';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      todo: 'Enter your todo',
      isCompleted: false,
    }
  ])
  //create a new todo item
  const createTodo = (todo) => {
    const newTodos = [...todos, {todo, isCompleted: false}]
    setTodos(newTodos)
  }
  //delete a todo item 
  const deleteTodo = (id) => {
    const newTodos = [...todos]
    newTodos.splice(id, 1)
    console.log(newTodos)
    setTodos(newTodos)
  }
  //update a todo item
  const updateTodo = (id) => {
    const newTodos = [...todos]
    const item = newTodos[id]
    let newItem = prompt(`Are u sure u want to update ${item.todo}`, item.todo)
    let todoObj = { todo: newItem, complete: false };
    newTodos.splice(id, 1, todoObj);
    if (newItem===null ||newItem==='' || newItem === item) {
      return;
    }else  item.todo = newItem
    setTodos(newTodos)
  }
  // complete a todo item 
  // i need to put a default state as 'not- complete : true and add complete as object 
  const completedTodo = (id) => {
    const newTodos = [...todos]
    newTodos[id].isCompleted === false ? newTodos[id].isCompleted = true : newTodos[id].isCompleted = false
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <header className="App__header">
        <h1>My PapaReact To-do App</h1>
        <h2>Made by Joël Karhamba</h2>
        {/* qoutes */} lol
      </header>
      <section className='App__section'>
        <article className='App__article'>
          <Form createTodo={createTodo} />
          {
            todos.length > 0 && todos.map((todo, id) => (
              <TodoItem index={id} deleteTodo={deleteTodo} key={id} itemTodo={todo} updateTodo={updateTodo} completedTodo={completedTodo}  />
            ))
          }
        </article>
      </section>
    </div>
  );
}

export default App;
