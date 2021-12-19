import React from "react";
import NavBar from "components/Navbar";
import Footer from "components/Footer";
import Body from "components/Body";

const PublicLayout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <Body />
      <Footer />
    </div>
  );
};

export default PublicLayout;
