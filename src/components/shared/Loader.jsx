"use client";

import { useState, useEffect } from "react";
export default function Loader() {
    const [show, setShow] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setShow(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if(!show) return null;

    return(
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-100">
            <div className="flex flex-col items-center gap-5">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 animate-spin  rounded-full"></div>

                    <div className="absolute inset-0 w-20 h-20 border-4 border-t-purple-600 border-r-purple-600
                    border-b-transparent border-l-transparent rounded-full animate-spin "></div>
                    {/* Text */}
                    <div className="text-center">
                        <h2 className="text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
                            TileGallery
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                          Loading your experience...  
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};