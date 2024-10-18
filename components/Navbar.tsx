"use client";
import Image from "next/image";

import Link from "next/link";
import MobileNav from "./MobileNav";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  // Initialize the usePathname hook
  const pathname = usePathname();

  return (
    <>
      {/* Nav styles */}
      <nav className="flex bg-blue-primary justify-between items-center fixed h-[80px] mb-[70px] z-40 w-full  !text-white px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
            />
          </svg>{" "}
          &nbsp;
          <span className="font-bold">PRYBERTO CODE</span>
        </Link>

        {/* Navbar Links */}
        <ul className="hidden gap-1 text-white md:flex">
          {/* Loop through the Links array from the Constant file */}
          {navbarLinks.map((link, index) => {
            const isActive = pathname === link.id;
            return (
              <li className="flex cursor-pointer" key={index}>
                <a
                  href={link.id}
                  className={cn(
                    "flex rounded items-center px-6 py-2  w-max text-white",
                    {
                      "bg-[#000] text-white-1": isActive,
                    }
                  )}
                >
                  <p className="text-md font-semibold">{link.label}</p>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex md:hidden justify-between gap-5">
          {/* Embed Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
