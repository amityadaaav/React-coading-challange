import React from 'react'
import { useState } from 'react'

const UserRegistrationForm = () => {
    const [email,setEamil]=useState("")
     const [name,setName]=useState("")
      const [password,setPassword]=useState("")
       const [confirmPassword,setconfirmPassword]=useState("")
       const [error,setError]=useState()
       

       const handleclick=(e)=>{
             e.preventDefault()
             if (!name && email && password) {
            setError("Name is required");
            } else if (!email.includes("@")) {
            setError("Please enter a valid email");
            } else if (password.length < 6) {
            setError("Password must be at least 6 characters");
            } else if (password !== confirmPassword) {
            setError("Passwords do not match");
            } else {
            setError(""); // clear errors
            console.log("Form submitted:", { email, name, password, confirmPassword });
            alert("Registration Successful!");
            // reset form
            setEamil("");
            setName("");
            setPassword("");
            setconfirmPassword("");
            }
        };
            // // check if form is valid for disabling button
            // const isFormValid = () => {
            //     return (
            //     name.length >= 3 &&
            //     /\S+@\S+\.\S+/.test(email) &&
            //     password.length >= 6 &&
            //     confirmPassword === password
            //     );
            // };
       
  return (
    <div>
      <form onSubmit={handleclick}>
        <label htmlFor="">Name</label>
       <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/><br />
        <label htmlFor="">Email</label>
       <input type="email" value={email}  onChange={(e)=>setEamil(e.target.value)}/> <br />
        <label htmlFor="">password</label>
       <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/> <br />
        <label htmlFor="">Confirm password</label>
       <input type="password" value={confirmPassword}  onChange={(e)=>setconfirmPassword(e.target.value)}/> 

       {/* Error message */}
        {error && <p style={{ color: "red" }}>{error}</p>}
       <button >Submit</button>

 {/* <button type="submit" disabled={!isFormValid()}>
          Submit
        </button> */}

      </form>
    </div>
  )
}

export default UserRegistrationForm
