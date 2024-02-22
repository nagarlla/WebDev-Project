import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
export class SignupSuccess extends Component {
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
        <h3>Signup sucessfully</h3>
        <p>Redirecting to home page......</p>
      </div>
    )
    return <Navigate to="/"/>
    } 
}

export default SignupSuccess