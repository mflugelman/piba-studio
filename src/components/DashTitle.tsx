import { Box, Typography } from "@mui/material";

type DashTitleProps = {
  children: string;
  dashPosition: "left" | "right";
  color: "black" | "white";
  variant?: "h2" | "jumbo";
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
        variant={props.variant ? props.variant : "h2"}
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
