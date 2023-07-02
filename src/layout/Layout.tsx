import { ReactNode } from "react";
import Header from "../components/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #FFFFFF 0%, #EDECEC 100%)",
        width: "100%",
      }}
    >
      <main>{children}</main>
    </div>
  );
};

export default Layout;
