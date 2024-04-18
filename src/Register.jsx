import React, { useEffect, useState } from 'react'
import './Register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import welcomeImg from './registerImg.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Register() {

  const navigate = useNavigate()


  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [mobile, setMobile] = useState("")
  const [password, setPassword] = useState("")
  const [course, setCourse] = useState("")
  const [dob, setDob] = useState("")



  const [validname, setValidname] = useState(true)
  const [validlastname, setValidlastname] = useState(true)
  const [validaddress, setValidaddress] = useState(true)
  const [validemail, setValidemail] = useState(true)
  const [validgender, setValidgender] = useState(true)
  const [validmobile, setValidmobile] = useState(true)
  const [validpassword, setValidpassword] = useState(true)
  const [validdob, setValiddob] = useState(true)
  const [validcourse, setValidcourse] = useState(true)


  //########################################################################################//
  const handleValid = () => {
    
    setValidname(fname !== "")
    setValidlastname(lname !== "")
    setValidaddress(address !== "")
    setValidemail(email !== "")
    setValidgender(gender !== "")
    setValidmobile(mobile !== "")
    setValidpassword(password !== "")
    setValiddob(dob !== "")
    setValidcourse(course !== "")
    return (
      fname !== "" &&
      lname !== "" &&
      address !== "" &&
      email !== "" &&
      gender !== "" &&
      mobile !== "" &&
      password !== "" &&
      dob !== "" &&
      course !== ""
    )
    
    
    
  }
  
  
  //########################################################################################//
  
  const handleclick = () => {
    console.log(handleValid());
    
    if (handleValid()) {
      toast.success("Successful")
      axios.post("http://localhost:3000/register", bodyData)
      .then((res) => {
        
        console.log("Resut receiving =>", res);
        navigate('/view')
      }).catch((err) => {
        console.log(err)
      })
      
    }
    else
    toast.error("Verify your inputs")
}

//########################################################################################//

const bodyData = {
  name: fname,
  lastname: lname,
  address: address,
  email: email,
  gender: gender,
  mobile: mobile,
  password: password,
  course: course,
  dob: dob,
}
useEffect(() => {
  console.log(bodyData);
}, [bodyData])

//########################################################################################//

return (
  <div>


      <div className="row ps-5 pe-5 pt-3 mt-2">

        <div className='col-lg-4  d-flex flex-column align-items-center text-center'>
          <img className='img-fluid p-2 mt-5' src={welcomeImg} alt="awdawd" />
          <p style={{ fontSize: '4em', fontWeight: "bolder" }}>Welcome</p>
          <div style={{ fontSize: '1.5em' }} className="div">Lorem ipsum dolor sit amet consectetur</div>
        </div>


        <div className='col-lg-4 p-5'>

          {/* First Name */}
          <div className="input-headding">First name</div>
          <input onChange={(e) => setFname(e.target.value)} value={fname} className='form-control' type="text" placeholder='Enter your first name' />
          {!validname && <div className="required">*please verify a required field</div>}




          {/*Last Name */}
          <div className="input-headding">Last name</div>
          <input onChange={(e) => setLname(e.target.value)} value={lname} className='form-control' type="text" placeholder='Enter your first name' />
          {!validlastname && <div className="required">*please verify a required field</div>}


          {/* Address */}
          <div className="input-headding">Address</div>
          <textarea onChange={(e) => setAddress(e.target.value)} value={address} className='form-control' placeholder='Enter your first name' />
          {!validaddress && <div className="required">*please verify a required field</div>}


          {/* Email */}
          <div className="input-headding">Email</div>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='form-control' type="text" placeholder='Enter your first email' />
          {!validemail && <div className="required">*please verify a required field</div>}


          {/* Gender */}
          <div className="input-headding">Gender</div>
          <select onChange={(e) => setGender(e.target.value)} value={gender} className='form-control'>
            <option className='text-light bg-dark' value="">Select</option>
            <option className='text-light bg-dark' value="Male">Male</option>
            <option className='text-light bg-dark' value="Female">Female</option>
            <option className='text-light bg-dark' value="Other">Other</option>
          </select>
          {!validgender && <div className="required">*please verify a required field</div>}
        </div>





        <div className='col-lg-4 p-5 '>
          {/* Mobile */}
          <div className="input-headding">Mobile</div>
          <input onChange={(e) => setMobile(e.target.value)} value={mobile} className='form-control' type="text" placeholder='Enter your mobile number' />
          {!validmobile && <div className="required">*please verify a required field</div>}


          {/* Password */}
          <div className="input-headding">Password</div>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='form-control' type="password" placeholder='Enter your Password' />
          {!validpassword && <div className="required">*please verify a required field</div>}


          {/* DOB */}
          <div className="input-headding">Date of Birth</div>
          <input onChange={(e) => setDob(e.target.value)} value={dob} className='form-control' type="date" placeholder='Enter your first name' />
          {!validdob && <div className="required">*please verify a required field</div>}


          {/* Course */}
          <div className="input-headding">Course</div>
          <select onChange={(e) => setCourse(e.target.value)} value={course} className='form-control'>
            <option className='text-light bg-dark' value="">Select</option>
            <option className='text-light bg-dark' value="Biology">Biology</option>
            <option className='text-light bg-dark' value="Computer Science">Computer Science</option>
            <option className='text-light bg-dark' value="Commerce">Commerce</option>
            <option className='text-light bg-dark' value="Humanities">Humanities</option>
          </select>
          {!validcourse && <div className="required">*please verify a required field</div>}


          <div className='d-flex justify-content-center'>
            <button onClick={handleclick} className='btn btn-primary mt-5 ps-3 pe-3 fw-bolder fs-3'>Register</button>
          </div>


        </div>




      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  )
}

export default Register