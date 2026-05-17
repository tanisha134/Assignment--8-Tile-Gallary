"use client"

import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
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

  const handleRegister = async(data) => {

    setLoading(true);

    toast.loading("Registering your account...", {
      duration: 3000,
    });

    const { name, email, password, photo } = data;

    const {data: res, error} = await authClient.signUp.email({
        name: name, 
        email: email, 
        password: password,
        image: photo,
        callbackURL: "/",
    });

    if(error) {
        toast.dismiss();
        toast.error(error.message,{
          duration: 3000,
        });

        setLoading(false);
        return;

      }

    if(res) {
        setTimeout(() => {
          toast.dismiss();

          toast.success("Registered successfully! ", {
            duration: 3000,
          });
          setLoading(false);

          setTimeout(() => {
            window.location.href = "/";
        }, 3000);
      });
    }
  };

  return <div className="min-h-screen py-10 md:py-16 px-4 bg-linear-to-r from-pink-100 via-white to-purple-100 flex justify-center">

    <div className=" max-w-lg bg-white backdrop-blur-lg shadow-2xl rounded-xl p-6 sm:p-8 md:p-10 my-6 border border-white/20">
      <h2 className="font-bold text-3xl text-center mb-2">Register Your Account</h2>

      <p className=" text-center text-gray-500 text-sm mb-4">Create your TileGallery account and explore premium designs</p>
      
      <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Name
          </legend>
          <input 
          type="text" 
          className="input input-bordered w-full rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
          placeholder="Enter your username"
          {...register("name", {
            required: "Name filed is required" })}  /> 
          {errors.name && (<p className="text-red-700">{errors.name.message}</p>)} 
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Photo URL
          </legend>
          <input 
          type="text" 
          className="input input-bordered w-full rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
          placeholder="Enter your photo url"
          {...register("photo", {
            required: "Photo URL filed is required" })}  /> 
          {errors.photo && 
          (<p className="text-red-700">{errors.photo.message}</p>)} 
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Email address
          </legend>
          <input 
          type="email" 
          className="input input-bordered w-full rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
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
          className="input input-bordered w-full rounded focus:ring-2 focus:ring-purple-300 focus:outline-none"
          placeholder="Enter your password"
          {...register("password", { required: "Password field is required" })}  
          />
           <span className="absolute right-2 top-4 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}> 
            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
            </span>

          {errors.password && (<p className="text-red-700">{errors.password.message}</p>)} 
        </fieldset>

        <button
        disabled={loading} 
        className="btn w-full bg-linear-to-r from-blue-400 to-purple-400 text-white font-bold rounded shadow-lg hover:shadow-xl hover:scale-105 active:scale-85 transition duration-300">
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="loading loading-spinner loading-sm "></span>
              <span>Registering...</span>
            </div>
             
            ):(
               "Register"
          )}
        </button>
      </form>

       <div className="divider"><span className="font-semibold">OR</span></div>

        <button 
            onClick={handleGoogleSignIn} className="btn bg-pink-100 hover:bg-purple-200 w-full border-none mb-4 rounded shadow-md hover:shadow-xl hover:scale-105 active:scale-85 transition duration-300">

              <div className="bg-linear-to-r from-pink-300 to-purple-300 p-1 rounded-full">
                <FaGoogle className="text-white text-sm " />
              </div>
      
                <span className="bg-linear-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent font-bold"> Continue with Google</span>
            </button>

      
    </div>

    </div>;
};

export default RegisterPage;