"use client";

import { useState } from "react";
import tiles from "@/data/tiles.json";
import TileCard from "@/components/shared/TileCard";

export default function AllTiles() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    const filteredTiles = tiles.filter((tile) =>
        tile.title.toLowerCase().includes(query.toLowerCase())
);

return(
    <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
            <form onSubmit={handleSubmit} className="input flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md w-full sm:w-fit ml-auto mb-6">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                </g>
                </svg>
                <input type="search"  placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            </form>

            <div className="flex flex-col justify-center items-center text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    All Tiles
                </h1>

                <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                    Browse through our premium collection of tiles designed to enhance every corner of your space.Find the perfect match with style, durability, and elegance tailored for modern living.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTiles.map((tile) => (
                    <TileCard key={tile.id} tile={tile} />
                ))}
            </div>

            {filteredTiles.length === 0 && (
                <div className="text-center mt-10">
                    <p className="text-3xl font-bold text-gray-600">
                        No Tiles Found
                    </p>

                    <p className="text-lg font-semibold text-gray-400">
                        Try searching something else 
                    </p>

                </div>
            )
        }
        </div>
    </div>

);
};