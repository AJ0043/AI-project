import React from "react";

const SignInPage = () => {
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
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
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
  <p className="text-white text-center text-sm md:text-base max-w-xs truncate">
  Welcome back! Sign in to access your dashboard and manage your projects efficiently.
</p>

</div>

    </div>
  );
};

export default SignInPage;
