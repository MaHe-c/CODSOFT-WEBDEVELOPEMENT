import React from 'react';
import '../assets/CSS/nav.css';
import { BsFacebook,BsTwitter,BsInstagram,BsPinterest } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className='row row-cols-1 justify-content-center align-items-center footer p-md-4 m-md-5 h-100'>
      <div className='col'>
        <h1 className='text-center mb-4' style={{color:"#252422"}}>Get in Touch</h1>
        <p className='text-center fs-5' style={{color:"#9999a1"}}>Lorem ipsum dolor <b style={{borderBottom:"1px solid #000",color:"#fff"}}>Learn more be smart with me :)</b> sit amet consectetur adipisicing elit. Aspernatur, quas.!</p>
      </div>
      <div className='col'>
          <BsFacebook className='icons mx-3 fs-3 mt-5'/>
          <BsTwitter className='icons mx-3 fs-3 mt-5'/>
          <BsInstagram className='icons mx-3 fs-3 mt-5'/>
          <BsPinterest className='icons mx-3 fs-3 mt-5'/>
      </div>
    </div>
  )
}
