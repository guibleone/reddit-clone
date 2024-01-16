import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { MaxWidthWrapper } from "../wrappers/max-width-wrapper";
import Link from "next/link";
import LoginButton from "../auth/login-button";
import { Plus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-gray-700">
      <MaxWidthWrapper className="flex justify-between py-3 items-center">
        <Link className="font-bold text-2xl hover:cursor-pointer" href={"/"}>
          <h1 >Reddix</h1>
        </Link>
        <div className="flex gap-5 items-center">
          <SignedIn>
            <Link href={"/postar"}>
              <Plus className="w-6 h-6 text-white cursor-pointer" />
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <LoginButton />
          </SignedOut>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}
