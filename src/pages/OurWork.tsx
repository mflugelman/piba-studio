import { Box, Grid, Typography } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import React from "react";
import { useScrollLock } from "../hooks/useScrollLock";

const OurWork: React.FC = () => {
  const [quickViewProductId, setQuickViewProductId] = React.useState(0);
  const { lockScroll, unlockScroll } = useScrollLock();

  const displayQuickView = (productId: number) => {
    lockScroll();
    setQuickViewProductId(productId);
  };

  const hideQuickView = () => {
    unlockScroll();
    setQuickViewProductId(0);
  };
  return (
    <Box sx={{ height: "100%", backgroundColor: "#181818", pt: 4 }}>
      <DashTitle dashPosition="right" color="white">
        Our Work
      </DashTitle>

      <Grid container mt={4}>
        <Grid item xs={7}>
          <Box>
            <VerticalCarousel selectedSlide={1} />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <Typography variant="title" textAlign="left" m={4}>
              Task Management Dashboard
            </Typography>
            <Typography
              variant="body1"
              color="white.main"
              textAlign="left"
              mt={2}
            >
              Through our collaborative design process, we revolutionized task
              management by crafting an intuitive platform that boosts
              productivity and coordination.
            </Typography>
            <Box display="flex"></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OurWork;
