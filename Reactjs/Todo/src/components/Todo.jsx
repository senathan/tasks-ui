import React, { useEffect, useRef, useState } from 'react'
import TodoItem from './TodoItem';

export const Todo = () => {
  const todoItems = [{
    "id":1,
    "text":"Reading books",
    "isComplete": false
  },{
    "id":2,
    "text":"Watching TV",
    "isComplete": true
  }]

  const [todoList,setTodoList] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")):[]);

  const inputRef = useRef();

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  //Add new task
  const addTask = () =>{
    const inputText = inputRef.current.value.trim();
    if(inputText === ""){
        return null;
    }
    const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
    }
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = "";
  };

  // update task status
  const toggleTask = (id) => {
    setTodoList((prev) => {
         return prev.map((todo)=>{
            if(todo.id === id){
                return {...todo, isComplete: !todo.isComplete};
            }
            return todo;
         })
    })
  }

  //delete task
  const deleteTodoTask = (id) => {
    setTodoList((prev) => {
        return prev.filter((todo)=> todo.id !== id);
    });
  };
  return (
    <>
     <div className='w-[30-rem]'>
        <h1 className='text-lg my-2 font-medium text-amber-500'>To-Do List</h1>
        <div className='flex gap-2'>
            <div className='flex-1'>
                <input className='py-3 px-4 w-full text-sm border focus:outline-none
                focus:border-amber-500'
                type="text"  name='' id='' placeholder='Add your task'
                ref={inputRef}/>
               
            </div>
            <button className='py-3 px-4 bg-blue-600 
                text-white hover:bg-blue-700 text-sm 
                font-medium rounded-sm border-none'
                onClick={addTask}>Add Task</button>
        </div>
        <p className='my-3 text-sm text-zinc-400 px-1'>
                Fill Task Details</p>
    </div>
    <div className='w-[30-rem] bg-white shadow py-6 px-4'>
        <fieldset className='space-y-3'>
            <legend className='text-pink-600 font-medium'>List of Tasks</legend>
            {todoList.length ===0 ? (
                <p className='text-gray-500'>No tasks found</p>
            ) : (todoList.map((todo, index) => {
                return <TodoItem text={todo.text} key={index} isComplete={todo.isComplete} id={todo.id} toggleTask={toggleTask} deleteTodoTask={deleteTodoTask}/>
            })
        )}
        </fieldset>
    </div>
    </>
   
  )
}

export default Todo;