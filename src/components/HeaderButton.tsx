import { Button, Typography } from "@mui/material";

type HeaderButtonButtonProps = {
  children: string;
  onClick: () => void;
  active?: boolean;
};

const HeaderButton = (props: HeaderButtonButtonProps) => {
  return (
    <Button
      disableRipple
      variant="text"
      sx={{
        mr: { xs: 0, md: 1 },
        ml: { xs: 0, md: 1 },
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
          "& > .MuiTypography-root": {
            color: "#7B9FF6",
            fontWeight: 600,
          },
        },
        color: "black",
        "&::after": {
          content: '""',
          position: "absolute",
          top: "0",
          left: "0",
          width: props.active ? "100%" : "0%",
          height: "100%",
          background: "#CDDFF8",
          borderRadius: 2,
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
        sx={{
          zIndex: 1,
        }}
        variant="button"
        color={props.active ? "#7B9FF6" : "black.main"}
        fontWeight={props.active ? 600 : 500}
      >
        {props.children}
      </Typography>
    </Button>
  );
};

export default HeaderButton;
