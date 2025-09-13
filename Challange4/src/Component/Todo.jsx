import React from 'react'
import { useState } from 'react'
// import App from "../App.css"
const Todo = () => {
    const [data,setData]=useState("")
    const [datatodo,setTodo]=useState([])
    const handleTodo=(e)=>{
        e.preventDefault()
        if(data.trim()==="") return;
      setTodo([...datatodo,data])
      console.log(datatodo) 
      setData("")
    }
 const handleDelete = (ind) => {
    const newData = datatodo.filter((_, i) => i !== ind);
    setTodo(newData);
};
  return (
    <div>
        <h1>Add Todo</h1>
      <input type="text"  value={data} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={handleTodo}>Add</button>
      <ul>
      {datatodo.map((ele,ind)=>(
        <span> <li key={ind}>{ele}</li> <button onClick={()=>handleDelete(ind)}>delete</button></span>
        
      ))}
      </ul>

    </div>
  )
}

export default Todo
