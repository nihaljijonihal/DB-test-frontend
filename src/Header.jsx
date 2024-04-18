import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>

            <div className='d-flex justify-content-between  bg-primary pt-2 pb-2'>
                <div className=' ms-5  d-flex align-items-center'>
                    <i style={{ fontSize: "3em", overflow:"hidden" }} className="fa-brands fa-evernote  me-2"></i>
                    <span className=' fw-bolder ms-1' style={{ fontSize: "2em" }}>Education</span>
                </div>

                <div className=' me-5'>
                    <Link to={"/"} className=' fw-bolder ms-3' style={{ fontSize: "1.7em", textDecoration: "none" }}>
                         <i className="fa-solid fa-house me-1 " style={{ fontSize: "1em",color:"white" }}></i>
                    <span className='text-light' ><span style={{color:"white"}}>Home</span></span></Link>
                    <span className=' fw-bolder ms-4' style={{ fontSize: "1.7em" }}> Services</span>
                    <span className=' fw-bolder ms-4' style={{ fontSize: "1.7em" }}> About US</span>
                    <span className=' fw-bolder ms-4' style={{ fontSize: "1.7em" }}>Login</span>
                </div>
            </div>
        </div>
    )
}

export default Header