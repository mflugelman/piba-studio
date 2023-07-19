import { Box } from "@mui/material";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import { useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";

const Services = () => {
  const { t } = useTranslation("Services");
  return (
    <ContentBox>
      <Box
        sx={{
          pt: { xs: 5, md: 18 },
          pl: { xs: 4, md: 8 },
        }}
      >
        <DashTitle color="black" dashPosition="left">
          {t("HowWeCanHelp")}
        </DashTitle>
        <Wheel />
      </Box>
    </ContentBox>
  );
};

export default Services;
