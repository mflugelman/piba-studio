import { Button, SxProps, Theme, Typography } from "@mui/material";
import { useState } from "react";

type HighlightedButtonProps = {
  children: string;
  circleLocationProps: SxProps<Theme>;
  onClick: () => void;
  active?: boolean;
};

const HighlightedButton = (props: HighlightedButtonProps) => {
  const [isClicked, setIsClicked] = useState(props.active);

  return (
    <Button
      disableRipple
      variant="text"
      sx={{
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
        },
        color: "black",
        ...props.circleLocationProps,
        "&::after": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: props.active ? "100%" : "0%",
          height: "100%",
          background: "#D1F678",
          borderRadius: "20px",
          animation: `${props.active ? "growFromLeft" : ""} 0.6s forwards`,
        },
        "@keyframes growFromLeft": {
          from: {
            width: "0%",
          },
          to: {
            width: "100%",
          },
        },
      }}
      onClick={() => {
        props.onClick();
      }}
    >
      <Typography
        variant="h6"
        sx={{
          zIndex: 1,
          marginRight: 2,
          marginLeft: 2,
          "&:hover": {
            fontWeight: "bold",
          },
        }}
      >
        {props.children}
      </Typography>
    </Button>
  );
};

export default HighlightedButton;
