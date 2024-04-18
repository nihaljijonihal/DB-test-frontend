import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'


function View() {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/view")
      .then(res => {
        console.log(res.data)
        setData(res.data)
      }).catch(err => {
        console.log(err);
      })
  }, [])

  // let resultBody = [{
  //   name: "Hemanth",
  //   lastname: "Ra",
  //   address: "abz streaet",
  //   email: "nihaljijoniaahal@gmail.com",
  //   gender: "Male",
  //   mobile: "1234567aa89",
  //   password: "hfhfhf",
  //   dob: "dd/amm/yyyy",
  //   course: "baiolaogy"
  // },
  // {
  //   name: "Hemanth",
  //   lastname: "Ra",
  //   address: "abz streaet",
  //   email: "nihaljijoniaahal@gmail.com",
  //   gender: "Male",
  //   mobile: "1234567aa89",
  //   password: "hfhfhf",
  //   dob: "dd/amm/yyyy",
  //   course: "baiolaogy"
  // },
  // {
  //   name: "Hemanth",
  //   lastname: "Ra",
  //   address: "abz streaet",
  //   email: "nihaljijoniaahal@gmail.com",
  //   gender: "Male",
  //   mobile: "1234567aa89",
  //   password: "hfhfhf",
  //   dob: "dd/amm/yyyy",
  //   course: "baiolaogy"
  // }]


  return (
    <>
      <div className="row mt-5">
        <div className="col-lg-2 d-flex justify-content-center">
        <Link to={"/"}><button className='btn btn-warning'>GO HOME</button></Link>
        </div>
        <div  className="col-lg-8">
          {data.length?<table className='table table-hover table-bordered '>
            <thead >
              <tr >
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>First Name</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>Last Name</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>Address</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>E-Mail</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>Mobile</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>DOB</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>Gender</th>
                <th style={{backgroundColor:"grey",textAlign:"center"}} scope='col'>Course</th>
              </tr>
            </thead>
            <tbody className=''>
              {data?.map((item) => (
                <tr key={item}>
                  <td scope='row'>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.dob}</td>
                  <td>{item.gender}</td>
                  <td>{item.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
          :
          <div className='text-warning'>No Record Found</div>}
        </div>
        <div className="col-lg-2"></div>
      </div>
    </>
  )
}

export default View