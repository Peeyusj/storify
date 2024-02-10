import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      Only Authenticated people can visit thiss
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
