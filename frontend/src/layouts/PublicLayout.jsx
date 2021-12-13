import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Body from "components/Body";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
        <Body />
      <Footer />
    </div>
  );
};

export default PublicLayout;
