import { Box } from "@mui/material";
import { ReactNode } from "react";

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
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </main>
    </div>
  );
};

export default Layout;
