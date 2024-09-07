import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { IoChevronDownOutline, IoEyeOutline } from "react-icons/io5";
import OrderDetails from "@/components/shared/modals/OrderDetails";

const page = () => {
  return (
    <div className=" w-full px-7 md:px-20 oyo mt-7 2xl-mt-8">
      <p className=" font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Orders</h1>
      <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
            <DropdownMenu>
              <DropdownMenuTrigger className=" bg-[#FF990033] border border-primary-50 text-primary-50   justify-center text-nowrap w-full md:w-fit  text-xs 2xl:text-sm px-3 md:px-4 py-3 font-semibold rounded-full inline-flex items-center gap-1.5">
                Filter Program Type
                <IoChevronDownOutline className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className=" border-none bg-slate-50 dark:bg-slate-950  mt-1  p-3 rounded-lg shadow-sm">
                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>TOP EARNERS</p>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>AVERAGE</p>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center text-xs 2xl:text-sm justify-between ">
                  <p>BOTTOM EARNERS</p>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>{" "}
          </div>
          <div className="flex items-center flex-wrap gap-1.5">
            <div className=" bg-[#372f2f4b] inline-flex  w-full md:w-fit items-center px-2 rounded-xl border border-[#372f2f]">
              <LuSearch className="w-4 h-4 text-[#848BAC] " />
              <Input
                className=" 
                text-[#848BAC]
                bg-transparent
                border-none
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
            <button className="bg-white    dark:bg-slate-950 p-3 inline-flex items-center font-semibold gap-1 capitalize rounded-full text-xs ">
              export
              <Image
                src="/export.svg"
                width={14}
                height={14}
                alt="export"
                className=" dark:invert"
              />
            </button>
            <button className="bg-white dark:bg-slate-950 p-3 capitalize rounded-full text-xs font-semibold ">
              toggle colomn
            </button>
          </div>
        </div>
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
          <Table className=" bg-background">
            <TableHeader className=" mb-1 ">
              <TableRow className=" border-none py-3 ">
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] rounded-tl-full rounded-bl-full ">
                  Order NR
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  customer
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  account
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  full name
                </TableHead>

                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  program
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  product
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  status
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Purchase price
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="   ">
              {Array.from({ length: 6 }).map((_, i) => (
                <TableRow key={i} className=" border-none  ">
                  <TableCell className=" text-xs  text-white rounded-tl-full rounded-bl-full bg-[#372f2fd4]  border-none    2xl:text-sm font-semibold">
                    <OrderDetails />
                  </TableCell>

                  <TableCell className="bg-[#372f2fd4]  border-none  ">
                    <p className=" bg-[#16131399]  text-white  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      729733
                    </p>
                  </TableCell>
                  <TableCell className=" bg-[#372f2fd4]  border-none  ">
                    <p className=" bg-[#00C88C1A] text-white flex items-center justify-start w-fit px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      C23645
                    </p>
                  </TableCell>

                  <TableCell className=" text-xs  text-white bg-[#372f2fd4]  border-none   2xl:text-sm font-semibold">
                    Fatima Shehab
                  </TableCell>
                  <TableCell className=" text-xs  text-white bg-[#372f2fd4]  border-none   2xl:text-sm font-semibold">
                    $10,000 Phase 1 - Prime
                  </TableCell>

                  <TableCell className=" text-xs   text-white bg-[#372f2fd4]  border-none 2xl:text-sm font-semibold">
                    UWM challenges
                  </TableCell>
                  <TableCell className="bg-[#372f2fd4]  border-none  ">
                    <p className=" bg-[#80ED99] dark:bg-green-400/60 text-white  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      Completed
                    </p>
                  </TableCell>
                  <TableCell className=" text-xs  rounded-tr-full rounded-br-full  text-white bg-[#372f2fd4]  border-none 2xl:text-sm font-semibold">
                    $69.00
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100  px-6">
          <p className="  text-xs font-semibold 2xl:text-sm">
            1-10 of 195 tour
          </p>
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
    </div>
  );
};

export default page;
