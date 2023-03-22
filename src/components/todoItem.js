

function TodoItem({ itemTodo,isCompleted, deleteTodo, updateTodo, completedTodo, index }) {
  return (
    <div className={`${isCompleted ? 'App__output App__output-complete' : 'App__output'}`}>
      <p>{itemTodo}</p>
      <div id='buttons'>
      <button onClick={() => completedTodo(index)} className={`${isCompleted ?'App__button App__button-complete':'App__button' }`}>{isCompleted ? 'Completed': 'Complete'}</button>
      <button onClick={() => updateTodo(index)} className='App__button'>Update</button>
      <button onClick={() => deleteTodo(index)} className='App__button App__button-delete'>Delete</button>
      </div>
     </div>
  )
}

export default TodoItem