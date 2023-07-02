import { Box, Typography } from "@mui/material";

type TagProps = {
  children: string;
};

const Tag = (props: TagProps) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "secondary.main",
        borderRadius: 2,
        mr: 2,
        mt: 2,
        p: 1,
      }}
    >
      <Typography
        variant="body2"
        color="secondary.main"
        fontSize={{ xs: 12, md: 18 }}
      >
        {props.children}
      </Typography>
    </Box>
  );
};

export default Tag;
