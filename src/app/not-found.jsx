import React from "react";

const NotFound = () => {
    return(
        <div className="h-[80vh] flex justify-center items-center gap-4 flex-col">
            <h1 className="font-bold text-5xl text-green-900">404</h1>
            <h2 className="font-bold text-5xl text-purple-400">
                This page is not found
            </h2>
        </div>
    )
}

export default NotFound;