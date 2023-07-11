import { Box } from "@mui/material";
import Wheel from "../components/Wheel";
import DashTitle from "../components/DashTitle";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation("Services");
  return (
    <Box>
      <Box pl={{ xs: 4, md: 10 }} pt={8}>
        <DashTitle color="black" dashPosition="left">
          {t("HowWeCanHelp")}
        </DashTitle>
      </Box>
      <Wheel />
    </Box>
  );
};

export default Services;
