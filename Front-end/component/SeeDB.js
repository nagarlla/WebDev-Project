














































































































































































































































import React, { Component } from 'react'

import axios from 'axios'
export class SeeDB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list:[],
       Dept:"",
       RegNo:"",
       Gallery:"",
       SeatNo:""
    }
  }
  // deleteall=()=>{
  //   this.list([]);
  // }
  deleteinfo=(id)=>{
    axios.delete(`http://localhost:3006/emp-api/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert("Data deleted Successfully")
    window.location.reload()
  }
  componentDidMount(){
    axios.get('http://localhost:3006/emp-api')
    .then(res=>{
      this.setState({list:res.data})
    })
    .catch()
  }
    
  render() {
    const{Dept,RegNo,Gallery}=this.state
    return (
      <div>
       
       <table className='emp-table'>
        <thead>
          <tr>
            <th>Dept</th>
            <th>RegNo</th>
            <th>Gallery</th>
            <th>SeatNo</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map(x=>(<>
          <tr>
            <td>{x.Dept}</td>
            <td>{x.RegNo}</td>
            <td>{x.Gallery}</td>
            <td>{x.SeatNo}</td>
            <td>
              <button onClick={()=>this.deleteinfo(x._id)}>Delete</button>
            </td>
           
          </tr>
          </>))}
        </tbody>
       </table>
       
       <br></br>
      </div>
    )
  }
}

export default SeeDB