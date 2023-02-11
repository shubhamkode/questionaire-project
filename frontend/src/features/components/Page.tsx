
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
      <div className="w-screen px-4 md:px-0">
        {children}
      </div>
    </div >
  )
}

export default Page;
