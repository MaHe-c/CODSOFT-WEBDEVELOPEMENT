import React, { useState } from 'react';
import "../assets/CSS/nav.css";
import {AiOutlineClose} from "react-icons/ai";
import {HiMenuAlt1} from "react-icons/hi";

export const Nav = () => {
  const [toggle,setToggle] = useState(false);
  function openMenu(){
    setToggle(true);
  }
  function closeMenu(){
    setToggle(false);
  }
  return (
    <>
    <div className='d-flex justify-content-between align-items-center p-5 border-bottom' style={{height:"100px"}}>
      <div id="logo" className='' style={{color:"#000000"}}>MaHesH</div>
        <div>
          <div className='navbar d-none d-md-block'>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Testimonials</a>
          </div>
        </div>
        <div className='d-block d-md-none'>
          {toggle ? (
            <AiOutlineClose onClick={closeMenu} className='fs-3 fw-medium'/>
          ):(<HiMenuAlt1 onClick={openMenu} className='fs-3 fw-medium'/>)}
        </div>
    </div>
    <div className='d-block d-md-none bg-danger text-white' style={{width:"100%"}} id="list">
      {toggle ? (      
        <div className='d-flex justify-content-between'>
        <ul>
          <li className='m-4 list-unstyled'>Skills</li>
          <li className='m-4 list-unstyled'>Projects</li>
          <li className='m-4 list-unstyled'>Testimonials</li>
        </ul>
      </div>) : (
        <div> </div>
      )}
    </div>
    </>
  )
}
