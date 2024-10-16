import React from "react";
import Bookings from "@/components/shared/Bookings";
import { getAllBookings } from "@/lib/database/actions/booking.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
};
const page = async ({ searchParams }: SearchParamProps) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  const page = Number(searchParams?.page) || 1;

  const propertyName = searchParams?.propertyName as string;

  const bookings = await getAllBookings({
    limit: 8,
    page,
    propertyName,
  });
  return (
    <Bookings
      bookings={bookings.bookings}
      totalBookings={bookings.totalBookings}
      page={page}
      totalPages={bookings.totalPages}
    />
  );
};

export default page;
