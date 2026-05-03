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
            <form onSubmit = {handleSubmit} className="mb-6 flex justify-end">
                <div className="w-full md:w-80">

                    <input type="text"
                    placeholder="Search tiles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input w-full pr-10"
                    />
                </div>
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