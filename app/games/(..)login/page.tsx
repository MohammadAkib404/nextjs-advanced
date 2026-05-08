"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function InterceptedLogin() {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center w-full bg-white">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative">
        <button onClick={() => router.push("/games")} className="absolute text-3xl right-10 font-bold text-white">
          <X />
        </button>
        <h3 className="text-3xl font-bold text-white text-center mb-8">Login</h3>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-black border border-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black border border-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-black border border-zinc-700 text-white rounded-lg px-4 py-3 outline-none focus:border-white transition"
            />
          </div>

          <button type="submit" className="mt-2 bg-white text-black font-semibold py-3 rounded-lg hover:opacity-90 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
