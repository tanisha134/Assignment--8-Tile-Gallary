"use client";

import { createAuthClient } from "better-auth/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;

    const res = await createAuthClient.signIn.email({
      email: form.email.value,
      password: form.password.value,
    });

    if (res.error) {
      setError(res.error.message);
    } else {
      router.push("/");
    }
  };

  const googleLogin = async () => {
    await createAuthClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-indigo-200">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl w-96 space-y-4 shadow-xl">

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input name="email" placeholder="Email" className="input input-bordered w-full" />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" />

        {error && <p className="text-red-500">{error}</p>}

        <button className="btn w-full bg-purple-500 text-white rounded-full">
          Login
        </button>

        <button type="button" onClick={googleLogin} className="btn w-full">
          Google Login
        </button>

        <p className="text-sm text-center">
          No account? <a href="/register" className="text-blue-500">Register</a>
        </p>

      </form>
    </div>
  );
}