import { Box } from "@mui/material";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";

const Services = () => {
  return (
    <Box>
      <Box p={4} pt={8}>
        <DashTitle color="black" dashPosition="left">
          How we can help
        </DashTitle>
      </Box>
      <Wheel />
    </Box>
  );
};

export default Services;
