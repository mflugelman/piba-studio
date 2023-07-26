import React, { useEffect, useRef, useState } from "react";
import Carousel, { Settings } from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VerticalCarousel.css";
import {
  Box,
  Grid,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CommunityWebsite from "./../../assets/carrouselImages/CommunityWebsite.png";
import MedicalSearchEngine from "./../../assets/carrouselImages/MedicalSearchEngine.png";
import RealStateWebsite from "./../../assets/carrouselImages/RealStateWebsite.jpeg";
import ReportFormsWebapp from "./../../assets/carrouselImages/ReportFormsWebapp.png";
import TaskManagementDashboard from "./../../assets/carrouselImages/TaskManagementDashboard.png";
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

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

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

  const settings: Settings = {
    vertical: !isMobile,
    slidesToShow: isMobile ? 1 : 1.5,
    arrows: false,
    verticalSwiping: !isMobile,
    infinite: true,
    // dots: true,
    // dotsClass: "vertical-dots",
    speed: 500,
    centerPadding: "0",
    afterChange: (current) => setSelectedSlide(current),
  };

  // useEffect(() => {
  //   if (inView) {
  //     if (!firstBlock) {
  //       blockScroll();
  //       setFirstBlock(true);
  //     }
  //     document.addEventListener("wheel", handleMouseScroll);
  //   } else {
  //     allowScroll();
  //     document.removeEventListener("wheel", handleMouseScroll);
  //   }

  //   return () => {
  //     document.removeEventListener("wheel", handleMouseScroll);
  //   };
  // }, [inView]);

  const handleSlideClick = (index: number) => {
    // const slide = carrouselData[index];
    // const link = slide.link;
    // window.open(link, "_blank");
  };

  // const getBoxStyles = (selected: boolean): SxProps => {
  //   return {
  //     borderRadius: 5,
  //     transform: selected
  //       ? `scale(0.8) translateY(-${isMobile ? 0 : 5 * selectedSlide}%)`
  //       : "scale(0.75)",
  //     transition: "transform 0.5s ease-in-out",
  //     boxShadow: selected ? "0px 0px 30px rgba(255, 255, 255, 0.64)" : "none",
  //     m: "0 auto",
  //     "&:hover": {
  //       transform: selected
  //         ? `scale(0.82) translateY(-${isMobile ? 0 : 5 * selectedSlide}%)`
  //         : "scale(0.75)",
  //       transition: "transform 0.3s ease-in-out",
  //     },
  //   };
  // };

  const scale = isMobile ? 0.9 : 0.8;

  const getBoxStyles = (selected: boolean): SxProps => {
    return {
      borderRadius: 5,
      transform: `scale(${scale})`,
      transition: "transform 0.5s ease-in-out",
      boxShadow: selected ? "0px 0px 30px rgba(255, 255, 255, 0.64)" : "none",
      m: "0 auto",
      "&:hover": {
        transform: selected
          ? `scale(${scale * 1.05}) translateY(-${
              isMobile ? 0 : 5 * selectedSlide
            }%)`
          : `scale(${scale * 0.8})`,
        transition: "transform 0.3s ease-in-out",
      },
    };
  };

  return (
    <Box ref={ref} sx={{ mt: 10 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            pl: 1,
            pr: 1,
          }}
        >
          <Carousel {...settings} ref={carouselRef}>
            {carrouselData.map((carrouselComponent, index) => (
              <Box
                key={"slide" + index}
                sx={{
                  transform: isMobile
                    ? null
                    : `translateY(${50 + selectedSlide}%)`,
                }}
              >
                <Box key={index} sx={getBoxStyles(index === selectedSlide)}>
                  <Box
                    key={"image" + index}
                    component="img"
                    src={carrouselComponent.image}
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 5,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Carousel>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: { md: 0, lg: 4 },
          }}
        >
          <Typography
            color="white.main"
            variant="h6"
            textAlign="left"
            fontWeight="bold"
            mt={{ md: 2, lg: 4 }}
          >
            {carrouselData[selectedSlide].title}
          </Typography>
          <Typography variant="body2" color="white.main" textAlign="left">
            {carrouselData[selectedSlide].description}
          </Typography>

          <Box
            sx={{ display: "flex", mt: { md: 2, lg: 4 }, mb: { md: 2, lg: 4 } }}
          >
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
