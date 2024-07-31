import React from 'react';
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { Project } from "./Project";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <div className='' style={{backgroundColor:"#fff"}}>
        <Nav />
        <Hero />
        <Project />
        <Footer />
        <div className='d-flex justify-content-center align-items-center text-white py-3' style={{backgroundColor:"#190028"}}>
          <p style={{color:"#bf1363"}}>Designed By <b className='border-bottom' style={{color:"#3a015c",textShadow:"1px 1px #fff",fontSize:"1.4rem"}}>Mahesh</b></p>
        </div>
    </div>
  )
}
