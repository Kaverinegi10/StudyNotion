import React from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import {FcGoogle} from "react-icons/fc"

const LoginupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function SubmitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged in");
    navigate("/Dashboard");
  }
  return (
    <div>
      <form onSubmit={SubmitHandler} className="flex flex-col w-full  mt-4 ">
        <label
          className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]"
          htmlFor="firstinput"
        >
          Email Address<sup className="text-pink-200">*</sup>
          <br />
          <input
            type="text"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            id="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Enter email address"
          />
        </label>

        <br />
        <label
          className="w-full relative text-[0.875rem]  text-richblack-5 leading-[1.375rem"
          htmlFor="secondInput"
        >
          Password<sup className="text-pink-200">*</sup>
          <br />
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] relative "
            placeholder="Enter Password"
          />
          <span
            className="absolute cursor-pointer right-3 top-[30px] "
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaRegEyeSlash fontSize={24} fill="#AFB2BF" />
            ) : (
              <IoEyeOutline fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="#">
            <p className="text-xs text-blue-100  w-max ml-auto">
              Forget Password
            </p>
          </Link>
        </label>

        <button className="bg-yellow-50 py-[8px] py-[12px] mt-2  rounded-[8px] mt-3 font-med text-black">
          Sign In
        </button>
        <div className='flex w-full items-center mt-5  gap-x-2'>
                <div className='w-full h-[1px] bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading[1.375rem]'>
                    OR
                </p>
                <div className='w-full h-[1px] bg-richblack-700'></div>
            </div>

        <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
            border border-richblack-700 px-[12px] py-[8px] mt-4 gap-x-2  '>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
      </form>
    </div>
  );
};

export default LoginupForm;
