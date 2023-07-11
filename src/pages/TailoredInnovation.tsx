import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const TailoredInnovation = () => {
  const { t } = useTranslation("TailoredInnovation");

  return (
    <Box
      sx={{
        backgroundColor: "black.main",
        display: "flex",
        alignItems: "center",
        p: { xs: 4, md: 10 },
        height: { xs: "80vh", md: "40vh" },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            color={"white.main"}
            textAlign="left"
            fontWeight={"bold"}
            fontSize={{ xs: "32px", md: "42px" }}
          >
            {t("TailoredInnovation")}
          </Typography>
        </Grid>
        <Grid item md={2} />
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color={"white.main"} textAlign={"left"}>
            {t("CreativityAndExpertise")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TailoredInnovation;
