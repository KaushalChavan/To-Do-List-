import React from 'react'
import {AiFillEdit} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs';
// #30c928 #169f93
const Todo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='w-full flex justify-between items-center bg-gradient-to-r from-[#FF6A00] to-[#F7B733] text-white
    py-3 px-4 rounded-lg mb-1 cursor-pointer'>
        <div className='form-check flex gap-x-2'>
            <input type="checkbox" className='form-check-input w-4 accent-green-600'/>
            <p className='font-primary'>{task.task}</p>
        </div>
        <div className='flex items-center gap-x-4'>
            <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
            <BsFillTrashFill className='text-xl' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}
// from-[#153677] to-[#4e085f]
export default Todo
