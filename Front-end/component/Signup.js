// sneha

// import React, {useState} from 'react'
// import {useAuth} from './auth'
// import { useNavigate } from 'react-router-dom'
// const Signup = () => {
//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')
//   const [firstName,setFirstName]=useState('')
//   const [lastName,setLastName]=useState('')
//   const [userBool,setUserBool]=useState('')
//  const auth=useAuth()
//   const navigate=useNavigate()
//   const handlesignup=(event)=>{
//     const userTaken=auth.userlist.some(x=>x.email===email)
//     if(userTaken){
//       setUserBool(true)
//     }
//     else{
//       auth.signup(email,password,firstName,lastName)
//       navigate('/signupSuccess')
//     }
//     event.preventDefault()
//   }
//   const change=(event)=>{
//     setEmail(event.target.value)
//   }
//   const change1=(event)=>{
//     setPassword(event.target.value)
//   }
//   return(
//     <div>
//         <form onSubmit={handlesignup} className="signup-form">
//       <label>First Name</label>
//       <input value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}required/><br></br>
//       <label>Last Name</label>
//       <input value={lastName} onChange={(e)=>{setLastName(e.target.value)}}required/><br></br>
//       <label>Email</label>
//       <input type="email" value={email} onChange={change} required/>
//       <br></br>
//       <label>Password</label>
//       <input type="password" value={password} onChange={change1} required/>
//       <br></br>
//       {userBool?<p>Email is  already Exists</p>:""}
//       <button type='submit'>Signup</button>
//       </form>

//     </div>
//   )

// }
// export default Signup


// import React, {useState} from "react";
// import { useAuth } from "./auth";
// import { useNavigate } from "react-router-dom";
// const Signup =()=> {
//     const [user,setUser]=useState('')
//     const [password,setPassword]=useState('')
//     const auth=useAuth()
//     const Navigate=useNavigate()
//     const handlesignup=(event)=> {
//         auth.signup(user,password)
//         Navigate('/signupsuccess')
//         event.preventDefault()
//     }
//     const change=(event)=>{
//         setUser(event.target.value)
//     }
//     const change1=(event)=>{
//         setPassword(event.target.value)
//     }
//     return(
//         <div className="sign1">
//             <form onSubmit={handlesignup}>
//             <br></br>  <br></br>
//             <label>FirstName</label>
//             <input/> <br></br>  <br></br>
//             <label>LastName</label>
//             <input/> <br></br>  <br></br>
//             <label>UserName</label>
//             <input type="text" value={user} onChange={change} required/>
//             <br></br><br></br>  <br></br>
//             <label>Password</label>
//             <input type="password" value={password} onChange={change1} required/>
//             <br></br> <br></br>  <br></br>
//             <button className="butt" type="submit">Signup</button>
//             </form>
//         </div>
//     )

// }
// export default Signup

// murali

import React, {useState} from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const Signup =()=> {
    const [RegNo,setRegNo]=useState('')
    const [password,setPassword]=useState('')
    const [Name,setName]=useState('')
    const [Dept,setDept]=useState('')
    const [userBool,setUserBool]=useState('')
    const auth=useAuth()

    const Navigate=useNavigate()

    const handlesignup=(event)=> {
        const userTaken=auth.userlist.some(x=> x.RegNo===RegNo)
        if(userTaken){
            setUserBool(true)
        }
        else{
            auth.signup(RegNo,password,Name,Dept)
            Navigate('/SignupSuccess')
        }
        
        event.preventDefault()
    }
    const change=(event)=>{
        setRegNo(event.target.value)
    }
    const change1=(event)=>{
        setPassword(event.target.value)
    }
    return(
        <div className="signup">
            <form onSubmit={handlesignup} className="signup-form">
            <center><h1><b>SignUp</b></h1></center>
            <label>Name :</label>
            <input value={Name} onChange={(e)=>{setName(e.target.value)}} required/> <br></br>
            <br></br>
            <label>Dept :</label>
            <input value={Dept} onChange={(e)=>{setDept(e.target.value)}} required/> <br></br>
            <br></br>
            <label>RegNo:</label>
            <input type="text" value={RegNo} onChange={change} required/>
            <br></br>
            <br></br>
            <label>Password :</label>
            <input type="password" value={password} onChange={change1} required/>
            <br></br>
            {userBool?<p>Email is already Exists</p>:""}
            <br></br>
            <button type="submit">Signup</button>
            </form>
        </div>
    )

}
export default Signup