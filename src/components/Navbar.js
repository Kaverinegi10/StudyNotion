import React from 'react'
import Logo from "../assets/Logo.svg";
import { Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';


const Navbar=(props) =>{
    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;

    
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
        <Link to="/">
       <img src={Logo} alt='./Logo' height={32} width={160} loading='lazy'/>
    
    </Link>
    <nav>
    <ul className='flex gap-x-6 text-white'>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to ="/About">About</Link></li>
       <li><Link to="/contact">Contact</Link></li>
    </ul>
   </nav>



<div className=' flex items-center gap-x-4 text-richblack-100'>

{!isLoggedIn &&
    <Link to="/login">
<button className='bg-richblack-800 text-white py-[8px] p-[12px] rounded-[8px]'>Log In</button>
</Link>
 }

{!isLoggedIn &&
<Link to="/Signup">
<button className='bg-richblack-800 text-white py-[8px] p-[12px] rounded-[8px]'>Sign Up</button>
</Link>
}


{isLoggedIn &&
<Link to="/">
<button  className='bg-richblack-800 text-white py-[8px] p-[12px] rounded-[8px]' onClick={()=>{
    setIsLoggedIn(false);
    toast.success("logged out");
}}>Logout</button>
</Link>
}


{isLoggedIn &&
<Link to="/Dashboard">
<button className='bg-richblack-800 text-white py-[8px] p-[12px] rounded-[8px]'>Dashboard</button>
</Link>


}


</div>
    
    </div>
  )
}

export default Navbar