import { Box, Grid, Typography } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import React, { useEffect, useRef, useState } from "react";
import { useScrollBlock } from "../hooks/useScrollBlock";

const OurWork: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [blockScroll, allowScroll] = useScrollBlock();

  const [scrollerLocked, setScrollerLocked] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      // Determine the direction of the scroll
      const delta = Math.sign(event.deltaY);
      // Update the selectedSlide based on the scroll direction

      if (delta < 0) allowScroll();

      let nextSlide = selectedSlide + delta;
      // Reset to 0 if the selected slide exceeds 4
      if (nextSlide >= 4) {
        nextSlide = 0;
      } else if (nextSlide < 0) {
        nextSlide = 4;
      }
      setSelectedSlide(nextSlide); // Update the selected slide
    };

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Attach the event listener for the wheel event
          window.addEventListener("wheel", handleScroll);
          const observer = entry.target as HTMLElement;
          const intersectionObserver = new IntersectionObserver(
            (sectionEntries) => {
              const isVisible = sectionEntries[0].isIntersecting;
              if (!isVisible) {
                window.removeEventListener("wheel", handleScroll);
              }
            },
            options
          );
          intersectionObserver.observe(observer);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
        window.removeEventListener("wheel", handleScroll); // Cleanup the event listener
      }
    };
  }, [selectedSlide]);

  return (
    <Box sx={{ backgroundColor: "#181818", pr: 4, pl: 2, pt: 4 }}>
      <div ref={targetRef}>
        <DashTitle dashPosition="right" color="white">
          Our Work
        </DashTitle>

        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            pt: 2,
          }}
        >
          <Grid item xs={12} md={7}>
            <VerticalCarousel
              selectedSlide={selectedSlide}
              setSelectedSlide={setSelectedSlide}
            />
          </Grid>
          <Grid item xs={12} md={5}>
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
      </div>
    </Box>
  );
};

export default OurWork;
