import { Box } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";

const OurWork = () => {
  const { t } = useTranslation("OurWork");

  return (
    <Box sx={{ backgroundColor: "black.main", pt: { xs: 2, md: 10 } }}>
      <ContentBox>
        <Box mt={{ xs: 2, md: 10 }} mr={4}>
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
