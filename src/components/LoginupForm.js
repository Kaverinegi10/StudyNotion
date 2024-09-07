import React from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const LoginupForm  = ({setIsLoggedIn})  => {
   
    const navigate=useNavigate();
    
    function clickHandler(){
navigate("/Signup")
    }

    
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
     <form onSubmit={SubmitHandler}>
      <label htmlFor='firstinput'>Enter email address:<sup>*</sup></label>
      <br/>
       <input type='text'
       className='shadow border rounded py-2 px-3 text-gray-700'
        id="email"
        name='email'
        onChange={changeHandler}
        value={formData.email}
        placeholder='enter email id'/>
<br/>
      <label htmlFor='secondInput'>Password:<sup>*</sup>
      <br/>
        <input type={showPassword ? ("text"):("password")}
        id="password"
        name='password'
        value={formData.password}
        onChange={changeHandler}
        className='border rounded  py-2 px-3 text-gray-700 '
        placeholder='Enter Password'/>

        <span onClick={()=> setShowPassword((prev)=> !prev)}>
            {showPassword ? (<FaRegEyeSlash/> ):(<IoEyeOutline/>)}
        </span>

        <Link to="#">
            <p>Forget Password</p>
        </Link>
        </label>

        <button>Sign In</button>
        <br/>
        <button onClick={clickHandler} >Create Account</button>
        
      </form>
     
      </div>
  );
}

export default LoginupForm