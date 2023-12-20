

import React from "react";
import picImage from '../src/orange-pic.svg';
import logo from '../src/Logo.svg';
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple } from "react-icons/io";
import { GrTwitter } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500">
      <div className=" flex items-center justify-center">
        <div className=" bg-white   shadow-md flex flex-col items-center justify-center py-8 px-9 rounded-l-[1rem] ">
          <img src={logo} alt="Logo" className="h-12 mb-4" />
          <h1 className="text-xl  text-[#333333]">Log in and Sign up</h1>
          <p className="text-[10px] px-5 text-[#666666]">Use your email or other service to continue with us </p>
          <button className="bg-transparent text-sm text-[#333333] border-2 border-[#333333] rounded-[6rem] mt-5 px-8 py-3 flex items-center">
            <FaFacebook className="mr-2 text-blue-500" />
            Continue with Facebook
          </button>
          <button className="bg-transparent text-[#333333]  text-sm border-2 border-[#333333] rounded-[6rem] mt-4 px-[2.8rem]  py-3 flex items-center">
            <FcGoogle className="mr-2" />
            Continue with Google
          </button>
          <button className="bg-transparent text-[#333333]  text-sm border-2 border-[#333333] rounded-[6rem] mt-4 px-[3rem]  py-3 flex items-center">
            <IoLogoApple className="mr-2" />
            Continue with Apple
          </button>
          <button className="bg-transparent text-[#333333] text-sm border-2 border-[#333333] rounded-[6rem] mt-4 px-[2.8rem] py-3 flex items-center">
            <GrTwitter className="mr-2 text-blue-500" />
            Continue with Twitter
          </button>
          <button className="bg-transparent text-[#333333] text-sm border-2 border-[#333333] rounded-[6rem] mt-4 px-[3rem]  py-3 flex items-center">
            <MdEmail className="mr-2" />
            Continue with email
          </button>
          <button className="bg-transparent text-[#333333]  text-sm border-2 border-[#333333] rounded-[6rem] mt-4 px-[2.8rem]  py-3 flex items-center">
            <IoIosPhonePortrait className="mr-2" />
            Continue with phone
          </button>
        </div>
        <div className="flex">
        <div className="h-full">
          <img src={picImage} alt="Logo" className=" w-[24rem] rounded-r-[1rem]" />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
