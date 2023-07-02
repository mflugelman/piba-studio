import React, { useEffect, useRef, useState } from "react";
import Carousel, { Settings } from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalCarousel.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import CommunityWebsite from "./../../assets/carrouselImages/CommunityWebsite.png";
import MedicalSearchEngine from "./../../assets/carrouselImages/MedicalSearchEngine.png";
import RealStateWebsite from "./../../assets/carrouselImages/RealStateWebsite.png";
import ReportFormsWebapp from "./../../assets/carrouselImages/ReportFormsWebapp.png";
import TaskManagementDashboard from "./../../assets/carrouselImages/TaskManagementDashboard.png";
import { SxProps } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { useScrollBlock } from "../../hooks/useScrollBlock";
import Tag from "../Tag";

type CarrouselContent = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const content = [
  TaskManagementDashboard,
  MedicalSearchEngine,
  CommunityWebsite,
  RealStateWebsite,
  ReportFormsWebapp,
];

const carrouselData: CarrouselContent[] = [
  {
    title: "Task Management Dashboard",
    description:
      "Through our collaborative design process, we revolutionized task management by crafting an intuitive platform that boosts productivity and coordination.",
    image: TaskManagementDashboard,
    tags: ["Web App", "UX Design", "UI Design"],
    link: "https://www.behance.net/gallery/147246767/Surer",
  },
  {
    title: "Medical Search Engine",
    description:
      "Our end-to-end process involved collaborative design with the El Toco team, from research to the final product, including testing and quality assurance (QA).",
    image: MedicalSearchEngine,
    tags: ["Web App", "UX Design", "UI Design"],
    link: "https://www.behance.net/gallery/159357091/El-Toco-Search-Engine",
  },
  {
    title: "PRO180 Community Website",
    description:
      "Enhanced the PRO180 experience through collaborative UX/UI design, facilitating seamless resource sharing, updates, and fostering meaningful connections.",
    image: CommunityWebsite,
    tags: ["Web App", "UX Design", "UI Design"],
    link: "https://www.behance.net/gallery/146358393/PRO180",
  },
  {
    title: "Real State Website",
    description:
      "Provided full web design fully responsive for desktop, tablet and mobile. We worked closely with client to highlight the most important projects and ",
    image: RealStateWebsite,
    tags: ["Web App", "UX Design", "UI Design"],
    link: "https://www.behance.net/gallery/145429161/CB-desarrollos-inmobiliarios",
  },
  {
    title: "Report forms webapp",
    description:
      "Designed end-to-end product. Customer side to input reports, and back-end side for client to review reports, analyze metrics and information",
    image: ReportFormsWebapp,
    tags: ["Web App", "UX Design", "UI Design"],
    link: "https://www.behance.net/gallery/161498095/Report-Forms",
  },
];

type VerticalCarouselProps = {};

const VerticalCarousel: React.FC<VerticalCarouselProps> = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const carouselRef = useRef<Carousel>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [blockScroll, allowScroll] = useScrollBlock();
  const [scrollEventAllowed, setScrollEventAllowed] = useState(true);
  const [firstBlock, setFirstBlock] = useState(false);

  const getBoxStyles = (selected: boolean): SxProps => {
    return {
      borderRadius: 2,
      transform: selected
        ? `scale(1) translateY(-${selectedSlide * 5}%)`
        : "scale(0.8)",
      transition: "transform 0.2s ease-in-out", // Add transition property
      boxShadow: selected ? "0px 0px 30px rgba(255, 255, 255, 0.64)" : "none",
      width: "80%",
      m: "0 auto",
    };
  };

  const [isMobile, setIsMobile] = useState(false);

  const settings: Settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: !isMobile,
    verticalSwiping: !isMobile,
    arrows: false,
    swipeToSlide: true,
    afterChange: (current) => setSelectedSlide(current),
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setIsMobile(isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      if (!firstBlock) {
        blockScroll();
        setFirstBlock(true);
      }
      document.addEventListener("wheel", handleMouseScroll);
    } else {
      allowScroll();
      document.removeEventListener("wheel", handleMouseScroll);
    }

    return () => {
      document.removeEventListener("wheel", handleMouseScroll);
    };
  }, [inView]);

  const debounce = (fn: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleMouseScroll = debounce((event: WheelEvent) => {
    if (!scrollEventAllowed || firstBlock) return;

    setScrollEventAllowed(false);

    if (event && event.deltaY > 0) {
      carouselRef.current?.slickNext(); // Scroll down, go to the next slide
    } else {
      carouselRef.current?.slickPrev(); // Scroll up, go to the previous slide
    }
  }, 20); // Adjust the delay time as needed

  const handleSlideClick = (index: number) => {
    const slide = carrouselData[index];
    const link = slide.link;
    window.open(link, "_blank");
  };

  useEffect(() => {
    const enableScrollEvent = () => {
      setScrollEventAllowed(true);
    };

    if (selectedSlide == carrouselData.length - 1) allowScroll();

    const timeoutId = setTimeout(enableScrollEvent, 20); // Adjust the delay time to match the debounce delay

    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedSlide]);

  return (
    <Box ref={ref}>
      <Grid
        container
        sx={{
          pt: 2,
          pb: 6,
        }}
      >
        <Grid item xs={12} md={7}>
          <Box sx={{ translateY: 20 }}>
            <Carousel {...settings} className="carousel" ref={carouselRef}>
              {carrouselData.map((carrouselComponent, index) => (
                <div
                  key={index}
                  className="slide"
                  onClick={() => handleSlideClick(index)}
                >
                  <Box p={5}>
                    <Box
                      component="img"
                      src={carrouselComponent.image}
                      sx={getBoxStyles(index === selectedSlide)}
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography color="white.main" variant="h6" textAlign="left">
              {carrouselData[selectedSlide].title}
            </Typography>
            <Typography variant="body1" color="white.main" textAlign="left">
              {carrouselData[selectedSlide].description}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            {carrouselData[selectedSlide].tags.map((tag) => (
              <Tag>{tag}</Tag>
            ))}
          </Box>
          <Button
            disableRipple
            sx={{
              alignSelf: "flex-start",
              "&:hover": {
                backgroundColor: "transparent",
                color: "#9747FF",
                "& .MuiTypography-root": {
                  color: "#9747FF",
                },
                "& .MuiSvgIcon-root": {
                  color: "#9747FF",
                },
              },
            }}
          >
            <Typography variant="body2" color="white.main">
              Learn more
            </Typography>
            <ArrowForwardIcon
              sx={{
                m: 2,
                color: "white.main",
                outline: "2px solid",
                outlineColor: "white.main",
                borderRadius: "46%",
                p: 1,
              }}
            />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerticalCarousel;
