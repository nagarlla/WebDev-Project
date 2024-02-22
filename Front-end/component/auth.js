// import React,{ useContext,useState } from 'react'
// const AuthContext=React.createContext(null)
// const AuthProvider=(props)=>{
//     const [user,setUser]=useState(null)
//     const [userlist,setUserlist]=useState([1])
//     useState([{username:'',password:''}])
//     const login=(user)=>{
//     setUser(user)
// }
// const logout=()=>{
//     setUser(null)
// }
// const signup=(user,password)=>{
//     setUserlist([...userlist,{username:user,password:password}])
// }
// return <AuthContext.Provider value={{user,login,logout,signup,userlist}}>
//     {props.children}
// </AuthContext.Provider>
// }
// const useAuth=()=>{
//     return useContext(AuthContext)
// }
// export{AuthProvider,useAuth}


// sneha

// import React,{useContext,useEffect,useState} from 'react'
// import axios from 'axios'

// const AuthContext=React.createContext(null)
// const AuthProvider=(props)=>{
//     const[user,setUser]=useState(null)
//     const[userlist,setUserlist]=useState([])
//     const login=(user)=>{
//         setUser(user)
//     }
//     useEffect(()=>{
//         axios.get('http://localhost:3003/users')
//         .then(res=>{
//             setUserlist(res.data)
//         })
//         .catch(err=>{
//             console.log(err)
//         })

//     })
//     const logout=()=>{
//         setUser(null)
//     }
//     const signup=(RegNo,password,Name,Dept)=>{
//         axios.post('http://localhost:3003/users',{
//             Name:Name,
//             Dept:Dept,
//             RegNo:RegNo,
//             password:password
//         })
//         .then(res=>{console.log(res)})
//         .catch(err=>{console.log(err)})
//     }
//     return <AuthContext.Provider value={{user,login,logout,signup,userlist}}>
//     {props.children}
//     </AuthContext.Provider>
// }
// const useAuth=()=>{
//     return useContext(AuthContext)
// }
// export{AuthProvider,useAuth}


// murali


import React, { useContext,useEffect, useState } from 'react'
import axios from 'axios'
const AuthContext=React.createContext(null)
const AuthProvider=(props)=> {
    const [user,setUser]=useState(null)
    const [userlist,setUserlist]=useState([])
    const login=(user)=>{
        setUser(user)
    }
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res=>{
            setUserlist(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    })
    const logout=()=>{
        setUser(null)
    }
    const signup =(RegNo,password,Name,Dept)=>{
        axios.post('http://localhost:3000/users',{
            Name:Name,
            Dept:Dept,
            RegNo:RegNo,
            password:password
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
}
        const BYS1=(RegNo,Dept,Gallery)=>{
            axios.post('http://localhost:3001/users',{
                RegNo:RegNo,
                Dept:Dept,
                Gallery:Gallery
            })
            .then(res=>{console.log(res)})
            .catch(err=>{console.log(err)})
        }
        
  return <AuthContext.Provider value={{user,login,logout,signup,BYS1,userlist}}>
    {props.children}
    </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
}
export  {AuthProvider,useAuth}