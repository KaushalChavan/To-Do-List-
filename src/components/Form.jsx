import React, { useState } from 'react'

const Form = ( {createTodo} ) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo(value);
        setValue('')
    }

  return (
    <form className='mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border
        border-gray-400 p-4 w-[350px] text-black mb-8 rounded-lg 
        placeholder:text-gray-400' placeholder='Add your task..' 
        onChange={(e) => setValue(e.target.value)} value={value}/>

        <button className='bg-[#ff5945] border-none p-2 text-white cursor-pointer
        rounded-md ml-2'>Add Task</button>
    </form>
  )
}

export default Form
