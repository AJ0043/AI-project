"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-clients";
import { Button } from "@/components/ui/button";

export default function LogoutPage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  // Optional: redirect to sign-in if no session exists
  useEffect(() => {
    if (!session) {
      router.push("/Sign-In");
    }
  }, [session, router]);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      window.alert("👋 You’ve been signed out successfully.");
      router.push("/Sign-In");
    } catch (error) {
      console.error("Logout failed:", error);
      window.alert("❌ Failed to log out. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold mb-2 text-gray-800">
          Welcome {session?.user?.email || ""}
        </h1>
        <p className="text-gray-600 mb-6">
          You are now logged in. Click below to sign out.
        </p>
        <Button onClick={handleLogout} className="w-full bg-black text-white hover:bg-red-600">
          Sign Out
        </Button>
      </div>
    </div>
  );
}
