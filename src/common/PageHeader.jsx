import Heading from "./Heading";
import Link from "next/link";
import React from "react";
import { Plus } from "lucide-react";
const PageHeader = ({ heading, linkTitle }) => {
  return (
    <div className="flex justify-between py-8">
      <Heading title={heading} />
      <span
        className="space-x-10 text-white bg-emerald-600 hover:bg-emerald-600/90 focus:ring-4 focus:outline-none focus:ring-emerald-600/50 font-medium rounded-lg text-md px-5 py-3 text-center inline-flex items-center dark:focus:ring-emerald-600/55 me-2"
      >
        <Plus />
        <span>{linkTitle}</span>
      </span>
    </div>
  );
};

export default PageHeader;