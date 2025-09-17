import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Form Section */}
      <div className="flex flex-1 items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Sign Up
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
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
        <p className="text-white text-center text-sm md:text-base max-w-xs mb-6 truncate">
          Join us today! Sign up to start managing your projects and boost productivity.
        </p>

       {/* Social Login Buttons */}
<div className="flex justify-center gap-4 w-full max-w-xs mt-4">
  {/* Google Button */}
  <button className="flex items-center justify-center gap-2 flex-1 py-2 bg-transparant text-white border-1 border-green-500 rounded-md shadow 
    hover:bg-white hover:text-black hover:border-green-500 transition">
    <img src="/google.webp" alt="Google" className="w-5 h-5" />
    Google
  </button>

  {/* Facebook Button */}
  <button className="flex items-center justify-center gap-2 flex-1 py-2 bg-transparant text-white border-1 border-green-500 rounded-md shadow
    hover:bg-blue-500 hover:text-black-500 hover:border-green-500 transition">
    <img src="/face.webp" alt="Facebook" className="w-5 h-5" />
    Facebook
  </button>
</div>


      </div>
    </div>
  );
};

export default SignUpPage;
