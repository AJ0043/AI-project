"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-clients";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup handler
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    try {
      const { error } = await authClient.signUp.email({ email, password, name });
      if (error) {
        console.error("Signup failed:", error);
        window.alert("❌ Signup Failed: " + error.message);
      } else {
        console.log("Signup success");
        window.alert("✅ User Created Successfully");
      }
    } catch (err: any) {
      console.error("Signup exception:", err);
      window.alert("❌ Signup Exception: " + (err.message || err));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Form Section */}
      <div className="flex flex-1 items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Sign Up
          </h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
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
              Create Account
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/Sign-In" className="text-green-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="flex-1 bg-black flex flex-col items-center justify-center p-6">
        <img
          src="/logo.svg"
          alt="Signup Illustration"
          className="max-w-xs w-full rounded-lg shadow-lg mb-4"
        />
        <p className="text-white text-center text-sm md:text-base max-w-xs mb-6">
          Join us today! Sign up to start managing your projects and boost productivity.
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

export default SignUpPage;
