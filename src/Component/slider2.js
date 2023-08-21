import React from 'react'
import img5 from './img5.png'
import logo from './logo.png'
import logo2 from './logo2.png'
import logo1 from './logo1.png'
export default function slider2() {
  return (
    <>
    <div className='container' style={{top:0,left:0,width:1440,height:810,background:'#FDE3D9',margin:0,padding:0}} >
    <img src={logo} style={{margin:0,padding:0,}} alt='...'/>
        <img src={img5} style={{float:'right'}} alt='...'/>
        <h1 style={{marginTop:162,marginLeft:20}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
        <p style={{marginLeft:20}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     <img src={logo2} style={{marginTop:200,marginLeft:20}} alt='...'/>
     <img src={logo1} style={{marginLeft:80,marginTop:200}} alt='...'/>
    </div>
    </>
  )
}
