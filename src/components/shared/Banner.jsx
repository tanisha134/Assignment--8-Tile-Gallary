"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
export default function Banner() {
    const router = useRouter();
    const images = [
        "/images/kitchen-tiles.png",
        "/images/bathroom-tiles.jpg",
        "/images/living-room-tiles.jpg",
        "/images/marble-stair-tiles.jpg",
        "/images/kitchen-tiles-2.jpg",
        "/images/marble-tiles.png",
        "/images/tiles.jpg",
        "/images/tiles-2.png",
        "/images/tiles-1inimage.png",
    ];
    return(
        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[75vh]">
            <Swiper 
            modules={[Autoplay, Pagination]}
            autoplay = {{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            pagination={{clickable:true}}
            className="h-full"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i} className="h-full">
                        <div className="relative h-full w-full object-cover bg-cover bg-center flex items-center justify-center px-4" style={{
                                backgroundImage: `url(${img})`,
                            }}
                        >
                            {/* Overly */}
                            <div className="absolute inset-0 bg-black/60"></div>
                            {/* Content */}
                            <div className="relative text-center text-white max-w-2xl">
                                <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4">
                                    Discover Your Perfect Aesthetic
                                </h1>
                                <p className="text-sm mb-6 md:text-lg sm:text-base">
                                Explore premium tiles that transform your space beautifully.
                                </p>
                                <button onClick={() => router.push("/all-tiles")} className="btn bg-linear-to-r from-blue-400 to-blue-800 px-6 py-3 text-white text-lg font-semibold rounded-md border-none shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition duration-300">
                                    Browse Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};