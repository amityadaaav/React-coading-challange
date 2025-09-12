import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

const Search = () => {
    const [data,setData]=useState([])
  const [searchTerm, setSearchTerm] = useState(""); // Search ke liye
    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data);
        setData(response.data);
        // localStorage.set(data)
        // setUser(response.data.name);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 


    const data1=data.filter((user) =>user.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const handleDelete=(id)=>{
            console.log("data removed")
            const newData = data.filter((user) => user.id !== id);
         setData(newData);
    }
  return (

   <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "200px" }}
      />

      {data1.map((ele) => (
        <div
          key={ele.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <span>{ele.name}</span>
          <button
            onClick={() => handleDelete(ele.id)}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Search;
