import { Box } from "@mui/material";
import VerticalCarousel from "../components/Carousel/VerticalCarousel";
import DashTitle from "../components/DashTitle";
import { useTranslation } from "react-i18next";

const OurWork = () => {
  const { t } = useTranslation("OurWork");

  return (
    <Box
      sx={{ backgroundColor: "black.main", height: "100vh", pt: 10, pb: 10 }}
    >
      <Box mr={4}>
        <DashTitle dashPosition="right" color="white">
          {t("OurWork")}
        </DashTitle>
      </Box>
      <VerticalCarousel />
    </Box>
  );
};

export default OurWork;
