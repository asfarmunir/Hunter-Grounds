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
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import CreateContract from "@/components/shared/modals/CreateContract";

const payoutTabs = [
  {
    name: "all",
  },
  {
    name: "pending",
  },

  {
    name: "rejected",
  },
  {
    name: "signed",
  },
];
const page = () => {
  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 oyo bg-[#000214] md:px-20">
      <p className=" font-thin mb-2  text-primary-50 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Contracts</h1>
      <div className=" w-full rounded-3xl bg-primary-100  mt-6 2xl:mt-8">
        <div className=" w-full px-3 py-3.5 2xl:p-4 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
          <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
            {payoutTabs.map((tab, index) => (
              <button
                key={index}
                className={` capitalize text-xs text-nowrap font-semibold p-2.5 2xl:p-3 px-5 
                tracking-wide 2xl:px-7 text-center rounded-full ${
                  index === 0
                    ? "bg-[#FF990033] text-primary-50"
                    : " bg-[#372F2F99]  text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
          <div className="flex items-center flex-wrap md:flex-nowrap gap-1.5">
            <CreateContract />
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
                <TableHead className="text-sm bg-primary-200/60  rounded-tl-full rounded-bl-full ">
                  Contract ID
                </TableHead>
                <TableHead className="text-sm bg-primary-200/60  capitalize">
                  customer
                </TableHead>
                <TableHead className="text-sm bg-primary-200/60  capitalize">
                  status
                </TableHead>
                <TableHead className="text-sm bg-primary-200/60  capitalize">
                  contract
                </TableHead>
                <TableHead className="text-sm bg-primary-200/60  capitalize">
                  amount
                </TableHead>
                <TableHead className="text-sm  bg-primary-200/60  capitalize">
                  name
                </TableHead>
                <TableHead className="text-sm bg-primary-200/60  capitalize">
                  first name
                </TableHead>
                <TableHead className="text-sm bg-primary-200/60  capitalize rounded-tr-full rounded-br-full">
                  last name
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="  ">
              {Array.from({ length: 6 }).map((_, i) => (
                <TableRow key={i} className=" border-none  ">
                  <TableCell className=" text-xs  text-white bg-primary-200 border-none   rounded-tl-full rounded-bl-full  2xl:text-sm font-semibold">
                    782
                  </TableCell>
                  <TableCell className=" bg-primary-200 border-none ">
                    <p className=" bg-[#cccefd79]/20 text-white flex items-center justify-start w-fit px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      C23645
                    </p>
                  </TableCell>
                  <TableCell className="bg-primary-200 border-none  ">
                    <p className=" bg-green-400/20 text-white  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      Signed
                    </p>
                  </TableCell>
                  <TableCell className=" text-xs  text-white bg-primary-200 border-none    2xl:text-sm font-semibold">
                    Funded Trader
                  </TableCell>
                  <TableCell className="bg-primary-200 border-none  ">
                    <p className=" bg-yellow-600/20 text-white  flex items-center w-fit justify-center px-3 py-2 rounded-full text-xs 2xl:text-sm font-semibold">
                      23783
                    </p>
                  </TableCell>
                  <TableCell className=" text-xs  text-white bg-primary-200 border-none    2xl:text-sm font-semibold">
                    Patricia Kim Jittavera Rönnberg
                  </TableCell>
                  <TableCell className=" text-xs  text-white bg-primary-200 border-none   2xl:text-sm font-semibold">
                    Murtaza
                  </TableCell>

                  <TableCell className=" text-xs  rounded-tr-full rounded-br-full text-white bg-primary-200 border-none 2xl:text-sm font-semibold">
                    Shehab
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
