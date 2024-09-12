import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
    Confirm: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event) {
    event.preventDefault();
    if (formData.Password != formData.Confirm) {
      toast.error("passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");

    navigate("/Dashboard");
  }
  return (
    <div>
      <div className="rounded-[25px] bg-richblack-800 border py-2  max-w-max gap-x-6 my-6 p-1 flex  text-white">
        <button
          className={`${
            accountType == "student"
              ? " bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-100"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType == "instructor"
              ? " bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-100"
          }py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="w-full flex gap-x-4 mt-4">
          <label className=" w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            First Name <sup className="text-pink-200">*</sup>
            <br />
            <input
              type="text"
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  p-[12px]"
              placeholder="Enter First Name"
              name="firstName"
              onChange={changeHandler}
              value={FormData.firstName}
              id="FirstName"
            />
          </label>
          <br />
          <label className="w-full text-white top-w-full text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem] ">
            Last Name <sup className="text-pink-200">*</sup>
            <br />
            <input
              type="text"
              className="bg-richblack-800  rounded-[0.5rem] text-richblack-5  p-[12px] "
              placeholder="Enter Last Name"
              name="lastName"
              onChange={changeHandler}
              value={FormData.lastName}
              id="lastName"
            />
          </label>
        </div>

        <label className="w-full text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </label>
        <br />
        <input
          type="text"
          className="bg-richblack-800 w-full rounded-[0.5rem] text-richblack-5 p-[12px] "
          placeholder="Enter email address"
          name="email"
          onChange={changeHandler}
          value={FormData.email}
          id="email"
        />

        <br />

        <div className="w-full flex gap-x-4 mt-4 ">
          <label className="w-full relative text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Create Password <sup className="text-pink-200">*</sup>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  p-[12px]"
              placeholder="Enter Password"
              name="Password"
              onChange={changeHandler}
              value={FormData.Password}
              id="Password"
            />
            <span
              className="absolute cursor-pointer right-12 top-[33px] "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaRegEyeSlash fontSize={24} fill="#AFB2BF" />
              ) : (
                <IoEyeOutline fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <br />
          <label className="w-full relative text-[0.875rem]   text-richblack-5 mb-1 leading-[1.375rem]">
            Confirm Password <sup className="text-pink-200">*</sup>
            <br />
            <input
              type={showPassword ? "text" : "password"}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5  p-[12px]"
              placeholder="Confirm Password"
              name="Confirm"
              onChange={changeHandler}
              value={FormData.Confirm}
              id="Confirm"
            />
            <span
              className="absolute cursor-pointer left-[150px] top-[33px] "
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaRegEyeSlash fontSize={24} fill="#AFB2BF" />
              ) : (
                <IoEyeOutline fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <br />
        <button className="w-full bg-yellow-50 py-[8px] py-[12px] mt-9 rounded-[8px] font-med text-black">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
