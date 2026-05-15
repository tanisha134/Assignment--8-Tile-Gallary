"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link"; 
import toast from "react-hot-toast"; 
 
export default function Navbar() { 
  const image = "/images/user.jpg";
  const handleLogout = async() => {

    toast.loading("Logging out...", {
      duration: 3000,
    });

    setTimeout(async() => {

    await authClient.signOut();
    
    toast.dismiss();

    toast.success("Logged out successfully!",{
      duration:3000,
    });
  }, 3000);
    }; 

  const { data: session , isPending} = authClient.useSession();
  const user = session?.user;
  

  return( 
  <div className="navbar bg-base-100 shadow-md px-4 md:px-8"> 
  {/* Left Logo */} 
  <div className="navbar-start"> 
    <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
     TileGallery 
    </Link> 
    
    </div> 
    {/* Menu */} 
    <div className="navbar-center hidden md:flex"> 
      <ul className="menu menu-horizontal px-1 font-medium"> 
        <li> <Link href="/"> Home </Link> </li> 
        <li> <Link href="/all-tiles"> All Tiles </Link> </li> 
        <li> <Link href="/my-profile"> My Profile </Link> </li> 
      </ul>

      </div> 
      {/* Auth */} 
      <div className="navbar-end"> 
        {/* Mobile menu */} 
        <div className="dropdown dropdown-end md:hidden"> 

          <label tabIndex={0} className="btn btn-ghost"> ☰ </label> 
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52"> 
            <li><Link href="/">Home</Link></li> 
            <li><Link href="/all-tiles"> All Tiles </Link></li>
             <li><Link href="/my-profile"> My Profile </Link></li> 
          </ul> 
          
          </div> {isPending ? (<span className="loading loading-spinner loading-lg"></span> 
          ): user ? (
            <div className="flex items-center gap-3">
            <h2 className="hidden sm:block text-sm md:text-base font-semibold text-gray-700 max-w-[110px] md:max-w-[150px] lg:max-w-full truncate lg:truncate-none ">Hello, {user.name}</h2>
            <img src={user?.image || image} alt="user" 
            className="w-8 h-8 rounded-full object-cover"
            onError={(e) => {
              e.target.src = image;
            }}
            /> 
            
            <button onClick={handleLogout} className="btn bg-linear-to-r from-red-400 to-red-600 text-white font-medium rounded shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300 "> 
              Logout
            </button>
          </div>
            ) : ( 

              <Link href="/login" className="btn text-[14px] bg-linear-to-r from-blue-400 to-blue-800 text-white font-medium rounded shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300">
                Login 
              </Link>

            )}
            </div> 
          </div>
  );
};