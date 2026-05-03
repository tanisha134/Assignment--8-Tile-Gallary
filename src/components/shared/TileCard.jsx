"use client"

import Link from "next/link";

export default function TileCard({tile}) {
    return(

        <div className="relative card bg-base-100 shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transform transition duration-300 cursor-pointer">

            {/* Image */}
            <figure className="px-4 pt-8 md:pt-8 lg:pt-10">
                <img src={tile.image} 
                alt={tile.title}
                className="w-full aspect-3/2 object-cover rounded-xl"
                />
            </figure>
            <div className="card-body">
                {/* Title */}
                <h2 className="card-title text-lg">
                    {tile.title}
                </h2>

                {/* Category */}
                <p className="text-xs text-green-900 uppercase tracking-wider font-medium">
                    {tile.category}
                </p>

                {/* Price */}
                <div className="flex justify-between items-center mt-2">
                    <p className="font-bold text-lg text-emerald-600">
                        ${tile.price}
                    </p>
                </div>

                {/* Stock badge */}
                <div className="absolute top-1 right-2 lg:top-2 lg:right-3">

                    <p className={`text-xs font-semibold px-3 py-1 rounded-full ${tile.inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"}`}>
                        {tile.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                </div>

                {/* Button */}
                <div className="card-actions justify-end mt-3">
                    <Link href={`/tile/${tile.id}`}>

                    <button className="btn btn-md text-[14px] bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium rounded shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300">
                        View Details
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};