import { Input } from "@/components/ui/input";
import React from "react";
import { LuSearch } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Pagination from "./Pagination";
import { IProperty } from "@/lib/types/property";
import GroundFilter from "./GroundFilter";

const page = ({
  properties,
  page,
  totalProperties,
  totalPages,
}: {
  properties?: IProperty[];
  page: number;
  totalProperties?: number;
  totalPages: number;
}) => {
  return (
    <div className=" w-full px-7 md:px-8 2xl:px-20 bg-[#000214]  mt-7 2xl-mt-8">
      <p className=" font-thin text-primary-50 mb-1 2xl:text-lg">
        Sales Management
      </p>
      <h1 className=" text-4xl 2xl:text-5xl font-bold">Hunt Grounds</h1>
      <div className=" w-full rounded-3xl  bg-primary-100 mt-6 2xl:mt-8">
        <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-end">
          <div className="flex items-center flex-wrap gap-2.5">
            <GroundFilter />
          </div>
        </div>
        <div className=" w-full rounded-tr-3xl rounded-tl-3xl p-4 bg-[#000214]">
          <Table className=" bg-background">
            <TableHeader className=" mb-1 ">
              <TableRow className=" border-none py-3 ">
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] rounded-tl-full rounded-bl-full ">
                  ID
                </TableHead>
                <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Ground Name
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Listed On
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Ground Acres
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Owner Name
                </TableHead>
                <TableHead className="text-sm text-center   bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Owner Email
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize">
                  Location
                </TableHead>
                <TableHead className="text-sm text-center  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Price per night
                </TableHead>
                {/* <TableHead className="text-sm  bg-[#F4FAFF] dark:bg-[#372F2F99] capitalize rounded-tr-full rounded-br-full">
                  Actions
                </TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody className="   ">
              {properties &&
                properties.map((p, i) => (
                  <TableRow key={i} className=" border-y-4 border-[#000214]  ">
                    <TableCell className=" text-xs  text-white border-y-4 border-[#000214] rounded-tl-full rounded-bl-full bg-[#372f2fd4]   2xl:text-sm font-semibold">
                      {p._id ? String(p._id).slice(0, 6) + "..." : "N/A"}
                    </TableCell>

                    <TableCell className="bg-[#372f2fd4] capitalize text-center border-y-4 border-[#000214]    ">
                      {p.name || "N/A"}
                    </TableCell>
                    <TableCell className=" bg-[#372f2fd4]  border-y-4 border-[#000214]  ">
                      {p.createdAt
                        ? new Date(p.createdAt).toLocaleDateString()
                        : "N/A"}
                    </TableCell>

                    <TableCell className=" text-xs  text-white capitalize text-center bg-[#372f2fd4]  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      {p.acres || "N/A"}
                    </TableCell>

                    <TableCell className=" text-xs  text-white capitalize text-center bg-[#372f2fd4]  border-y-4 border-[#000214]   2xl:text-sm font-semibold">
                      {/* @ts-ignore */}
                      {p.owner
                        ? p.owner.firstname + " " + p.owner.lastname
                        : "N/A"}
                    </TableCell>
                    <TableCell className=" text-xs text-center   text-white bg-[#372f2fd4]  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      {/* @ts-ignore */}
                      {p.owner ? p.owner.email : "N/A"}
                    </TableCell>
                    <TableCell className="bg-[#372f2fd4] text-center border-y-4 truncate max-w-[150px] border-[#000214]  ">
                      {p.address || "N/A"}
                    </TableCell>
                    <TableCell className="bg-[#372f2fd4] text-center border-y-4 border-[#000214] rounded-tr-full rounded-br-full   ">
                      ${p.pricePerNight ? p.pricePerNight : "N/A"}
                    </TableCell>
                    {/* <TableCell className=" text-xs text-center  rounded-tr-full rounded-br-full  text-white bg-[#372f2fd4]  border-y-4 border-[#000214] 2xl:text-sm font-semibold">
                      <Link
                        href={`/customerDetails/${p._id}`}
                        className="bg-primary-50 text-white  flex items-center  justify-center w-8 h-8 rounded-full text-xs 2xl:text-sm font-semibold"
                      >
                        <FaEye className="w-4 h-4" />
                      </Link>
                    </TableCell> */}
                  </TableRow>
                ))}

              {!properties?.length && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between rounded-full py-4 bg-primary-100  px-6">
          <p className="  text-xs font-semibold 2xl:text-sm">
            {totalProperties} Total Grounds
          </p>
          <Pagination page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default page;
