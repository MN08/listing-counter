import PropTypes from 'prop-types'
import Style from './Todos.module.css'
import classnames from 'classnames'


import plusIcon from '../../assets/plus-icon.svg'
import minusIcon from '../../assets/minus-icon.svg'

const Todos = ({todos,onSubstraction, onAddition}) =>{
    return(
        
            <div className={Style.todos}>
              {todos.map((todo,index, arr) => {
                return(
                  <div key={index}
                //   className={`todo ${!(arr.length === index+1) && 'todo-divider'}`}
                    className={classnames(Style.todo,{
                        [Style.todoDivider]: !(arr.length === index+1)
                    })}
                  >
                    {todo.title}
                    <div className={Style.todoIconWrapper}>
                      <button onClick={() => onSubstraction(index)} className={Style.todoActionButton}>
                        <img src={minusIcon} alt='minus-icon'/>
                      </button>
                      <div className={Style.todoCount}>{todo.count}</div>
                      <button onClick={() => onAddition(index)} className={Style.todoActionButton}>
                        <img src={plusIcon} alt='plus-icon'/>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number
    })),
    onSubstraction: PropTypes.func,
    onAddition: PropTypes.func
}

export default Todos