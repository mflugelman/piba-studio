import { Box, Button, Grid } from "@mui/material";

function Header() {
  return (
    <Grid
      container
      sx={{
        height: 110,
        position: "absolute",
        backdropFilter: "blur(5px);",
        mask: "linear-gradient(black, black, transparent)",
        maskPosition: "0 calc(100% - 20px)",
        maskSize: "100% 20px",
      }}
    >
      <Grid item sm={8}></Grid>
      <Grid item container sm={4}>
        <Button>Home</Button>
        <Button>Work</Button>
        <Button>About us</Button>
        <Button>Services</Button>
        <Button>Contact</Button>
      </Grid>
    </Grid>
  );
}

export default Header;
