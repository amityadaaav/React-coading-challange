import React from 'react'
import { useState ,useEffect} from 'react'
// import App from "../App.css"
const Todo = () => {
    const [data,setData]=useState("")
     // ✅ Load from localStorage at start
  const [datatodo, setTodo] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });

      useEffect(() => {
        localStorage.setItem("data", JSON.stringify(datatodo));
         }, [datatodo]);

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
