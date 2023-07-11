import React, { useEffect, useRef, useState } from "react";
import Carousel, { Settings } from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalCarousel.css";
import { Box, Grid, Typography } from "@mui/material";
import CommunityWebsite from "./../../assets/carrouselImages/CommunityWebsite.png";
import MedicalSearchEngine from "./../../assets/carrouselImages/MedicalSearchEngine.png";
import RealStateWebsite from "./../../assets/carrouselImages/RealStateWebsite.png";
import ReportFormsWebapp from "./../../assets/carrouselImages/ReportFormsWebapp.png";
import TaskManagementDashboard from "./../../assets/carrouselImages/TaskManagementDashboard.png";
import { SxProps } from "@mui/system";
import { useInView } from "react-intersection-observer";
import { useScrollBlock } from "../../hooks/useScrollBlock";
import Tag from "../Tag";
import { useTranslation } from "react-i18next";
import RightIconButton from "../RightIconButton";

type CarrouselContent = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const debounceDelay = 40;

type VerticalCarouselProps = {};

const VerticalCarousel: React.FC<VerticalCarouselProps> = () => {
  const { t } = useTranslation("VerticalCarousel");
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const carouselRef = useRef<Carousel>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [blockScroll, allowScroll] = useScrollBlock();
  const [scrollEventAllowed, setScrollEventAllowed] = useState(true);
  const [firstBlock, setFirstBlock] = useState(false);

  const carrouselData: CarrouselContent[] = [
    {
      title: t("TaskManagementDashboard"),
      description: t("TaskManagementDashboardDescription"),
      image: TaskManagementDashboard,
      tags: [t("WebApp"), t("UXDesign"), t("UIDesign")],
      link: "https://www.behance.net/gallery/147246767/Surer",
    },
    {
      title: t("MedicalSearchEngine"),
      description: t("MedicalSearchEngineDescription"),
      image: MedicalSearchEngine,
      tags: [t("WebApp"), t("UXDesign"), t("UIDesign")],
      link: "https://www.behance.net/gallery/159357091/El-Toco-Search-Engine",
    },
    {
      title: t("PRO180CommunityWebsite"),
      description: t("PRO180CommunityWebsiteDescription"),
      image: CommunityWebsite,
      tags: [t("WebApp"), t("UXDesign"), t("UIDesign")],
      link: "https://www.behance.net/gallery/146358393/PRO180",
    },
    {
      title: t("RealStateWebsite"),
      description: t("RealStateWebsiteDescription"),
      image: RealStateWebsite,
      tags: [t("WebApp"), t("UXDesign"), t("UIDesign")],
      link: "https://www.behance.net/gallery/145429161/CB-desarrollos-inmobiliarios",
    },
    {
      title: t("ReportFormsWebapp"),
      description: t("ReportFormsWebappDescription"),
      image: ReportFormsWebapp,
      tags: [t("WebApp"), t("UXDesign"), t("UIDesign")],
      link: "https://www.behance.net/gallery/161498095/Report-Forms",
    },
  ];

  const getBoxStyles = (selected: boolean): SxProps => {
    return {
      borderRadius: 2,
      transform: selected
        ? `scale(1) translateY(-${isMobile ? 0 : 5 * selectedSlide}%)`
        : "scale(0.8)",
      transition: "transform 0.2s ease-in-out",
      boxShadow: selected ? "0px 0px 30px rgba(255, 255, 255, 0.64)" : "none",
      m: "0 auto",
      width: { xs: "100%", md: "80%" },
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
  }, debounceDelay); // Adjust the delay time as needed

  const handleSlideClick = (index: number) => {
    const slide = carrouselData[index];
    const link = slide.link;
    window.open(link, "_blank");
  };

  useEffect(() => {
    const enableScrollEvent = () => {
      setScrollEventAllowed(true);
    };

    if (selectedSlide === carrouselData.length - 1) allowScroll();

    const timeoutId = setTimeout(enableScrollEvent, debounceDelay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedSlide, allowScroll]);

  return (
    <Box ref={ref}>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box p={0}>
            <Carousel {...settings} ref={carouselRef}>
              {carrouselData.map((carrouselComponent, index) => (
                <div
                  key={index}
                  className="slide"
                  onClick={() => handleSlideClick(index)}
                >
                  <Box p={5} key={"image" + index}>
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
            p: 4,
          }}
        >
          <Typography
            color="white.main"
            variant="h6"
            textAlign="left"
            fontWeight="bold"
          >
            {carrouselData[selectedSlide].title}
          </Typography>
          <Typography variant="body2" color="white.main" textAlign="left">
            {carrouselData[selectedSlide].description}
          </Typography>

          <Box sx={{ display: "flex" }}>
            {carrouselData[selectedSlide].tags.map((tag, index) => (
              <Tag key={"tag" + index}>{tag}</Tag>
            ))}
          </Box>

          <RightIconButton
            icon={ArrowForwardIcon}
            color={"white"}
            onClick={() => handleSlideClick(selectedSlide)}
          >
            {t("LearnMore")}
          </RightIconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerticalCarousel;
