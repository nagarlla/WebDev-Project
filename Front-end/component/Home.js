import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import ssir from './images/ssir.jpg';
import asir from './images/asir.jpg';
import cg from './images/civil.jpg';
import pg from './images/20230728_133631.jpg';
import pg1 from './images/pg1.jpg';
import rgmbro from './images/chandu.png';
const Home = () => {
    const navigate=useNavigate()
    return (
      <div>
        <div class="hero">
            <div class="grid-box item2"><h1><font color="#27374D" size="20px">Seating Arrangements for Placement Galleries</font></h1></div>
            <div class="grid-box item3">
                <img class="rgmcbro" src={rgmbro}/>
                
            </div>
            <div class="grid-box item4">
                <img class="asir1" src={asir}/>
                <div class="inside1"> 
                    <p><b>Dr.D.V.Ashok Kumar</b></p>
                    <p>Director at RGMCET</p>
                    <p>*26 years of experience in Teaching.</p>
                    <p>*Worked in all administrative posts.</p>
                </div>
            </div>
            <div class="grid-box item5">
                <img class="ssir1" src={ssir}/>
                <div class="inside2">
                    <p><b>Dr.M.Sudheer Kumar</b></p>
                    <p>Head of Training & Placements at RGMCET</p>
                    <p>*Working as MBA Faculty</p>
                </div>
            </div>
            
            <div class="grid-box item6">
            <marquee height="450px" scrollamount="22" direction="up">
                <img className="inside3" src={cg}/>
                <img className="inside3" src={pg}/>
                <img className="inside3" src={pg1}/>
            </marquee>
            </div>
            <div class="grid-box item7">
            <div className="gallery2"><hr></hr><hr></hr>Galleries<hr></hr><hr></hr>Placement Gallery<br></br><br></br>
            Civil Gallery</div>
                
            </div>
        </div>
    </div>
    
    )
  }


export default Home