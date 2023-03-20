import React from 'react'

function TodoItem({ itemTodo, deleteTodo, updateTodo, completedTodo, index }) {
  return (
     <div className={`${itemTodo.isCompleted ?'App__output App__output-complete':'App__output'}`}>
      <p>{itemTodo.todo}</p>
      <div id='buttons'>
      <button onClick={() => completedTodo(index)} className='App__button'>{itemTodo.isCompleted ? 'Completed': 'Complete'}</button>
      <button onClick={() => updateTodo(index)} className='App__button'>Update item</button>
      <button onClick={() => deleteTodo(index)} className='App__button App__button-delete'>Delete item</button>
      </div>
     </div>
  )
}

export default TodoItem