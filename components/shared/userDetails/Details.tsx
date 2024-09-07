import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";
const PayoutByPeriod = () => {
  return (
    <div className=" w-full rounded-3xl bg-primary-100 mt-6 2xl:mt-8">
      <div className=" w-full p-2.5 2xl:p-3.5 flex  flex-col-reverse md:flex-row gap-6 items-center justify-between">
        <div className="flex flex-col md:flex-row w-full md:w-fit  items-center gap-1.5">
          <h3 className="font-semibold pl-4">Details</h3>
        </div>
        <div className="flex items-center flex-wrap gap-1.5">
          <button className="border border-slate-900 p-3 capitalize rounded-full text-xs font-semibold ">
            toggle colomn
          </button>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-2 lg:grid-cols-4  rounded-tr-3xl rounded-tl-3xl p-4 bg-background">
        {details.map((detail, index) => (
          <div
            key={index}
            className=" p-5 flex flex-col gap-1 bg-[#272121eb]   border border-[#322b2beb]   rounded-[2rem]"
          >
            <p className=" text-sm 2xl:text-lg text-primary-50 font-semibold">
              {detail.title}
            </p>
            <p className=" font-semibold text-xs 2xl:text-sm">
              {detail.category}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayoutByPeriod;

const details = [
  {
    title: "Funded",
    category: "Plan Category",
  },
  {
    title: "200K Live Standart Evaluation - MTR",
    category: "Plan Description",
  },
  {
    title: "200K Live Standart Evaluation - MTR",
    category: "Plan Label",
  },
  {
    title: "2000",
    category: "Starting Balance",
  },
  {
    title: "20",
    category: "Leverage",
  },
  {
    title: "30",
    category: "Inactivity Period",
  },
  {
    title: "20%",
    category: "Max Drawdown",
  },
  {
    title: "Pervious day balance  / equity",
    category: "Drawndown Type",
  },
  {
    title: "5%",
    category: "Daily Drawdown",
  },
  {
    title: "Yes",
    category: "Contract Required",
  },
  {
    title: "10%",
    category: "Max Open Lots",
  },
  {
    title: "80%",
    category: "Profit Share",
  },
  {
    title: "30",
    category: "Fisrt Withdrawal",
  },
  {
    title: "20",
    category: "Subsequent Withdrawals",
  },
  {
    title: "10%",
    category: "Min. Withdrawal",
  },
  {
    title: "Yes",
    category: "Allow Expert Adviser",
  },
];
