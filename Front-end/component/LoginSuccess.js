import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
export class loginsuccess extends Component {
    constructor(props){
        super(props)
        this.state={
            islogged:true
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({islogged:false})
        },2000)
    }
  render() {
    if(this.state.islogged)
    return (
      <div class="hello">
        <h3>Logged sucessfully</h3>
        <p> Redirecting to home page......</p>
      </div>
    )
    return <Navigate to="/BYS"/>
    } 
}

export default loginsuccess