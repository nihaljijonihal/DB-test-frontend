import React, { useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import splashImage from './splashPage.png'
function Home() {



  return (
    // <div className='d-flex justify-content-center align-items-center ' style={{height:"100vh"}}>
    //   <Link to={"/register"}><button className='btn btn-warning'>Register</button></Link>
    // </div>
    <>
    <div className='row  ms-5 me-5 mt-1 p-5'>
      <div className="col-lg-7 p-4 ">
        <div style={{fontSize:"4em"}} className="fw-bolder mb-3">
          Education
        </div>
        <p className='pe-5' style={{fontSize:"1.5em",textAlign:"justify"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut fuga debitis, nulla minima, officia laudantium unde consequuntur voluptate reiciendis ipsa ipsam commodi porro, totam provident dignissimos dolores. At, expedita?
          Veritatis deserunt nemo blanditiis et incidunt nobis quod ex explicabo distinctio! Ullam, natus perspiciatis, officiis asperiores dolores veniam aperiam molestiae voluptate odio eveniet assumenda, reprehenderit.
        </p>
        <div style={{fontSize:"2em"}} className="mt-5 text-warning">
          New Student? Click here to 
          <Link to={"/register"}>
            <button style={{fontSize:"1em"}} className='btn btn-primary ms-3'>Register</button>
            </Link>
        </div>
      </div>
      <div className="col-lg-5">
        <img className='img-fluid p-1 ms-5' src={splashImage} alt="" />
      </div>
    </div>
    </>
  )
}

export default Home