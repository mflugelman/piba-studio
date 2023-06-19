import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type DashTitleProps = {
  children: string;
  dashPosition: "left" | "right";
  color: "black" | "white";
};

const DashTitle = (props: DashTitleProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:
          props.dashPosition == "left" ? "flex-start" : "flex-end",
        alignItems: "center",
      }}
    >
      {props.dashPosition == "left" ? (
        <Box
          sx={{
            width: "90px",
            height: "22px",
            backgroundColor: "secondary.main",
          }}
        />
      ) : null}
      <Typography
        variant="h2"
        textAlign={props.dashPosition}
        mr={2}
        ml={2}
        color={props.color == "white" ? "white.main" : "black.main"}
      >
        {props.children}
      </Typography>
      {props.dashPosition == "right" ? (
        <Box
          sx={{
            width: "90px",
            height: "22px",
            backgroundColor: "secondary.main",
          }}
        />
      ) : null}
    </Box>
  );
};

export default DashTitle;
