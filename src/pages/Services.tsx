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
          pt: { xs: 8, md: 10 },
          pl: { xs: 4, md: 8 },
          pb: { xs: 8, md: 0 },
        }}
      >
        <Box pb={4}>
          <DashTitle color="black" dashPosition="left">
            {t("HowWeCanHelp")}
          </DashTitle>
        </Box>
        <Wheel />
      </Box>
    </ContentBox>
  );
};

export default Services;
