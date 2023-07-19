import { Button, Icon, SvgIconProps, Typography } from "@mui/material";

import { ReactNode } from "react";

type RightIconButtonProps = {
  icon: React.ComponentType<SvgIconProps>;
  children: ReactNode;
  onClick?: () => void;
  color: "black" | "white";
};

const RightIconButton = (props: RightIconButtonProps) => {
  return (
    <Button
      onClick={props.onClick}
      disableRipple
      sx={{
        alignSelf: "flex-start",
        "&:hover": {
          backgroundColor: "transparent",
          color: "#F7C2E5",
          "& .MuiTypography-root": {
            color: "#F7C2E5",
          },
          "& .MuiSvgIcon-root": {
            color: "#F7C2E5",
          },
        },
      }}
    >
      <Typography variant="body2" color={props.color + ".main"}>
        {props.children}
      </Typography>
      <Icon
        component={props.icon}
        sx={{
          m: 2,
          color: props.color + ".main",
          outline: "2px solid",
          outlineColor: "white.main",
          borderRadius: 6,
          p: 1,
        }}
      />
    </Button>
  );
};

export default RightIconButton;
