import React from 'react'
import img4 from './img4.png'
import logo from './logo.png'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
export default function slider1(){
  return (
    <div className='container' style={{top:0,left:0,width:1440,height:810,background:'#FDE3D9',margin:0,padding:0}} >
     <img src={logo} style={{margin:0,padding:0,}} alt='...'/>
     
    <img src={img4} style={{float:'right'}} alt='...'/>
     <h1 style={{marginTop:162,marginLeft:20}}>hello welcome to Aerominds</h1>
     <p style={{marginLeft:20}}>Aerominds.ai is an AI-native company dedicated to advancing the fields of Generative AI, Data Engineering and Human-centered AI. We’re the pioneers in AI Saas(solutions as a service); we’re a team of innovators and problem solvers dedicated to revolutionizing industries with state of the art AI solutions.</p>
     <img src={logo2} style={{marginTop:200,marginLeft:20}} alt='...'/>
     <img src={logo1} style={{marginLeft:80,marginTop:200}} alt='...'/>
     
    </div>
  )
}
