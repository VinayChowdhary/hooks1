import React, { useState } from 'react'

const Func = () => {
    //use of Multi line 
    // var [email,setEmail] = useState("vinay@gmail.com")
    // var [password,setPassword] = useState("vinay@123")
    // var [location,setLocation] = useState("Hyderabad")

    //All at once
    var [state,setState] = useState({email:"vinay@gmail.com",password:"vinay@123",location:"Hyderabad"}); //can also be empty values for input boxes
  return (
    <>
    <h1>Functional Component</h1>

    {/** use of Multi line use state
    <p>Email is :{email}</p>
    <p>Password is :{password}</p>
    <p>Location is :{location}</p>

    Email : <input type="text" id="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} /> <br /> <br />
    Password : <input type="password" maxLength={10} id="pwd" value={password} onChange={(event)=>{setPassword(event.target.value)}}/> <br /> <br />
    Location : <input type="text" id="location" value={location} onChange={(event)=>{setLocation(event.target.value)}}/> <br /> <br />
                                                                                                                 */}
    {/** use of one line declaration */}
    <p>Email is :{state.email}</p>
    <p>Email is :{state.password}</p>
    <p>Email is :{state.location}</p>

    Email: <input type="text" id="email" value={state.email} onChange={(event)=>{setState({...state,email:event.target.value})}}/> <br /> <br />  {/** we should get all the state values here and change the email field  */}
    Password : <input type="password" id="" value={state.password} onChange={(event)=>{setState({...state,password:event.target.value})}}/> <br /> <br />
    Location : <input type="text" id="" value={state.location} onChange={(event)=>{setState({...state,location:event.target.value})}}/>

    {/**  use of buttons to change the values of state 

    <button onClick={()=>{setEmail(email="charan@gmail.com")}}>Change Email</button> <br /> <br />
    <button onClick={()=>{setPassword(password="charan@123")}}>Change Password</button> <br /> <br />
    <button onClick={()=>{setLocation(location="warangal")}}>Change Location</button> <br /> <br /> */}
    </>
  )
}

export default Func;
