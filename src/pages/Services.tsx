import { Box } from "@mui/material";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";

const Services = () => {
  return (
    <Box
      sx={{
        width: "100%",
        // Set the height to 100% of the viewport height
        overflow: "hidden",
      }}
    >
      <Box pl={10} pt={10} pb={10}>
        <DashTitle color="black" dashPosition="left">
          How we can help
        </DashTitle>
      </Box>
      <Wheel />
    </Box>
  );
};

export default Services;
