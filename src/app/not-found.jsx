"use client"

import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    return(
        <div className="h-[80vh] flex justify-center items-center gap-4 flex-col text-center px-4">

            <h1 className="font-bold text-5xl text-green-900">404</h1>

            <h2 className="font-bold text-3xl md:text-5xl text-purple-400">This page is not found</h2>

            <button onClick={() => router.push("/")} className="btn bg-linear-to-r from-purple-500 to-indigo-500 text-white underline px-6 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300 rounded-full">
                Go Home
            </button>
        </div>
    )
}