import React from "react";
import Affiliates from "@/components/shared/Affiliates";
import {
  calculateReferralBookingTotals,
  getReferralEarningsData,
} from "@/lib/database/actions/payout.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const referralBookings = await calculateReferralBookingTotals();
  const referralCommission = await getReferralEarningsData();
  return (
    <Affiliates
      referralCommission={referralCommission}
      referralBookings={referralBookings}
    />
  );
};

export default page;
