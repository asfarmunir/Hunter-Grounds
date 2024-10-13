import React from "react";
import CustomerDetails from "@/components/shared/CustomerDetails";
import { getUserDetails } from "@/lib/database/actions/user.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const page = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const user = await getUserDetails(id);
  console.log("🚀 ~ page ~ user:", user);
  return <CustomerDetails user={user} />;
};

export default page;
