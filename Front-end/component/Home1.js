import React, { Component } from 'react'
import Home from './Home'


export class Home1 extends Component {
    constructor(props) {
      super(props)
      this.state = {
         isbooked1:true,
         isbooked2:true
      }
    }
    
  render() {
    return (
      <div>
        <Home/>
      </div>
    )
  }
}

export default Home1
