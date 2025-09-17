"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-clients";

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authClient.signOut(); // 👈 signout call
      window.alert("🚪 Logged Out Successfully");
      router.push("/Sign-In"); // 👈 wapas sign-in page
    } catch (err: any) {
      console.error(err);
      window.alert("❌ Logout failed: " + (err.message || err));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
      <img
        src="/chat2.svg"
        alt="Logout Illustration"
        className="w-100 h-auto mb-6"
      />
      <p className="text-3xl font-100 mb-4 text-center">
         You have successfully logged in!  
        <br /> Manage your account and projects with ease.
      </p>
      <button
        onClick={handleLogout}
        className="w-40 bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
