"use client"

import toast from "react-hot-toast";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Loader from "@/components/shared/Loader";

const LoginPage = () => {
  const {
    register, 
    handleSubmit,
    watch,
     formState: {errors}
    } = useForm();

    const [isShowPassword, setIsShowPassword] =useState(false);
    const [loading, setLoading] = useState(false);
    const handleGoogleSignIn = async() => {

      toast.loading("Signing in with Google...",
      {duration: 3000});

    const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
  };

  const handleLogin = async(data) => {

    setLoading(true);

    const { data: res, error } = await authClient.signIn.email({
    email: data.email, 
    password: data.password,
    rememberMe: true,
    callbackURL: "/",
  });

    if(error){
      toast.error(error.message);
      return;
    }

    toast.success("Login successful!", {duration: 3000});
    setTimeout(() => {
      window.location.href = "/";
    }, 2500);

  };

  return <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-100 via-white to bg-purple-100 px-4 py-10">

    <div className=" max-w-lg bg-white backdrop-blur-lg shadow-2xl rounded-xl p-6 sm:p-8 md:p-10 my-6 border border-white/20">
      <h2 className="font-bold text-3xl text-center mb-6">Login Your Account</h2>
      
      <form className="space-y-4" onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Email address
          </legend>
          <input 
          type="email" 
          className="input input-bordered w-full rounded focus:ring-2 focus:ring-pink-300 focus:outline-none" 
          placeholder="Enter your email address"
          {...register("email", {
            required: "Email filed is required" })}  /> 
          {errors.email && (<p className="text-red-700">{errors.email.message}</p>)} 
        </fieldset>

        <fieldset className="fieldset relative">
          <legend className="fieldset-legend">
            Password
          </legend>
          <input 
          type={isShowPassword ? "text" : "password"} 
          className="input input-bordered w-full rounded focus:ring-2 focus:ring-pink-300 focus:outline-none"
          placeholder="Enter your password"
          {...register("password", { required: "Password field is required" })}  
          />
          <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>
          {isShowPassword ? <FaEye /> : <FaEyeSlash />}
          </span>

          {errors.password && (<p className="text-red-700">{errors.password.message}</p>)} 
        </fieldset>

        <button disabled={loading} className="btn w-full bg-linear-to-r from-blue-400 to-purple-400 border-none text-white font-bold rounded shadow-lg hover:shadow-xl hover:scale-105 active:scale-85 transition duration-300">{loading ? (<span className="loading loading-spinner loading-sm "></span> ):( "Login")}</button>
      </form>
      <div className="divider"><span className="font-semibold">OR</span></div>

      <button 
      onClick={handleGoogleSignIn} className="btn bg-blue-100 hover:bg-blue-200 w-full border-none mb-4 rounded shadow-md hover:shadow-xl hover:scale-105 active:scale-85 transition duration-300">

        <div className="bg-linear-to-r from-blue-300 to-purple-300 p-1 rounded-full">
          <FaGoogle className="text-white text-sm " />
        </div>

          <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold"> Login with Google</span>
      </button>

      <p className="mt-6 text-center font-medium">Don't have an account? <Link className=" font-semibold text-red-500 underline" href={'/register'} >Register</Link></p>
    </div>

    </div>;
};

export default LoginPage;