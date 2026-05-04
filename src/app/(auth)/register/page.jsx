"use client";

import { createAuthClient } from "better-auth/client";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const res = await createAuthClient.signUp.email({
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      image: form.photo.value,
    });

    if (!res.error) {
      router.push("/login");
    }
  };

  const googleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-100">
      <form onSubmit={handleRegister} className="bg-white p-8 w-96 rounded-xl space-y-4">

        <h2 className="text-2xl font-bold">Register</h2>

        <input name="name" placeholder="Name" className="input input-bordered w-full" />
        <input name="email" placeholder="Email" className="input input-bordered w-full" />
        <input name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />

        <button className="btn w-full bg-indigo-500 text-white rounded-full">
          Register
        </button>

        <button type="button" onClick={googleLogin} className="btn w-full">
          Google Login
        </button>

      </form>
    </div>
  );
}