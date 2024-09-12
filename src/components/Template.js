import React from 'react'
import SignupForm from './SignupForm';
import LoginupForm from "./LoginupForm";
import Login from '../pages/Login';
import frameImage from "../assets/frame.png";
import {FcGoogle} from "react-icons/fc"



function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {

    console.log(formtype);
  return (
    <div className='flex max-w-[1160px] py-16 mx-auto gap-x-12 gap-y-0 justify-between'>
<div className='w-11/12 max-w-[450px]'>
    <h1 className='text-richblack-5 text-[1.875rem] font-semibold leading-[2.375rem]'>{title}</h1>
    <br/>
    <p className=' text-[1.125rem] w-full mt-2 leadin[1.625rem]'>
        <span className='text-richblack-100 w-11/12'>{desc1}</span>
        <br/>
        <span className='text-blue-100 italic'>{desc2}</span>
    </p>

    {formtype === "signup" ?
    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
    (<LoginupForm setIsLoggedIn={setIsLoggedIn}/>)}

<div className='flex w-full items-center my-4 gap-x-2'>
    <div className='h-[1px] bg-richblack-700 w-full '></div>
    <p className='text-richblack-700 font-medium leading[1.375rem] ' >OR</p>
    <div  className='h-[1px] bg-richblack-700 w-full'></div>
</div>
    <div>
    <button className='w-full flex  items-center justify-center border rounded-[8px] font-medium  px-[12px] py-[8px]
     border-richblack-700 gap-x-2 mt-4 text-gray-700 w-full text-white '>
     <FcGoogle/>
        <p className=''>Sign in with Google</p>
    </button>
</div>
</div>
<div className=''>
<img src={frameImage}
        alt="Pattern"
        className='absolute w-[450px] '
        width={558}
        height={504}
        loading='lazy'
    />
    <img src={image}
    className='relative w-[450px] -top-4 right-4'
        alt='pattern'
        width={558}
        height={504}
        loading='lazy'
    />
    </div>
    

    </div>
  )
}

export default Template