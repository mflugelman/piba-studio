import { Box } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";

const OurWork = () => {
  const { t } = useTranslation("OurWork");

  return (
    <Box sx={{ backgroundColor: "black.main" }} pb={{ xs: 4, md: 0 }}>
      <ContentBox>
        <Box mt={{ xs: 4, md: 10 }}>
          <DashTitle dashPosition="right" color="white">
            {t("OurWork")}
          </DashTitle>
        </Box>
        <VerticalCarousel />
      </ContentBox>
    </Box>
  );
};

export default OurWork;
