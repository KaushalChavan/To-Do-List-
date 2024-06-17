import React, { useState } from 'react'

const Edit = ( {editTodo, task} ) => {
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('')
    }

  return (
    <form className='mt-4 mb-4 font-primary w-full' onSubmit={handleSubmit}>
        <input type="text" className='outline-none bg-transparent border
        border-gray-400 p-4 w-[300px] text-black mb-8 rounded-md 
        placeholder:text-gray-400' placeholder='Update Task..' 
        onChange={(e) => setValue(e.target.value)} value={value}/>

        <button className='bg-[#ff5945] border-none p-3 text-white cursor-pointer
        rounded-md ml-2'>Update Task</button>
    </form>
  )
}

export default Edit
