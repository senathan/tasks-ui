import React from 'react'

const TodoItem = ({id, text, isComplete, toggleTask, deleteTodoTask}) => {
  return (
    <div className='flex justify-between items-center gap-2'>
        <label htmlFor="" className={`hover:bg-slate-100 
        flex-1 p-2 rounded-sm cursor-pointer select-none ${isComplete? "line-through text-slate-600":""}`} onClick={()=>{toggleTask(id)}}>{text}</label>
        <div>
          <div className='size-[26px] p-1 hover:bg-red-50 rounded-md' onClick={()=>{deleteTodoTask(id)}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </div>
        </div>
    </div>
  )
}

export default TodoItem