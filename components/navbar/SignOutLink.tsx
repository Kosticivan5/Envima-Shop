"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const SignOutLink = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Signing Out",
      description: "Logout Successful",
    });
  };

  return (
    <SignOutButton>
      <Link
        href={"/"}
        className="w-full text-left text-sm font-medium"
        onClick={handleLogout}
      >
        Logout{" "}
      </Link>
    </SignOutButton>
  );
};
export default SignOutLink;
