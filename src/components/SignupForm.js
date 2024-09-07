import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';

const SignupForm=({setIsLoggedIn})=> {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        firstName:"", lastName:"",email:"",Password:"",Confirm:""
    })
   
    const[showPassword, setShowPassword]=useState(false);


    function changeHandler(event){
        setFormData((prevData)=>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }
        ))
    }
        function submitHandler(event){
        event.preventDefault();
        if(formData.Password != formData.Confirm){
            toast.error("passwords do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");


        navigate("/Dashboard")
    }
  return (
    <div>
    <button className='gap-3'>
        Student
    </button>
    <button  className='gap-3'>
        Instructor
    </button>

    
    <form onSubmit={submitHandler}>
   <label>First Name <sup>*</sup>
   <br/>
   <input type="text" className='border '
   placeholder='Enter First Name'
   name='firstName'
   onChange={changeHandler}
   value={FormData.firstName}
   id='FirstName'/>
   </label>
<label>Last Name <sup>*</sup>
  <br/>
   <input type="text" className='border '
   placeholder='Enter Last Name'
   name='lastName'
   onChange={changeHandler}
   value={FormData.lastName}
   id='lastName'/>
  </label>

<br/>
<label>Email Address <sup>*</sup></label>
  <br/>
   <input type="text" className='border '
   placeholder='Enter email address'
   name='email'
   onChange={changeHandler}
   value={FormData.email}
   id='email'/>

<br/>
<label>Create Password <sup>*</sup>
  <br/>
   <input type={showPassword ? ("text"):("password")} className='border '
   placeholder='Enter Password'
   name='Password'
   onChange={changeHandler}
   value={FormData.Password}
   id='Password'/>
   <span onClick={()=> setShowPassword((prev)=>!prev) }>
   
   </span>
   </label>
<label>Confirm Password <sup>*</sup>
  <br/>
   <input type={showPassword ? ("text") : ("password")} className='border '
   placeholder='Confirm Password'
   name='Confirm'
   onChange={changeHandler}
   value={FormData.Confirm}
   id='Confirm'/>
   <span onClick={()=>setShowPassword((prev)=>!prev)}>
 
   </span>
   </label>
   <br/>
   <button >Create Account</button>
</form>
    </div>
  )
}

export default SignupForm