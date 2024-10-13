"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { navlinks } from "@/lib/constants";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPeople } from "react-icons/go";
import { FaRegQuestionCircle } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu, RxCalendar } from "react-icons/rx";

import LoginModal from "@/components/shared/LoginModal";
import { useSession, signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const session = useSession();
  const router = useRouter();

  const loginModalRef = useRef(null);
  const pathname = usePathname();

  const signOutUser = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/",
    });
    toast.success("Signed out successfully");
    router.refresh();
    router.replace("/");
  };

  return (
    <nav className=" w-full  rounded-full px-3 md:pl-10 2xl:pl-12 2xl:px-5 py-3.5 flex items-center justify-between">
      <Link href={"/"}>
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={130}
          height={130}
          className=" w-36 2xl:w-48  "
        />
      </Link>

      <div className=" hidden md:flex items-center gap-4">
        {/* {navlinks.map((link, index) => (
          <Link
            key={index}
            className={`text-sm 2xl:text-base font-semibold hover:border-b-2 border-primary-50 hover:-translate-y-1 transition-all   pb-1.5 mt-1.5
            ${pathname === link.href ? "border-b-2 px-2 border-primary-50" : ""}
        `}
            href={link.href}
          >
            {link.name}
          </Link>
        ))} */}
        {/* <Link
          className={`text-sm 2xl:text-base font-semibold hover:border-b-2 border-primary-50 hover:-translate-y-1 transition-all   pb-1.5 mt-1.5`}
          href={
            session.status === "authenticated"
              ? "/dashboard/add-property"
              : "/start-hosting"
          }
        >
          Start Hosting
        </Link> */}
        {/* <button className="text-sm 2xl:text-base font-semibold">
          Sign Out
        </button> */}
        {session.status === "authenticated" ? (
          <>
            <button
              onClick={signOutUser}
              className={`border bg-gradient-to-b hover:-translate-y-1 transition-all from-[#FF9900] to-[#FFE7A9] text-black font-bold rounded-full px-3 py-2 inline-flex items-center gap-2

        `}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <LoginModal loginRef={loginModalRef} />
          </>
        )}

        {/* <Image src={"/images/avatar.svg"} width={37} height={37} alt="logo" /> */}
      </div>
      <Sheet>
        <SheetTrigger className=" block md:hidden">
          <RxHamburgerMenu className="w-7 h-7" />
        </SheetTrigger>
        <SheetContent className=" dark:bg-primary p-4 border-none">
          <Image src={"/images/logo.svg"} width={137} height={137} alt="logo" />
          <div className="flex flex-col-reverse items-center -mt-16 justify-center h-full gap-2">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                className={`text-sm 2xl:text-base font-semibold pb-1.5 mt-1.5
            ${pathname === link.href ? "border-b-2 px-2 border-primary-50" : ""}
        `}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}

            {pathname !== "/start-hosting" ? (
              <div className=" mt-5 flex flex-col-reverse items-center gap-4">
                <button
                  className={`text-sm bg-primary-50 w-full text-clip px-6 py-2 rounded-lg 2xl:text-base font-semibold mt-2 mb-5 

        `}
                >
                  Sign Out
                </button>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Image
                      src={"/images/avatar.svg"}
                      width={45}
                      height={45}
                      alt="logo"
                      className="rounded-full"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="mr-8 mt-2  rounded-xl border border-primary-50 ">
                    <Link href={"/account"}>
                      {" "}
                      <DropdownMenuItem className=" inline-flex items-center gap-2 px-2 font-normal hover:bg-primary-50/50 cursor-pointer">
                        <GoPeople className="text-lg text-primary-50" />
                        Accounts
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/dashboard"}>
                      {" "}
                      <DropdownMenuItem className=" inline-flex items-center gap-2 px-2 font-normal hover:bg-primary-50/50 cursor-pointer">
                        <GoPeople className="text-lg text-primary-50" />
                        Dashboard
                      </DropdownMenuItem>
                    </Link>
                    <Link href={"/account"}>
                      <DropdownMenuItem className=" gap-2 hover:text-white px-2 font-normal hover:bg-primary-50/50 cursor-pointer">
                        <FaRegQuestionCircle className="text-lg text-primary-50" />
                        Trip
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className=" gap-2 hover:text-white px-2 font-normal hover:bg-primary-50/50 cursor-pointer">
                      <FaRegQuestionCircle className="text-lg text-primary-50" />
                      Help and FAQ
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem className=" gap-2 hover:text-white px-2 font-normal hover:bg-primary-50/50 cursor-pointer">
                  <FaRegQuestionCircle className="text-lg text-primary-50" />
                  Store
                </DropdownMenuItem> */}
                    <Link href={"/refer-and-earn"}>
                      <DropdownMenuItem className=" gap-2 hover:text-white px-2 font-normal hover:bg-primary-50/50 cursor-pointer">
                        <FaRegQuestionCircle className="text-lg text-primary-50" />
                        Hunt Cash
                      </DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className=" mt-5 gap-4 flex flex-col">
                <LoginModal loginRef={loginModalRef} />
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
