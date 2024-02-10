"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      Any one can see this page
      <Button>
        <Link href="/sign-in">SIGN in</Link>
      </Button>
    </div>
  );
}
