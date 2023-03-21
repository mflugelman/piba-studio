import { Button, SxProps, Theme, Typography } from "@mui/material";
import HighlightedText from "./HighlightedText";

type HighlightedButtonProps = {
  children: string;
  sx: SxProps<Theme>;
  onClick: () => void;
  active?: boolean;
};

const HighlightedButton = (props: HighlightedButtonProps) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: "none",
        "&:hover": {
          backgroundColor: "transparent",
        },
        color: "black",
        ...props.sx,
      }}
      onClick={props.onClick}
    >
      {props.active ? (
        <HighlightedText fontSize={30}>{props.children}</HighlightedText>
      ) : (
        <Typography variant="body1" fontSize={30}>
          {props.children}
        </Typography>
      )}
    </Button>
  );
};

export default HighlightedButton;
