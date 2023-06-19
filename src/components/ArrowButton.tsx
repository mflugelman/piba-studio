import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type ArrowButtonProps = {
  children: string;
};

const ArrowButton = (props: ArrowButtonProps) => {
  return (
    <Button
      variant="text"
      sx={{
        borderRadius: 5,
        borderColor: "black",
        minWidth: 20,
        textTransform: "none",
        "&:hover": {
          "& .MuiTypography-root": {
            color: "#F7C2E5",
          },
          "& .MuiBox-root": {
            borderColor: "#F7C2E5",
          },
          "& .MuiSvgIcon-root": {
            color: "#F7C2E5",
          },
        },
      }}
    >
      <Typography color={"#FAFAFA"}>{props.children}</Typography>
      <Box
        sx={{
          border: 2,
          borderColor: "#FAFAFA",
          display: "flex",
          padding: 1,
          paddingRight: 1.2,
          paddingLeft: 1.2,
          borderRadius: "45%",
          margin: 1,
        }}
      >
        <ArrowForwardIcon htmlColor="#FAFAFA" />
      </Box>
    </Button>
  );
};

export default ArrowButton;
