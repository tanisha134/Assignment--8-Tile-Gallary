import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return(
        <footer className="bg-neutral text-neutral-content">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand */}

                <div>
                    <h2 className="text-3xl font-bold text-white">
                        TileGallery
                    </h2>
                    <p className="mt-3 text-[15px] text-gray-200 leading-relaxed">
                        Discover premium tiles to elevate your living <br /> space with modern design and elegance.
                    </p>
                </div>
                {/* Links */}
                <div>

                    <h3 className="text-lg font-semibold mb-4 text-white">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-sm font-medium">
                        <li>
                           <Link href="/" className="hover:text-primary transition hover:underline">
                           Home
                           </Link> 
                        </li>

                        <li>
                           <Link href="/all-tiles" className="hover:text-primary transition hover:underline">
                           All Tiles
                           </Link> 
                        </li>

                        <li>
                           <Link href="/my-profile" className="hover:text-primary transition hover:underline">
                           My Profile
                           </Link> 
                        </li>
                    </ul>
                </div>

                {/* Contact Static */}

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">
                        Contact
                    </h3>

                    <p className="text-sm mb-4 hover:underline text-white">
                        Email: support@tilegallery.com
                    </p>
                    {/* Social icons */}
                    <div className="flex gap-5 text-xl">
                        <FaFacebook className="hover:text-primary cursor-pointer transition duration-300 hover:scale-110"></FaFacebook>

                        <FaGithub  className="hover:text-primary cursor-pointer transition duration-300 hover:scale-110"></FaGithub>

                        <FaInstagram  className="hover:text-primary cursor-pointer transition duration-300 hover:scale-110"></FaInstagram>
                    </div>
                </div>
            </div>
            {/* Hr line */}
            <hr className="border-gray-600 w-[85%] mx-auto"/>
            {/* Bottom bar */}
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-200">
                <p>
                    &copy; 2026 TileGallery. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <p className="hover:text-primary cursor-pointer transition">
                        Privacy Policy
                    </p>

                    <p className="hover:text-primary cursor-pointer transition">
                        Terms of Service
                    </p>

                    <p className="hover:text-primary cursor-pointer transition">
                        Cookies
                    </p>
                </div>
            </div>
        </footer>
    );
};