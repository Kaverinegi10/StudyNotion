import React from 'react'
import SignupForm from './SignupForm';
import LoginupForm from "./LoginupForm";
import Login from '../pages/Login';
import frameImage from "../assets/frame.png";


function Template({title,desc1,desc2,image,formtype,setIsLoggedIn}) {

    console.log(formtype);
  return (
    <div>
<div>
    <h1>{title}</h1>
    <p>
        <span>{desc1}</span>
        <span>{desc2}</span>
    </p>

    {formtype === "signup" ?
    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
    (<LoginupForm setIsLoggedIn={setIsLoggedIn}/>)}
</div>
<div>
    <div></div>
    <p>OR</p>
    <div></div>
    <button>
        <p>Sign in with google</p>
    </button>
</div>
<div>
    <img src={image}
        alt='pattern'
        width={558}
        height={504}
        loading='lazy'
    />
    <img src={frameImage}
        alt="Pattern"
        width={558}
        height={504}
        loading='lazy'
    />
</div>
    </div>
  )
}

export default Template