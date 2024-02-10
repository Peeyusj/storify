import React from "react";
import { UserButton } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      Only Authenticated people can visit this
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
