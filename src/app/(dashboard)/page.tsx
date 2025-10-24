"use client";

import { useState } from "react";
import "./page.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-clients";
import { Sidebar } from "@/components/ui/sidebar";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const { data: session } = authClient.useSession();

  const onSubmit = async () => {
    try {
      await authClient.signUp.email({ email, password, name }, {
        onError: (err) => window.alert("❌ Signup Failed"),
        onSuccess: () => window.alert("✅ User Created Successfully"),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onLogin = async () => {
    try {
      await authClient.signIn.email({ email, password }, {
        onError: () => window.alert("❌ Wrong credentials"),
        onSuccess: () => window.alert("✅ Logged In Successfully"),
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (session) {
    return (
      <div className="flex h-screen">
        <div className="w-64">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col p-4 gap-y-4 justify-center items-center">
          <p>Logged In as {session.user.name}</p>
          <Button onClick={async () => await authClient.signOut()}>
            Sign out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="form-container w-96">
          {/* Toggle buttons */}
          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => setMode("signup")}
              className={`px-4 py-2 rounded ${mode === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode("login")}
              className={`px-4 py-2 rounded ${mode === "login" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              Login
            </button>
          </div>

          {/* Signup/Login Form */}
          {mode === "signup" && (
            <>
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="mb-2" />
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2" />
              <Button className="mt-2 w-full" onClick={onSubmit}>Sign Up</Button>
            </>
          )}

          {mode === "login" && (
            <>
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2" />
              <Button className="mt-2 w-full" onClick={onLogin}>Login</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
