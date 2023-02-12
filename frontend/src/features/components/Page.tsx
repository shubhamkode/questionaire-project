
import React from "react";
import Navbar from "./Navbar";

interface IPageProps {
  children: React.ReactNode,
}

const Page: React.FC<IPageProps> = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: "verdana, sans-serif"
      }}
      className="w-screen">
      <Navbar />
      <div className=" container mx-auto pt-24 px-2 pb-28 ">
        {children}
      </div>
    </div >
  )
}

export default Page;
