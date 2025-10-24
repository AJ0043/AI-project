"use client";

import { authClient } from "@/lib/auth-clients";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      window.alert("👋 You’ve been signed out successfully.");
    } catch (err) {
      console.error(err);
      window.alert("❌ Failed to log out. Please try again.");
    }
  };

  if (session) {
    return (
      <div className="p-6 flex flex-col gap-y-4 max-w-sm mx-auto items-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome back, {session.user.email}!
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          You’re already signed in. Click below to log out of your account.
        </p>
        <Button
          onClick={handleLogout}
          className="bg-black text-white hover:bg-red-600 px-6 py-2"
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 flex flex-col gap-y-4 max-w-sm mx-auto items-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        You are not signed in
      </h2>
      <p className="text-gray-600 text-center">
        Please go to the Sign In page to access your account.
      </p>
    </div>
  );
}
