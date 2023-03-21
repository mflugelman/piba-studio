import { Typography } from "@mui/material";

type HighlightedTextProps = {
  children: string;
  fontSize: number;
};

const HighlightedText = (props: HighlightedTextProps) => {
  const responsiveFontSize = props.fontSize / 2;

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "40%",
          width: "100%",
          borderTop: `${props.fontSize / 2}px solid #D1F678`,
          zIndex: -1,
        }}
      />
      <Typography
        variant="body1"
        ml={1}
        mr={1}
        sx={{ fontSize: { xs: responsiveFontSize, sm: props.fontSize } }}
      >
        {props.children}
      </Typography>
    </div>
  );
};

export default HighlightedText;
