import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ArrowButton = () => {
  return (
    <Button
      variant="outlined"
      sx={{ borderRadius: 5, borderColor: "black", minWidth: 20 }}
    >
      <ArrowForwardIcon htmlColor="black" />
    </Button>
  );
};

export default ArrowButton;
