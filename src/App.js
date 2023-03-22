
import Form from './components/form'
import './App.css';
import TodoItem from './components/todoItem';
import { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';


//Step 2: when application reloads catch data from local storage
const data = window.localStorage.getItem('MY_APP_STATE') ;
function App() {
  const [todos, setTodos] = useState([
    {
      todo: '',
      isCompleted: false,
    }
  ])
    //Step 3 : Getting a stored value from localStorage and loading it into React state
// Here we’re running a useEffect hook only when the component first renders. Once it does, we’re using localStorage’s getItem method to grab the data associated with our key.
// If that data does not equal null (basically does it exist) we use our state update function and set it with our stored data value passed in to JSON.parse.
useEffect(() => {
  if ( data !== null ) setTodos(JSON.parse(data));
}, []);
  // Step 1: Storing React state in localStorage
  //Here we’re using localStorage’s setItem method passing in a “key” along with the value.
  //We’re setting the value wrapped with JSON.stringify which will render our todos value as a string.
  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(todos));
  }, [todos]);

  //qoutes
  function userRandomQuote() {
    const [quotes, setQuote] = useState('')
    const getQuote = (max) => (Math.floor(Math.random()  * max))
    useEffect(() => {
         const fetchQuote = async () => (
              await fetch('https://type.fit/api/quotes')
                   .then(res => res.json())
                   .then(data => data[getQuote(data.length)])
                   .then(quote => setQuote(quote))
                    //1642
         )
         fetchQuote()
    }, []);
 return quotes 
  }
  const quote = userRandomQuote();
  //create a new todo item
  const createTodo = (todo) => {
    const newTodos = [...todos, {todo, isCompleted: false}]
    setTodos(newTodos)
  }
  //delete a todo item 
  const deleteTodo = (id) => {
    const newTodos = [...todos]
    newTodos.splice(id, 1)
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
      <main className='App__main'>
      <header className="App__header">
        <h1>My PapaReact To-do App</h1>
          <h2>Made by Joël Karhamba</h2>
           
                <h3>{quote.text}</h3>
                <h4>{quote?.author}</h4>
          
      </header>
      <section className='App__section'>
        <article className='App__article'>
          <Form createTodo={createTodo} />
          { 
            todos.length > 1 ? todos.map(({ todo, isCompleted }, id) => (
              todo === '' ? null :
              <TodoItem index={id} isCompleted={isCompleted} deleteTodo={deleteTodo} key={id} itemTodo={todo} updateTodo={updateTodo} completedTodo={completedTodo}  />
            )) : <p>Enter a todo</p>
          }
        </article>
      </section>        
      </main>

    </div>
  );
}

export default App;
