// import React from 'react'
// import { useState } from 'react'
// import {useAuth} from './auth'
// import { useNavigate } from 'react-router-dom'
// const Login = () => { 
//     const auth=useAuth()
//     const navigate=useNavigate()
//     const [user,setUser]=useState('')
//     const [password,setpassword]=useState('')
//     const [lis,setlis]=useState(true)
//     const change=(event)=>{
//         setUser(event.target.value)
//     }
//     const change1=(event)=>{
//         setpassword(event.target.value)
//     }
//     const handlelogin=(event)=>{
//         auth.userlist.map(x=>{
//                 if(x.username==user && x.password==password){
//                 auth.login(user)
//                 navigate('/LoginSuccess')
//                 setlis(true)
//             }
//             else(
//                 setlis(false)
//             )
//       })
//       event.preventDefault()  
//     }
//      return (
//       <div className='loginbro'>
//             <form onSubmit={handlelogin}>
//             <label>Username:</label>
//             <input type='text' value={user} onChange={change}required/><br></br>
//             <label>Password:</label>
//             <input type='text' value={password} onChange={change1}required/><br></br><br></br><br></br>
//             <button >Login</button>
//             {!lis?<p>Invalid user</p>:''}
//             <center><h3><font color="white">If you dont have account</font></h3>
//             <a href='/signup'>Signup</a></center></form>
//         </div>
//     )
// }

// export default Login

// sneha

// import React from 'react'
// import { useState } from 'react'
// import {useAuth} from './auth'
// import { useNavigate } from 'react-router-dom'
// const Login = () => {
//     const auth=useAuth()
//     const navigate=useNavigate()
//     const[y,setEmail]=useState('')
//     const[password,setPassword]=useState('')
//     const[lis,setlis]=useState(true)
//     const change=(event)=>{
//         setEmail(event.target.value)
//     }
//     const change1=(event)=>{
//       setPassword(event.target.value)
//     }
//     const handlelogin=(event)=>{
//       console.log(auth.userlist)
//       auth.userlist.map(x=>{
//         if(x.email === email && x.password==password){
//           auth.login(email)
//           navigate('/loginsuccess')
//           setlis(true)
//         }
//         else{
//           setlis(false)
//         }
//       })
//       event.preventDefault()
//     }
//   return (
//     <div>
      
//       <form onSubmit={handlelogin} 
//       className='login-form'>
//       <label > Email </label>

//       <input type='text'value={email} onChange={change} required/><br></br>
//       <br></br>
//       <label> Password </label>
//       <input type="password" value={password} onChange={change1} required/><br></br>
//       < br></br>
//       <button type='submit'>Login</button>
//       {!lis?<p>Invalid User and password</p>:''}
//       <h4>if you don't have account</h4>
//       <a href="/signup">Signup</a>
//       </form>

//     </div>
    
//   )
// }

// export default Login

// murali


import React from 'react'
import { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const auth=useAuth()
    const navigate=useNavigate()
    const [RegNo,setRegNo]=useState('')
    const [password,setPassword]=useState('')
    const [lis,setLis]=useState(true)
    const change=(event)=>{
        setRegNo(event.target.value)
    }
    const change1=(event)=>{
      setPassword(event.target.value)
    }
    const handlelogin=(event)=>{
      console.log(auth.userlist)
      auth.userlist.map(x=> {
        if(x.RegNo==RegNo && x.password==password) {
          auth.login(RegNo)
          navigate('/loginsuccess')
          setLis(true)

        }
        else {
          setLis(false)
        }
      })
      event.preventDefault() 
    }
  return (
    <div>
      
      <form className='login-form' onSubmit={handlelogin}>
        <center><h1>Login</h1></center>
        <label>RegNo :</label>
        <input type='text' value={RegNo} onChange={change} required/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label >Password :</label>
        <input  type='password' value={password} onChange={change1} required/>
        <br></br>
        <br></br>
        <button  type='submit'> Student Login</button>
             
        <br></br>        
        {! lis ? <p >Invalid User and password</p>:''}
        <h4>If you don't have account</h4>
        <a  href='/Signup'>Signup</a>
        </form>
    </div>
  )
}

export default Login