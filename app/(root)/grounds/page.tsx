import React from "react";
import { getAllUsers } from "@/lib/database/actions/user.action";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Grounds from "@/components/shared/Grounds";
import { getAllProperties } from "@/lib/database/actions/property.actions";

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
  const ownerName = searchParams?.propertyName || undefined;

  const properties = await getAllProperties({
    limit: 8,
    page,
    ownerName,
  });

  return (
    <Grounds
      properties={properties.properties}
      totalProperties={properties.totalProperties}
      page={page}
      totalPages={properties.totalPages!}
    />
  );
};

export default page;
