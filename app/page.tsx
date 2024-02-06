"use client"

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
      <div className="">
       Hello world
       only Authenticated user can see this
      <UserButton afterSignOutUrl="/" />
      </div>
  );
}
