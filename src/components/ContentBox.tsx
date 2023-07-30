import { Box, Typography } from "@mui/material";

type ContentBoxProps = {
  children: any;
};

const ContentBox = (props: ContentBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", xl: 1200 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default ContentBox;
