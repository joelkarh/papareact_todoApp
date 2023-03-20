import {useState} from 'react';


function Form({createTodo}) {
  const [item, setItem] = useState('');
  const handleClick = (e) => {
    e.preventDefault();
    item ==='' ? alert('Item is required') : createTodo(item.toString().toUpperCase());
    setItem('');
  }

  return (
    <form onSubmit={handleClick} className='App__form'>
      <input value={item} onChange={(e)=>setItem(e.target.value)} type="text" placeholder='create a to-do' className='App__form-input' />
      <button onClick={handleClick} className='App__button App__button-create'>Add To-do</button>
    </form>
  )
}

export default Form