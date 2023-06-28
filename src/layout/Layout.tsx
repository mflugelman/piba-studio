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
        // backgroundColor: "red"
        background: "linear-gradient(90deg, #FFFFFF 0%, #EDECEC 100%)",
        width: "100%",
        // background: "linear-gradient(90deg, #FFFFFF 0%, red 100%)",
      }}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
