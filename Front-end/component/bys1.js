import React, {useState} from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
const BYS1 =()=> {
    const [RegNo,setRegNo]=useState('')
    const [Dept,setDept]=useState('')
    const [userBool,setUserBool]=useState('')
    const auth=useAuth()

    const Navigate=useNavigate()

    const handlebys1=(event)=> {
        const userTaken=auth.userlist.some(x=> x.RegNo===RegNo)
        if(userTaken){
            setUserBool(true)
        }
        else{
            auth.signup(RegNo,Dept)
            Navigate('/Hall')
        }
        
        event.preventDefault()
    }
    const change=(event)=>{
        setRegNo(event.target.value)
    }
    const change1=(event)=>{
        setDept(event.target.value)
    }
    return(
        <div className="signup">
            <form onSubmit={handlebys1} className="bys-form">
            <center><h1><b>BOOK YOUR SEAT</b></h1></center>
            <label>RegNo:</label>
            <input type="text" value={RegNo} onChange={change} required/>
            <br></br>
            <br></br>
            <label>Dept :</label>
            <input value={Dept} onChange={change1} required/> <br></br>
            <br></br>
            {userBool?<p>RegNo is already Exists</p>:""}
            <br></br>
            <button type="submit">submit</button>
            </form>
        </div>
    )

}
export default BYS1