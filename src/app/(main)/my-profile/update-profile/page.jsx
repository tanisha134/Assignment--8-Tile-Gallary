"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdate = async (data) => {
    const { error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Profile updated successfully!");
    router.refresh();
    router.push("/my-profile");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-linear-to-r from-pink-50 via-white to-purple-100 flex justify-center items-center px-4 py-8 sm:py-10">
      <div className="w-full sm:w-[90%] md:w-[75%] lg:max-w-md bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-white/30 transition duration-300">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Update Your Profile
        </h2>
        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-5">
          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input input-bordered w-full rounded focus:ring-2 focus:ring-purple-300 focus:outline-none transition duration-300"
              placeholder="Enter your new username"
              {...register("name", {
                required: "Name filed is required",
              })}
            />
            {errors.name && (
              <p className="text-red-700 text-sm">{errors.name.message}</p>
            )}
          </fieldset>
          {/* Image */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Image URL</legend>
            <input
              type="text"
              className="input input-bordered w-full rounded focus:ring-2 focus:ring-purple-300 focus:outline-none transition duration-300"
              placeholder="Enter your image url"
              {...register("image", {
                required: "Image URL filed is required",
              })}
            />
            {errors.image && (
              <p className="text-red-700 text-sm">{errors.image.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 border-none text-white rounded-full hover:scale-105 active:scale-95 transition duration-300">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
