import React, { useEffect, useState } from 'react'

const App = () => {
    // var [email,setEmail] = useState("vinay@gmail.com")
    // var [password,setPassword] = useState("vinay@123")
    // var [location,setLocation] = useState("Hyderabad")
    var [state,setState] = useState({email:"vinay@gmail.com",email:"vinay@123",location:"Hyderabad"});
    useEffect(){
        
    }
  return (
    <>
      <h1>Hello Vite</h1>
      <p>{state.email}</p>
      <p>{state.password}</p>
      <p>{state.location}</p>
      <button onClick={()=>{...state,setState(email="charan@gmail.com")}}>Change Email</button> <br /> <br />
      <button onClick={()=>{setPassword("Charan@123")}}>Change Password</button> <br /> <br />
      <button onClick={()=>{setLocation("Pune")}}>Change Location</button> <br /> <br />
    </>
  )
}

export default App
