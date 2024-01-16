import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";


export default function LoginButton() {
  return (
    <Button asChild variant={"secondary"}>
      <Link
      href={"/login"}
      >

          Entrar

      </Link>
    </Button>
  );
}
