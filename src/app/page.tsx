"use client";

import { useState } from "react";
import "./page.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";   // 👈 correct import
import { authClient } from "@/lib/auth-clients";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        name,
        password,
      },
      {
        onError: () => {
          window.alert("Something Went Wrong");
        },
        onSuccess: () => {
          window.alert("User Created Successfully");
        },
      }
    );
  };

  return (
    <div className="form-container">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button className="mt-4 w-full" onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
}
