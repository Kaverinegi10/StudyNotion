import React from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const LoginupForm  = ({setIsLoggedIn})  => {
   
    const navigate=useNavigate();
    
    const[formData,setFormData]=useState({
    email:"",password:""
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
    function SubmitHandler(event){
        event.preventDefault();
       setIsLoggedIn(true);
       toast.success("Logged in");
       navigate("/Dashboard");


    }
      return (
    <div>
       <form onSubmit={SubmitHandler} className='flex flex-col w-full  mt-4'>
       <label className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"  htmlFor='firstinput'>Email Address<sup className='text-pink-200'>*</sup>

      <br/>
       <input type='text'
       className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
        id="email"
        name='email'
        onChange={changeHandler}
        value={formData.email}
        placeholder='Enter email address' />
        </label>

       <br/>
      <label className='w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem' htmlFor='secondInput'>Password<sup className='text-pink-200'>*</sup>
      <br/>
        <input type={showPassword ? ("text"):("password")}
        id="password"
        name='password'
        value={formData.password}
        onChange={changeHandler}
        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] '
        placeholder='Enter Password'/>

        <span onClick={()=> setShowPassword((prev)=> !prev)}>
           
        </span>

        <Link to="#">
            <p className='text-blue-100 '>Forget Password</p>
        </Link>
        </label>

        <button>Sign In</button>
        
      </form>
     
      </div>
  );
}

export default LoginupForm
        
        