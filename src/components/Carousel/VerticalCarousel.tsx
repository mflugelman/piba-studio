import React, { useEffect, useRef, useState } from "react";
import Carousel, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalCarousel.css"; // Import the CSS file you created
import { Box } from "@mui/material";
import CommunityWebsite from "./../../assets/carrouselImages/CommunityWebsite.png";
import MedicalSearchEngine from "./../../assets/carrouselImages/MedicalSearchEngine.png";
import RealStateWebsite from "./../../assets/carrouselImages/RealStateWebsite.png";
import ReportFormsWebapp from "./../../assets/carrouselImages/ReportFormsWebapp.png";
import TaskManagementDashboard from "./../../assets/carrouselImages/TaskManagementDashboard.png";
import { SxProps } from "@mui/material/styles";

type VerticalCarouselProps = {
  selectedSlide: number;
};

const VerticalCarousel = (props: VerticalCarouselProps) => {
  const carouselRef = useRef<Carousel>(null);

  const images = [
    CommunityWebsite,
    MedicalSearchEngine,
    RealStateWebsite,
    ReportFormsWebapp,
    TaskManagementDashboard,
  ];

  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    centerPadding: "10px",
    swipeToSlide: true,
  };

  const getBoxStyles = (selected: boolean): SxProps => {
    return {
      borderRadius: 2,
      transform: selected ? "scale(1)" : "scale(0.8)",
      boxShadow: selected ? "0px 0px 50px rgba(255, 255, 255, 0.64)" : "none",
      width: "80%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      m: "0 auto",
      mt: 2,
      mb: 2,
    };
  };

  return (
    <Box>
      <Carousel {...settings} className="carousel">
        {images.map((image, index) => (
          <div key={index}>
            <Box sx={{ p: 3 }}>
              <Box component="img" src={image} sx={getBoxStyles(true)} />
            </Box>
          </div>
        ))}
      </Carousel>
    </Box>
  );
};

export default VerticalCarousel;
