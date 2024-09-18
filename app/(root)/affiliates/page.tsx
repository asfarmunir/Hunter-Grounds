"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditLogs from "@/components/shared/userDetails/EditLogs";
import Link from "next/link";

const page = () => {
  const [tab, setTab] = React.useState("details");

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  return (
    <div className=" w-full px-7 mt-7 2xl-mt-8 md:px-20 bg-[#000214] overflow-hidden ">
      <p className=" font-thin mb-2 text-white -50 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Affiliates</h1>
      <div className="flex gap-6 my-6 w-full flex-col">
        <div className=" w-full  flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-col gap-1 w-full md:w-[60%] bg-primary-100 p-4">
            <div className=" w-full p-5 rounded-2xl flex items-center justify-between bg-primary-200">
              <div className="flex flex-col">
                <p className=" font-semibold">Totals</p>
              </div>
              <div className="flex text-xs md:text-base text-nowrap items-center flex-col md:flex-row gap-2.5">
                <p className=" text-white bg-purple-400/30 p-2.5 font-semibold rounded-full px-5">
                  343384
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 rounded-2xl gap-4 ">
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">$202,304</h2>
                <p className=" text-xs 2xl:text-sm">Referall Revenue</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">$9203</h2>
                <p className=" text-xs 2xl:text-sm">Commissions Amount</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">$202,304</h2>
                <p className=" text-xs 2xl:text-sm capitalize">
                  Net Referall Revenue
                </p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">109</h2>
                <p className=" text-xs 2xl:text-sm capitalize">Visits</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">12</h2>
                <p className=" text-xs 2xl:text-sm capitalize">Commissons</p>
              </div>{" "}
              <div className=" flex flex-col gap-2 p-5 flex-grow bg-primary-200  rounded-2xl">
                <h2 className=" font-bold text-xl 2xl:text-4xl">20</h2>
                <p className=" text-xs 2xl:text-sm capitalize">Affiliates</p>
              </div>{" "}
            </div>
          </div>
          <div className=" h-full w-full relative rounded-xl bg-primary-100 bg md:w-[40%] flex flex-col gap-3 p-4">
            <p className="p-3 bg-[#372F2F99] text-white mb-12 py-7 rounded-2xl font-semibold w-full">
              Need Help?
            </p>
            <h2 className="text-xl  text-white -50 font-semibold z-40 ">
              We are here to help you!
            </h2>
            <p className=" mb-2 text-sm z-40 max-w-xs ">
              Need help setting up SliceWP or have any questions about the
              plugin?
            </p>
            <Image
              src="/boy.png"
              width={300}
              height={300}
              alt="affiliates"
              className=" absolute  right-0 bottom-0
              w-[260px] h-[200px] z-0
              2xl:w-[300px] 2xl:h-[250px] 
              "
            />
            <button className=" w-fit text-white -50 mb-3 2xl:mb-7 bg-[#FF990033] border border-primary-50  p-3.5 font-semibold rounded-full px-5">
              Open a support ticket
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <LatestRegisteredAffiliates />
        <LatestCommisions />
      </div>
    </div>
  );
};

export default page;

const LatestRegisteredAffiliates = () => {
  return (
    <div className=" w-full rounded-3xl bg-primary-100  mt-6 2xl:mt-8">
      <div className=" w-full p-2.5 2xl:p-3.5  flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4 py-4">
            Latest Registered Affiliates
          </h3>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
        <Table className=" ">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-primary-200/40 rounded-tl-full rounded-bl-full ">
                Affiliate
              </TableHead>
              <TableHead className="text-sm bg-primary-200/40  rounded-tr-full rounded-br-full  capitalize">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs  text-white  rounded-tl-full rounded-bl-full  bg-primary-200  2xl:text-sm font-semibold">
                  <div className="flex items-center gap-4">
                    <Image
                      src={"/avatar.png"}
                      width={35}
                      height={35}
                      alt="avatar"
                      className="rounded-full"
                    />
                    <p>Sandro Castonella</p>
                  </div>
                </TableCell>
                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-white   bg-primary-200  2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#FF990033] dark:border-slate-700 border-slate-200 border">
                    Active
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center  py-2  capitalize     px-6">
        <Link
          className=" border bg-gradient-to-b from-[#FF9900] to-[#FFE7A9] text-black font-bold  rounded-full w-[80%] text-center p-3"
          href={"/affiliates/details"}
        >
          view all affiliates
        </Link>
      </div>
    </div>
  );
};
const LatestCommisions = () => {
  return (
    <div className=" w-full rounded-3xl bg-[#372F2F99]  mt-6 2xl:mt-8">
      <div className=" w-full p-2.5 2xl:p-3.5  flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4 py-4">LatestCommisions</h3>
        </div>
      </div>
      <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
        <Table className=" ">
          <TableHeader className=" ">
            <TableRow className=" border-none">
              <TableHead className="text-sm bg-primary-200/50 rounded-tl-full rounded-bl-full ">
                Affiliate
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50 ">
                amount
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50 ">
                reference
              </TableHead>
              <TableHead className="text-sm bg-primary-200/50  rounded-tr-full rounded-br-full  capitalize">
                status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, i) => (
              <TableRow key={i} className=" border-none">
                <TableCell className=" text-xs  text-white  rounded-tl-full rounded-bl-full  bg-primary-200  2xl:text-sm font-semibold">
                  Sandro Castonella
                </TableCell>
                <TableCell className=" text-xs  text-white    bg-primary-200  2xl:text-sm font-semibold">
                  $21.20
                </TableCell>
                <TableCell className=" text-xs  text-white    bg-primary-200  2xl:text-sm font-semibold">
                  4000
                </TableCell>
                <TableCell className=" text-xs   rounded-tr-full rounded-br-full text-white   bg-primary-200  2xl:text-sm font-semibold">
                  <p className=" capitalize w-fit px-4 py-2 rounded-full bg-[#FF990033]/20 dark:border-slate-700 border-slate-200 border">
                    unpaid
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center  py-2  capitalize     px-6">
        <Link
          className=" border bg-gradient-to-b from-[#FF9900] to-[#FFE7A9] text-black font-bold  rounded-full w-[80%] text-center p-3"
          href={"/affiliates/details"}
        >
          view all comissions
        </Link>
      </div>
    </div>
  );
};
