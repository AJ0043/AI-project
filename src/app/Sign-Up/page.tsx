"use client";

import React, { useState } from "react";
import { authClient } from "@/lib/auth-clients";

// Example: Supabase client import
// import { supabase } from "@/lib/supabaseClient"; // agar Supabase use kar rahe ho

const SignUpPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [msgColor, setMsgColor] = useState<string>("");

  const saveUserToDB = async (name: string, email: string) => {
    try {
      // === Supabase/PostgreSQL logic ===
      // Example Supabase:
      // const { data, error } = await supabase.from("users").insert([{ name, email }]);
      // if (error) throw error;

      // Temporary: Console log to simulate DB save
      console.log("Saving to DB:", { name, email });

      return { success: true, message: `✅ User ${name} saved successfully`, color: "green" };
    } catch (err) {
      console.error(err);
      return { success: false, message: `❌ Failed to save user`, color: "red" };
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("❌ Password and Confirm Password do not match");
      setMsgColor("red");
      return;
    }

    try {
      // 1️⃣ Auth signup
      const { error } = await authClient.signUp.email({ email, password, name });
      if (error) {
        setMessage(`❌ Signup Failed: ${error.message}`);
        setMsgColor("red");
        return;
      }

      // 2️⃣ Save to DB directly
      const dbResponse = await saveUserToDB(name, email);
      setMessage(dbResponse.message);
      setMsgColor(dbResponse.color);

    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setMessage(`❌ Signup Exception: ${errorMsg}`);
      setMsgColor("red");
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Form Section */}
      <div className="flex flex-1 items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
          {message && (
            <p className={`mb-4 text-center font-semibold ${msgColor === "red" ? "text-red-600" : "text-green-600"}`}>
              {message}
            </p>
          )}
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

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
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
            <a href="/Sign-In" className="text-green-600 hover:underline">Sign In</a>
          </p>
        </div>
      </div>

      {/* Right: Image Section */}
      <div className="flex-1 bg-black flex flex-col items-center justify-center p-6">
        <img
          src="/chat2.svg"
          alt="Signup Illustration"
          className="max-w-xs w-full rounded-lg shadow-lg mb-10"
        />
        <p className="text-white text-center text-sm md:text-base max-w-xs mb-6">
          Join us today! Sign up to start managing your projects and boost productivity.
        </p>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4 w-full max-w-xs mt-4">
          <button className="flex items-center justify-center gap-2 flex-1 py-2 bg-transparent text-gray-200 border border-green-500 rounded-md shadow hover:bg-gray-200 hover:text-black transition cursor-pointer">
            <img src="/google.webp" alt="Google" className="w-5 h-5" />
            Google
          </button>

          <button className="flex items-center justify-center gap-2 flex-1 py-2 bg-transparent text-white border border-green-500 rounded-md shadow hover:bg-blue-500 hover:text-white transition cursor-pointer">
            <img src="/face.webp" alt="Facebook" className="w-5 h-5" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
