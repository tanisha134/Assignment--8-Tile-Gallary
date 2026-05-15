"use client";

import Banner from "@/components/shared/Banner";
import Link from "next/link";
import tiles from "@/data/tiles.json";


export default function Home() {
  const featuredTiles = tiles.slice(0, 4);
  return (
    <div className="bg-linear-to-b from-gray-50 to-gray-100">
      {/* hero */}
      <Banner />

      {/* Marquee */}
      <div className="bg-black text-white py-2 mt-6 overflow-hidden">
        <div className="marquee text-sm font-medium">
          New Arrivals: Ceramic Blue Tile | Weekly Feature: Modern Geometric
          Patterns | Join the Community | Explore Premium Tile Designs
        </div>
      </div>
      {/* Featured section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-3">Featured Tiles</h2>
        <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-10">
          Discover our handpicked premium tiles that combine elegance,
          durability and modern design for your perfect space.
        </p>
        {/* Featured Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredTiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-white/80 backdrop-blur-2xl rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-4 flex flex-col min-h-63">
                {/* image */}
                <div className="p-2"> 
                  <img 
                  src={tile.image}
                  alt={tile.title}
                  className="w-full aspect-4/3 object-cover rounded-xl"
                  />
                </div>
                {/* content */}
                <h3 className="font-semibold text-lg mt-3">
                  {tile.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {tile.category} • {tile.material}
                </p>

                <p className="text-emerald-600 font-bold mt-2 text-lg">
                  ${tile.price}
                </p>

                {/* Button */}
                <Link href={`tile/${tile.id}`} className="mt-auto">
                  <button className="mt-4 w-full btn btn-sm bg-linear-to-r from-purple-500 to-indigo-500 text-white rounded-full transition hover:scale-105 active:scale-95 duration-300">
                    View Details
                  </button>
                </Link>
              </div>
          ))}         
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/all-tiles">
            <button className="btn bg-linear-to-r from-purple-500 to-indigo-500 text-white px-6 shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition duration-300 rounded-full">
              Browse All Tiles
            </button>
          </Link>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
};
