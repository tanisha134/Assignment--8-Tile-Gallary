"use client";

import { useParams } from "next/navigation";
import tiles from "@/data/tiles.json";
import Link from "next/link";

export default function TileCard() {
    const { id } = useParams();
    const tile = tiles.find((t) => t.id === id);

    if(!tile) {
        return(
            <div className="text-center py-20 bg-gray-100 min-h-screen flex flex-col justify-center items-center">

                <h2 className="text-5xl font-bold">
                    Tile Not Found
                </h2>

                <Link href="/all-tiles" className="mt-6">
                <button className="btn bg-blue-200 text-blue-800 underline px-6 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300 rounded-full">
                    Go Back
                </button>
                </Link>
            </div>
        );
    }

    return(
        <div className="bg-linear-to-r from-gray-100 to-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10">

                    <h1 className="text-5xl font-bold mb-4">
                        Tiles Details Page
                    </h1>

                    <p className="text-gray-500 font-normal max-w-2xl mx-auto">
                        Explore premium tile details including material, dimensions, pricing and availability.Choose the perfect design for your space.
                    </p>
                </div>
                {/* Main card */}
                <div className="bg-white backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Left Image */}
                        <div className="relative group">
                            <img src={tile.image} 
                            alt={tile.title}  
                            className="w-full aspect-3/2 object-cover rounded-2xl shadow-md group-hover:scale-105 transition duration-500"/>
                        </div>
                        {/* Right content */}

                        <div className="space-y-5">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">{tile.title}</h1>

                                    <span className={`text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap ${tile.inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                        {tile.inStock ? "In Stock" : "Out of stock"}
                                    </span>
                                </div>
                            </div>

                            <p className="text-md font-bold text-gray-500">
                                Designed By: {" "}
                                <span className="underline italic text-blue-800">
                                    {tile.creator}
                                </span>
                            </p>

                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-gray-500 font-medium">
                                    Category:
                                </span>
                                <span className="text-gray-800 font-bold uppercase">
                                    {tile.category}
                                </span>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {tile.tags?.map((tag, index) => (
                                    <span key={index} className="badge font-semibold text-purple-700 bg-purple-100 rounded-full">
                                        {tag}</span>
                                ))}
                            </div>

                            <p className="text-gray-500 text-[20px] font-bold italic">
                                "{tile.description}"
                            </p>

                            {/* Info box */}
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <p className="text-gray-500 font-medium">Dimensions</p>
                                    <p className="font-semibold mt-1">{tile.dimensions}</p>
                                </div>

                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <p className="text-gray-500 font-medium">Material</p>
                                    <p className="font-semibold mt-1">{tile.material}</p>
                                </div>
                            </div>

                            {/* Price */}
                            <p className="text-3xl font-bold text-emerald-600"> ${tile.price}</p>

                            {/* Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Link href="/all-tiles">
                                <button className="btn bg-linear-to-r from-purple-500 to-indigo-500 text-white px-6 shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300 rounded-full">
                                    Back to All Tiles
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}