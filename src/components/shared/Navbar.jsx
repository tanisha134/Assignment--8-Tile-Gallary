"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState(null);
    const handleLogout = () => {
        setUser(null);
    };
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
                    <li>
                        <Link href="/">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/all-tiles">
                        All Tiles
                        </Link>
                    </li>

                    <li>
                        <Link href="/my-profile">
                        My Profile
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Auth */}

            <div className="navbar-end">
                {/* Mobile menu */}
                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        ☰
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52">

                        <li><Link href="/">Home</Link></li>

                        <li><Link href="/all-tiles">
                        All Tiles
                        </Link></li>

                        <li><Link href="/my-profile">
                        My Profile
                        </Link></li>
                    </ul>
                </div>

                {user ? (
                    <div className="flex items-center gap-3">
                        <img src={user?.photo || "images/user.jpg"} alt="user" className="w-8 h-8 rounded-full"/>
                        <button onClick={handleLogout} className="btn btn-error">
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link href="/login" className="btn btn-sm text-[14px] bg-linear-to-r from-blue-400 to-blue-800 text-white font-medium rounded shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};