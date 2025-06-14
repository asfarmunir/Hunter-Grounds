"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { LuSearch } from "react-icons/lu";
import { useRouter, useSearchParams } from "next/navigation";

const CustomersFilter = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const [searchTerm, setSearchTerm] = useState(name || "");
  const router = useRouter();

  const debounceDelay = 250;

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // Construct URL with only the 'name' parameter
      const query = searchTerm ? `?name=${encodeURIComponent(searchTerm)}` : "";
      router.push(`/customers${query}`, { scroll: false });
    }, debounceDelay);

    return () => clearTimeout(debounceTimer); // Cleanup timeout
  }, [searchTerm, router]);

  // Input change handler
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-[#372f2f4b] inline-flex w-full md:w-fit items-center px-2 pl-3.5 rounded-xl border border-primary-50/40">
      <LuSearch className="w-4 h-4 text-[#848BAC]" />
      <Input
        className="text-[#848BAC] bg-transparent border-none focus:outline-none w-full md:w-64 focus:ring-0 text-xs focus:border-none placeholder-slate-900"
        placeholder="Search Customer..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default CustomersFilter;
