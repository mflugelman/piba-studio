import { Box, Typography } from "@mui/material";
import ArrowButton from "./ArrowButton";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Typography variant="h3" m={4} color="#AFBDE3">
        Do you have an idea?
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", m: 4 }}>
        <Typography variant="body1" m={2}>
          Lets talk about it
        </Typography>
        <ArrowButton />
      </Box>
    </Box>
  );
};

export default Banner;
