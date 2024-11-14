"use client";

import { adminLinks } from "@/utils/links";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AdminSidebar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <aside className="flex flex-col gap-3  py-4">
      {adminLinks.map((link) => {
        const isActive = pathName === link.href;
        const background = isActive ? "bg-main text-white" : "";

        return (
          <Button
            key={link.label}
            asChild
            variant={"ghost"}
            size={"lg"}
            className={`capitalize ${background}  hover:bg-main  rounded-sm font-normal hover:text-white`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
};
export default AdminSidebar;
