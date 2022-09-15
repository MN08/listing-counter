import { useState } from 'react';
import classnames from 'classnames'

import './App.css';
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';

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
    if(newTodos[index].count > 0){
      newTodos[index].count = newTodos[index].count - 1
    } else{
      newTodos.splice(index,1)
    }

    setTodos(newTodos);
  }

  const handleInputSubmit = (e) =>{
    e.preventDefault()

    if(!value){
      alert('Please enter a value')
      return
    }

    const addedTodos = [...todos, {
      title: value,
      count: 1
    }]

    setTodos(addedTodos);
    setValue('');
  }

  const getTotalCount = () => {
    const totalCount = todos.reduce((total, num) =>{
      return total + num.count
    }, 0)

    return totalCount;
  }

  return (
    <>
      <Navbar/>
      <Container>
        <SearchInput
          handleInputSubmit={handleInputSubmit}
          onChange= {(e) =>{setValue(e.target.value)}}
          value = {value}
        />

        <div className='info'>
          <div className='info-total'>
            <p>{`Total List : ${todos.length}`}</p>
          </div>

          <div className='info-total'>
            <p>{`Total Count : ${getTotalCount()}`}</p>
          </div>

          <button onClick={() => setTodos([])} className='delete-all-button'>Delete All List</button>
        </div>
          

        {todos.length > 0 ? (
          <div className='todos'>
            {todos.map((todo,index, arr) => {
              return(
                <div key={index} className={`todo ${!(arr.length === index+1) && 'todo-divider'}`}>
                  {todo.title}
                  <div className='todo-icon-wrapper'>
                    <button onClick={() => handleMinusCount(index)} className='todo-action-button'>
                      <img src={minusIcon} alt='minus-icon'/>
                    </button>
                    <div className='todo-count'>{todo.count}</div>
                    <button onClick={() => handlePlusCount(index)} className='todo-action-button'>
                      <img src={plusIcon} alt='plus-icon'/>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : <div>Kosong</div>}
      </Container>
      
    </>
  );
}

export default App;
