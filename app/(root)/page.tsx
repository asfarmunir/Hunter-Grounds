import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import AddWidget from "@/components/shared/modals/AddWidget";
const page = () => {
  return (
    <div className=" w-full px-5 md:px-20 mt-10 2xl-mt-12">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <p className=" font-thin  mb-2 2xl:text-lg text-primary-50">
            Sales Management
          </p>
          <h1 className=" text-4xl 2xl:text-5xl font-bold">Dashboard</h1>
        </div>
        <div className=" inline-flex gap-2">
          <button className=" border border-slate-600 rounded-full px-3 py-2 inline-flex items-center gap-2">
            <Image
              src="/images/Setting.svg"
              alt="Logo"
              width={20}
              height={20}
            />
            Export
          </button>
          <button className=" border bg-gradient-to-b from-[#FF9900] to-[#FFE7A9] text-black font-semibold rounded-full px-3 py-2 inline-flex items-center gap-2">
            Bulk Edit
          </button>
        </div>
      </div>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 mb-10 lg:grid-cols-3 gap-4">
        <div className=" w-full rounded-3xl  p-3.5  mt-6 2xl:mt-8">
          <p className="  2xl:text-xl text-lg  mb-4 ">Revenue</p>
          <div className=" w-full flex  flex-col  p-6 pb-7 gap-3.5 rounded-3xl">
            <div className=" w-full flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="  2xl:text-lg font-thin">Total Sale</p>
                <h1 className="text-3xl 2xl:text-4xl font-bold">$32,323.99</h1>
              </div>
              <p className=" bg-[#00C88C1A] px-4 py-2.5 text-xs font-semibold rounded-full text-center text-green-600 ">
                +1.5%
              </p>
            </div>
            <div className=" w-full h-10 mb-4 rounded-full bg-[#372F2F99]">
              <div className=" w-[60%] bg-[#FF9900]  rounded-full h-full"></div>
            </div>
            <div className=" w-full flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="  2xl:text-lg font-thin">
                  Compared to last month
                </p>
                <h1 className="text-3xl 2xl:text-4xl font-bold">$2,645.99</h1>
              </div>
              <p className=" bg-[#00C88C1A] px-4 py-2.5 text-xs font-semibold rounded-full text-center text-green-600 ">
                +1.5%
              </p>
            </div>
            <div className=" w-full h-10 mb-4 rounded-full bg-[#372F2F99]">
              <div className=" w-[40%] bg-[#FF9900]  rounded-full h-full"></div>
            </div>
          </div>
        </div>
        <div className=" w-full rounded-3xl  p-3.5 mt-6 2xl:mt-8">
          <p className="  2xl:text-xl text-lg  mb-4 ">Withdrawable Profit</p>
          <div className=" w-full bg-[#16131399]  rounded-3xl p-6 mb-3 relative flex flex-col gap-3">
            <p className="2xl:text-lg font-semibold ">Total Sales</p>
            <h3 className=" text-2xl 2xl:text-3xl font-bold">$414,743.84</h3>
            <p className="text-xs 2xl:text-sm text-green-500 font-semibold ">
              +18% Total to pay
            </p>
            <Image
              src="/images/graph.svg"
              width={100}
              height={100}
              alt="chart"
              className="absolute right-10 top-[40%]"
            />
          </div>
          <div className=" w-full bg-[#16131399]   rounded-3xl p-6  relative flex flex-col gap-3">
            <p className=" 2xl:text-lg font-semibold ">Total Profit</p>
            <h3 className=" text-2xl 2xl:text-3xl font-bold">$414,743.84</h3>
            <p className="text-xs 2xl:text-sm text-green-500 font-semibold ">
              +18% Total to pay
            </p>
            <Image
              src="/images/graph.svg"
              width={100}
              height={100}
              alt="chart"
              className="absolute right-10 top-[40%]"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#16131399] p-4 md:px-6 space-y-6 rounded-xl">
        <div className="flex items-center justify-between w-full ">
          <h1 className=" text-3xl mb-6 2xl:text-4xl font-bold">Widgets</h1>
          <button className=" bg-[#00C88C1A] px-4 py-2.5 text-xs font-semibold border border-green-600 rounded-full text-center text-green-600 ">
            Edit Layout
          </button>
        </div>
        <div className=" my-6 flex items-center flex-wrap gap-4 justify-between w-full">
          <AddWidget />
          <AddWidget />
          <AddWidget />
        </div>
      </div>

      {/* <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Contracts</h3>
            <Image
              src="/contract.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className="flex items-center justify-between gap-4  my-4 ">
            <div className=" w-full p-4 rounded-3xl bg-background flex items-center border border-[#E3E5E7] dark:border-slate-800 justify-between">
              <div className="flex flex-col  ">
                <h1 className=" 2xl:text-4xl text-3xl font-semibold">274</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">created</p>
              </div>
              <Image
                src="/created.svg"
                width={50}
                height={50}
                alt="add"
                className=" "
              />
            </div>
            <div className=" w-full p-4 rounded-3xl bg-background flex items-center border border-[#E3E5E7] dark:border-slate-800 justify-between">
              <div className="flex flex-col  ">
                <h1 className=" 2xl:text-4xl text-3xl font-semibold">274</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">Pending</p>
              </div>
              <Image
                src="/pending.svg"
                width={50}
                height={50}
                alt="add"
                className=" "
              />
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Signed
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Signed
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Passed Accounts</h3>
            <Image
              src="/passed.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Approved
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">
                  300K Islamic Phase 1 - cTrader
                </h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Approved
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">
                  300K Islamic Phase 1 - cTrader
                </h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Approved
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">
                  300K Islamic Phase 1 - cTrader
                </h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Certificates</h3>
            <Image
              src="/certificates.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Issued
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">
                  Payout Certificate
                </h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Issued
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">
                  Payout Certificate
                </h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Issued
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">
                  Payout Certificate
                </h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">emails</h3>
            <Image
              src="/email.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Delivered
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#FFB703]/20 dark:bg-[#FFB703]/50 rounded-full">
              Processed
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Payouts</h3>
            <Image
              src="/payout.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#FFB703]/20 dark:bg-[#FFB703]/50 rounded-full">
              Submitted
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">$1,712.00 </h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">Crypto - BTC</p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Approved
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">$1,712.00</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">Crypto - BTC</p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Blacklist</h3>
            <Image
              src="/blacklist.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className="flex items-center justify-between gap-4  my-4 ">
            <div className=" w-full p-4 rounded-3xl bg-background flex items-center border border-[#E3E5E7] dark:border-slate-800 justify-between">
              <div className="flex flex-col  ">
                <h1 className=" 2xl:text-4xl text-3xl font-semibold">274</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">created</p>
              </div>
              <Image
                src="/blacklisted.svg"
                width={50}
                height={50}
                alt="add"
                className=" "
              />
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#EDA680]/20 dark:bg-[#EDA680]/50 rounded-full">
              Blocked
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#EDA680]/20 dark:bg-[#EDA680]/50 rounded-full">
              Blocked
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <Image
              src="/notification.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#EDA680]/20 dark:bg-[#EDA680]/50 rounded-full">
              Incomplete
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  MaxDrawdownBreached
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/20 dark:bg-[#80ED99]/50 rounded-full">
              Completed
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  MaxDrawdownBreached
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Repeated Account</h3>
            <Image
              src="/repeated.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Repeated NR1
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Repeated NR1
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Upgraded Account</h3>
            <Image
              src="/repeated.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Upgraded
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Upgraded
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Latest Orders</h3>
            <Image
              src="/latest.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Completed
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Completed
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">
                  info@premiumsalessolutions.nl
                </p>
                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                  <p className=" bg-[#F2F962]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#F2F962]/40">
                    82733
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Repored Accounts</h3>
            <Image
              src="/reported.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className=" w-full p-3 px-6 text-base flex  bg-black text-white dark:bg-slate-800 dark:text-slate-300 justify-between border items-center font-semibold text-center  rounded-xl">
            <p className="">Platform</p>
            <p>Account</p>
          </div>
          <div className=" w-full p-3 px-6 text-base flex justify-between border items-center font-semibold text-center bg-background rounded-xl">
            <p className="">CTrader</p>
            <p>412</p>
          </div>
          <div className=" w-full p-3 px-6 text-base flex justify-between border items-center font-semibold text-center bg-background rounded-xl">
            <p className="">MatchTrader</p>
            <p>112</p>
          </div>
          <div className=" w-full p-3 px-6 text-base flex justify-between border items-center font-semibold text-center bg-background rounded-xl">
            <p className="">MatchTrader</p>
            <p>29</p>
          </div>
          <div className=" w-full p-3 px-6 text-base flex justify-between items-center font-semibold text-center bg-[#80ED99]/20  dark:bg-[#80ED99]/50 rounded-xl">
            <p className="">Total</p>
            <p>623</p>
          </div>
        </div>
        <div className="bg-[#FBFBFB] dark:bg-slate-900 rounded-3xl border border-[#E3E5E7] dark:border-slate-800  p-3 space-y-3">
          <button
            className="flex items-center justify-between py-3 px-4
       flex-grow rounded-full w-full font-semibold bg-[#48CAE4]/20 dark:bg-blue-500/50 "
          >
            Remove Widget
            <Image
              src="/remove.png"
              width={20}
              height={20}
              alt="add"
              className=" dark:invert"
            />
          </button>{" "}
          <div className=" w-full flex items-center justify-between">
            <h3 className="text-lg font-semibold">Customer Verifications</h3>
            <Image
              src="/customer.svg"
              width={40}
              height={40}
              alt="add"
              className=" dark:invert"
            />
          </div>
          <div className="flex items-center justify-between gap-4  my-4 ">
            <div className=" w-full p-4 rounded-3xl bg-background flex items-center border border-[#E3E5E7] dark:border-slate-800 justify-between">
              <div className="flex flex-col  ">
                <h1 className=" 2xl:text-4xl text-3xl font-semibold">274</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">Verified</p>
              </div>
              <Image
                src="/verified.svg"
                width={50}
                height={50}
                alt="add"
                className=" "
              />
            </div>
            <div className=" w-full p-4 rounded-3xl bg-background flex items-center border border-[#E3E5E7] dark:border-slate-800 justify-between">
              <div className="flex flex-col  ">
                <h1 className=" 2xl:text-4xl text-3xl font-semibold">274</h1>
                <p className=" text-xs 2xl:text-sm mb-1.5 ">Not Verified</p>
              </div>
              <Image
                src="/notVerified.svg"
                width={50}
                height={50}
                alt="add"
                className=" "
              />
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Verified
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
          <div className=" w-full p-3 rounded-3xl bg-background border border-[#E3E5E7] dark:border-slate-800">
            <p className=" w-full p-3 text-sm font-semibold text-center bg-[#80ED99]/50 rounded-full">
              Verified
            </p>

            <div className=" w-full my-4 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <h1 className=" 2xl:text-lg font-semibold">Ziad Ghazal</h1>

                <div className="flex items-center gap-1">
                  <p className=" bg-[#CCCEFD]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-[#CCCEFD]/40">
                    37233
                  </p>
                </div>
              </div>
              <p className=" bg-[#F5F5F5]  px-4 py-2.5 text-xs font-semibold rounded-full text-center dark:bg-slate-400/40">
                37m ago
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default page;
