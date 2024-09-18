"use client";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoChevronDownOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
const tabs = [
  {
    name: "all",
    tab: "all",
  },
  {
    name: "completed",
    tab: "completed",
  },
  {
    name: "pending",
    tab: "pending",
  },
  {
    name: "failed",
    tab: "failed",
  },
];
const PayoutByPeriod = () => {
  const [tab, setTab] = React.useState("all");

  return (
    <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
      <div className=" w-full p-2.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-4">
          <h3 className="font-semibold pl-4 border-r border-primary-50 pr-3">
            Orders
          </h3>
          <div className="flex  justify-center md:justify-start     items-center gap-1.5">
            {tabs.map((t, index) => (
              <button
                key={index}
                className={` capitalize text-xs text-nowrap font-semibold p-2.5 2xl:p-3 px-5 
                tracking-wide 2xl:px-7 text-center rounded-full ${
                  tab === t.tab
                    ? "bg-[#FF990033] text-primary-50"
                    : " bg-[#372F2F99]  text-white"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center flex-wrap md:flex-nowrap gap-1.5">
          <div className=" bg-primary-200 border border-primary-50 inline-flex  w-full md:w-fit items-center px-4 rounded-full">
            <LuSearch className="w-4 h-4 text-[#848BAC] " />
            <Input
              className=" 
                text-[#848BAC]
                border-none
                bg-transparent
                focus:outline-none
                w-full
                md:w-fit
                focus:ring-0
                text-xs
                focus:border-none
                placeholder-slate-900 
                "
              placeholder={"search..."}
            />
          </div>
          <button className="bg-primary-200 border border-primary-50 p-3 inline-flex items-center font-semibold gap-1 capitalize rounded-full text-xs ">
            export
            <Image
              src="/export.svg"
              width={14}
              height={14}
              alt="export"
              className=" dark:invert"
            />
          </button>
          <button className="bg-primary-200 border border-primary-50 p-3 capitalize rounded-full text-xs font-semibold ">
            toggle colomn
          </button>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214] ">
        <Table className=" ">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-[#372F2F99]/50  rounded-tl-full rounded-bl-full ">
                order ID
              </TableHead>
              <TableHead className="text-sm bg-[#372F2F99]/50  capitalize">
                Variation ID
              </TableHead>
              <TableHead className="text-sm bg-[#372F2F99]/50  capitalize">
                Program
              </TableHead>
              <TableHead className="text-sm bg-[#372F2F99]/50  capitalize">
                status
              </TableHead>
              <TableHead className="text-sm bg-[#372F2F99]/50  capitalize">
                accounts
              </TableHead>
              <TableHead className="text-sm bg-[#372F2F99]/50  capitalize">
                Purchase Price
              </TableHead>
              <TableHead className="text-sm bg-[#372F2F99]/50  capitalize">
                date
              </TableHead>

              <TableHead className="text-sm bg-[#372F2F99]/50 rounded-tr-full rounded-br-full  capitalize">
                Product ID
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs  text-white rounded-tl-full rounded-bl-full  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>

                <TableCell className=" text-xs  text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>
                <TableCell className=" text-xs  text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>

                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-white  bg-[#372F2F99]   2xl:text-sm font-semibold">
                  1
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between rounded-full py-4 bg-primary-100  px-6">
        <p className="  text-xs font-semibold 2xl:text-sm">1-10 of 195 tour</p>
        <div className="flex items-center gap-3 pr-1">
          <BsArrowLeftCircle className="w-4 h-4 2xl:w-6 2xl:h-6 text-primary-50" />
          <p className=" font-semibold text-sm 2xl:text-base">1</p>
          <p className=" text-sm 2xl:text-base">2</p>
          <p className=" text-sm 2xl:text-base">...</p>
          <p className=" text-sm 2xl:text-base">8</p>
          <BsArrowRightCircle className="w-4 2xl:w-6 2xl:h-6 h-4 text-primary-50" />
        </div>
      </div>
    </div>
  );
};

export default PayoutByPeriod;
