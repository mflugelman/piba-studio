import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Header from "../components/Header";
import backLeft from "./../assets/backLeft.png";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #FFFFFF, #EDECEC)",
        backgroundImage: `url(${backLeft})`,
        top: 0,
        position: "absolute",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
