import PostForm from "@/components/postar/post-form";
import { MaxWidthWrapper } from "@/components/wrappers/max-width-wrapper";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

export default async function PostarPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div>
      <MaxWidthWrapper className="py-10">
        <div className="flex justify-between border-b border-gray-500 pb-5">
          <h1 className="font-medium text-lg">Postar</h1>
          <p>Rascunhos</p>
        </div>
        <div className="mt-10 bg-[#1A1A1B] px-2 py-4">
          <PostForm />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
