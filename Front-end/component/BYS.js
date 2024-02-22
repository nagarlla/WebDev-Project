// import React, { Component } from 'react'
// import axios from 'axios'
// import SeatSelection from './Hall'
// import Seat from './Hall'
// import { Navigate } from 'react-router-dom'
// export class BYS extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         RegNo:"",
//         selectedOption:"",
//         selectedGallery:""
         
//       }
//     }
//     userchange=(event)=>{
//         this.setState({
//             Gallery:event.target.value
//         })
//     }
//     RegNochange=(event)=>{
//         this.setState({
//             RegNo:event.target.value
//         })
//     }
//     deptchange=(event)=>{
//         this.setState({
//             dept:event.target.value
//         })
//     }
//     gallerychange=(event)=>{
//       this.setState({
//           gallery:event.target.value
//       })
//   }
//     submit=(e)=>{
//       e.preventDefault();
//         const{RegNo,selectedOption,selectedGallery}=this.state
//         axios.post('http://localhost:3250/seating',{
//           RegNo:RegNo,
//           selectedOption:selectedOption,
//           selectedGallery:selectedGallery
//         })
//         .then(res=>{
//           console.log(res)
//           alert("Data Added Successfully")
//         })
//         .catch(err=>{
//           console.log(err)
//         })
//     }
//   render() {
//     const{RegNo,selectedOption,selectedGallery}=this.state
//     return (
//       <div className='bys-form'>
//         <form onsubmit><h2>BOOK YOUR SEAT</h2>
//         <label>RegNo : </label>
//         <input type="text" value={this.state.RegNo} onChange={this.RegNochange} required></input><br></br><br></br>
//         <label>Dept : </label>
//         <select value={selectedOption} onChange={(e)=>this.setState({selectedOption:e.target.value})} required>
//             <option value=''></option>
//             <option value="ECE">ECE</option>
//             <option value="MECH">MECH</option>
//             <option value="EEE">EEE</option>
//             <option value="CSE">CSE</option>
//             <option value="CSE-BS">CSE-BS</option>
//             <option value="CSE-DS">CSE-DS</option>
//             <option value="CAI">CAI</option>
//             <option value="CSB">CSB</option>
//             <option value="CIVIL">CIVIL</option>
//         </select>
//         <br></br><br></br>
//         <label>Gallery : </label>
//         <select value={selectedGallery} onChange={(e)=>this.setState({selectedGallery:e.target.value})} required>
//             <option value=''></option>
//             <option value="placement 1">placement 1</option>
//             <option value="placement 2">placement 2</option>
//             <option value="placement 3">placement 3</option>
//             <option value="civil">civil</option>
//             <option value="mechanical">mechanical</option>

//         </select>
//         <br></br>
//         <br></br>
//         {/* <SeatSelection/> */}
//         <Seat/>
//         <button onClick={this.submit} >Submit</button>
        
//         </form>
//       </div>
    
//     )
//     return <Navigate to='/'/>
//   }
// }

// export default BYS





import React, { Component } from 'react'
import axios from 'axios'
import Seat from './Hall'
import { Navigate } from 'react-router-dom'
import SeeDB from './SeeDB'
import Hall from './Hall'
export class BYS extends Component {
    constructor(props) {
      super(props)
      this.state = {
        Dept:"",
        RegNo:"",
        Gallery:"",
        SeatNo:""
      }
    }
    userchange=(event)=>{
        this.setState({
            Gallery:event.target.value
        })
    }
    RegNochange=(event)=>{
        this.setState({
            RegNo:event.target.value
        })
    }
    deptchange=(event)=>{
        this.setState({
            Dept:event.target.value
        })
    }
    SeatNochange=(event)=>{
      this.setState({
        SeatNo:event.target.value
      })
    }
    submit=(event)=>{
        console.log(this.state.Gallery)
        console.log(this.state.RegNo)
        console.log(this.state.Dept)
        console.log(this.state.SeatNo)
    }
    addtodb=()=>{
      const{Dept,RegNo,Gallery,SeatNo}=this.state
      axios.post('http://localhost:3006/emp-api',{
        Dept:Dept,
        RegNo:RegNo,
        Gallery:Gallery,
        SeatNo:SeatNo
      })
      .then(res=>{
          console.log(res)
          alert("Data Added Successfully")

      })
      .catch(err=>{
          console.log(err)
      })
  }
  render() {
    const{Dept,RegNo,Gallery,SeatNo}=this.state
    return (
      <div className='bys-form'>
        {/* <SeeDB/> */}
        <form >
          <div className='form-add'>
        <label>Dept </label>
        <select value={Dept} onChange={this.deptchange} required>
        <option value=''></option>
        <option value='CSE'>CSE</option>
        <option value='ECE'>ECE</option>
        <option value='CSE-DS'>CSE-DS</option>
        <option value='CSE-BS'>CSE-BS</option>
        <option value='MECH'>MECH</option>
        <option value='CIVIL'>CIVIL</option>
        </select>
     
        <br></br>
        <label>RegNo </label>
        <input type="text" value={RegNo} onChange={this.RegNochange} required></input><br></br>
        
        <label>Gallery </label>
        {/* <input value={Gallery} onChange={this.userchange}/> */}
        <select value={Gallery} onChange={this.userchange} required>
          <option value=''></option>
          <option value="placement1">placement1</option>
          <option value="placement2">placement2</option>
          <option value="Mech">Mech</option>
          <option value="Civil">civil</option>
          <option value="ECE">ECE</option>
        </select>
        <br></br>
        
        <label>SeatNo </label>
        <input value={SeatNo} onChange={this.SeatNochange} required/>
        </div>
        <br></br>
        <br></br><br></br>
        <Hall/>
        <br></br>
        <br></br>
      
        <button  onClick={this.addtodb} className='v2'>submit</button>
        </form>
        
      </div>
      
    )
  }
}

export default BYS