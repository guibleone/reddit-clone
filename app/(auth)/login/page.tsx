import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn
      signUpUrl="/register"
      />
    </div>
  );
}
