import { Box, Button, Grid, Typography } from "@mui/material";
import { Trans, useTranslation } from "react-i18next";
import ContentBox from "../components/ContentBox";
const LetsTalk = () => {
  const { t } = useTranslation("LetsTalk");

  return (
    <Box
      sx={{
        background:
          "radial-gradient(126.38% 242.21% at 83.4% 91.45%, rgba(123, 159, 246, 0.27) 54.17%, rgba(207, 207, 207, 0.13) 94.42%, rgba(207, 207, 207, 0.42) 100%);",
        display: "flex",
      }}
    >
      <ContentBox>
        <Grid container sx={{ p: { xs: 4, md: 8 }, mt: 4, mb: 4 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography variant="h3" textAlign={"left"}>
              <Trans i18nKey="LetsTalk.ThisWasUs">{t("ThisWasUs")}</Trans>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Typography variant="h4" textAlign="center" m={4}>
              {t("LetsTalk")}
            </Typography>
            <Button
              sx={{ width: { xs: "50%", md: "auto" } }}
              variant="contained"
              onClick={() =>
                window.open("https://calendly.com/hellopibastudio", "_blank")
              }
            >
              <Typography variant="button" color="white.main">
                {t("BookCall")}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </ContentBox>
    </Box>
  );
};

export default LetsTalk;
