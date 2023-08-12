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
import ElToco from "./../../assets/carrouselImages/elToco.png";
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

type VerticalCarouselProps = {};

const VerticalCarousel: React.FC<VerticalCarouselProps> = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const { t } = useTranslation("VerticalCarousel");
  const [refBottom, bottomInView] = useInView({
    threshold: 1,
  });

  const [refTop, topInView] = useInView({
    threshold: 1,
  });

  const elementRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<Carousel>(null);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [blockScroll, allowScroll] = useScrollBlock();
  const [allowBlock, setAllowBlock] = useState(true);
  const [blockSwipe, setBlockSwipe] = useState(true);
  const [isInCenter, setIsInCenter] = useState(false);
  const [blockDirection, setBlockDirection] = useState(false); //false is down

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
    {
      title: t("AdvertsApp"),
      description: t("AdvertsAppDescription"),
      image: ElToco,
      tags: [t("Research"), t("WebApp"), t("UXDesign"), t("UIDesign")],
      link: "https://www.behance.net/gallery/176918611/Advertising-El-Toco",
    },
  ];

  const settings: Settings = {
    vertical: !isMobile,
    slidesToShow: isMobile ? 1 : 1.25,
    arrows: false,
    verticalSwiping: !isMobile,
    // infinite: true,
    dots: !isMobile,
    centerMode: true,
    dotsClass: "vertical-dots",
    speed: 400,
    afterChange: (current) => setSelectedSlide(current),
  };

  useEffect(() => {
    if (!blockDirection && selectedSlide === carrouselData.length - 1) {
      setBlockSwipe(true);
      setAllowBlock(true);
      allowScroll();
    }

    if (blockDirection && selectedSlide === 0) {
      setBlockSwipe(true);
      setAllowBlock(true);
      allowScroll();
    }
  }, [selectedSlide]);

  const handleSlideClick = (index: number) => {
    const slide = carrouselData[index];
    const link = slide.link;
    window.open(link, "_blank");
  };

  const scale = isMobile ? 0.9 : 0.75;
  const shadowRadius = isMobile ? 10 : 20;

  const getBoxStyles = (selected: boolean): SxProps => {
    return {
      borderRadius: 5,
      transform: `scale(${(selected ? 1 : 0.9) * scale})`,
      boxShadow: selected
        ? `0px 0px ${shadowRadius}px rgba(255, 255, 255, 0.64)`
        : "none",
      m: "0 auto",
      transition: "transform 0.3s ease-in-out", // Add the transition to the default state
      "&:hover": {
        transform: selected ? `scale(${scale * 1.05})` : null,
        transition: "transform 0.3s ease-in-out",
      },
    };
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    if (
      event.deltaY > 40 &&
      !blockSwipe &&
      selectedSlide < carrouselData.length - 1
    ) {
      carouselRef.current?.slickNext();
    } else if (event.deltaY < -40 && !blockSwipe && selectedSlide > 0) {
      carouselRef.current?.slickPrev();
    }
  };

  const handleGlobalScroll = (event: Event) => {
    const element = elementRef.current;
    if (element) {
      const elementRect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      const centered = isInPosition(
        elementRect,
        viewportHeight,
        blockDirection
      );
      setIsInCenter(centered);
    }
  };

  useEffect(() => {
    if (isInCenter && allowBlock) {
      setAllowBlock(false);
      setBlockSwipe(false);
      blockScroll();

      if (selectedSlide < carrouselData.length / 2) setBlockDirection(false);
      else setBlockDirection(true);
    } else {
      allowScroll();
      setBlockSwipe(true);
    }
  }, [isInCenter]);

  useEffect(() => {
    if (topInView) window.addEventListener("scroll", handleGlobalScroll);
    else {
      allowScroll();
      setAllowBlock(true);
      window.removeEventListener("scroll", handleGlobalScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
    };
  }, [topInView]);

  return (
    <Box sx={{ mt: { xs: 2, md: 4 } }} onWheel={handleScroll} ref={elementRef}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            pl: { xs: 0, md: 1 },
            pr: { xs: 0, md: 1 },
          }}
        >
          <Box>
            <Carousel {...settings} ref={carouselRef}>
              {carrouselData.map((carrouselComponent, index) => (
                <Box
                  key={"slide" + index}
                  sx={{
                    transform: isMobile
                      ? null
                      : `translateY(${-selectedSlide * 3.5}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                  onClick={() => handleSlideClick(selectedSlide)}
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
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            pt: 4,
            pr: { xs: 4, md: 4 },
            pl: { xs: 4, md: 0 },
          }}
        >
          <Box sx={{ height: 10 }} ref={refTop}></Box>
          <Typography
            color="white.main"
            variant="h6"
            textAlign="left"
            fontWeight="bold"
            mt={{ md: 4, lg: 4 }}
          >
            {carrouselData[selectedSlide].title}
          </Typography>
          <Typography
            variant="body2"
            color="white.main"
            textAlign="left"
            id="carousel"
          >
            {carrouselData[selectedSlide].description}
          </Typography>

          <Box
            sx={{
              display: "flex",
              mt: { md: 2, lg: 4 },
              mb: { md: 2, lg: 4 },
            }}
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
          <Box sx={{ height: 10 }} ref={refBottom}></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerticalCarousel;

interface ElementProps {
  top: number;
  height: number;
}

function isInPosition(
  elementRect: ElementProps,
  viewportHeight: number,
  blockDirection: boolean
): boolean {
  const elementCenterY = elementRect.top + elementRect.height / 10;

  const viewportCenterY = viewportHeight / 4;

  const threshold = 20;

  return Math.abs(elementCenterY - viewportCenterY) <= threshold;
}
