import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignUp
      signInUrl="/login"
      />
    </div>
  );
}
