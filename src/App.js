import { useState } from 'react';
import classnames from 'classnames'

import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todos from './components/Todos';
import Empty from './components/Empty';

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

        <Info
          todosLength={todos.length}
          totalCount={getTotalCount()}
          onDelete={() => setTodos([])}
        />         
        {todos.length > 0 ? (
        <Todos
          todos={todos}
          onSubstraction={(index) => handleMinusCount(index)}
          onAddition={(index) => handlePlusCount(index)}
        />
        ) : <Empty/>}
      </Container>
      
    </>
  );
}

export default App;
