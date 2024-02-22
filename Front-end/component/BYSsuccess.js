import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
export class BYSsuccess extends Component {
    constructor(props){
        super(props)
        this.state={
            isBYS:true
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({isBYS:false})
        },2000)
    }
  render() {
    if(this.state.isBYS)
    return (
      <div class="hello">
        <h3>Logged sucessfully</h3>
        <p> Redirecting to home page......</p>
      </div>
    )
    return <Navigate to="/Hall"/>
    } 
}

export default BYSsuccess