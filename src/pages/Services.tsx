import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import HighlightedButton from "../components/HighlightedButton";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";

const Services = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box p={10}>
        <DashTitle color="black" dashPosition="left">
          How we can help
        </DashTitle>
      </Box>
      <Grid container>
        <Grid
          item
          xs={7}
          sx={{ display: "flex", alignItems: "center", pl: 10 }}
        >
          <Box m={4} pl={4} borderLeft={1}>
            <Typography variant="body1" textAlign={"left"} fontWeight={300}>
              Our team is dedicated to creating intuitive and enjoyable
              experiences for your customers. Our UX design process begins with
              extensive research to understand your users' needs and behaviors.
              We then create wireframes and prototypes to test and refine our
              ideas before moving on to full design and development.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Wheel />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
