import React from "react";
import { UserButton } from "@clerk/nextjs";
import InvoiceForm from "@/components/InvoiceForm";

const page = () => {
  return (
    <div>
      Only Authenticated people can visit thiss
      <UserButton afterSignOutUrl="/" />
      <InvoiceForm/>
    </div>
  );
};

export default page;
