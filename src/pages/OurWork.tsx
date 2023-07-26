import { Box } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";

const OurWork = () => {
  const { t } = useTranslation("OurWork");

  return (
    <Box sx={{ backgroundColor: "black.main", pt: 10 }}>
      <ContentBox>
        <Box sx={{ pr: { xs: 4, md: 8 }, pl: { xs: 4, md: 8 } }}>
          <DashTitle dashPosition="right" color="white">
            {t("OurWork")}
          </DashTitle>
          <VerticalCarousel />
        </Box>
      </ContentBox>
    </Box>
  );
};

export default OurWork;
