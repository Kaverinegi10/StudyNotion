import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import About from "./pages/About";
import { useEffect, useState } from "react";
import LoginupForm from "./components/LoginupForm"
import SignupForm from "./components/SignupForm";
import PrivateRoute from './components/PrivateRoute';

function App() {
  const[isLoggedIn, setIsLoggedIn]=useState();


  return(
   <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

   <Routes>
    <Route path="/" element={<Home/>}></Route> 
    <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
    <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>

    <Route path="/dashboard" element={
    <PrivateRoute isLoggedIn={isLoggedIn}>
    <Dashboard/>
    </PrivateRoute>
    }/>
    
    <Route path="/About" element={<About/>}></Route>


    

   </Routes>
   </div>
  );
  

}

export default App;
