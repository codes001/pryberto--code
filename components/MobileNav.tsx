"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  // Initialize the usePathname hook

  const pathname = usePathname();
  return (
    <section className="block  md:hidden w-full max-w-[260px]">
      {/* Hamburger menu */}
      <Sheet>
        <SheetTrigger asChild>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>

        <SheetContent side="right" className="border-none bg-dark-1">
          <div className="flex h-[calc(100vh-70px)] relative flex-col overflow-y-auto justify-between">
            <SheetClose asChild>
              <section className="flex h-full absolute right-0 flex-col gap-5 pt-16 text-white">
                {navbarLinks.map((link, index) => {
                  const isActive = pathname === link.id;
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={link.id}
                        key={index}
                        className={cn(
                          "flex gap-4 rounded items-center justify-end p-4 text-right w-full max-w-60 text-white-1",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <p className="text-md font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
