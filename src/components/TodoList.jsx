import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo';
import {v4 as uuidv4} from 'uuid'
import Edit from './Edit';
uuidv4()

const TodoList = () => {
  const [todoValue, setTodo] = useState([]);
  
  const createTodo = (todo) => {
    setTodo([...todoValue, {id: uuidv4(), task:todo, isEditing:false}])
  }

  const editTodo = (id) => {
    setTodo(todoValue.map(todo => todo.id === id? {...todo,
        isEditing:!todo.isEditing}: todo))
  }

  const editTask = (task, id) => {
    setTodo(todoValue.map(todo => todo.id === id? {...todo,
      task, isEditing:!todo.isEditing}: todo))
  }

  const deleteTodo = (id) => {
    setTodo(todoValue.filter(todo => todo.id !== id))
  }
  
  return (
    <div className='container bg-white mt-20 p-8 rounded-xl'>
      <Form createTodo = {createTodo}/>
      {
        todoValue.map((todo, idx) => (
            todo.isEditing? (
                <Edit editTodo={editTask} task={todo} key={idx}/>
            ) : (
                <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo}/>
            ) 
        ))
      }
    </div>
  )
}

export default TodoList
