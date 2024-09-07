import Navbar from "@/components/shared/Navbar";
import React from "react";
import Topbar from "@/components/shared/Topbar";
import Footer from "@/components/shared/Footer";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" relative h-screen bg-primary ">
      <div
        className="  sticky 
        top-0
        z-50
        w-full
        "
      >
        <div className=" w-full px-1.5 2xl:px-2.5  justify-between flex items-center absolute">
          <Navbar />
        </div>
      </div>
      <section className=" pt-20 2xl:pt-24">
        <Topbar />
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default layout;
