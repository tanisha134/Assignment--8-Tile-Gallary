"use client";

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/auth/home")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <img src={user.image} className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}