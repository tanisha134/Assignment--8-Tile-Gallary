"use client";

import { authClient } from "@/lib/auth-client";
import Loader from "@/components/shared/Loader";
import Link from "next/link";

export default function MyProfilePage() {
  const { data: session, isPending} = authClient.useSession();
  const user = session?.user;
  if (isPending) {
    return <Loader />;
  }
  if (!user) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-white to-purple-100 px-4 py-8 md:py-14 flex items-center justify-center">
      <div className="w-full sm:w-[85%] md:w-[70%] lg:max-w-md mx-auto bg-white/80 backdrop-blur-xl shadow-lg rounded-4xl p-6 sm:p-8 md:p-10 border border-purple-100 hover:shadow-purple-200 transition duration-500">
        <div className="flex flex-col items-center">
          <img
            src={user?.image || "/images/user.jpg"}
            alt="user"
            className="w-28 h-28 md:h-32 md:w-32 rounded-full object-cover border-[5px] border-purple-200 shadow-xl hover:scale-105 transition duration-300"
          />
          <h2 className="text-2xl md:text-3xl font-bold mt-5 text-gray-800 tracking-wide">
            {user?.name}
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base break-all text-center">
            {user?.email}
          </p>
          <Link href="/my-profile/update-profile">
            <button className="mt-7 btn border-none bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-full px-8 shadow-lg hover:shadow-purple-300 hover:scale-105 active:scale-95 transition duration-300">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
