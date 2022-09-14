import { useState } from 'react';
import classnames from 'classnames'

import './App.css';
import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'

function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Susu Murni', count: 1},
    {title: 'Susu Nasional', count: 1},
  ]);
  
  const  handlePlusCount = (index)=>{
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count + 1

    setTodos(newTodos);
  }

  const  handleMinusCount = (index)=>{
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count - 1

    setTodos(newTodos);
  }

  return (
    <>
      <nav className='nav'>
        <img className='nav-icon' src={shoppingIcon} alt="shopping Icon"/>
        <h1 className='nav-title'>Listing Counter App</h1>
      </nav>

      <section className='container'>
        <form className='form'>
          <input className='input' type='text' placeholder='Input List'
            onChange={(e) => {
              setValue(e.target.value)
            }}
            value = {value}
          />
          <button className='add-button' type='submit'>Add</button>
        </form>

        {todos.length > 0 ? (
          <div className='todos'>
            {todos.map((todo,index, arr) => {
              return(
                <div key={index} className={`todo ${!(arr.length === index+1) && 'todo-divider'}`}>
                  {todo.title}
                  <div className='todo-icon-wrapper'>
                    <button onClick={() => handlePlusCount(index)} className='todo-action-button'>
                      <img src={plusIcon} alt='plus-icon'/>
                    </button>
                    <div className='todo-count'>{todo.count}</div>
                    <button onClick={() => handleMinusCount(index)} className='todo-action-button'>
                      <img src={minusIcon} alt='minus-icon'/>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : <div>Kosong</div>}
      </section>
    </>
  );
}

export default App;
