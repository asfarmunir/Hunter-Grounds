"use client";
import React from "react";
import Image from "next/image";
import { navlinks } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline, IoSettingsOutline } from "react-icons/io5";
import { HiMoon } from "react-icons/hi2";
import { RiSearchLine } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleTheme from "./ToggleTheme";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdSearch } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";

const dropdownItems = [
  {
    name: "Orders",
    href: "/orders",
  },
  {
    name: "affiliates",
    href: "/affiliates",
  },
  {
    name: "Customers",
    href: "/customers",
  },
  {
    name: "certificates",
    href: "/certificates",
  },
  {
    name: "contracts",
    href: "/contracts",
  },
  {
    name: "Verifications",
    href: "/verifications",
  },
  {
    name: "bet management",
    href: "/bet-management",
  },
  {
    name: "odds management",
    href: "/odds-management",
  },
  {
    name: "user-management",
    href: "/user-management",
  },
  {
    name: "support management",
    href: "/support-management",
  },
  {
    name: "data analytics",
    href: "/data-analytics",
  },
  {
    name: "system management",
    href: "/system-management",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className=" w-full bg-primary  rounded-full px-3 pl-10 2xl:pl-12 2xl:px-5 py-3.5 flex items-center justify-between">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={130}
        height={130}
        className=" w-36 2xl:w-48  "
      />
      {/* <div className="hidden lg:flex items-center ">
        {navlinks.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={`  capitalize py-3.5 rounded-full text-[0.65rem] lg:text-xs 2xl:text-sm
                 tracking-wide
            ${
              pathname === link.href
                ? " bg-[#70E000] dark:bg-[#70E00086] px-3.5 font-semibold"
                : " text-slate-300 px-1.5 2xl:px-2 font-thin "
            }  `}
          >
            {link.name}
          </Link>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className=" text-slate-300    justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm  px-3.5 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
            More
            <IoChevronDownOutline className="w-3 h-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" border-none bg-[#081C15] dark:bg-[#0E293B]   mt-3.5 mr-20  p-1.5 rounded-xl shadow-sm">
            {dropdownItems.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link
                  href={item.href}
                  className={`capitalize  rounded-full  px-5 pr-20 w-full  text-[0.65rem] lg:text-xs 2xl:text-sm
                 tracking-wide 
                 ${
                   pathname === item.href
                     ? " bg-[#70E000] dark:bg-[#70E00086] py-2 2xl:py-3  font-semibold"
                     : " text-slate-300 font-thin py-1 2xl:py-2"
                 } `}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>{" "}
      </div> */}
      <div className=" bg-[#2A2A2A] px-4 py-2 flex items-center gap-2 rounded-lg">
        <button className="inline-flex items-center gap-2 text-xs 2xl:text-sm border-r pr-2.5 border-gray-500">
          <Image
            src={"/images/calendar.svg"}
            width={18}
            height={18}
            alt="logo"
          />
          Add Dates +
        </button>
        <button className="inline-flex items-center gap-2 text-xs 2xl:text-sm border-r px-2.5 border-gray-500">
          <Image src={"/images/guest.svg"} width={18} height={18} alt="logo" />
          Add Guests +
        </button>
        <button className="inline-flex items-center gap-2 text-xs 2xl:text-sm border-r px-2.5 border-gray-500">
          <Image src={"/images/map.svg"} width={18} height={18} alt="logo" />
          Map Area
        </button>

        <IoMdSearch className=" bg-gradient-to-b from-[#FF9900] to-[#10111080] px-1 ml-3 rounded-md w-6 2xl:w-7 h-6 2xl:h-7" />
      </div>
      <div className="flex items-center gap-4">
        {navlinks.map((link, index) => (
          <Link
            key={index}
            className="text-sm 2xl:text-base font-semibold"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
        <button className="text-sm 2xl:text-base font-semibold">
          Sign Out
        </button>
        <Image src={"/images/avatar.svg"} width={37} height={37} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
