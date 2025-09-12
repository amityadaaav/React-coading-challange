import React, { useEffect, useState } from 'react'
import axios from "axios"
const UserInfo = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
      const fetch=async()=>{
                try{
            const response=await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(response.data)
            setData(response.data)

        }catch(error){
               console.log(error),
               console.log("NO data found")
        }
      }
       fetch()
    },[])
  return (
    <div>

      {data ?(<table style={{ borderCollapse: "collapse", width: "100%" }}>
  <thead>
    <tr style={{ background: "#007bff", color: "white" }}>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
    </tr>
  </thead>
  <tbody>
    {data.map((ele) => (
      <tr key={ele.id}>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{ele.id}</td>
        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{ele.name}</td>
      </tr>
    ))}
  </tbody>
</table>
):(<div>Loading...</div>)}
      
    </div>
  )
}

export default UserInfo
