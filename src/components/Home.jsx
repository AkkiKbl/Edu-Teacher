import React from 'react'
import '../style/HomeCss.css'
import internshipicon from '../assets/internship.svg';
import noticesIcon from '../assets/notices-board.svg';
import {Link } from 'react-router-dom';



export default function Home() {
  return (
   <>
   <section id='home-page'>
   <div className="container">
    <div className="row">
      <h2 className='text-center home-title'>WELCOME TO EDUSCRIBE</h2>
      
      <div className="col-md-4">
      <div className="card c-home" style={{width:"15rem"}}>
  <img src={internshipicon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Internship</h5>
    <p className="card-text">upload available internship for students</p>
    <div className="btn-box text-center">
  
    <Link to="/internship"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div>
   
      <div className="col-md-4">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={internshipicon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Attendance</h5>
    <p className="card-text">upload available Attendance for students</p>
    <div className="btn-box text-center">
    <a href="#" className="btn btn-primary">UPLOAD</a>
    </div>
  </div>
</div>
      </div>

      <div className="col-md-4">
      <div className="card c-home " style={{width:"15rem"}}>
  <img src={noticesIcon} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-center">Notices</h5>
    <p className="card-text">upload available notices for students</p>
    <div className="btn-box text-center">
    <Link to="/notice"><a href="#" className="btn btn-primary">UPLOAD</a></Link>
    </div>
  </div>
</div>
      </div> 






    </div>
   </div>
   </section>
   </>
  )
}
