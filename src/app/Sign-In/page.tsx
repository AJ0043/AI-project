"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-clients";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Login handler
  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    console.log("Login clicked", { email, password });
    try {
      const { error } = await authClient.signIn.email({ email, password });
      if (error) {
        console.error("Login failed:", error);
        window.alert("❌ Wrong credentials: " + error.message);
      } else {
        console.log("Login success");
        window.alert("✅ Logged In Successfully");
      }
    } catch (err: any) {
      console.error("Login exception:", err);
      window.alert("❌ Login Exception: " + (err.message || err));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Form Section */}
      <div className="flex flex-1 items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2
            className="text-3xl mb-6 text-gray-800 font-bold"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Sign In
          </h2>
          <form className="space-y-4" onSubmit={onLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/Sign-Up" className="text-green-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="flex-1 bg-black flex flex-col items-center justify-center p-6">
        <img
          src="/logo.svg"
          alt="Sign In Illustration"
          className="max-w-xs w-full rounded-lg shadow-lg mb-4"
        />
        <p className="text-white text-center text-sm md:text-base max-w-xs mb-6">
          Welcome back! Sign in to access your dashboard and manage your projects efficiently.
        </p>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 w-full max-w-xs mt-4">
          {/* Google Button */}
          <button className="flex items-center justify-center gap-2 flex-1 py-2 bg-white text-gray-800 border-2 border-green-500 rounded-md shadow 
            hover:bg-transparent hover:text-white hover:border-green-500 transition">
            <img src="/google.webp" alt="Google" className="w-5 h-5" />
            Google
          </button>

          {/* Facebook Button */}
          <button className="flex items-center justify-center gap-2 flex-1 py-2 bg-sky-500 text-white border-2 border-green-500 rounded-md shadow
            hover:bg-transparent hover:text-black hover:border-green-500 transition">
            <img src="/face.webp" alt="Facebook" className="w-5 h-5" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
