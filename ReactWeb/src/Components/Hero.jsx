import React from 'react';
import "../assets/CSS/nav.css";
import { BsFacebook,BsTwitter,BsInstagram,BsPinterest } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className='row row-cols-1'>
      <div className='col main container-fluid' style={{width:"100vw",height:"100%"}}>
      <div className="row align-items-center justify-content-center row-cols-lg-3 row-cols-md-3 row-cols-1 w-100 h-100 p-3 text-center">
        <div className="col align-self-center">
          <h1 className='d-inline text-white text-center text-body-emphasis' >I am</h1> <h3 className='d-inline' style={{color:"#006494"}}>joshna</h3>
          <h1 className='my-4 text-uppercase fw-bold' style={{color:"#140152"}} id="domain">Front-end Developer</h1>
          <p className='text-start' style={{lineHeight:"30px"}}>A front end developer builds thr front-end portion of websites and weeb applications the part users see and interact with.A front-end developer creates websites and applications using web languages such as <b className='text-danger'>HTML,CSS and JS </b> that allow users to access and interacts with the site or app.</p>
        </div>
        <div className="col align-self-center">
          <img src="girlimage2.jpg" alt="Image" className='w-75' style={{borderRadius:"30%",border:"10px solid #fff",outline:"1px solid #000",outlineOffset:"2px",boxShadow:"2px 2px 4px 4px rgba(0,0,0,0.5445"}}/>
        </div>
        <div className="col align-self-center mt-4">
          <h2 className='fs-1 fw-semibold' style={{color:"#323e48"}}>Who I'am</h2>
          <p className='text-danger fw-lighter'>I am Joshna</p>
          <p>Need to get in touch with me?</p>
          <p className='mb-5 text-primary-emphasis fw-bold'>Yes : 6476500679</p>
          <BsFacebook className='icons mx-3 fs-3 mt-5'/>
          <BsTwitter className='icons mx-3 fs-3 mt-5'/>
          <BsInstagram className='icons mx-3 fs-3 mt-5'/>
          <BsPinterest className='icons mx-3 fs-3 mt-5'/>
        </div>
      </div>
      </div>
      <div className='col'>
        <div className='row row-cols-1 row-cols-md-2 m-5'>
          <div className='col skills d-flex justify-content-center align-items-center flex-column'>
            <h1 className='fs-md-1'>Top 10 <span>Soft Skills</span> Employers Love <span id='short' className='d-block'>(For Any Profession and I Have )</span></h1>
            <ul className='lists row row-cols-2 justify-content-center align-items-center  align-content-center justify-content-md-between'>
              <li className='col pt-2 pb-2 p-md-1'>Time Management</li>
              <li className='col pt-1 pb-2 p-md-1'>Communication</li>
              <li className='col pt-1 pb-2 p-md-1'>Adaptability</li>
              <li className='col pt-1 pb-2 p-md-1'>Problem Solving</li>
              <li className='col pt-1 pb-2 p-md-1'>Teamwork</li>
              <li className='col pt-1 pb-2 p-md-1'>Creativity</li>
              <li className='col pt-1 pb-2 p-md-1'>Interpersonal Skills</li>
              <li className='col pt-1 pb-2 p-md-1'>Work Ethic</li>
              <li className='col pt-1 pb-2 p-md-1'>Leadership</li>
            </ul>
          </div>
          <div className='col d-flex justify-content-center align-items-center'>
            <img src="SkillImage.jpg" alt="" className='img-skills'/>
          </div>
        </div>
      </div>

    </div>
  )
}
