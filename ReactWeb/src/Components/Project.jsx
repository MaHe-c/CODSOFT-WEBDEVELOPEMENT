import React from 'react';
import '../assets/CSS/nav.css';
import {PiFlowerTulipFill} from "react-icons/pi";
import {MdTravelExplore} from "react-icons/md";
import {FaCalculator} from "react-icons/fa";
import {FaUserCircle} from "react-icons/fa";

export const Project = () => {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center project'>
        <div className='col in-pro'>
            <h3 className='d-inline'>Flower Shop Website</h3>
            <PiFlowerTulipFill  className='fs-2 m-2 text-end'/>
            <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex fuga fugit illo, expedita eaque esse maxime soluta a iure quae!</p>
        </div>
        <div className='col in-pro'>
            <h3 className='d-inline'>Travel Expo Website</h3>
            <MdTravelExplore className='fs-2 m-2 text-end'/>
            <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex fuga fugit illo, expedita eaque esse maxime soluta a iure quae!</p>
        </div>
        <div className='col in-pro'>
            <h3 className='d-inline'>Simple Calculator</h3>
            <FaCalculator  className='fs-2 m-2'/>
            <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex fuga fugit illo, expedita eaque esse maxime soluta a iure quae!</p>
        </div>
        <div className='col in-pro'>
            <h3 className='d-inline'>Simple Portfolio</h3>
            <FaUserCircle  className='fs-2 m-2'/>
            <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex fuga fugit illo, expedita eaque esse maxime soluta a iure quae!</p>
        </div>
    </div>
  );
}
