import React from 'react'
import Logo from "../assets/Logo.svg";
import { Link} from 'react-router-dom';
import {toast} from 'react-hot-toast';


const Navbar=(props) =>{
    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;

    
  return (
    <div className='flex justify-evenly'>
        <Link to="/">
       <img src={Logo} alt='./Logo' height={32} width={160} loading='lazy'/>
    
    </Link>
    <nav>
    <ul className='flex gap-3 '>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to ="/About">About</Link></li>
       <li><Link to="/contact">Contact</Link></li>
    </ul>
   </nav>



<div className='flex ml-3 gap-3 '>

{!isLoggedIn &&
    <Link to="/login">
<button>Login</button>
</Link>
 }

{!isLoggedIn &&
<Link to="/Signup">
<button>Signup</button>
</Link>
}


{isLoggedIn &&
<Link to="/">
<button onClick={()=>{
    setIsLoggedIn(false);
    toast.success("logged out");
}}>Logout</button>
</Link>
}


{isLoggedIn &&
<Link to="/Dashboard">
<button>Dashboard</button>
</Link>


}


</div>
    
    </div>
  )
}

export default Navbar