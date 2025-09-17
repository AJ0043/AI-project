"use client";

import { useState } from "react";
import "./page.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-clients";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const { data: session } = authClient.useSession();

  // ✅ Signup
  const onSubmit = async () => {
    console.log("Signup clicked", { name, email, password });
    try {
      await authClient.signUp.email(
        { email, password, name },
        {
          onError: (err: any) => {
            console.error("Signup error:", err);
            window.alert("❌ Signup Failed");
          },
          onSuccess: () => {
            console.log("Signup success");
            window.alert("✅ User Created Successfully");
          },
        }
      );
    } catch (err) {
      console.error("Signup exception:", err);
    }
  };

  // ✅ Login
  const onLogin = async () => {
    console.log("Login clicked", { email, password });
    try {
      await authClient.signIn.email(
        { email, password },
        {
          onError: (err: any) => {
            console.error("Login error:", err);
            window.alert("❌ Wrong credentials");
          },
          onSuccess: () => {
            console.log("Login success");
            window.alert("✅ Logged In Successfully");
          },
        }
      );
    } catch (err) {
      console.error("Login exception:", err);
    }
  };

  // ✅ Already logged in
  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged In as {session.user.name}</p>
        <Button
          onClick={async () => {
            console.log("Signout clicked");
            await authClient.signOut();
          }}
        >
          Sign out
        </Button>
      </div>
    );
  }

  return (
    <div className="form-container">
      {/* Toggle buttons */}
      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => setMode("signup")}
          className={`px-4 py-2 rounded ${
            mode === "signup" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setMode("login")}
          className={`px-4 py-2 rounded ${
            mode === "login" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Login
        </button>
      </div>

      {/* Signup Form */}
      {mode === "signup" && (
        <>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />
          <Button className="mt-2 w-full" onClick={onSubmit}>
            Sign Up
          </Button>
        </>
      )}

      {/* Login Form */}
      {mode === "login" && (
        <>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2"
          />
          <Button className="mt-2 w-full" onClick={onLogin}>
            Login
          </Button>
        </>
      )}
    </div>
  );
}
