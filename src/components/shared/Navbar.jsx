"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { createAuthClient } from "better-auth/client";

export default function Navbar() {
    const [user, setUser] = useState(null);

      useEffect(() => {
    fetch("/api/auth/session")
      .then((res) => res.json())
      .then((data) => setUser(data?.user || null))
      .catch(() => setUser(null));
  }, []);

    const handleLogout = async () => {
        await createAuthClient.signOut();
        setUser(null);
    };

    return(
        <div className="navbar bg-base-100 shadow-md px-4 md:px-8">

            <div className="navbar-start">
                <Link href="/" className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                TileGallery
                </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/all-tiles">All Tiles</Link></li>
                    <li><Link href="/my-profile">My Profile</Link></li>
                </ul>
            </div>

            <div className="navbar-end">

                {user ? (
                    <div className="flex items-center gap-3">
                        <img
                          src={user?.user?.image || "/images/user.jpg"}
                          className="w-8 h-8 rounded-full"
                        />
                        <button onClick={handleLogout} className="btn btn-error">
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link href="/login" className="btn bg-blue-500 text-white rounded-full">
                        Login
                    </Link>
                )}

            </div>

        </div>
    );
}